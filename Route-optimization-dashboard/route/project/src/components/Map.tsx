import React, { useRef } from 'react';
import type { Point } from '../types/Point';
import { useGoogleMaps } from '../hooks/useGoogleMaps';

interface MapProps {
  points: Point[];
}

export function Map({ points }: MapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  useGoogleMaps({ mapRef, points });

  return (
    <div 
      ref={mapRef} 
      className="w-full h-[600px] rounded-lg shadow-lg" 
    />
  );
}