import React from 'react';
import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { Delivery } from '../../types';
import { GOOGLE_MAPS_API_KEY } from '../../config/constants';
import { MapComponent } from './MapComponent';

interface GoogleMapWrapperProps {
  deliveries: Delivery[];
}

const render = (status: Status) => {
  return <h1>{status}</h1>;
};

export function GoogleMapWrapper({ deliveries }: GoogleMapWrapperProps) {
  return (
    <Wrapper apiKey={GOOGLE_MAPS_API_KEY} render={render}>
      <MapComponent deliveries={deliveries} />
    </Wrapper>
  );
} 