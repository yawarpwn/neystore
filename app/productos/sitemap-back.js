import { siteConfig } from '@/config/site'
import { fetchProducts } from '@/lib/products'
export async function generateSitemaps() {
  const products = await fetchProducts()
  // Fetch the total number of products and calculate the number of sitemaps needed
  return products.map((product) => {
    return { id: product.slug }
  })
}

export default async function sitemap({ id }) {
  // Google's limit is 50,000 URLs per sitemap
  // const start = id * 50000
  // const end = start + 50000
  const products = await fetchProducts()
  return products.map((product) => ({
    url: `${siteConfig}/productos/${id}`,
    lastModified: product.date,
  }))
}
