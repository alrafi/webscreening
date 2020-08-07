import { useState, useEffect } from 'react';
import Axios from 'axios';

const useIpstack = (ip) => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    if (ip !== null) {
      (async () => {
        try {
          const response = await Axios.get(
            `https://cors-anywhere.herokuapp.com/http://api.ipstack.com/${ip}?access_key=${process.env.REACT_APP_IPSTACK_API_KEY}`
          );
          setLocation(response.data);
        } catch (err) {
          setLocation('N/A');
        }
      })();
    }
  }, [ip]);

  return location;
};

export default useIpstack;
