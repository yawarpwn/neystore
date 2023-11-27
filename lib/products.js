import { sql } from '@vercel/postgres'
import products from '@/data/placeholder.json'
export async function fetchProducts() {
  return products
  // try {
  //   const { rows } = await sql`
  //     SELECT * FROM products;
  //   `
  //
  //   return rows
  // } catch (error) {
  //   console.log('Error fetching products')
  // }
}
