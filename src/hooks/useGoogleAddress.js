import { useState, useEffect } from 'react';
import axios from 'axios';

const useGoogleAddress = (address) => {
  console.log('asd: ', address);
  //   Información del mapa
  const [map, setMap] = useState({});

  const KEY = 'AIzaSyCiTGJXQRIqrUbDHRZ85vrsId0qzzHALAo';

  //   const API = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyCiTGJXQRIqrUbDHRZ85vrsId0qzzHALAo`;
  const API = `https://maps.googleapis.com/maps/api/geocode/json?address=${address
    .trim()
    .replace(' ', '+')}&key=AIzaSyCiTGJXQRIqrUbDHRZ85vrsId0qzzHALAo`;

  useEffect(async () => {
    const response = await axios(API);
    console.log(response);

    setMap(response.data.results[0].geometry.location);
  }, []);

  return map;
};

export default useGoogleAddress;
