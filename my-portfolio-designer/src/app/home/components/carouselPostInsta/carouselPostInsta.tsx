"use client"
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import ImageCarousel from '../elements/imageCarouselPost';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './styles.css';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import cultoMulheres from '/public/postInsta/cultoMulheres.png'
import cultoSantaCeia from '/public/postInsta/cultoSantaCeia.png'
import diaDaBiblia from '/public/postInsta/diaDaBiblia.png'
const urlObject = [
  {
    url: cultoMulheres
  },
  {
    url: cultoSantaCeia
  },
  {
    url: diaDaBiblia
  },
  {
    url: cultoMulheres
  },
  {
    url: cultoSantaCeia
  },
  {
    url: diaDaBiblia
  },
]


export default function CarouselPostInsta() {
  return (
    <div className='h-auto pb-0 pt-0 w-1/2  flex-grow max-lg:w-full relative' id='app'>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        spaceBetween={0}
        coverflowEffect={{
          rotate: 55,
          stretch: 0,
          depth: 70,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={true}
        autoplay={true}
        modules={[ EffectCoverflow, Pagination, Autoplay ]}
        className="mySwiper"
      >
        {urlObject.map((slideContent, index) => (
          <SwiperSlide key={slideContent.url} virtualIndex={index} className='scale-100 shadow'>
            <ImageCarousel options={{ src: slideContent.url, width: '100%', height: 'auto' }} />
          </SwiperSlide>
        ))}
      </Swiper >
    </div >
  );

}