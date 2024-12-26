import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./Comingsoon.css"; 
import data from "../../constants/movielist";

const Comingsoon = () => {
  return (
    <div className="upcomingfilms-container">
      <h1 className="heading">Coming Soon Films</h1>
      <Swiper
        modules={[Autoplay, Navigation]}
        spaceBetween={20}
        slidesPerView={3}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        navigation
        loop
        className="movie-swiper"
      >
        {data.map((card, i) => (
          <SwiperSlide key={i} className="movie-card">
            <div className="card-content">
              <img src={card.image} alt={card.name} className="card-image" />
              <p className="card-name">{card.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Comingsoon;
