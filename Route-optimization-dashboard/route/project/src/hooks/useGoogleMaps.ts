import { useEffect, useState } from 'react';
import { Point } from '../types/Point';

interface UseGoogleMapsProps {
  mapRef: React.RefObject<HTMLDivElement>;
  points: Point[];
}

export function useGoogleMaps({ mapRef, points }: UseGoogleMapsProps) {
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [directionsRenderer, setDirectionsRenderer] = useState<google.maps.DirectionsRenderer | null>(null);
  const [directionsService, setDirectionsService] = useState<google.maps.DirectionsService | null>(null);

  useEffect(() => {
    if (mapRef.current && !map) {
      const newMap = new window.google.maps.Map(mapRef.current, {
        center: { lat: 25.7617, lng: -80.1918 }, // Miami
        zoom: 12,
      });
      setMap(newMap);
      setDirectionsService(new window.google.maps.DirectionsService());
      setDirectionsRenderer(new window.google.maps.DirectionsRenderer({ map: newMap }));
    }
  }, [mapRef, map]);

  useEffect(() => {
    if (map && directionsService && directionsRenderer && points.length > 0) {
      const waypoints = points.map(p => ({
        location: new google.maps.LatLng(p.lat, p.lng),
        stopover: true
      }));

      const origin = waypoints.shift()?.location;
      const destination = waypoints.pop()?.location;

      if (!origin) return;

      const request: google.maps.DirectionsRequest = {
        origin,
        destination: destination || origin,
        waypoints,
        optimizeWaypoints: true,
        travelMode: google.maps.TravelMode.DRIVING
      };

      directionsService.route(request, (result, status) => {
        if (status === 'OK' && result) {
          directionsRenderer.setDirections(result);
        } else {
          console.error(`error fetching directions ${result}`);
        }
      });
    }
  }, [map, directionsService, directionsRenderer, points]);

  return { map };
} 