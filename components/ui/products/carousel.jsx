'use client'

import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/thumbs'

import './carousel.css'

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'
import { VideoModal } from './video-modal'

export function CarouselProduct({ images, video, title }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)

  return (
    <>
      <div className="carousel-wrapper">
        <div className="carousel-container">
          {/* Main Swiper */}
          <Swiper
            style={{
              '--swiper-navigation-color': 'var(--primary)',
              '--swiper-pagination-color': 'var(--primary)',
              '--swiper-navigation-size': '25px',
            }}
            spaceBetween={10}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="main-swiper"
          >
            {images.map(({ type, url }, index) => {
              if (type === 'image') {
                return (
                  <SwiperSlide key={index}>
                    <img src={url} alt={title} />
                  </SwiperSlide>
                )
              }
            })}
          </Swiper>

          {/* Thumbs Swiper */}
          <div className="thumbs-container">
            <Swiper
              onSwiper={setThumbsSwiper}
              spaceBetween={10}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="thumbs-swiper"
            >
              {images.map(({ type, url }, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className="thumbs-image-container">
                      <img src={url} alt={`thumbnail ${title}`} />
                    </div>
                  </SwiperSlide>
                )
              })}
            </Swiper>
            {video && (
              <div className="video-container">
                <VideoModal video={video} title={title} />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
