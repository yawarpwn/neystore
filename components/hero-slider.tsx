'use client'

import { cn } from '@/lib/utils'
import { EmblaCarouselType, EmblaOptionsType } from 'embla-carousel'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import { useCallback, useEffect, useState } from 'react'
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

export function HeroSlider() {
  const [embleRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 3000 }),
  ])
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])
  const [selectedIndex, setSelectedIndex] = useState(0)

  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [
    emblaApi,
  ])

  const onSelect = useCallback((api: EmblaCarouselType) => {
    setSelectedIndex(api.selectedScrollSnap())
  }, [])

  const onInit = useCallback((api: EmblaCarouselType) => {
    setScrollSnaps(api.scrollSnapList())
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onInit(emblaApi)
    onSelect(emblaApi)
    emblaApi.on('reInit', onInit)
    emblaApi.on('reInit', onSelect)
    emblaApi.on('select', onSelect)
  }, [emblaApi, onInit, onSelect])

  return (
    <div className='relative'>
      {/* Wrapper */}
      <div className='overflow-hidden' ref={embleRef}>
        {/* Container */}
        <div className='flex touch-pan-y '>
          {images.map((image, index) => (
            <div className='min-w-0 shrink-0 grow-0 basis-full' key={index}>
              <picture>
                <source
                  srcSet={image.desktop}
                  media='(min-width: 720px)'
                >
                </source>
                <img src={image.mobile} />
              </picture>
            </div>
          ))}
        </div>
        <div className='flex absolute bottom-2 left-1/2 gap-2'>
          {scrollSnaps.map((_, index) => (
            <div
              onClick={() => scrollTo(index)}
              className={cn(
                'pointer  w-2 touch-manipulation h-2 rounded-full border border-white/50 bg-white/50',
                selectedIndex === index
                  ? 'bg-white border-white'
                  : '',
              )}
              key={index}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
