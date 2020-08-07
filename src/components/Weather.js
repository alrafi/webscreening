import React from 'react';
import '../styles/weather.scss';
import useIpify from '../utils/useIpify';
import useIpstack from '../utils/useIpstack';

const Weather = () => {
  const ip = useIpify();
  const loc = useIpstack(ip);

  if (!loc) {
    return <p>Loading...</p>;
  }

  console.log(loc);

  return (
    <div className="weather-container">
      <div className="weather-content">
        <div className="weather-info">
          <p className="weather-location">Jakarta, Indonesia</p>
          <p className="weather-status">Clouds</p>
          <p className="weather-temperature">30</p>
          <p className="weather-status-detail">Few Clouds</p>
        </div>
        <div className="weather-detail">
          <div className="detail-item">
            <p className="detail-item-title">Min.</p>
            <p className="detail-item-content">28</p>
          </div>
          <div className="detail-item">
            <p className="detail-item-title">Max.</p>
            <p className="detail-item-content">32</p>
          </div>
          <div className="detail-item">
            <p className="detail-item-title">Feels like</p>
            <p>31</p>
          </div>
          <div className="detail-item">
            <p className="detail-item-title">Pressure</p>
            <p className="detail-item-content">1007 hPa</p>
          </div>
          <div className="detail-item">
            <p className="detail-item-title">Humidity</p>
            <p className="detail-item-content">70%</p>
          </div>
        </div>
      </div>
      <div className="weather-date">
        <p>Wednesday, 10 June 2020</p>
        <div className="weather-icon"></div>
      </div>
    </div>
  );
};

export default Weather;
