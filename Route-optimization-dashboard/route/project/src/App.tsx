import React from 'react';
import { DeliveryDashboard } from './components/DeliveryDashboard';
import 'leaflet/dist/leaflet.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="app-header py-4">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl font-bold text-white">
            Delivery Route Optimization
          </h1>
        </div>
      </header>
      <main className="container mx-auto py-8">
        <DeliveryDashboard />
      </main>
    </div>
  );
}

export default App;