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

import { GrNext, GrPrevious } from "react-icons/gr";
export default function SwiperQuotes() {
    const [my_swiper, set_my_swiper] = useState({});

  return (
    <>
      <div className="flex justify-between items-center">
        <h2 className="w-full text-white text-3xl font-light mx-w-md">
          Citations
        </h2>
        <div className="flex space-x-4 text-white">
          <GrPrevious
            className=""
            onClick={() => my_swiper.slidePrev()}
          />
          <GrNext
            className=""
            onClick={() => my_swiper.slideNext()}
          />
        </div>
      </div>
      <hr className="mt-2" />
      <Swiper
        // install Swiper modules
        modules={[Autoplay, EffectFade]}
        onInit={(ev) => {
          set_my_swiper(ev);
        }}
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <blockquote className="text-white">
            View4 : « un téléphone à petit prix, mais doté de maxi prestations »
            « Design et performances ont tous deux été soignés »
            <br />
            <a
              className="text-black underline italic"
              href="https://www.cnetfrance.fr/bon-plan/bon-plan-le-nouveau-wiko-view-4-a-169-euros-avec-coque-et-protection-d-ecran-offertes-39900215.htm"
              target="_blank"
            >
              LIRE LA SUITE
            </a>
          </blockquote>
        </SwiperSlide>
        <SwiperSlide>
          <blockquote className="text-white">
            Wiko Power U10, Power U20 et Power U30 : l'autonomie comme arme de
            guerre.
            <br />
            <a
              className="text-black underline italic"
              target="_blank"
              href="https://www.frandroid.com/marques/wiko/906575_wiko-power-u10-power-u20-et-power-u30-officialisation"
            >
              LIRE LA SUITE
            </a>
          </blockquote>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
