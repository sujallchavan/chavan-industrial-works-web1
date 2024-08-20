import React from "react";
import Navbar from "./Navbar";

const Home = ({ scrollToSection, refs }) => {
  const phoneNumber = "+919850055949"; // Replace with your phone number

  const handleEnquireNowClick = (e) => {
    e.preventDefault();
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div className="home">
      <Navbar scrollToSection={scrollToSection} refs={refs} />
      <div className="background-img">
        {/* <img src="/img/bg1.webp" alt="Background" /> */}
        <div className="content">
          <h1>Welcome to our Fabrication Shop</h1>
          <p>We create high-quality iron gates, windows, and more.</p>
          <button className="button" onClick={handleEnquireNowClick}>
            Enquire Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
