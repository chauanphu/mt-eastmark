import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import './swiper-style.css'
// import required modules
import { Pagination } from "swiper";

import ProductCard from "./Cards/ProductCard";

export default function Carousel({ items }) {
    return (
        <>
            <Swiper
                slidesPerView={1}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },

                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {items.map((item) => {
                    return (<SwiperSlide key={item.id}><ProductCard item={item} /></SwiperSlide>)
                })}
            </Swiper>
        </>
    );
}
