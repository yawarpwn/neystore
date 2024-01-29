'use client'
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import { useEffect, useState } from 'react'

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
  const [api, setApi] = useState<CarouselApi>()
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  useEffect(() => {
    if (!api) return
    api.on('init', () => {
      setScrollSnaps(api.scrollSnapList())
    })
  }, [api])

  return (
    <Carousel
      setApi={setApi}
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
      <div>
        {scrollSnaps.map((_, index) => <div key={index}>x</div>)}
      </div>
    </Carousel>
  )
}
