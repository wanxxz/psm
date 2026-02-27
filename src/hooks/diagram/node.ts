import { createTransaction } from '@tanstack/react-db'
import { type Node, nodeLocalCollection, nodeServerCollection } from '../../collections'

export async function createNode() {
  const tx = createTransaction<Node>({
    mutationFn: async ({ transaction }) => {
      await Promise.all(
        transaction.mutations
          .filter(m => m.collection === nodeServerCollection)
          .map(async m => {
            // TODO
          })
      )

      nodeLocalCollection.utils.acceptMutations(transaction)
    }
  })

  tx.mutate(() => {
    nodeLocalCollection.insert({ id: 'draft-1' })
    nodeServerCollection.insert({ id: '1' })
  })

  await tx.commit()
}
