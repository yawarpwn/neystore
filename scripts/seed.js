const { sql } = require('@vercel/postgres')
const bcrypt = require('bcrypt')

async function seedProducts() {
  try {
    await sql`DROP TABLE IF EXISTS products`

    await sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`

    // Create the "customers" table if it doesn't exist
    const createTable = await sql`
CREATE TABLE IF NOT EXISTS products (
  id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(255) NOT NULL,
  price INT NOT NULL,
  starts INT NOT NULL,
  amazon_price INT NOT NULL,
  category VARCHAR(255) NOT NULL,
  images JSONB NOT NULL ,
  details JSONB NOT NULL ,
  features JSONB NOT NULL ,
  videos JSONB ,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);
`
    console.log(`Created "products" table`)
  } catch (error) {
    console.error('Error seding products', error)
    throw new Error(error)
  }
}

async function seedUsers() {
  try {
    // drop the "users" table if it exists
    await sql`DROP TABLE IF EXISTS users`

    await sql`create extension if not exists "uuid-ossp"`

    // create the "invoices" table if it doesn't exist
    await sql`
      create table if not exists users (
        id uuid default uuid_generate_v4() primary key,
        name varchar(255) not null,
        email text not null unique,
        password text not null
      );
    `

    console.log('Created "users" table')
    const hashedPassword = await bcrypt.hash('Johneyder007', 10)
    await sql`
      INSERT INTO users (name, email, password)
      VALUES ('Neyda', 'neyda.mili11@gmail.com', ${hashedPassword})
    `
    console.log('inserted neyda user admin')
  } catch (error) {
    console.error('error seeding users:', error)
    throw error
  }
}

async function main() {
  await seedProducts()
  await seedUsers()
}

main()
