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

export function VideoModal({ video, title }) {
  const { url, provider } = video
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex items-center">
          <Button variant="outline">
            <PlayIcon />
          </Button>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] md:max-w-[700px]">
        <div className="mt-4">
          <PlyrVideo
            source={{
              type: 'video',
              // poster: 'https://img.youtube.com/vi/S-Dh-0bpDDQ/mqdefault.jpg',
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
          <h3 className="mt-2 text-center">{title}</h3>
        </div>
      </DialogContent>
    </Dialog>
  )
}
