import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from 'swiper';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import './swiper-style.css'
// import required modules
import { Pagination, Navigation } from "swiper";
SwiperCore.use([Autoplay])

export default function Carousel({ items }) {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 1000,
                    disableOnInteraction: false
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                {items.map((item) => {
                    return (
                        <SwiperSlide key={item.props.src} >
                            {item}
                        </SwiperSlide>)
                })}
            </Swiper>
        </>
    );
}
