import React, { useState, useEffect } from "react";
import "./ServiceSlider.css";

const images = [
  {
    id: 1,
    title: "Iron Bed",
    location: "Sinnar",
    src: `/img/p2.jpg`,
  },
  {
    id: 2,
    title: "Iron Swing",
    location: "Nashik",
    src: `/img/p3.jpg`,
  },
  {
    id: 3,
    title: "Safty Gate ",
    location: "Sinnar",
    src: `/img/p4.jpg`,
  },
  {
    id: 4,
    title: "Safty Door",
    location: "Nashik",
    src: `/img/p5.jpg`,
  },
  {
    id: 5,
    title: "Designer Door",
    location: "Pune",
    src: `/img/p6.jpg`,
  },
  {
    id: 6,
    title: "Spiral Stairs",
    location: "Sinnar",
    src: `/img/p7.jpg`,
  },
];

const ServiceSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleImages, setVisibleImages] = useState([]);

  useEffect(() => {
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

    updateVisibleImages();

    const handleResize = () => {
      updateVisibleImages();
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [currentIndex]); // Depend only on currentIndex

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
        {visibleImages.map((image) => (
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
