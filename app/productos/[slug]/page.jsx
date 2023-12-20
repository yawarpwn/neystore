import {
  fetchProductById,
  fetchProductBySlug,
  fetchProducts,
} from '@/lib/products'
import { ViewerProduct } from '@/components/ui/products/viewer'
import { InfoProduct } from '@/components/ui/products/info'
import { MoreInfoProduct } from '@/components/ui/products/more-info'
import { Breadcrumbs } from '@/components/ui/breadcrumbs/index'
import { GenericInfo } from '@/components/ui/products/generic-info'
import { CarouselProducts } from '@/components/ui/products/carousel'
import { siteConfig } from '@/config/site'

export async function generateMetadata({ params }) {
  const product = await fetchProductBySlug({ slug: params.slug })

  const [title] = product.title.split(',')
  const description = product.title
  const ogImageUrl = product.images[0].hiRes
  const ogUrl = `${siteConfig.url}/productos/${product.slug}`

  return {
    metadataBase: new URL('https://m.media-amazon.com'),
    title,
    description,
    openGraph: {
      title: title,
      description: description,
      url: ogUrl,
      siteName: siteConfig.name,
      images: [ogImageUrl],
    },
  }
}

async function ProductPage({ params }) {
  const product = await fetchProductBySlug({ slug: params.slug })
  const products = await fetchProducts()
  const formatedtitle = product.slug.replace(/-/g, ' ')
  return (
    <main className="container">
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
      <div className="grid grid-cols-1 gap-4  lg:grid-cols-2 ">
        <ViewerProduct
          title={product.title}
          images={product.images}
          videos={product?.videos}
        />
        <InfoProduct product={product} />
        {/* {product.infoProduct && <MoreInfoProduct product={product} />} */}
      </div>
      <CarouselProducts
        products={products}
        title="Productos similares sugeridos"
      />
      <GenericInfo />
    </main>
  )
}

export default ProductPage
