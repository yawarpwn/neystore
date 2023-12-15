'use client'
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'

import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

const images = [
  {
    mobile: '/assets/images/banner-juguetes-mobile.webp',
    desktop: '/assets/images/banner-juguetes-desktop.webp',
  },

  {
    mobile: '/assets/images/banner-2-mobile.webp',
    desktop: '/assets/images/banner-2-desktop.webp',
  },

  {
    mobile: '/assets/images/banner-3-mobile.webp',
    desktop: '/assets/images/banner-3-desktop.webp',
  },
]

export function PageSlider() {
  return (
    <div className="">
      <Swiper
        style={{
          width: '100%',
          height: '100%',
        }}
        slidesPerView={1}
        modules={[Navigation, Pagination]}
        navigation
        pagination
      >
        {images.map((image) => (
          <SwiperSlide key={image.mobile}>
            <picture>
              <source
                srcSet={image.desktop}
                media="(min-width: 720px)"
              ></source>
              <img src={image.mobile} />
            </picture>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
