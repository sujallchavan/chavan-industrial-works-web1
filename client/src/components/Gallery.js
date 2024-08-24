import React, { useState } from "react";
import "./Gallery.css";

const Gallery = () => {
  const [visibleImages, setVisibleImages] = useState(6);
  const [isExpanded, setIsExpanded] = useState(false);

  const images = [
    {
      id: 1,
      src: "/img/i1.jpg",
      title: "Image 1",
      description: "Description for Image 1",
    },
    {
      id: 2,
      src: "/img/p2.jpg",
      title: "Image 2",
      description: "Description for Image 2",
    },
    {
      id: 3,
      src: "/img/p3.jpg",
      title: "Image 3",
      description: "Description for Image 3",
    },
    {
      id: 4,
      src: "/img/p4.jpg",
      title: "Image 4",
      description: "Description for Image 4",
    },
    {
      id: 5,
      src: "/img/p5.jpg",
      title: "Image 5",
      description: "Description for Image 5",
    },
    {
      id: 6,
      src: "/img/p6.jpg",
      title: "Image 6",
      description: "Description for Image 6",
    },
    {
      id: 7,
      src: "/img/p7.jpg",
      title: "Image 7",
      description: "Description for Image 7",
    },
    {
      id: 8,
      src: "/img/p8.jpg",
      title: "Image 8",
      description: "Description for Image 8",
    },
    {
      id: 9,
      src: "/img/p9.jpg",
      title: "Image 9",
      description: "Description for Image 9",
    },
    {
      id: 10,
      src: "/img/p10.jpg",
      title: "Image 10",
      description: "Description for Image 10",
    },
    {
      id: 11,
      src: "/img/p11.jpg",
      title: "Image 11",
      description: "Description for Image 11",
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
