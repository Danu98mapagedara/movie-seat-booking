import React from "react";
import images from "../../constants/images";
import { MdSurroundSound } from "react-icons/md";
import { PiScreencastBold } from "react-icons/pi";
import { motion } from "framer-motion";
import "./Cinema.css";

const Cinema = () => {
  return (
    <div className="cinema-container">
      {/* Section C1 */}
      <motion.div
        className="c1"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
      >
        <div className="c1-img">
          <img src={images.c1} alt="C1 Cinema Lobby" />
        </div>
        <div className="c1-des">
          <h1>C1 Cinema Complex</h1>
          <p>
            Experience the best in cinematic entertainment with C1 Cinema
            Complex. Our lobby welcomes you with a luxurious ambiance, ensuring
            you are relaxed before your movie experience. Enjoy your favorite
            snacks and beverages from our refreshment bar.
          </p>
          <div className="features">
            <ul>
              <li>
                <MdSurroundSound />
                <h5>Dolby Surround Sound</h5>
              </li>
              <li>
                <PiScreencastBold />
                <h5>4K Digital Projection</h5>
              </li>
            </ul>
          </div>
        </div>
      </motion.div>

      {/* Section C2 */}
      <motion.div
        className="c2"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
      >
        <div className="c2-des">
          <h1>C2 Cinema Complex</h1>
          <p>
            Welcome to C2 Cinema Complex, where comfort meets technology. Our
            state-of-the-art seating ensures maximum comfort, and our advanced
            sound systems deliver an immersive movie experience. Perfect for
            family outings or a solo movie date.
          </p>
          <div className="features">
            <ul>
              <li>
                <MdSurroundSound />
                <h5>Dolby Surround Sound</h5>
              </li>
              <li>
                <PiScreencastBold />
                <h5>4K Digital Projection</h5>
              </li>
            </ul>
          </div>
        </div>
        <div className="c2-img">
          <img src={images.c1} alt="C2 Cinema Lobby" />
        </div>
      </motion.div>
    </div>
  );
};

export default Cinema;
