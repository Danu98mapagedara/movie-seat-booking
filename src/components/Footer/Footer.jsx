import React from "react";
import "./Footer.css";
// import images from "../../constants/images";
import { BiArrowFromLeft, BiArrowFromRight } from "react-icons/bi";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
const Footer = () => {
  return (
    <div className="footer-container">
      {/* <img className="footerbackgroundImg" src={images.footerbackground} alt="" /> */}
      <div className="footer-content">
        <div className="card">
          {/* <img src={images.footerImage} alt="" />
          <img src={images.logo} alt="" /> */}
          <p> <FlipLink>
              At MovieVerse, your cinematic adventure begins with us.
            </FlipLink>
            <FlipLink>
              Book tickets for your favorite movies, anytime, anywhere.
            </FlipLink> </p>
        </div>
        <div className="card">
          <h3>Company</h3>
          <ul>
          <li><FlipLink href={"/now-showing"}>Now Showing</FlipLink></li>
            <li><FlipLink href={"/coming-soon"}>Coming Soon</FlipLink></li>
            <li><FlipLink href={"/offers"}>Special Offers</FlipLink></li>
            <li><FlipLink href={"/about"}>About Us</FlipLink></li>
            <li><FlipLink href={"/contact"}>Contact Us</FlipLink></li>
          </ul>
        </div>
        <div className="card">
          <h3>Services</h3>
          <ul>
          <li><FlipLink>Online Ticket Booking</FlipLink></li>
            <li><FlipLink>Seat Selection</FlipLink></li>
            <li><FlipLink>Movie Recommendations</FlipLink></li>
            <li><FlipLink>Exclusive Membership</FlipLink></li>
            <li><FlipLink>Gift Cards</FlipLink></li>
          </ul>
        </div>
        <div className="card">
          <h4><FlipLink>Got questions or need assistance?</FlipLink></h4>
          <h1><FlipLink href={"/contact"}>Let's Talk </FlipLink><FaArrowRight /> </h1>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p>Copyright © 2024 MovieVerse. All Rights Reserved.</p>
        <div >
          <span>Privacy Policy</span>
          <span>|</span>
          <span>Terms & condition </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;

const DURATION = 0.25;
const STAGGER = 0.025
const FlipLink = ({ children, href }) => {
  const letters = children.split("").map(l => (l === " " ? "\u00A0" : l));
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      className="fliplink"
      style={{
        lineHeight: 1,
      }}
    >
      <div>
        {letters.map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: 0,
              },
              hovered: {
                y: "-100%",
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inlineblock"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
      <div className="downdiv">
        {letters.map((l, i) => (
          <motion.span
            variants={{
              initial: {
                y: "100%",
              },
              hovered: {
                y: 0,
              },
            }}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * i,
            }}
            className="inlineblock"
            key={i}
          >
            {l}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};
