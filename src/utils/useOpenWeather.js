import { useState, useEffect } from 'react';
import Axios from 'axios';

const useOpenWeather = (loc) => {
  const [weather, setWeather] = useState(null);
  const [country, setCountry] = useState(null);

  useEffect(() => {
    if (loc !== null) {
      const { region_name, country_name, country_code } = loc;
      (async () => {
        try {
          const response = await Axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${region_name},${country_code}&appid=271da6b323b05ebaf2b4aaa0f3378f89&units=metric`
          );
          setWeather(response.data);
          setCountry(country_name);
        } catch (err) {
          setWeather('N/A');
        }
      })();
    }
  }, [loc]);

  return [country, weather];
};

export default useOpenWeather;
