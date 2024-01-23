import { createClient } from "@libsql/client"
import products from '@/data/products.json'

const token = `eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJpYXQiOiIyMDI0LTAxLTIyVDAxOjAyOjA0Ljc0OTY5NzE3NloiLCJpZCI6Ijc4MmY5ODViLWI4YjctMTFlZS1iMTg5LWE2MDMzNTNjNjBiMyJ9.3X3y3x8AejmpMduoI99_Hr6khsPoiQpkFAMThjugn3hIQTyKvfEX6H_lXC164q5KrS1MBawbTG3wVUMYeXiEBA`
const db = createClient({
  url: "libsql://neystore-yawarpwn.turso.io",
  authToken: token
});

async function seedProducts(productToInsert) {
  const id = crypto.randomUUID()
  try {
    await insertProduct(productToInsert, id)
    await insertVideo(productToInsert.video, id)
    for (const image of productToInsert.images) {
      await insertImage(image, id)
    }
    console.log('seed all products sucess')
  }

  catch (err) {
    console.log(err)
    console.log('error inserting product')
  }
}

async function insertProduct(product, id) {
  await db.execute({
    sql: 'INSERT INTO products(id, title, price, cost, ranking, category, details, features ) values(?,?,?,?,?,?,?,?)',
    args: [id, product.title, product.price, product.cost, product.ranking, product.category, product.details, JSON.stringify(product.features)]
  })
  console.log('inserted product')
}

async function getProducts() {
  const { rows: products } = await db.execute(`
SELECT
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

  console.log(products)
}

async function insertImage(image, id) {
  await db.execute({
    sql: 'INSERT INTO images(id, url, thumb, product_id ) values(?,?,?,?)',
    args: [crypto.randomUUID(), image.url, image.thumb, id]
  })
  console.log('inserted image')
}

async function insertVideo(video, id) {
  await db.execute({
    sql: 'INSERT INTO videos(id, url, title, cover, product_id ) values(?,?,?,?,?)',
    args: [crypto.randomUUID(), video.url, video.title, video.cover, id]
  })
  console.log('inserted video')
}

// for (const product of products) {
//   seedProducts(product)
// }

async function main() {
  // await seedProducts()
  await getProducts()
}
main()
