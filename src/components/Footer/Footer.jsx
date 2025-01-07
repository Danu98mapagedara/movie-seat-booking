import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Cinesha Multiplex</h3>
          <ul>
            <li><a href="#">Buy tickets</a></li>
            <li><a href="#">Movies</a></li>
            <li><a href="#">Cinemas</a></li>
            <li><a href="#">Contact us</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>General</h3>
          <ul>
            <li><a href="#">C1 Cinema</a></li>
            <li><a href="#">C2 Cinema</a></li>
          </ul>
        </div>
        <div className="footer-section newsletter">
          <h3>Newsletter</h3>
          <p>Join our mailing list for promotions and latest movie updates.</p>
          <div className="newsletter-input">
            <input type="email" placeholder="Type your email address" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="social-icons">
          <a href="#"><i className="fab fa-facebook"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
        </div>
        <p>© 2025 Property Finance and Investments </p>
        <div className="footer-links">
          <a href="#">Privacy policy</a>
          <a href="#">Terms and conditions</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
