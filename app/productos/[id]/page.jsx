import { fetchProductById } from '@/lib/products'
import { CarouselProduct } from '@/components/ui/products/carousel'
import { InfoProduct } from '@/components/ui/products/info'
import { MoreInfoProduct } from '@/components/ui/products/more-info'
async function ProductPage({ params }) {
  const product = await fetchProductById({ id: params.id })
  return (
    <div className="container px-4">
      <div className="grid grid-cols-1 gap-4  lg:grid-cols-2 mt-4">
        <CarouselProduct media={product.media} />
        <InfoProduct product={product} />
        {product.infoProduct && <MoreInfoProduct product={product} />}
      </div>
    </div>
  )
}

export default ProductPage
