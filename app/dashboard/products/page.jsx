import { fetchProducts } from '@/lib/products'
async function ProductsPage() {
  const products = await fetchProducts()
  console.log(products)

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default ProductsPage
