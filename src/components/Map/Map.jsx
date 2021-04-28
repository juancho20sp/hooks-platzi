import React from 'react';
import './Map.css';

import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = ({ data }) => {
  const mapStyles = {
    height: '50vh',
    width: '100%',
  };

  const defaultCenter = {
    lat: data.lat,
    lng: data.lng,
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyCiTGJXQRIqrUbDHRZ85vrsId0qzzHALAo">
      <GoogleMap mapContainerStyle={mapStyles} zoom={9} center={defaultCenter}>
        <Marker position={defaultCenter}></Marker>
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
