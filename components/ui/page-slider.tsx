'use client'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'

const images = [
  {
    mobile: '/assets/images/banner-juguetes-mobile.webp',
    desktop: '/assets/images/banner-juguetes-desktop.webp',
  },

  {
    mobile: '/assets/images/banner-tecnologia-mobile.webp',
    desktop: '/assets/images/banner-tecnologia-desktop.webp',
  },

  {
    mobile: '/assets/images/banner-3-mobile.webp',
    desktop: '/assets/images/banner-3-desktop.webp',
  },
]

export function PageSlider() {
  return (
    <Carousel
      plugins={[
        Autoplay({ delay: 5000 }),
      ]}
      className='mx-auto max-w-full'
    >
      <CarouselContent>
        {images.map((image) => (
          <CarouselItem className='w-full flex-shrink-0' key={image.mobile}>
            <picture>
              <source
                srcSet={image.desktop}
                media='(min-width: 720px)'
              >
              </source>
              <img src={image.mobile} />
            </picture>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
