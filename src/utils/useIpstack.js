import { useState, useEffect } from 'react';
import Axios from 'axios';

const useIpstack = (ip) => {
  const [location, setLocation] = useState(null);

  useEffect(() => {
    if (ip !== null) {
      (async () => {
        try {
          const response = await Axios.get(
            `http://api.ipstack.com/${ip}?access_key=1c3c27a25e4b67ff625a89e56bf41dc5`
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
