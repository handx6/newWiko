import React, { useState, useEffect } from "react";
import Navigation from "../Layouts/Navigation";

// import Swiper core and required modules
import { Autoplay, EffectFade } from "swiper";
import { Swiper, SwiperSlide, useSwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
export default function SwiperHome() {
  const [my_swiper, set_my_swiper] = useState({});

  const [imgOne, setImgOne] = useState(
    window.innerWidth < 769
      ? "img/hero/hero-one-sm.jpeg"
      : "img/hero/hero-one.jpeg"
  );

  const [imgTwo, setImgTwo] = useState(
    window.innerWidth < 769
      ? "img/hero/hero-two-sm.jpeg"
      : "img/hero/hero-two.jpeg"
  );
  const [imgThree, setImgThree] = useState(
    window.innerWidth < 769
      ? "img/hero/hero-three-sm.jpeg"
      : "img/hero/hero-three.jpeg"
  );
  
  const bgSelected = "bg-main";
  const bgUnselected = "bg-gray-300";

  const [slideOne, setSlideOne] = useState(bgSelected);
  const [slideTwo, setSlideTwo] = useState(bgUnselected);
  const [slideThree, setSlideThree] = useState(bgUnselected);

  function handleSlideChange(swiperCore) {
    {
      const { activeIndex, snapIndex, previousIndex, realIndex } = swiperCore;      
      if (realIndex === 0) {
        setSlideOne("bg-main");
        setSlideTwo("bg-gray-300");
        setSlideThree("bg-gray-300");
      } else if (realIndex === 1) {
        setSlideOne("bg-gray-300");
        setSlideTwo("bg-main");
        setSlideThree("bg-gray-300");
      } else {
        setSlideOne("bg-gray-300");
        setSlideTwo("bg-gray-300");
        setSlideThree("bg-main");
      }
    }
  }

  return (
    <>
      <Swiper
        onSlideChange={(swiperCore) => handleSlideChange(swiperCore)}
        onInit={(ev) => {
          set_my_swiper(ev);
        }}
        // install Swiper modules
        modules={[Autoplay, EffectFade]}
        spaceBetween={50}
        slidesPerView={1}
        scrollbar={{ draggable: true }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log("slide change")}
        loop={true}
        effect="fade"
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
      >
        <div className="flex flex-col items-center z-0">
          <div className="flex flex-col items-center">
            <div className="swiper-hero flex overflow-x-scroll">
              <SwiperSlide>
                <img
                  className="w-full h-1/2 object-cover bg-gray-300"
                  src={imgOne}
                  id="slide1"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  className="w-full h-1/2 object-cover bg-gray-300"
                  src={imgTwo}
                  id="slide2"
                />
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <img
                  className="w-full h-1/2 object-cover bg-gray-300"
                  src={imgThree}
                  id="slide3"
                />
              </SwiperSlide>
            </div>
          </div>
        </div>
      </Swiper>
      <div className="flex my-4 space-x-4 justify-center">
        <div
          onClick={() => {
            my_swiper.slideTo(0);
          }}
          className={`w-4 h-4 mx-1 ${slideOne} hover:bg-main  `}
        ></div>
        <div
          onClick={() => {
            
            my_swiper.slideTo(1);
          }}
          className={`w-4 h-4 mx-1 ${slideTwo} hover:bg-main  `}
        ></div>
        <div
          onClick={() => {
            
            my_swiper.slideTo(2);
          }}
          className={`w-4 h-4 mx-1 ${slideThree} hover:bg-main  `}
        ></div>
      </div>
    </>
  );
}
