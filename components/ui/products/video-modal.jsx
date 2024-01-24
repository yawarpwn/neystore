"use client";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { VideoPlayer } from "./video-player";

export function VideoModal({ video }) {
  const { url, cover, title } = video;
  console.log(video);
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex items-center">
          <div className="w-[50px] h-[50px] relative opacity-30 hover:opacity-100">
            <img className="w-full h-full object-cover" src={cover} alt={title} />
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] md:max-w-[700px]">
        <div className="mt-4">
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
  );
}
