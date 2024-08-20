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
            We are a leading company in welding and cutting services, providing
            high-quality solutions to our clients.
          </p>
        </div>
        <div className="footer-section" id="Services">
          <h3>Services</h3>
          <ul>
            <li>Mig Welding</li>
            <li>Stud Welding</li>
            <li>Spot Welding</li>
            <li>Water Jet Cutting</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: contact@company.com</p>
          <p>Phone: +123 456 7890</p>
          <p>Address: 123 Welding St., Industrial Area, City, Country</p>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Company Name. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
