// src/Footer.js
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>About Us</h3>
          <p>
            We are the shop who bulid a the good <br></br>desgin door and gates
            with safty and innovation
          </p>
        </div>
        <div className="footer-section" id="Services">
          <h3>Services</h3>
          <ul>
            <li>Safty Gate</li>
            <li>Iron windows</li>
            <li>Iron Stairs</li>
            <li>Plumbing</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: balasahebchavan1018@gmail.com</p>
          <p>Phone: +91 9850055949</p>
          <p>
            Address: Opposite Shradha Hospital, Sinnar Shivjai Chowak, Sinnar,
            India
          </p>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://www.instagram.com/sujalchavan1018">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.instagram.com/sujalchavan1018">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.instagram.com/sujalchavan1018">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://www.instagram.com/sujalchavan1018">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 ChavanIndustrialWorks. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
