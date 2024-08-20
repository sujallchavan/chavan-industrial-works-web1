import React from "react";
import "./AboutUs.css"; // Import the CSS file

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="about-us-text">
        <h2>About Us</h2>
        <p>
          We, Star Fabrication Works, situated at Malad West, Mumbai,
          Maharashtra have highly sophisticated fabrication unit setup for all
          kinds of fabrication services. Our skilled and trained team is always
          ready to help you with fabrication and related services. Company’s
          result oriented policies of hard working with first class workmanship
          and top class quality product with accuracy and precision have
          attracted and satisfied many reputed corporate clients.
        </p>
      </div>
      <div className="about-us-image">
        <img src="/img/AboutUS.jpg" alt="Fabrication Work" />
      </div>
    </div>
  );
};

export default AboutUs;
