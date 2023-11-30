import { PlyrVideo } from './plyrvideo'
import { Button } from '@/components/ui/button'
import { PlayIcon } from '@radix-ui/react-icons'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { PlayCircleIcon } from 'lucide-react'

export function VideoModal({ video }) {
  const { url, provider, cover } = video
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex items-center">
          <div className="w-[50px] h-[50px] relative opacity-30 hover:opacity-100">
            <button
              type="button"
              className="bg-primary text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center "
              data-plyr="play"
              aria-pressed="false"
              aria-label="Play, Samsung Galaxy Tab S6 Lite (2022) | Unboxing en español"
            >
              <PlayIcon className="w-[18px] h-[18px]" />
            </button>
            <img className="w-full h-full object-cover" src={cover} />
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] md:max-w-[700px]">
        <div className="mt-4">
          <PlyrVideo
            source={{
              type: 'video',
              poster: cover,
              sources: [
                {
                  src: url,
                  provider: provider,
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
