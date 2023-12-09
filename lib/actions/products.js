'use server'

import { scrapperAmazonProduct } from '@/lib/scrapper/index'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export async function createProduct(prevState, formData) {
  const url = formData.get('url')
  try {
    return {
      data: await scrapperAmazonProduct(url),
      error: null,
    }
  } catch (error) {
    console.log(error)
  }
}

import { sql } from '@vercel/postgres'
export async function saveProduct(prev, formData) {
  const price = Number(formData.get('price'))
  const data = JSON.parse(formData.get('data'))
  const category = formData.get('category')

  const {
    title,
    details,
    images,
    features,
    videos,
    amazonPrice,
    slug,
    starts,
  } = data
  const stringDetails = JSON.stringify(details)
  const stringImages = JSON.stringify(images)
  const stringFeatures = JSON.stringify(features)
  const stringVideos = JSON.stringify(videos)

  try {
    await sql`
      INSERT INTO products(title, price, amazon_price, slug, category, starts, videos, images, features, details)
      VALUES (
        ${title}, ${price}, ${amazonPrice}, ${slug}, ${category}, ${starts}, ${stringVideos}, ${stringImages}, ${stringFeatures}, ${stringDetails} 
      )
    `

    revalidatePath('/productos')
    redirect('/productos')
  } catch (error) {
    console.error('Error Inserting Product to DB:', error.message)
  }
}
