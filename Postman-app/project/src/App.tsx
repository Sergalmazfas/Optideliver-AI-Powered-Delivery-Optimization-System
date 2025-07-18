import React, { useState } from 'react';
import { DeliveryList } from './components/DeliveryList';
import { GoogleMapWrapper as DeliveryMap } from '../../../Sender-interface/src/components/DeliveryMap/GoogleMapWrapper';
import { deliveries as mockDeliveries } from './data/deliveries';
import { Delivery } from './types';
import './index.css';

function App() {
  const [deliveries, setDeliveries] = useState<Delivery[]>(mockDeliveries);

  const handleStatusChange = (id: string, newStatus: Delivery['status']) => {
    setDeliveries(prev =>
      prev.map(d => (d.id === id ? { ...d, status: newStatus } : d))
    );
  };

  return (
    <div className="flex h-screen bg-gray-100 font-sans">
      {/* Left Panel: Delivery List */}
      <div className="w-1/3 h-full overflow-y-auto bg-white shadow-md p-4">
        <div className="flex items-center mb-4">
          <h1 className="text-2xl font-bold text-gray-800">
            Driver's Deliveries
          </h1>
        </div>
        <DeliveryList
          deliveries={deliveries}
          onStatusChange={handleStatusChange}
        />
      </div>

      {/* Right Panel: Map */}
      <div className="w-2/3 h-full">
        <DeliveryMap deliveries={deliveries} />
      </div>
    </div>
  );
}

export default App;