import { type VertexParameters } from '@maxgraph/core'
import { type GeoJSON } from 'geojson'
import { z } from 'zod'

export const cellSchema = z.object({
  id: z.nanoid(),
  name: z.string().min(1).max(100),
  label: z.string().min(1).max(100).optional(),
  form: z.custom().optional(),
  table: z.custom().optional(),
  diagram: z.custom<VertexParameters>().optional(),
  map: z.custom<GeoJSON>().optional()
})

export type Cell = z.infer<typeof cellSchema>
