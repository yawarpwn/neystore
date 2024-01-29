'use client'
import { cn } from '@/lib/utils'
import { Loader, Loader2 } from 'lucide-react'
import React from 'react'

const PLACEHOLDER_SRC =
  `data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D`

interface Props {
  imgSrc: string
  inView: boolean
  index: number
}
export function LazyLoadImage(props: Props) {
  const { imgSrc, inView, index } = props
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
        <div className='relative w-[350px] h-[350px] lg:w-[500px] lg:h-[500px] bg-muted animate-pulse flex items-center justify-center'>
          <Loader2 className='animate-spin text-muted-foreground' />
        </div>
      )}
      <div className='w-[350px] h-[350px] lg:w-[500px] lg:h-[500px]'>
        <img
          className='w-full h-full object-contain'
          onLoad={setLoaded}
          src={inView ? imgSrc : PLACEHOLDER_SRC}
          alt='placeholder'
          data-src={imgSrc}
        />
      </div>
    </div>
  )
}
