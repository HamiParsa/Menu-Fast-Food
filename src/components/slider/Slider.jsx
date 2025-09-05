"use client"; // Ensure this component runs on the client side in Next.js

import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper core styles
import 'swiper/css';
import 'swiper/css/navigation';

// Import custom CSS for Swiper styling
import './styles.css';

// Import navigation module (for next/prev arrows)
import { Navigation } from 'swiper/modules';

// Slider component
export default function Slider() {
  return (
    <>
      {/* Swiper container with navigation enabled */}
      <Swiper 
        navigation={true} // Enable navigation arrows
        modules={[Navigation]} // Add navigation module
        className="mySwiper" // Custom class for styling
      >
        {/* Each SwiperSlide contains an image */}
        <SwiperSlide>
          <img src="https://images.pexels.com/photos/7441087/pexels-photo-7441087.jpeg" alt="Pizza 1" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="https://images.pexels.com/photos/1390940/pexels-photo-1390940.jpeg" alt="Pizza 2" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg" alt="Pizza 3" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="https://images.pexels.com/photos/11519281/pexels-photo-11519281.jpeg" alt="Pizza 4" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="https://images.pexels.com/photos/2983098/pexels-photo-2983098.jpeg" alt="Pizza 5" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="https://images.pexels.com/photos/375467/pexels-photo-375467.jpeg" alt="Pizza 6" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="https://images.pexels.com/photos/3944308/pexels-photo-3944308.jpeg" alt="Pizza 7" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="https://images.pexels.com/photos/4109084/pexels-photo-4109084.jpeg" alt="Pizza 8" />
        </SwiperSlide>

        <SwiperSlide>
          <img src="https://images.pexels.com/photos/5908049/pexels-photo-5908049.jpeg" alt="Pizza 9" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
