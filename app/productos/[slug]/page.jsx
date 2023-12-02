import { fetchProductById, fetchProducts } from '@/lib/products'
import { ViewerProduct } from '@/components/ui/products/viewer'
import { InfoProduct } from '@/components/ui/products/info'
import { MoreInfoProduct } from '@/components/ui/products/more-info'
import { Breadcrumbs } from '@/components/ui/breadcrumbs/index'
import { GenericInfo } from '@/components/ui/products/generic-info'
import { CarouselProducts } from '@/components/ui/products/carousel'
import { siteConfig } from '@/config/site'

export async function generateMetadata({ params }) {
  const product = await fetchProductById({ slug: params.slug })

  const [title] = product.title.split(',')
  const description = product.title
  const ogImage = product.media[0]
  const ogUrl = `siteConfig.url/productos/${product.slug}`

  return {
    title,
    description,
    openGraph: {
      title: title,
      description: description,
      url: ogUrl,
      siteName: title,
      images: [
        {
          url: ogImage.url,
          width: 1200,
          height: 630,
        },
      ],
    },
  }
}

async function ProductPage({ params }) {
  const product = await fetchProductById({ slug: params.slug })
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
      {/* <div className="border border-blue-500 grid grid-cols-2"> */}
      {/*   <div className="h-[800px] relative border border-lime-500"> */}
      {/*     <div className="sticky top-0 h-[200px] border border-black "> */}
      {/*       ContendioSticky */}
      {/*     </div> */}
      {/*   </div> */}
      {/*   <div className="border border-purple-500">Info Product</div> */}
      {/* </div> */}
      <div className="grid grid-cols-1 gap-4  lg:grid-cols-2 ">
        <ViewerProduct
          title={product.title}
          images={product.media}
          video={product?.video}
        />
        <InfoProduct product={product} />
        {product.infoProduct && <MoreInfoProduct product={product} />}
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
