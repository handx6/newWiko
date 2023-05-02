import React, { useState} from 'react'
import { dataTel } from '../../data/dataHome';
import CardTel from '../Card/CardTel';
// import Swiper core and required modules

import { Autoplay, Pagination, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "swiper/css/effect-fade";
export default function SwiperTel() {
  const slidesPerView = window.innerWidth < 600 ? 1 : 2;
  
  return (
    <Swiper
      // install Swiper modules
      modules={[Autoplay]}
      spaceBetween={50}
      slidesPerView={slidesPerView}
      loop={true}
    >
      {dataTel.map((item) => {
        return (
          <SwiperSlide key={item.id}>
            <CardTel
              urlImg={item.urlImg}
              urlImgInfo={item.urlImgInfos}
              title={item.title}
              key={item.id}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
