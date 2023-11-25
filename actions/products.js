'use server'
import { z } from 'zod'

const productSchema = z.object({
  name: z.string(),
  image: z.record,
})

export async function createProduct(formData) {
  const rawProduct = Object.fromEntries(formData)
  console.log(rawProduct)
}
