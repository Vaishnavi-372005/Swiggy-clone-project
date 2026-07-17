import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { ArrowRight, ArrowLeft } from 'lucide-react'


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';

import Style from '../assets/css/SliderSwiper1.module.css'

// import required modules
import { Grid, Pagination, Navigation } from 'swiper/modules';

const SliderSwiper1 = () => {
const swiperRef = useRef(null);

  return (
      <div className={Style.divSliderSwiperParent}>
    
      <div className={Style.SlideHeading}>
        <h1>Order our best food options</h1>
      </div>

    <div className={Style.btnContainer}>
        <button className={Style.swiperBtn} onClick={() => swiperRef.current?.slidePrev()}>
            <ArrowLeft size={22} />
        </button>

        <button className={Style.swiperBtn} onClick={() => swiperRef.current?.slideNext()}>
        <ArrowRight size={22} />
        </button>
    </div>

    <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        slidesPerView={5.65}
        slidesPerGroup={1}   
        grid={{
            rows: 2,
            fill: "row",
        }}
        spaceBetween={20}
        modules={[Grid]}
        className={Style.mySwiper}>
      
      <SwiperSlide> 
          <div className={Style.foodCard}>
              <img src="/Biryani.avif" alt="Biryani" />
          </div>
      </SwiperSlide>
      <SwiperSlide> 
          <div className={Style.foodCard}>
              <img src="/Cake.avif" alt="Cake" />
          </div>
      </SwiperSlide>
      <SwiperSlide> 
          <div className={Style.foodCard}>
              <img src="/Chole Bhature.avif" alt="Chole Bhature" />
          </div>
      </SwiperSlide>
      <SwiperSlide> 
          <div className={Style.foodCard}>
              <img src="/Coffee.avif" alt="Coffee" />
          </div>
      </SwiperSlide>
      <SwiperSlide> 
          <div className={Style.foodCard}>
              <img src="/Dhokla.avif" alt="Dhokla" />
          </div>
      </SwiperSlide>
      <SwiperSlide> 
          <div className={Style.foodCard}>
              <img src="/Omelette.avif" alt="Omelette" />
          </div>
      </SwiperSlide>
      <SwiperSlide> 
          <div className={Style.foodCard}>
              <img src="/Dosa.avif" alt="Dosa" />
          </div>
      </SwiperSlide>
      <SwiperSlide> 
          <div className={Style.foodCard}>
              <img src="/Idli.avif" alt="Idli" />
          </div>
      </SwiperSlide>
      <SwiperSlide> 
          <div className={Style.foodCard}>
              <img src="/Juice.avif" alt="Juice" />
          </div>
      </SwiperSlide>
      <SwiperSlide> 
          <div className={Style.foodCard}>
              <img src="/Kachori.avif" alt="Kachori" />
          </div>
      </SwiperSlide>
      <SwiperSlide> 
          <div className={Style.foodCard}>
              <img src="/Khichdi.avif" alt="Khichdi" />
          </div>
      </SwiperSlide>
      <SwiperSlide> 
          <div className={Style.foodCard}>
              <img src="/Pakoda.avif" alt="Pakoda" />
          </div>
      </SwiperSlide>
      <SwiperSlide> 
          <div className={Style.foodCard}>
              <img src="/Paratha.avif" alt="Paratha" />
          </div>
      </SwiperSlide>
      <SwiperSlide> 
          <div className={Style.foodCard}>
              <img src="/Pav Bhaji.avif" alt="Pav Bhaji" />
          </div>
      </SwiperSlide>
      <SwiperSlide> 
          <div className={Style.foodCard}>
              <img src="/Poha.avif" alt="Poha" />
          </div>
      </SwiperSlide>
      <SwiperSlide> 
          <div className={Style.foodCard}>
              <img src="/Poori.avif" alt="Poori" />
          </div>
      </SwiperSlide>
      <SwiperSlide> 
          <div className={Style.foodCard}>
              <img src="/Salad.avif" alt="Salad" />
          </div>
      </SwiperSlide>
      <SwiperSlide> 
          <div className={Style.foodCard}>
              <img src="/Tea.avif" alt="Tea" />
          </div>
      </SwiperSlide>
      <SwiperSlide> 
          <div className={Style.foodCard}>
              <img src="/Upma.avif" alt="Upma" />
          </div>
      </SwiperSlide>
      <SwiperSlide> 
          <div className={Style.foodCard}>
              <img src="/Vada.avif" alt="Vada" />
          </div>
      </SwiperSlide>      
      </Swiper>
    </div>
  );
}

export default SliderSwiper1
