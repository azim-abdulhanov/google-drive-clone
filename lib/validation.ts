import * as z from 'zod'

export const formSchema = z.object({
  name: z.string().min(5).max(50)
})
