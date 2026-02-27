import { createTransaction } from '@tanstack/react-db'
import { type Edge, edgeLocalCollection, edgeServerCollection } from '../../collections'

export async function createEdge() {
  const tx = createTransaction<Edge>({
    mutationFn: async ({ transaction }) => {
      await Promise.all(
        transaction.mutations.filter(m => m.collection === edgeServerCollection).map(m => Promise.resolve(m.modified))
      )

      edgeLocalCollection.utils.acceptMutations(transaction)
    }
  })

  tx.mutate(() => {
    edgeLocalCollection.insert({ id: 'draft-1' })
    edgeServerCollection.insert({ id: '1' })
  })

  await tx.commit()
}
