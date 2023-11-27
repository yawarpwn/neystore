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
  name VARCHAR(255) NOT NULL,
  price VARCHAR(255) NOT NULL,
  assets JSONB NOT NULL
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
