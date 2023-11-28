import React from 'react'
import { fetchProducts } from '@/lib/products'
import { ProductCard } from '@/components/ui/products/card'

async function ProductPage() {
  const products = await fetchProducts()
  return (
    <div className="container relative">
      <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))]">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default ProductPage
