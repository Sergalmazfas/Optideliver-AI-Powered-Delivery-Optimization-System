import React, { useState, useMemo } from 'react';
import { GoogleMapWrapper } from './GoogleMapWrapper';
import { RouteInfo } from './RouteInfo';
import { DeliveryList } from './DeliveryList';
import { routes } from '../data/routes';
import { calculateRouteOrder } from '../utils/route';
import { useDeliveryTracking } from '../hooks/useDeliveryTracking';

export function DeliveryDashboard() {
  const points = useMemo(() => routes.route1.map(p => ({...p, lat: p.lat + 0.1, lng: p.lng + 0.1})), []); // Sample data for Miami
  const optimizedPoints = useMemo(() => calculateRouteOrder(points), [points]);
  const {
    activePoints,
    deliveryStatus,
    markAsCompleted,
    resetDeliveries
  } = useDeliveryTracking(optimizedPoints);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="md:col-span-1 space-y-6">
        <RouteInfo points={points} optimizedPoints={optimizedPoints} />
        <DeliveryList 
          points={optimizedPoints}
          deliveryStatus={deliveryStatus}
          onMarkCompleted={markAsCompleted}
          onReset={resetDeliveries}
        />
      </div>
      
      <div className="md:col-span-2">
        <GoogleMapWrapper points={activePoints} />
      </div>
    </div>
  );
} 