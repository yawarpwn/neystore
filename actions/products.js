'use server'
import { z } from 'zod'
import { sql } from '@vercel/postgres'
import { revalidateTag } from 'next/cache'
import { redirect } from 'next/navigation'

const productSchema = z.object({
  name: z.string(),
  price: z.coerce.number(),
  image_url_1: z.string(),
  image_url_2: z.string(),
  image_url_3: z.string(),
  image_url_4: z.string(),
  video_url: z.string(),
})

export async function createProduct(formData) {
  const productRaw = Object.fromEntries(formData)
  const product = productSchema.safeParse(productRaw)

  if (!product.success) {
    return
  }

  const {
    name,
    price,
    image_url_1,
    image_url_2,
    image_url_3,
    image_url_4,
    video_url,
  } = product.data

  const productToInsert = {
    name,
    price,
    assets: [
      {
        url: image_url_1,
        type: 'image',
      },
      {
        url: image_url_2,
        type: 'image',
      },
      {
        url: image_url_3,
        type: 'image',
      },
      {
        url: image_url_4,
        type: 'image',
      },
      {
        url: video_url,
        type: 'video',
      },
    ],
  }

  const assetsString = JSON.stringify(productToInsert.assets)

  try {
    await sql`
      INSERT INTO products (name, price, assets)
      VALUES (
        ${productToInsert.name},
        ${productToInsert.price},
       ${assetsString} 
      )
    `
    console.log('inserted product')
  } catch (error) {
    console.log(error)
  }
}
