'use client'
import { ProductCard } from '@/components/products/product-card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'
import { type Product } from '@/types'

interface Props {
  products: Product[]
  title?: string
}

export function ProductsCarousel({
  products,
  title = 'Title Carousel Section',
}: Props) {
  return (
    <section>
      <div className='bg-gradient-to-r from-[#5700AA] via-[#C2009C] to-[#FD4B21] p-4 rounded'>
        <h3 className='text-xl md:text-2xl text-white text-center font-bold'>
          {title}
        </h3>
      </div>
      <Carousel className='w-full max-w-5xl'>
        <CarouselContent>
          {products.map((product) => {
            return (
              <CarouselItem className='basis-1/2 md:basis-1/6' key={product.id}>
                <ProductCard product={product} />
              </CarouselItem>
            )
          })}
        </CarouselContent>
      </Carousel>
    </section>
  )
}
