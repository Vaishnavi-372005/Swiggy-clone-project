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
        modules={[]}
        className={Style.mySwiper}>
      
      <SwiperSlide> 
          <div className={Style.foodCard}>
              <img src="/public/Biryani.avif" alt="Biryani" />
          </div>
      </SwiperSlide>
      <SwiperSlide> 
          <div className={Style.foodCard}>
              <img src="/public/Cake.avif" alt="Cake" />
          </div>
      </SwiperSlide>
      <SwiperSlide> 
          <div className={Style.foodCard}>
              <img src="/public/Chole Bhature.avif" alt="Chole Bhature" />
          </div>
      </SwiperSlide>
      <SwiperSlide> 
          <div className={Style.foodCard}>
              <img src="/public/Coffee.avif" alt="Coffee" />
          </div>
      </SwiperSlide>
      <SwiperSlide> 
          <div className={Style.foodCard}>
              <img src="/public/Dhokla.avif" alt="Dhokla" />
          </div>
      </SwiperSlide>
      <SwiperSlide> 
          <div className={Style.foodCard}>
              <img src="/public/Omelette.avif" alt="Omelette" />
          </div>
      </SwiperSlide>
      <SwiperSlide> 
          <div className={Style.foodCard}>
              <img src="/public/Dosa.avif" alt="Dosa" />
          </div>
      </SwiperSlide>
      <SwiperSlide> 
          <div className={Style.foodCard}>
              <img src="/public/Idli.avif" alt="Idli" />
          </div>
      </SwiperSlide>
      <SwiperSlide> 
          <div className={Style.foodCard}>
              <img src="/public/Juice.avif" alt="Juice" />
          </div>
      </SwiperSlide>
      <SwiperSlide> 
          <div className={Style.foodCard}>
              <img src="/public/Kachori.avif" alt="Kachori" />
          </div>
      </SwiperSlide>
      <SwiperSlide> 
          <div className={Style.foodCard}>
              <img src="/public/Khichdi.avif" alt="Khichdi" />
          </div>
      </SwiperSlide>
      <SwiperSlide> 
          <div className={Style.foodCard}>
              <img src="/public/Pakoda.avif" alt="Pakoda" />
          </div>
      </SwiperSlide>
      <SwiperSlide> 
          <div className={Style.foodCard}>
              <img src="/public/Paratha.avif" alt="Paratha" />
          </div>
      </SwiperSlide>
      <SwiperSlide> 
          <div className={Style.foodCard}>
              <img src="/public/Pav Bhaji.avif" alt="Pav Bhaji" />
          </div>
      </SwiperSlide>
      <SwiperSlide> 
          <div className={Style.foodCard}>
              <img src="/public/Poha.avif" alt="Poha" />
          </div>
      </SwiperSlide>
      <SwiperSlide> 
          <div className={Style.foodCard}>
              <img src="/public/Poori.avif" alt="Poori" />
          </div>
      </SwiperSlide>
      <SwiperSlide> 
          <div className={Style.foodCard}>
              <img src="/public/Salad.avif" alt="Salad" />
          </div>
      </SwiperSlide>
      <SwiperSlide> 
          <div className={Style.foodCard}>
              <img src="/public/Tea.avif" alt="Tea" />
          </div>
      </SwiperSlide>
      <SwiperSlide> 
          <div className={Style.foodCard}>
              <img src="/public/Upma.avif" alt="Upma" />
          </div>
      </SwiperSlide>
      <SwiperSlide> 
          <div className={Style.foodCard}>
              <img src="/public/Vada.avif" alt="Vada" />
          </div>
      </SwiperSlide>      
      </Swiper>
    </div>
  );
}

export default SliderSwiper1
