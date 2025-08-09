import React, { useState } from "react";
import "./Temperature.css";
import axios from "axios"

export default function Temperature() {
  const [temperature, setTemperature] = useState("");
  const [fetchedTemp, setFetchedTemp] = useState(null);

  const fetchTemperature = () => {
    axios.get('https://cors-anywhere.herokuapp.com/https://ruiorlando.pythonanywhere.com/temperature', {
    headers: {
    'Content-Type': 'application/json',
    'X-Requested-With': 'XMLHttpRequest',
  }
})

  };

  const handleInputChange = (e) => {
    setTemperature(e.target.value);
  };

  return (
    <div className="temperature-page">
      <div className="temp-card">
        <h1 className="temp-title">Current Room Temperature</h1>
        
        {fetchedTemp && (
          <div className="temp-display">
            Current Temperature: <span>{fetchedTemp}</span>
          </div>
        )}

        
          <button className="temp-btn" onClick={fetchTemperature}>
            Fetch Temperature
          </button>
        </div>
      </div>
    
  );
}
