import { useState, useEffect } from 'react';
import Axios from 'axios';

const useIpify = () => {
  const [ip, setIp] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const response = await Axios.get(`https://api.ipify.org/?format=json`);
        setIp(response.data.ip);
      } catch (err) {
        setIp('N/A');
      }
    })();
  }, []);

  return ip;
};

export default useIpify;
