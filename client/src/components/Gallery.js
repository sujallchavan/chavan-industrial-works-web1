import React, { useState } from "react";
import "./Gallery.css";

const Gallery = () => {
  const [visibleImages, setVisibleImages] = useState(6);
  const [isExpanded, setIsExpanded] = useState(false);

  const images = [
    {
      id: 1,
      src: "/img/i1.jpg",
      title: "Iron Door",
      description: "Sturdy and elegant.",
    },
    {
      id: 2,
      src: "/img/p2.jpg",
      title: "Iron Bed",
      description: "Durable and comfortable.",
    },
    {
      id: 3,
      src: "/img/p3.jpg",
      title: "Swing Set",
      description: "Fun and durable.",
    },
    {
      id: 4,
      src: "/img/p4.jpg",
      title: "Safety Gate",
      description: "Secure and reliable.",
    },
    {
      id: 5,
      src: "/img/p5.jpg",
      title: "Metal Door",
      description: "Strong and sophisticated.",
    },
    {
      id: 6,
      src: "/img/p6.jpg",
      title: "Steel Door",
      description: "Resilient and refined.",
    },
    {
      id: 7,
      src: "/img/p7.jpg",
      title: "Spiral Stairs",
      description: "Solid and stylish.",
    },
    {
      id: 8,
      src: "/img/p8.jpg",
      title: "Straight Stairs",
      description: "ideal for linear spaces.",
    },
    {
      id: 9,
      src: "/img/p9.jpg",
      title: "Casement Window",
      description: "offering maximum ventilation.",
    },
    {
      id: 10,
      src: "/img/p10.jpg",
      title: "Box Window",
      description: "adds space and light",
    },
    {
      id: 11,
      src: "/img/p11.jpg",
      title: "Safety Gate",
      description: "Secure and reliable.",
    },
  ];

  const showMoreImages = () => {
    setVisibleImages(images.length);
    setIsExpanded(true);
  };

  const showLessImages = () => {
    setVisibleImages(6);
    setIsExpanded(false);
  };

  return (
    <div className="gallery-section">
      <h2>Gallery</h2>
      <div className="gallery-container">
        {images.slice(0, visibleImages).map((image) => (
          <div className="gallery-item" key={image.id}>
            <div className="image-wrapper">
              <img src={image.src} alt={image.title} />
              <div className="image-overlay">
                <h3>{image.title}</h3>
                <p>{image.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {!isExpanded && visibleImages < images.length && (
        <button className="view-more-button" onClick={showMoreImages}>
          View More
        </button>
      )}
      {isExpanded && (
        <button className="view-more-button" onClick={showLessImages}>
          Show Less
        </button>
      )}
    </div>
  );
};

export default Gallery;
