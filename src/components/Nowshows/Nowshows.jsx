import React from "react";
import "./Now.css";
import data from "../../constants/nowshow";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import { useNavigate,Link,useParams } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const Nowshows = () => {
  const navigate = useNavigate();

  const handleViewTrailer = (id) => {
    navigate(`/trailer/${id}`);
  };

  const handleBookSeat = (id) => {
    navigate(`/book/${id}`);
  };

  return (
    <div className="nowshows-container">
      <h1>Now Showing</h1>
      <Swiper
        modules={[Autoplay, Navigation]}
        spaceBetween={20}
        slidesPerView={3}
        navigation
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop
        className="nowshows-swiper"
      >
        {data.map((movie) => (
          <SwiperSlide key={movie.id}>
            <div className="card">
              <motion.img
                src={movie.image}
                alt={movie.name}
                className="card-image"
                whileHover={{ rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
              <h3>{movie.name}</h3>
              <div className="card-buttons">
                <Link to={`/bookseat/${movie.id}`}> 
                Book seat
                </Link>
              
             
                <button onClick={() => handleViewTrailer(movie.id)}>View Trailer</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Nowshows;
