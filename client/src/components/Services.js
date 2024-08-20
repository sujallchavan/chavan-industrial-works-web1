import React from "react";
import "./Services.css";

const services = [
  {
    title: "Safety Door",
    description:
      "We specialize in crafting robust safety doors using high-quality materials, ensuring the utmost security for your premises.",
    imgSrc: "/img/door.jpg",
    phoneNumber: "+91-9850055949", // Add phone number here
  },
  {
    title: "Safety Gate",
    description:
      "Our safety gates are designed with precision and durability in mind, providing long-lasting protection for your property.",
    imgSrc: "/img/gate.jpg",
    phoneNumber: "+91-9850055949",
  },
  {
    title: "Plumbing",
    description:
      "Our government-licensed plumbers are equipped to handle all your plumbing needs with professionalism and expertise.",
    imgSrc: "/img/plumber.jpg",
    phoneNumber: "+91-9850055949",
  },
  {
    title: "Iron Window",
    description:
      "We offer custom iron windows that combine strength and elegance, enhancing the security and aesthetic of your space.",
    imgSrc: "/img/window.jpg",
    phoneNumber: "+91-9850055949",
  },
];

const Services = () => {
  return (
    <div className="services">
      <h2>Services</h2>
      <div className="services-container">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <img
              src={service.imgSrc}
              alt={service.title}
              className="service-image"
            />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <a href={`tel:${service.phoneNumber}`}>
              <button>Enquire Now</button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
