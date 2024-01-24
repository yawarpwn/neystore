"use client";
import React, { useRef, useState } from "react";
import { VideoModal } from "./video-modal";
// Import Swiper React components
import { ShareButton } from "@/components/share-button";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/thumbs";

import "./carousel.css";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

export function ViewerProduct({ images, video, title }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <div className="carousel-wrapper">
        <div className="carousel-container">
          <ShareButton />
          <Swiper
            style={{
              "--swiper-navigation-size": "25px",
            }}
            spaceBetween={10}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="main-swiper"
          >
            {images.map(({ url, id }) => {
              return (
                <SwiperSlide key={id}>
                  <img src={url} alt={title} />
                </SwiperSlide>
              );
            })}
          </Swiper>
          {/* Thumbs Swiper */}
          <div className="thumbs-container">
            <Swiper
              style={{
                "--swiper-navigation-size": "15px",
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
                  <SwiperSlide key={img.id}>
                    <div className="thumbs-image-container">
                      <img src={img.thumb} />
                    </div>
                  </SwiperSlide>
                );
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
  );
}
