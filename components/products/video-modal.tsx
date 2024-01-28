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
        <div className='w-16 h-16 hover:cursor-pointer relative'>
          <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary w-8 h-8 rounded-full flex items-center justify-center'>
            <PlayIcon className='text-white w-5 h-5' />
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
