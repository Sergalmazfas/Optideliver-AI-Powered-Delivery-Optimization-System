import React, { useRef } from 'react';
import { Delivery } from '../../types';
import { useGoogleMaps } from './hooks/useGoogleMaps';

interface MapComponentProps {
  deliveries: Delivery[];
}

export function MapComponent({ deliveries }: MapComponentProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  useGoogleMaps({ mapRef, deliveries });

  return <div ref={mapRef} style={{ width: '100%', height: '400px' }} />;
}