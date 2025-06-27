import { useState, useEffect } from "react";
import "../App.css";
import { Link } from "react-router-dom";

const HeroHeader = ({ images = [] }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (images.length > 1) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % images.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [images]);

  return (
    <div className="slideshow-container">
      {images.length > 0 && (
        <>
          <div className="mySlides fade">
            <div className="numbertext"></div>
            <Link to={images[currentSlide].link}>
              <img src={images[currentSlide].src} alt="Hero Banner" className="hero-image" />
            </Link>
            <div className="text"></div>
          </div>

          {/* Dots for navigation - Positioned inside slideshow */}
          <div className="dots-container">
            {images.map((_, index) => (
              <span 
                key={index} 
                className={`dot ${index === currentSlide ? "active" : ""}`} 
                onClick={() => setCurrentSlide(index)}
              ></span>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default HeroHeader;
