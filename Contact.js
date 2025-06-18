// src/pages/Contact.js
import React from 'react';
import Navbar from '../components/Navbar';
import './Contact.css';

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="contact-container">
        <div className="contact-content">
          <h2 className="contact-heading">Get in Touch</h2>
          <p className="contact-subheading">
            We'd love to hear from you! Whether you have a question, feedback, or need support — feel free to reach out.
          </p>

          <div className="contact-card">
            <p><span>📍 Address:</span> 123 Health Street, Wellness City, India</p>
            <p><span>📞 Phone:</span> +91-9876543210</p>
            <p><span>📧 Email:</span> support@hospitalapp.in</p>
          </div>

          <button className="contact-button">Send a Message</button>
        </div>
      </div>
    </>
  );
};

export default Contact;
