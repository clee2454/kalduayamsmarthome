import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Temperature.css';

export default function Temperature() {
  const [temp, setTemp] = useState(null);
  const [unit, setUnit] = useState('');
  const [timestamp, setTimestamp] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [lastRefresh, setLastRefresh] = useState(null);

  const fetchTemperature = () => {
    setLoading(true);
    setError(null);
    setLastRefresh(new Date());
    
    axios.get('https://ruiorlando.pythonanywhere.com/temperature')
      .then(res => {
        setTemp(res.data.temperature);
        setUnit(res.data.unit || '°C');
        setTimestamp(res.data.timestamp || '');
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError('Gagal mengambil data suhu. Silakan coba lagi.');
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchTemperature();
    const interval = setInterval(fetchTemperature, 30000); // every 30s
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="temperature-page">
      <div className="temp-card">
        <h1 className="temp-title">🌡 Current Temperature</h1>

        {loading && <div className="temp-loading">Fetching temperature...</div>}
        
        {error && <div className="temp-error">{error}</div>}

        {!loading && !error && temp !== null && (
          <div className="temp-display">
            <span className="temp-value">{temp}</span> {unit}
          </div>
        )}

        {timestamp && <p className="temp-timestamp">Last updated: {timestamp}</p>}

        {lastRefresh && <p className="temp-updated">Auto-refresh every 30 seconds</p>}
      </div>
    </div>
  );
}
