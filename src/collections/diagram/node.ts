import { queryCollectionOptions } from '@tanstack/query-db-collection'
import { createCollection, localStorageCollectionOptions } from '@tanstack/react-db'
import { z } from 'zod'
import { queryClient } from '../../query'

export const nodeSchema = z.object({
  id: z.nanoid()
})

export type Node = z.infer<typeof nodeSchema>

export const nodeLocalCollection = createCollection(
  localStorageCollectionOptions({
    id: 'nodes',
    storageKey: 'dsp-nodes',
    schema: nodeSchema,
    getKey: item => item.id
  })
)

export const nodeServerCollection = createCollection(
  queryCollectionOptions({
    schema: nodeSchema,
    queryKey: ['nodes'],
    getKey: item => item.id,
    queryClient: queryClient,
    queryFn: async () => {
      return Promise.resolve([])
    },
    onInsert: async ({ transaction }) => {},
    onUpdate: async ({ transaction }) => {},
    onDelete: async ({ transaction }) => {}
  })
)
