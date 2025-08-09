import React from "react";
import "./Home.css";
import { FaLightbulb, FaMobileAlt, FaShieldAlt } from "react-icons/fa";

export default function Home() {
  return (
    <div className="home-container">
      <section className="hero">
        <h1>Welcome to <span>SmartHome</span></h1>
        <p>
          Control your home from anywhere with cutting-edge automation, 
          security, and comfort systems.
        </p>
        <div className="hero-buttons">
          <button className="btn-primary">Get Started</button>
          <button className="btn-secondary">Learn More</button>
        </div>
      </section>

      <section className="features">
        <div className="feature-card">
          <FaLightbulb size={50} />
          <h3>Smart Lighting</h3>
          <p>Automate and customize your lighting to match your lifestyle.</p>
        </div>
        <div className="feature-card">
          <FaMobileAlt size={50} />
          <h3>Mobile Control</h3>
          <p>Manage all your devices through our easy-to-use mobile app.</p>
        </div>
        <div className="feature-card">
          <FaShieldAlt size={50} />
          <h3>Advanced Security</h3>
          <p>24/7 security monitoring with AI-powered alerts.</p>
        </div>
      </section>
    </div>
  );
}
