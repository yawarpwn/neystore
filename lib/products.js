import products from '@/data/placeholder.json'
import { sql } from '@vercel/postgres'
import { createClient } from '@libsql/client'
import { unstable_noStore as noStore } from 'next/cache'
const token = `eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJpYXQiOiIyMDI0LTAxLTIyVDAxOjAyOjA0Ljc0OTY5NzE3NloiLCJpZCI6Ijc4MmY5ODViLWI4YjctMTFlZS1iMTg5LWE2MDMzNTNjNjBiMyJ9.3X3y3x8AejmpMduoI99_Hr6khsPoiQpkFAMThjugn3hIQTyKvfEX6H_lXC164q5KrS1MBawbTG3wVUMYeXiEBA`
const db = createClient({
  url: "libsql://neystore-yawarpwn.turso.io",
  authToken: token
});


// export async function fetchProducts() {
//   noStore()
//   try {
//     const data = await sql`SELECT * from products`
//     return data.rows
//   } catch (error) {
//     throw new Error('Error fetching products', error)
//   }
// }

export async function fetchProducts() {
  // noStore()
  try {
    const { rows: products } = await db.execute(`
      SELECT
      p.id,
      p.title,
      p.category,
      p.price,
      p.cost,
      p.ranking,
      p.details,
      p.features,
      json_group_array(json_object('url', i.url, 'thumb', i.thumb)) AS images,
      json_object('url', v.url, 'title', v.title, 'cover', v.cover) AS video
      FROM
      products p
      INNER JOIN
      images i ON (i.product_id = p.id)
      LEFT JOIN 
      videos v ON (v.product_id = p.id)
      GROUP BY
      p.id, p.title, p.category, p.price, p.cost, p.ranking;
    `)

    const mappedProducts = products.map(prod => ({
      ...prod,
      images: JSON.parse(prod.images),
      video: JSON.parse(prod.video),
      features: JSON.parse(prod.features),
      details: JSON.parse(prod.details)
    }))
    return mappedProducts
  } catch (error) {
    console.log('Error geting products', error)

  }


}


export async function fetchProductBySlug({ slug }) {
  const data = await sql`
  SELECT * from products 
  WHERE slug= ${slug}
  `

  return data.rows[0]
}

export async function fetchProductById(id) {
  try {

    const { rows } = await db.execute({
      sql: `
      SELECT
      p.id,
      p.title,
      p.category,
      p.price,
      p.cost,
      p.ranking,
      p.details,
      p.features,
      json_group_array(json_object('url', i.url, 'thumb', i.thumb)) AS images,
      json_object('url', v.url, 'title', v.title, 'cover', v.cover) AS video
      FROM
      products p
      INNER JOIN
      images i ON (i.product_id = p.id)
      LEFT JOIN 
      videos v ON (v.product_id = p.id)
      WHERE p.id = ?
      GROUP BY
      p.id, p.title, p.category, p.price, p.cost, p.ranking
      `,
      args: [id]
    })

    const product = rows[0]

    return {
      ...product,
      images: JSON.parse(product.images),
      video: JSON.parse(product.video),
      features: JSON.parse(product.features),
      details: JSON.parse(product.details)
    }

  } catch (error) {
    console.log('Error geting products by id', error)
  }
}
