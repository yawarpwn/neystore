'use client'
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules'

import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

const images = [
  {
    mobile:
      'https://images.falabella.com/v3/assets/blt9ac1b5ba571392f3/bltaee214b35d6b1cd7/6561176594a247f24034b69a/MSITE_VITRINA_2_PE_JUGUETERIA_AO.jpg?format=webp&quality=70&width=100p',
    desktop:
      'https://images.falabella.com/v3/assets/blt9ac1b5ba571392f3/blt765af22f49ea68ed/65611765dd3986f6cc143bbe/ON_VITRINA_2_PE_JUGUETERIA_AO.jpg?format=webp&quality=70&width=100p',
  },
  {
    mobile:
      'https://images.falabella.com/v3/assets/blt9ac1b5ba571392f3/blt4c4560bb95752d50/656798c91204cdea20ca6aa6/MSITE_VITRINA_3_AO_Celulares.jpg?format=webp&quality=70&width=100p',
    desktop:
      'https://images.falabella.com/v3/assets/blt9ac1b5ba571392f3/blt1ebfffbf914ff7b7/656798c9ca38f0dd72d31095/ON_VITRINA_3_AO_Celulares.jpg?format=webp&quality=70&width=100p',
  },
]

export function PageSlider() {
  return (
    <div className="w-full h-[400px]">
      <Swiper
        style={{
          width: '100%',
          height: '100%',
        }}
        slidesPerView={1}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        modules={[Navigation, Pagination]}
        navigation
        pagination
      >
        <SwiperSlide>
          {images.map((image) => (
            <picture key={image.mobile}>
              <source
                srcSet={image.desktop}
                media="(min-width: 720px)"
              ></source>
              <img src={image.mobile} />
            </picture>
          ))}
        </SwiperSlide>
      </Swiper>
    </div>
  )
}
