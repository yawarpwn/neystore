import { type Product } from '@/types'
import { createClient } from '@libsql/client'
import { unstable_noStore as noStore } from 'next/cache'
const token =
  `eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJpYXQiOiIyMDI0LTAxLTIyVDAxOjAyOjA0Ljc0OTY5NzE3NloiLCJpZCI6Ijc4MmY5ODViLWI4YjctMTFlZS1iMTg5LWE2MDMzNTNjNjBiMyJ9.3X3y3x8AejmpMduoI99_Hr6khsPoiQpkFAMThjugn3hIQTyKvfEX6H_lXC164q5KrS1MBawbTG3wVUMYeXiEBA`
const db = createClient({
  url: 'libsql://neystore-yawarpwn.turso.io',
  authToken: token,
})

export async function fetchProducts(): Promise<Product[]> {
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

    const mappedProducts: Product[] = products.map((prod: any) => ({
      ...prod,
      images: JSON.parse(prod.images),
      video: JSON.parse(prod.video),
      features: JSON.parse(prod.features),
      details: JSON.parse(prod.details),
    }))
    return mappedProducts
  } catch (error) {
    console.log('Error geting products', error)
  }
}

export async function fetchProductById(id: string): Promise<Product> {
  console.log('fetchProductById: ', id)
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
      json_group_array(json_object('url', i.url, 'thumb', i.thumb, 'id', i.id)) AS images,
      json_object('url', v.url, 'title', v.title, 'cover', v.cover, 'id', v.id) AS video
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
      args: [id],
    })

    const productFromDb = rows[0] as any

    const product: Product = {
      ...productFromDb,
      images: JSON.parse(productFromDb.images),
      video: JSON.parse(productFromDb.video),
      features: JSON.parse(productFromDb.features),
      details: JSON.parse(productFromDb.details),
    }

    return product
  } catch (error) {
    console.log('Error geting products by id', error)
  }
}
