import React from 'react';
import '../styles/weather.scss';
import '../styles/spinner.scss';
import useIpify from '../utils/useIpify';
import useIpstack from '../utils/useIpstack';
import useOpenWeather from '../utils/useOpenWeather';

const getTodayDate = () => {
  const current = new Date();
  const day = current.getDay();
  const date = current.getDate();
  const month = current.getMonth();
  const fullYear = current.getFullYear();

  const dayName = [
    'Sunday',
    'Monday',
    'Tueday',
    'Wedday',
    'Thuday',
    'Friday',
    'Satday',
  ];
  const monthName = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  return `${dayName[day]}, ${date} ${monthName[month]} ${fullYear}`;
};

const Weather = () => {
  const ip = useIpify();
  const loc = useIpstack(ip);
  const [country, currentweather] = useOpenWeather(loc);
  const today = getTodayDate();

  if (!currentweather) {
    return (
      <div className="spinner-wrapper">
        <img
          src={require('../assets/img/PNG/icon - loading@2x.png')}
          alt="Loading"
          className="loader"
        />
        <p>Loading weather widget</p>
      </div>
    );
  }

  const { weather, main, name } = currentweather;
  const { temp, temp_min, temp_max, feels_like, pressure, humidity } = main;

  return (
    <div className="weather-container">
      <div className="weather-content">
        <div className="weather-info">
          <p className="weather-location">
            {name}, {country}
          </p>
          <p className="weather-status">{weather[0].main}</p>
          <p className="weather-temperature">{temp}</p>
          <p className="weather-status-detail">{weather[0].description}</p>
        </div>
        <div className="weather-detail">
          <div className="detail-item">
            <p className="detail-item-title">Min.</p>
            <p className="detail-item-content">{temp_min}</p>
          </div>
          <div className="detail-item">
            <p className="detail-item-title">Max.</p>
            <p className="detail-item-content">{temp_max}</p>
          </div>
          <div className="detail-item">
            <p className="detail-item-title">Feels like</p>
            <p>{feels_like}</p>
          </div>
          <div className="detail-item">
            <p className="detail-item-title">Pressure</p>
            <p className="detail-item-content">{pressure} hPa</p>
          </div>
          <div className="detail-item">
            <p className="detail-item-title">Humidity</p>
            <p className="detail-item-content">{humidity}%</p>
          </div>
        </div>
      </div>
      <div className="weather-date">
        <p>{today}</p>
        <div className="weather-icon">
          <img
            src={`http://openweathermap.org/img/wn/${weather[0].icon}.png`}
            alt={weather[0].description}
          />
        </div>
      </div>
    </div>
  );
};

export default Weather;
