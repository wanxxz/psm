import { queryCollectionOptions } from '@tanstack/query-db-collection'
import { createCollection, localStorageCollectionOptions } from '@tanstack/react-db'
import z from 'zod'
import { queryClient } from '../query'

export const recordSchema = z.object({
  id: z.nanoid()
})

export type Record = z.infer<typeof recordSchema>

export const recordLocalCollection = createCollection(
  localStorageCollectionOptions({
    id: 'record',
    storageKey: 'dsp-records',
    schema: recordSchema,
    getKey: item => item.id
  })
)

export const recordServerCollection = createCollection(
  queryCollectionOptions({
    queryKey: ['records'],
    schema: recordSchema,
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
