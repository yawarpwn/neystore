import products from '@/data/placeholder.json'
import { sql } from '@vercel/postgres'
import { unstable_noStore as noStore } from 'next/cache'

export async function fetchProducts() {
  noStore()
  try {
    const data = await sql`SELECT * from products`
    return data.rows
  } catch (error) {
    throw new Error('Error fetching products', error)
  }
}

export async function fetchProductBySlug({ slug }) {
  const data = await sql`
  SELECT * from products 
  WHERE slug= ${slug}
  `

  return data.rows[0]
}

export async function fetchProductById({ id }) {
  const data = await sql`
  SELECT * from products 
  WHERE id= ${id}
  `

  return data.rows[0]
}
