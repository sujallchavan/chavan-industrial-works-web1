// src/ContactUs.js
import React, { useState } from "react";
import "./ContactUs.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    location: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:5000/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        alert("Message Sent Successfully!");
        // Reset form data after submission
        setFormData({
          name: "",
          email: "",
          mobile: "",
          location: "",
          message: "",
        });
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Failed to send message!");
      });
  };

  return (
    <div className="contact-us">
      <h1 className="h">Contact Us</h1>
      <div className="contact-details">
        <div className="contact-item">
          <i className="fas fa-map-marker-alt"></i>
          <h3>Our Office Address</h3>
          <p>
            Palm Court Bldg M, 501/B, 5th Floor, New Link Road, Beside Goregaon
            Sports Complex, Malad West, Mumbai, Maharashtra 400064
          </p>
        </div>
        <div className="contact-item">
          <i className="fas fa-envelope"></i>
          <h3>General Enquiries</h3>
          <p>websupport@justdial.com</p>
        </div>
        <div className="contact-item">
          <i className="fas fa-phone-alt"></i>
          <h3>Call Us</h3>
          <p>+91-8888888888</p>
        </div>
        <div className="contact-item">
          <i className="fas fa-clock"></i>
          <h3>Our Timings</h3>
          <p>Mon - Sun : 10:00 AM - 07:00 PM</p>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="form-container">
          <div className="form-block">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email ID"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="mobile"
              placeholder="Mobile Number"
              value={formData.mobile}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-block">
            <input
              type="text"
              name="location"
              placeholder="Location"
              value={formData.location}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
        </div>
        <button className="submit-button" type="submit">
          Submit
        </button>
      </form>
      <div className="map-container">
        <iframe
          title="office-location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d202.48591755496585!2d73.99953331696942!3d19.845826347892096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddbb0471b18b35%3A0x5760c563c9752090!2sChavan%20Industrial%20Works!5e1!3m2!1sen!2sin!4v1723904485472!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen="true"
          loading="lazy"
          className="mp"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;
