"use client" // This makes the component run on client side in Next.js

import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// Import custom CSS for Swiper
import './styles.css';

// Import navigation module (for next/prev arrows)
import { Navigation } from 'swiper/modules';

// Slider component
export default function Slider() {
  return (
    <>
      {/* Swiper is the main slider container */}
      <Swiper 
        navigation={true} // Show navigation arrows
        modules={[Navigation]} // Add navigation module
        className="mySwiper" // Custom class for styling
      >
        {/* Each SwiperSlide is one slide with an image */}
        <SwiperSlide>
          <img src="https://wallpapercave.com/wp/wp4056220.jpg" alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="https://www.beatingbroke.com/wp-content/uploads/2024/02/Fast-Food-or-Fine-Dining.webp" alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="https://wallpapercave.com/wp/wp7029319.jpg" alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="https://wallpapercave.com/wp/wp7029400.jpg" alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="https://wallpapercave.com/wp/wp7029404.jpg" alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="https://wallpapercave.com/wp/wp7029417.jpg" alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="https://wallpapercave.com/wp/wp7029443.jpg" alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="https://wallpapercave.com/wp/wp3151366.jpg" alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="https://wallpapercave.com/wp/wp5081140.jpg" alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
