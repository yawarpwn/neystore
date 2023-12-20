'use client'

import { PlyrVideo } from './plyrvideo'

import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog'

export function VideoModal({ videos }) {
  const { url, thumb, thumbUrl, title, slateUrl } = videos[0]
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex items-center">
          <div className="w-[50px] h-[50px] relative opacity-30 hover:opacity-100">
            <img className="w-full h-full object-cover" src={thumb} />
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] md:max-w-[700px]">
        <div className="mt-4">
          <PlyrVideo
            source={{
              type: 'video',
              poster: slateUrl,
              sources: [
                {
                  src: url,
                },
              ],
            }}
            options={{
              clickToPlay: true,
            }}
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}
