"use client";
import React, { useState } from "react";
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
import { type ProductImage, type Productvideo } from "@/types";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

interface Props {
  images: ProductImage[];
  video?: Productvideo;
  title: string;
}
export function ViewerProduct({ images, video, title }: Props) {
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
              {images.map((img) => {
                return (
                  <SwiperSlide key={img.id}>
                    <div className="thumbs-image-container">
                      <img src={img.thumb} />
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
            {video.url && (
              <div className="video-container">
                <VideoModal video={video} />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
