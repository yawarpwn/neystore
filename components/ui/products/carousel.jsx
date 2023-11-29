'use client'

import React, { useRef, useState } from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

import './carousel.css'

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

function DialogDemo() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Open</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input
              id="name"
              defaultValue="Pedro Duarte"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input
              id="username"
              defaultValue="@peduarte"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export function CarouselProduct({ media: assets }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)
  const [isOpenModal, setIsOpenModal] = useState(false)

  const openModal = () => setIsOpenModal(true)

  return (
    <>
      <div className="carousel-wrapper">
        <div className="carousel-container">
          <Swiper
            style={{
              '--swiper-navigation-color': 'var(--primary)',
              '--swiper-pagination-color': 'var(--primary)',
              '--swiper-navigation-size': '25px',
            }}
            spaceBetween={10}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2"
          >
            {assets.map(({ type, url }, index) => {
              if (type === 'image') {
                return (
                  <SwiperSlide key={index}>
                    <img src={url} />
                  </SwiperSlide>
                )
              }

              return null
            })}
          </Swiper>
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={5}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper"
          >
            {assets.map(({ type, url, cover }, index) => {
              if (type === 'image') {
                return (
                  <SwiperSlide key={index}>
                    <img src={url} />
                  </SwiperSlide>
                )
              }

              if (type === 'video') {
                return (
                  <SwiperSlide key={index}>
                    <button
                      className="block w-full h-full relative"
                      onClick={openModal}
                    >
                      <span className="absolute inset-0 flex items-center justify-center z-50">
                        play
                      </span>
                      <img
                        className="w-full h-full object-contain"
                        src={cover}
                      />
                    </button>
                  </SwiperSlide>
                )
              }

              return null
            })}
          </Swiper>
          <DialogDemo />
        </div>
      </div>
    </>
  )
}
