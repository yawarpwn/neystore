import { fetchProductById } from '@/lib/products'
import { CarouselProduct } from '@/components/ui/products/carousel'
import { InfoProduct } from '@/components/ui/products/info'
async function ProductPage({ params }) {
  const product = await fetchProductById({ id: params.id })
  return (
    <div className="container px-4">
      <div className="grid grid-cols-1 gap-4 md:gap-0 md:grid-cols-2 mt-4">
        <CarouselProduct media={product.media} />
        <InfoProduct product={product} />
      </div>
    </div>
  )
}

export default ProductPage
