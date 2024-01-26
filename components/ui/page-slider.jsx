"use client";
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./carousel";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const images = [
  {
    mobile: "/assets/images/banner-juguetes-mobile.webp",
    desktop: "/assets/images/banner-juguetes-desktop.webp",
  },

  {
    mobile: "/assets/images/banner-2-mobile.webp",
    desktop: "/assets/images/banner-2-desktop.webp",
  },

  {
    mobile: "/assets/images/banner-3-mobile.webp",
    desktop: "/assets/images/banner-3-desktop.webp",
  },
];

export function PageSlider() {
  return (
    <Carousel
      plugins={[
        Autoplay({ delay: 5000 }),
      ]}
      className="mx-auto max-w-full"
    >
      <CarouselContent>
        {images.map((image) => (
          <CarouselItem className="w-full flex-shrink-0" key={image.mobile}>
            <picture>
              <source
                srcSet={image.desktop}
                media="(min-width: 720px)"
              >
              </source>
              <img src={image.mobile} />
            </picture>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
