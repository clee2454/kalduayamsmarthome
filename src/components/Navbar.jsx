import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const menuItems = [
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Temperature", path: "/temperature" },
  ];

  // Close menu with ESC key
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") setShowMenu(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <>
      <nav className="navbar">
        {/* Home Icon */}
        <Link to="/" className="nav-icon" title="Home">
          <FaHome size={26} />
        </Link>

        {/* Menu Toggle */}
        <div
          className="nav-icon"
          title="Menu"
          onClick={() => setShowMenu((prev) => !prev)}
        >
          {showMenu ? <FaTimes size={26} /> : <FaBars size={26} />}
        </div>
      </nav>

      {/* Fullscreen Overlay */}
      <div className={`fullscreen-menu ${showMenu ? "show" : ""}`}>
        {menuItems.map((item, index) => (
          <Link
            key={item.name}
            to={item.path}
            style={{ animationDelay: `${index * 0.1}s` }}
            onClick={() => setShowMenu(false)}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </>
  );
}
