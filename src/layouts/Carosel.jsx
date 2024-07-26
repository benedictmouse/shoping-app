import React, { useState, useEffect } from 'react';
import '../styles/Carosel.css'; 
import Offer1 from '../images/offer1.jpg';
import Offer2 from '../images/offer2.jpg';
import Offer4 from '../images/offer4.jpg';

const images = [Offer1, Offer2, Offer4];

function Carosel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); 
    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-slide ${index === currentIndex ? 'active' : ''}`}
          >
            <img src={image} alt={`Slide ${index}`} className="carousel-image" />
            <div className="carousel-caption">
              <h3>30% OFF</h3>
              <p>On all items in this category</p>
            </div>
          </div>
        ))}
      </div>
      <button className="carousel-button prev" onClick={handlePrev}>
        &#10094;
      </button>
      <button className="carousel-button next" onClick={handleNext}>
        &#10095;
      </button>
    </div>
  );
}

export default Carosel;
