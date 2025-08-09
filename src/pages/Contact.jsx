import React, { useState } from "react";
import "./Contact.css";

function Contact() {    
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent!");
  };

  return (
    <div className="contens">
    <div className="contact-banner">
        <h2>Contact us!</h2>
        <p>Your comfort, security, and convenience start here.</p>
    </div>
    <div className="contact">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Your Name"
          required
          />
        <input
          name="email"
          placeholder="Your Email"
          type="email"
          required
          />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          ></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
          </div>
  );
}

export default Contact;
