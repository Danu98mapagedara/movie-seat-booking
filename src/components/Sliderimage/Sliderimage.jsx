import React from "react";
import data from "../../constants/slider/";
import { sliderSettings } from "../../constants/common.js";
import "./Slider.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";

const Sliderimages = () => {
  return (
    <div className="image-container">
      <Swiper {...sliderSettings}
       className="image-container">
        {data.map((image, i) => (
          <SwiperSlide key={i} className="card-section">
            <div className="slider-image">
              <img src={image.image} alt="slider" />
            </div>
            <div className="des">
              <h5>{image.name}</h5>
              <p>{image.detail}</p>
            </div>
          </SwiperSlide>
        ))}
        <SliderButtons />
      </Swiper>
    </div>
  );
};

export default Sliderimages;

const SliderButtons = () => {
  const swiper = useSwiper();
  return (
    <div className="r-buttons">
      <button onClick={() => swiper.slidePrev()}>
        <FaArrowLeft />
      </button>
      <button onClick={() => swiper.slideNext()}>
        <FaArrowRight />
      </button>
    </div>
  );
};
