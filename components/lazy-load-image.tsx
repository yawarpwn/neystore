'use client'
import { cn } from '@/lib/utils'
import { Loader2 } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const PLACEHOLDER_SRC =
  `data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D`

interface Props {
  imgSrc: string
  inView: boolean
  index: number
  alt: string
}
export function LazyLoadImage(props: Props) {
  const { imgSrc, inView, index, alt } = props
  const [hasLoaded, setHasLoaded] = React.useState(false)

  const setLoaded = React.useCallback(() => {
    if (inView) setHasLoaded(true)
  }, [inView, setHasLoaded])

  return (
    <div className='min-w-0 shrink-0 grow-0 basis-full relative'>
      {/* {!hasLoaded && ( */}
      {/*   <div className='absolute top-1/2 left-1/2 text-indigo-500'>Spinner</div> */}
      {/* )} */}
      {!hasLoaded && (
        <div
          className={`relative w-[350px] h-[350px] lg:w-[500px] lg:h-[500px] sm:w-[450px] sm:h-[450px] 
bg-muted animate-pulse flex items-center justify-center`}
        >
          <Loader2 className='animate-spin text-muted-foreground' />
        </div>
      )}
      <div className='w-[350px] h-[350px] sm:w-[450px] sm:h-[450px] lg:w-[500px] lg:h-[500px]'>
        <Image
          className='w-full h-full object-contain'
          onLoad={setLoaded}
          width={500}
          height={500}
          src={inView ? imgSrc : PLACEHOLDER_SRC}
          alt={alt}
          data-src={imgSrc}
        />
      </div>
    </div>
  )
}
