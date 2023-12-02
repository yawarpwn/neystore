import { fetchProducts } from '@/lib/products'
import { CarouselProducts } from '@/components/ui/products/carousel'
import { PageSlider } from '@/components/ui/page-slider'
export default async function Home() {
  const products = await fetchProducts()
  const otherProducts = [...products].reverse()
  return (
    <main>
      <PageSlider />
      <div className="container flex flex-col gap-4 mt-4">
        <CarouselProducts products={products} title="Productos en oferta" />
        <CarouselProducts products={otherProducts} title="Otros productos" />
      </div>
    </main>
  )
}
