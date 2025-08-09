import React, { useState } from "react";
import "./Temperature.css";
import axios from "axios";

export default function Temperature() {
  const [fetchedTemp, setFetchedTemp] = useState(null);

  const fetchTemperature = async () => {
    try {
      const res = await axios.get(
        "https://cors-anywhere.herokuapp.com/https://ruiorlando.pythonanywhere.com/temperature",
        {
          headers: {
            "Content-Type": "application/json",
            "X-Requested-With": "XMLHttpRequest",
          },
        }
      );
      // Assuming API returns something like { temperature: 25 }
      setFetchedTemp(res.data.temperature || res.data);
    } catch (error) {
      console.error("Error fetching temperature:", error);
      setFetchedTemp("Error");
    }
  };

  return (
    <div className="temperature-page">
      <div className="temp-card">
        <h1 className="temp-title">Current Room Temperature</h1>

        {fetchedTemp !== null && (
          <div className="temp-display">
            Current Temperature: <span>{fetchedTemp}°C</span>
          </div>
        )}

        <button className="temp-btn" onClick={fetchTemperature}>
          Fetch Temperature
        </button>
      </div>
    </div>
  );
}
