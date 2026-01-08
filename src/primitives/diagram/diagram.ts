import { createTransaction } from '@tanstack/solid-db'
import { type Diagram, diagramLocalCollection, diagramServerCollection } from '../../collections'

export async function createDiagram() {
  const tx = createTransaction<Diagram>({
    mutationFn: async ({ transaction }) => {
      await Promise.all(
        transaction.mutations
          .filter(m => m.collection === diagramServerCollection)
          .map(m => Promise.resolve(m.modified))
      )

      diagramLocalCollection.utils.acceptMutations(transaction)
    }
  })

  tx.mutate(() => {
    diagramLocalCollection.insert({ id: 'draft-1' })
    diagramServerCollection.insert({ id: '1' })
  })

  await tx.commit()
}
