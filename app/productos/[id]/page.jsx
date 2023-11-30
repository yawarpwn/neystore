import { fetchProductById } from '@/lib/products'
import { CarouselProduct } from '@/components/ui/products/carousel'
import { InfoProduct } from '@/components/ui/products/info'
import { MoreInfoProduct } from '@/components/ui/products/more-info'
import { Breadcrumbs } from '@/components/ui/breadcrumbs/index'

export async function generateMetadata({ params }) {
  const product = await fetchProductById({ id: params.id })

  return {
    title: product.title,
    description: product.title,
  }
}

async function ProductPage({ params }) {
  const product = await fetchProductById({ id: params.id })
  return (
    <main className="container px-4">
      <Breadcrumbs
        breadcrumbs={[
          {
            title: 'Inicio',
            href: '/',
          },
          {
            title: 'Products',
            href: '/productos',
          },
          {
            title: 'Product',
            href: product.id,
            active: true,
          },
        ]}
      />
      <div className="grid grid-cols-1 gap-4  lg:grid-cols-2 mt-4">
        <CarouselProduct
          title={product.title}
          images={product.media}
          video={product?.video}
        />
        <InfoProduct product={product} />
        {product.infoProduct && <MoreInfoProduct product={product} />}
      </div>
    </main>
  )
}

export default ProductPage
