import { sql } from '@vercel/postgres'
export async function fetchProducts() {
  try {
    const { rows } = await sql`
      SELECT * FROM products;
    `

    return rows
  } catch (error) {
    console.log('Error fetching products')
  }
}
