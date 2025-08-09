import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-about">
          <h2>SmartHome</h2>
          <p>
            Bringing the future into your home with automation, security,
            and energy efficiency — all at your fingertips.
          </p>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/temperature">Temperature</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p>Email: support@kalduayam_smarthome.com</p>
          <p>Phone: +1 234 567 890</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 SmartHome. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
