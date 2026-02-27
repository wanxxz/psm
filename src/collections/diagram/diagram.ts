import { queryCollectionOptions } from '@tanstack/query-db-collection'
import { createCollection, localStorageCollectionOptions } from '@tanstack/react-db'
import { z } from 'zod'
import { queryClient } from '../../query'

export const diagramSchema = z.object({
  id: z.nanoid()
})

export type Diagram = z.infer<typeof diagramSchema>

export const diagramLocalCollection = createCollection(
  localStorageCollectionOptions({
    id: 'diagram',
    storageKey: 'dsp-diagrams',
    schema: diagramSchema,
    getKey: item => item.id
  })
)

export const diagramServerCollection = createCollection(
  queryCollectionOptions({
    queryKey: ['diagrams'],
    schema: diagramSchema,
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
