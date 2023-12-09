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

export function ViewerProduct({ images, video, videos, title }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)

  return (
    <>
      <div className="carousel-wrapper">
        <div className="carousel-container">
          <Swiper
            style={{
              '--swiper-navigation-size': '25px',
            }}
            spaceBetween={10}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="main-swiper"
          >
            {images.map(({ hiRes }, index) => {
              return (
                <SwiperSlide key={index}>
                  <img src={hiRes} alt={title} />
                </SwiperSlide>
              )
            })}
          </Swiper>
          {/* Thumbs Swiper */}
          <div className="thumbs-container">
            <Swiper
              style={{
                '--swiper-navigation-size': '15px',
              }}
              onSwiper={setThumbsSwiper}
              spaceBetween={10}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="thumbs-swiper"
              navigation
            >
              {images.map((img, index) => {
                return (
                  <SwiperSlide key={index}>
                    <div className="thumbs-image-container">
                      <img src={img.thumb} />
                    </div>
                  </SwiperSlide>
                )
              })}
            </Swiper>
            {videos && (
              <div className="video-container">
                <VideoModal videos={videos} title={title} />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
