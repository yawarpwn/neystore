'use client'

import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'
import { type Productvideo } from '@/types'
import { PlayIcon } from 'lucide-react'
import { VideoPlayer } from './video-player'

export function VideoModal({ video }: { video: Productvideo }) {
  const { url, cover, title } = video
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className='shrink-0 grow-0 basis-[10%] hover:cursor-pointer relative'>
          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary w-7 h-7 rounded-full flex items-center justify-center'>
            <PlayIcon fill='white' className='text-white w-4 h-4' />
          </div>
          <img className='w-full h-full object-cover' src={cover} alt={title} />
        </div>
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px] md:max-w-[700px]'>
        <div className='mt-4'>
          <VideoPlayer url={url} />
          {/* <PlyrVideo */}
          {/*   source={{ */}
          {/*     type: 'video', */}
          {/*     poster: slateUrl, */}
          {/*     sources: [ */}
          {/*       { */}
          {/*         src: url, */}
          {/*       }, */}
          {/*     ], */}
          {/*   }} */}
          {/*   options={{ */}
          {/*     clickToPlay: true, */}
          {/*   }} */}
          {/* /> */}
        </div>
      </DialogContent>
    </Dialog>
  )
}
