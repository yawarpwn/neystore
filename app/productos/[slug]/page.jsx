import { fetchProductById } from '@/lib/products'
import { CarouselProduct } from '@/components/ui/products/carousel'
import { InfoProduct } from '@/components/ui/products/info'
import { MoreInfoProduct } from '@/components/ui/products/more-info'
import { Breadcrumbs } from '@/components/ui/breadcrumbs/index'
import { GenericInfo } from '@/components/ui/products/generic-info'

export async function generateMetadata({ params }) {
  const product = await fetchProductById({ slug: params.slug })

  const [title] = product.title.split(',')
  const description = product.title

  return {
    title,
    description,
  }
}

async function ProductPage({ params }) {
  const product = await fetchProductById({ slug: params.slug })
  const formatedtitle = product.slug.replace(/-/g, ' ')
  return (
    <main className="container flex flex-col gap-4 px-4 overflow-x-hidden">
      <Breadcrumbs
        breadcrumbs={[
          {
            title: 'Inicio',
            href: '/',
          },
          {
            title: 'Productos',
            href: '/productos',
          },
          {
            title: formatedtitle,
            href: product.slug,
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
      <GenericInfo />
    </main>
  )
}

export default ProductPage
