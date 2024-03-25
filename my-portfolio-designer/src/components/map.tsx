"use client"
import React from 'react';
import { GoogleMap, LoadScript, useJsApiLoader } from '@react-google-maps/api';

function MapComponent() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyDx8indLnBt1tN7Z1bmSNS5nyNrhwBYKEU"
  })

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={{
          width: '100%',
          height: '100%'
        }}
        center={{
          lat: -16.049844957547677,
          lng: -47.97005891659097
          
        }}
        zoom={14}
      >
      <></>
      </GoogleMap>
  ) : <></>
}
export default MapComponent;

