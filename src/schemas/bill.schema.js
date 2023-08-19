import {z} from 'zod';

export const createBillSchema = z.object({
  name: z.string({
    required_error: 'Name is required'
  }),
  description: z.string({
    required_error: 'description is required'
  }),
  quantity: z.number({
    required_error: 'quantity is required'
  }),
  price: z.number({
    required_error: 'price is required'
  }),
  date: z.string().datetime().optional(),
})