import React from 'react';
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { Point } from '../types/Point';
import { Map } from './Map';

// Create a .env file in the project root and add your Google Maps API key
// VITE_GOOGLE_MAPS_API_KEY=YOUR_GOOGLE_MAPS_API_KEY
const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

interface GoogleMapWrapperProps {
  points: Point[];
}

const render = (status: Status) => {
  return <h1>{status}</h1>;
};

export function GoogleMapWrapper({ points }: GoogleMapWrapperProps) {
  return (
    <Wrapper apiKey={GOOGLE_MAPS_API_KEY} render={render}>
      <Map points={points} />
    </Wrapper>
  );
} 