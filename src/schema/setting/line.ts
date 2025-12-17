import { z } from 'zod'
import { cellSchema } from './cell'

export const edgeSchema = cellSchema.extend({})

export type Edge = z.infer<typeof edgeSchema>
