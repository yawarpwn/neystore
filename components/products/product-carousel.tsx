'use client'

import { type ProductImage } from '@/types'
import { type EmblaCarouselType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import { useCallback, useEffect, useState } from 'react'
import { LazyLoadImage } from '../lazy-load-image'

interface Props {
  images: ProductImage[]
}

export function ProductCarousel(props: Props) {
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel()
  const [emblaThumbRef, emblaThumApi] = useEmblaCarousel({
    containScroll: 'keepSnaps',
    dragFree: true,
  })
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [slidesInView, setSlidesInView] = useState<number[]>([])

  const onThumbclick = useCallback((index: number) => {
    if (!emblaMainApi || !emblaThumApi) return
    emblaMainApi.scrollTo(index)
  }, [emblaMainApi, emblaThumApi])

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumApi) return
    setSelectedIndex(emblaMainApi.selectedScrollSnap())
    emblaThumApi.scrollTo(emblaMainApi.selectedScrollSnap())
  }, [emblaMainApi, emblaThumApi, selectedIndex])

  const updateSlidesInView = useCallback((api: EmblaCarouselType) => {
    setSlidesInView((slidesInView) => {
      if (slidesInView.length === api.slideNodes().length) {
        api.off('slidesInView', updateSlidesInView)
      }

      const inView = api.slidesInView().filter(index =>
        ~slidesInView.includes(index)
      )

      return slidesInView.concat(inView)
    })
  }, [])

  const { images } = props

  useEffect(() => {
    if (!emblaMainApi) return
    onSelect()
    updateSlidesInView(emblaMainApi)
    emblaMainApi.on('slidesInView', updateSlidesInView)
    emblaMainApi.on('reInit', updateSlidesInView)
    emblaMainApi.on('select', onSelect)
    emblaMainApi.on('reInit', onSelect)
  }, [emblaMainApi, onSelect, updateSlidesInView])
  return (
    <div className='flex justify-center relative'>
      <div className='md:sticky top-16 md:h-[calc(100vh-3.5rem)]  flex flex-col gap-2 '>
        {/* Main */}
        <div className='w-[350px] h-[350px] lg:w-[500px] lg:h-[500px] rounded-md overflow-hidden'>
          {/* ViewPort */}
          <div className='overflow-hidden' ref={emblaMainRef}>
            {/* Container */}
            <div className='flex touch-pan-y'>
              {images.map((img, index) => {
                return (
                  <LazyLoadImage
                    key={img.id}
                    imgSrc={img.url}
                    index={index}
                    inView={slidesInView.indexOf(index) > -1}
                  />
                )
              })}
            </div>
          </div>
        </div>

        {/* Thumbs */}
        <div className='mt-4 w-[350px] lg:w-[500px]'>
          <div className='overflow-hidden' ref={emblaThumbRef}>
            {/* Container */}
            <div className='flex'>
              {images.map((img, index) => {
                return (
                  <div
                    key={img.id}
                    className='min-w-0 pl-1 shrink-0 grow-0 basis-1/6 md:basis-[10%]'
                    onClick={() => onThumbclick(index)}
                  >
                    <img key={img.id} src={img.thumb} />
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
