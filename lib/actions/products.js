'use server'

import { scrapperAmazonProduct } from '@/lib/scrapper/index'
import { revalidatePath, revalidateTag } from 'next/cache'
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
  const category = formData.get('category')
  const data = JSON.parse(formData.get('data'))

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
  } catch (error) {
    console.error('Error Inserting Product to DB:', error.message)
  }

  revalidatePath('/dashboard/products')
  redirect('/dashboard/products')
}

export async function updateProduct(formData) {
  const price = Number(formData.get('price'))
  const category = formData.get('category')
  const id = formData.get('id')

  try {
    await sql`
      UPDATE products
      SET price = ${price}, category = ${category}
      WHERE id = ${id}
    `
  } catch (error) {
    console.error('Error Inserting Product to DB:', error.message)
  }
  revalidateTag('/dashboard/products')
  redirect('/dashboard/products')
}

export async function deleteProduct(formData) {
  const id = formData.get('id')
  try {
    await sql`DELETE FROM products WHERE id=${id}`
  } catch {
    throw new Error('Error deleting product')
  }

  revalidateTag('/dashboard/products')
}
