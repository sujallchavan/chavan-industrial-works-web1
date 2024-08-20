import React, { useState } from "react";
import "./Navbar.css";

const Navbar = ({ scrollToSection, refs }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <a
            href="/"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection(refs.home);
            }}
          >
            <img
              src="/img/logo.png" // Replace with your actual logo image path
              alt="Logo"
              className="logo-image"
            />
          </a>
        </div>
        <div className={`nav-links ${isOpen ? "open" : ""}`}>
          <ul>
            <li>
              <a href="/#Home">HOME</a>
            </li>
            <li>
              <a
                href="/SERVICES"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(refs.services);
                }}
              >
                SERVICES
              </a>
            </li>
            <li>
              <a
                href="/ABOUT_US"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(refs.aboutUs);
                }}
              >
                ABOUT US
              </a>
            </li>
            <li>
              <a
                href="/GALLERY"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(refs.gallery);
                }}
              >
                GALLERY
              </a>
            </li>
            <li>
              <a
                href="/VIDEOS"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(refs.videos);
                }}
              >
                VIDEOS
              </a>
            </li>
            <li>
              <a
                href="/TESTIMONIALS"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(refs.testimonials);
                }}
              >
                TESTIMONIALS
              </a>
            </li>
            <li>
              <a
                href="/CONTACT_US"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(refs.contactUs);
                }}
              >
                CONTACT US
              </a>
            </li>
          </ul>
        </div>
        <div className="nav-toggle" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
