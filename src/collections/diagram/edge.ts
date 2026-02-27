import { queryCollectionOptions } from '@tanstack/query-db-collection'
import { createCollection, localStorageCollectionOptions } from '@tanstack/react-db'
import { z } from 'zod'
import { queryClient } from '../../query'

export const edgeSchema = z.object({
  id: z.nanoid()
})

export type Edge = z.infer<typeof edgeSchema>

export const edgeLocalCollection = createCollection(
  localStorageCollectionOptions({
    id: 'edges',
    storageKey: 'dsp-edges',
    schema: edgeSchema,
    getKey: item => item.id
  })
)

export const edgeServerCollection = createCollection(
  queryCollectionOptions({
    schema: edgeSchema,
    queryKey: ['edges'],
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
