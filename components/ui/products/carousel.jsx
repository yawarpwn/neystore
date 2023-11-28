'use client'

import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

import './carousel.css'

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'

export function CarouselProduct({ media: assets }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)

  return (
    <>
      <div className="swiper-container">
        <Swiper
          style={{
            '--swiper-navigation-color': 'var(--primary)',
            '--swiper-pagination-color': 'var(--primary)',
            '--swiper-navigation-size': '25px',
          }}
          spaceBetween={10}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper2"
        >
          {assets.map(({ type, url }, index) => {
            if (type === 'image') {
              return (
                <SwiperSlide key={index}>
                  <img src={url} />
                </SwiperSlide>
              )
            }

            return null
          })}
        </Swiper>
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={5}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper"
        >
          {assets.map(({ type, url, cover }, index) => {
            console.log(cover)
            if (type === 'image') {
              return (
                <SwiperSlide key={index}>
                  <img src={url} />
                </SwiperSlide>
              )
            }

            if (type === 'video') {
              return (
                <SwiperSlide key={index}>
                  <img src={cover} />
                </SwiperSlide>
              )
            }

            return null
          })}
        </Swiper>
      </div>
    </>
  )
}
