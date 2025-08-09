import React from "react";
import "./About.css";

function About() {
  return (
    <div>
    <div className="about-banner">
        <h2>About us!</h2>
        <p>Information about our companies all tehse years.</p>
    </div>
    <div className="about" style={{color:"white"}} >
      <h2>About Kalduayam</h2>
      <p>
        Kalduayam is a modern home automation company that provides solutions
        for comfort, security, and energy efficiency.
      </p>
      <p>
        We integrate cutting-edge IoT technology into your home so you can
        control everything from lighting to climate from your smartphone.
      </p>
    </div>
        </div>
  );
}

export default About;
