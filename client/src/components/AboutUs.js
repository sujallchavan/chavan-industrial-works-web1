import React from "react";
import "./AboutUs.css"; // Import the CSS file

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="about-us-text">
        <h2>About Us</h2>
        <p>
          Fabrication Shop, located in Sinnar near Nashik, specializes in all
          types of ironwork, including safety gates, doors, windows, grills, and
          stairs. Our skilled team is committed to providing high-quality
          products that are both durable and stylish. <br></br>
          <br></br>In addition to our ironwork services, we also offer plumbing
          solutions and hold a government plumbing license. We strive to meet
          our customers' needs with exceptional craftsmanship and service.
          <br></br>
          <br></br>
          Contact us today to learn more about how we can help you!
        </p>
      </div>
      <div className="about-us-image">
        <img src="/img/AboutUS.jpg" alt="Fabrication Work" />
      </div>
    </div>
  );
};

export default AboutUs;
