import React from 'react'
import { fetchProducts } from '@/lib/products'
import { ProductCard } from '@/components/ui/products/card'

async function ProductPage() {
  const products = await fetchProducts()
  console.log(products)
  return (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(168px,1fr))]">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

export default ProductPage
