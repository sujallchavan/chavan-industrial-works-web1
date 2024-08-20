// src/components/ServiceSlider.js
import React, { useState, useEffect } from "react";
import "./ServiceSlider.css";

const images = [
  {
    id: 1,
    title: "Cappadocia",
    location: "Turkey",
    src: `/img/mig-welding.webp`,
  },
  {
    id: 2,
    title: "Santorini",
    location: "Greece",
    src: `/img/mig-welding.webp`,
  },
  {
    id: 3,
    title: "Bali",
    location: "Indonesia",
    src: `/img/mig-welding.webp`,
  },
  {
    id: 4,
    title: "Paris",
    location: "France",
    src: `/img/mig-welding.webp`,
  },
  {
    id: 5,
    title: "Rome",
    location: "Italy",
    src: `/img/mig-welding.webp`,
  },
  {
    id: 6,
    title: "Tokyo",
    location: "Japan",
    src: `/img/mig-welding.webp`,
  },
];

const ServiceSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleImages, setVisibleImages] = useState([]);

  const updateVisibleImages = () => {
    const screenWidth = window.innerWidth;
    let numVisible = 3; // Default to 3 cards

    if (screenWidth <= 768) {
      numVisible = 2; // 2 cards for tablet
    }
    if (screenWidth <= 576) {
      numVisible = 1; // 1 card for mobile
    }

    setVisibleImages(images.slice(currentIndex, currentIndex + numVisible));
  };

  useEffect(() => {
    updateVisibleImages();

    const handleResize = () => {
      updateVisibleImages();
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [currentIndex, updateVisibleImages]); // Add updateVisibleImages to the dependency array

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="slider-container">
      <div className="slider">
        {visibleImages.map((image, index) => (
          <div className="slider-item" key={image.id}>
            <img src={image.src} alt={image.title} />
            <div className="slider-caption">
              <h3>{image.title}</h3>
              <p>{image.location}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="slider-button prev" onClick={goToPrev}>
        &#10094;
      </button>
      <button className="slider-button next" onClick={goToNext}>
        &#10095;
      </button>
      <div className="slider-indicators">
        {images.map((_, index) => (
          <span
            key={index}
            className={`indicator ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ServiceSlider;
