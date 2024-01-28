import products from '@/data/products.json'
import { sql } from '@vercel/postgres'

async function createProductsTable() {
}

async function seedProducts() {
  try {
    await sql`DROP TABLE IF EXISTS products_back`
    await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`
    await sql`
      CREATE TABLE IF NOT EXISTS products_back (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        title VARCHAR(255) NOT NULL,
        price INT NOT NULL,
        cost INT NOT NULL,
        ranking INT NOT NULL,
        category VARCHAR(255) NOT NULL,
        images JSONB NOT NULL ,
        details JSONB NOT NULL ,
        features JSONB NOT NULL ,
        video JSONB,
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
        created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
      );
     `
    console.log('Created "products_back" table')

    const { rows } = await Promise.all(products.map(product => {
      product.images = JSON.stringify(product.images)
      product.details = JSON.stringify(product.details)
      product.features = JSON.stringify(product.features)
      product.video = JSON.stringify(product.video)

      return sql`INSERT INTO products_back (title, price, cost, ranking, category, images, details, features, video) VALUES ${product}`
    }))

    console.log('inserted products ', rows.length)
  } catch (err) {
    console.log('Error seding products', err)
  }
}

async function main() {
  await createProductsTable()
  await seedProducts()
}

main()
