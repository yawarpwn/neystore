import { ProductsCarousel } from '@/components/products/products-carousel'
// import { PageSlider } from '@/components/ui/page-slider'
import { HeroSlider } from '@/components/hero-slider'
import { CATEGORIES } from '@/const'
import { fetchProducts } from '@/lib/products'
import { type Metadata } from 'next'
import { Suspense } from 'react'

export const metadata: Metadata = {
  title: 'NeyStore | Productos Importados de EE.UU y China',
}
export default async function Home() {
  const products = await fetchProducts()
  const tecnologyProducts = products.filter(
    (p) => p.category === CATEGORIES.TECNOLOGY,
  )
  const toysProducts = products.filter(
    (p) => p.category === CATEGORIES.TOYS,
  )

  return (
    <main>
      <HeroSlider />
      <span>
      </span>
      <div className='container max-w-5xl flex flex-col gap-4 mt-4'>
        <Suspense fallback='cargando..'>
          <ProductsCarousel products={tecnologyProducts} title='Tecnología' />
        </Suspense>
        <Suspense fallback='cargando...'>
          <ProductsCarousel products={toysProducts} title='Juguetes' />
        </Suspense>
      </div>
    </main>
  )
}
