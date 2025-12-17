import { z } from 'zod'
import { cellSchema } from './cell'

export const nodeSchema = cellSchema.extend({})

export type Node = z.infer<typeof nodeSchema>
