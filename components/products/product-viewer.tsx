'use client'
import { ShareButton } from '@/components/share-button'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { cn } from '@/lib/utils'
import { type ProductImage, type Productvideo } from '@/types'
import Image from 'next/image'
import React, { useState } from 'react'
import { VideoModal } from './video-modal'

interface Props {
  images: ProductImage[]
  video?: Productvideo
  title: string
}
interface ImageLoaderProps {
  imgSrc: string
}

function ImageLoader(props: ImageLoaderProps) {
  const { imgSrc } = props
  const [loading, setLoading] = useState(true)
  console.log(loading)

  return (
    <div>
      {loading && <div>Cargando..</div>}
      <Image
        onLoad={() => setLoading(false)}
        width={480}
        height={480}
        className='w-full h-full object-contain'
        src={imgSrc}
      />
    </div>
  )
}

export function ProductViewer({ images, video, title }: Props) {
  const [currentViewer, setCurrentViewer] = useState(images[0].url)

  const handleClickItem = (index: number) => {
    setCurrentViewer(images[index].url)
  }

  return (
    <>
      <div className='flex justify-center relative'>
        <div className='md:sticky top-16 md:h-[calc(100vh-3.5rem)]  flex flex-col gap-2'>
          <ShareButton />
          {/* Main  */}
          <div className='w-80 h-80 sm:w-[400px] sm:h-[400px]  md:w-[480px] md:h-[480px] rounded-md bg-white overflow-hidden'>
            <ImageLoader imgSrc={currentViewer} />
            {/* <Image */}
            {/*   width={480} */}
            {/*   height={480} */}
            {/*   className='w-full h-full object-contain' */}
            {/*   src={currentViewer} */}
            {/*   alt={title} */}
            {/* /> */}
          </div>
          {/* Thumbs */}
          <Carousel
            opts={{
              align: 'start',
            }}
            className='w-80 sm:w-[400px] md:w-[480px]'
          >
            <CarouselContent className='items-center'>
              {images.map((img, index) => {
                const isActive = currentViewer === img.url

                return (
                  <CarouselItem
                    onClick={() => handleClickItem(index)}
                    className='basis-1/4 sm:basis-1/5 md:basis-1/6'
                    key={img.id}
                  >
                    <div
                      className={cn(
                        'opacity-100 w-16 h-16 hover:cursor-pointer bg-white',
                        { 'opacity-40': isActive },
                      )}
                    >
                      <img
                        className='w-full h-full object-contain'
                        src={img.thumb}
                        alt={title}
                      />
                    </div>
                  </CarouselItem>
                )
              })}
              {video.url && (
                <CarouselItem className='basis-1/4 md:basis-1/6'>
                  <VideoModal video={video} />
                </CarouselItem>
              )}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </>
  )
}
