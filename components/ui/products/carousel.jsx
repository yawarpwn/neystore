'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { ProductCard } from './card'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/thumbs'
import 'swiper/css/navigation'

import { FreeMode, Navigation, Pagination } from 'swiper/modules'

export function CarouselProducts({
  products,
  title = 'Title Carousel Section',
}) {
  return (
    <section>
      <div className="bg-gradient-to-r from-[#5700AA] via-[#C2009C] to-[#FD4B21] p-4 rounded">
        <h3 className="text-xl md:text-2xl text-white text-center font-bold">
          {title}
        </h3>
      </div>
      <Swiper
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 6,
          },
        }}
        spaceBetween={5}
        slidesPerView={2}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation]}
        navigation
      >
        {products.map((product) => {
          return (
            <SwiperSlide key={product.id}>
              <ProductCard product={product} />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  )
}
