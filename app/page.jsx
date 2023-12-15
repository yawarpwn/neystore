import { fetchProducts } from '@/lib/products'
import { CarouselProducts } from '@/components/ui/products/carousel'
import { PageSlider } from '@/components/ui/page-slider'
import { Suspense } from 'react'

export const metadata = {
  title: 'Inicio',
}
export default async function Home() {
  const products = await fetchProducts()
  const otherProducts = [...products].reverse()
  const tecnologyProducts = products.filter(
    (p) => p.category.toLowerCase() === 'tecnologia',
  )
  const toysProducts = products.filter(
    (p) => p.category.toLowerCase() === 'juguetes',
  )
  return (
    <main>
      <PageSlider />
      <div className="container flex flex-col gap-4 mt-4">
        <Suspense fallback="cargando..">
          <CarouselProducts products={tecnologyProducts} title="Tecnología" />
        </Suspense>
        <Suspense fallback="cargando...">
          <CarouselProducts products={toysProducts} title="Juguetes" />
        </Suspense>
      </div>
    </main>
  )
}
