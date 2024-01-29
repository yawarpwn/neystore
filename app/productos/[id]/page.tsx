import { ProductCarousel } from '@/components/products/product-carousel'
import { ProductInfo } from '@/components/products/product-info'
import { ProductViewer } from '@/components/products/product-viewer'
import { ProductsCarousel } from '@/components/products/products-carousel'
import { ProductSkeleton } from '@/components/skeletons/product'
import { siteConfig } from '@/config/site'
import { fetchProductById, fetchProducts } from '@/lib/products'
import { Suspense } from 'react'

export async function generateMetadata(
  { params }: { params: { id?: string } },
) {
  const product = await fetchProductById(params.id)

  const [title] = product.title.split(',')
  const description = product.title
  const ogImageUrl = product.images[0].url
  const ogUrl = `${siteConfig.url}/productos/${product.id}`

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

async function CarouselProductsServer() {
  const products = await fetchProducts()
  return (
    <ProductsCarousel
      products={products}
      title='Productos similares sugeridos'
    />
  )
}

async function ViewProductServer({ id }: { id: string }) {
  const product = await fetchProductById(id)
  return (
    <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
      <ProductCarousel images={product.images} />
      {/* <ProductViewer */}
      {/*   title={product.title} */}
      {/*   images={product.images} */}
      {/*   video={product.video} */}
      {/* /> */}
      <ProductInfo product={product} />
    </div>
  )
}

async function ProductPage({ params }: { params?: { id?: string } }) {
  const id = params?.id

  return (
    <main className='container max-w-5xl pt-4'>
      <Suspense fallback={<ProductSkeleton />}>
        <ViewProductServer id={id} />
      </Suspense>
      <CarouselProductsServer />
    </main>
  )
}

export default ProductPage
