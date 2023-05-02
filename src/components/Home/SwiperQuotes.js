import React, { useState } from "react";
// import Swiper core and required modules
import { Autoplay, EffectFade } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";

import { dataQuotes } from "../../data/dataHome";
import CardQuotes from "../Card/CardQuotes";

export default function SwiperQuotes() {
  const [my_swiper, set_my_swiper] = useState({});
 
  return (
    <>
      <div className="flex justify-between items-center">
        <h2 className="w-full text-white text-[1.75rem] font-extralight mx-w-md">
          Citations presse
        </h2>
        <div className="flex space-x-4 text-white">
          <i
            className="fa fa-angle-left text-2xl"
            onClick={() => my_swiper.slidePrev()}
          />
          <i
            className="fa fa-angle-right  text-2xl"
            onClick={() => my_swiper.slideNext()}
          />
        </div>
      </div>
      <hr className="mt-2 mb-4" />
      <Swiper
        // install Swiper modules
        modules={[Autoplay, EffectFade]}
        onInit={(ev) => {
          set_my_swiper(ev);
        }}
        speed={1000}
        spaceBetween={50}
        slidesPerView={1}
        effect="fade"
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: true,
        }}
        fadeEffect={{
          crossFade: true, // enables slides to cross fade
        }}
      >
        <SwiperSlide>
          <CardQuotes
            text={dataQuotes[0].text}
            link={dataQuotes[0].link}
            source={dataQuotes[0].source}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardQuotes
            text={dataQuotes[1].text}
            link={dataQuotes[1].link}
            source={dataQuotes[1].source}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardQuotes
            text={dataQuotes[2].text}
            link={dataQuotes[2].link}
            source={dataQuotes[2].source}
          />
        </SwiperSlide>
        <SwiperSlide>
          <CardQuotes
            text={dataQuotes[3].text}
            link={dataQuotes[3].link}
            source={dataQuotes[3].source}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
