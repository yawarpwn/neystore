import React from 'react'
import { fetchProducts, fetchProductsTest } from '@/lib/products'
import { ProductCard } from '@/components/ui/products/card'
import { Breadcrumbs } from '@/components/ui/breadcrumbs'

export const metadata = {
  title: 'Productos',
}

async function ProductPage() {
  const products = await fetchProducts()
  const p = await fetchProductsTest()
  return (
    <main className="container relative">
      <Breadcrumbs
        breadcrumbs={[
          {
            title: 'Inicio',
            href: '/',
          },
          {
            title: 'Productos',
            href: '/productos',
            active: true,
          },
        ]}
      />
      <div className="grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))]">
        {p.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  )
}

export default ProductPage
