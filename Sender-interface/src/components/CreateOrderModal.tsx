import React, { useState } from 'react';
import { Order } from '../types';

interface CreateOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (order: Omit<Order, '_id' | 'createdAt' | 'status'>) => void;
}

export function CreateOrderModal({ isOpen, onClose, onSubmit }: CreateOrderModalProps) {
  const [formData, setFormData] = useState({
    trackingId: `US${Math.random().toString(36).substring(2, 11).toUpperCase()}`,
    senderId: 'sender1', // This would be dynamic in a real app
    receiverDetails: {
      name: '',
      address: '',
      phone: '',
      email: '',
    },
    deliveryDate: '',
    selectedTimeSlot: null,
    specialNeeds: '',
  });

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    if (name in formData.receiverDetails) {
      setFormData(prev => ({
        ...prev,
        receiverDetails: { ...prev.receiverDetails, [name]: value }
      }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { specialNeeds, ...orderData } = formData;
    onSubmit({ ...orderData, receiverDetails: { ...orderData.receiverDetails, specialNeeds } });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Create New Order</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input type="text" name="name" placeholder="Receiver Name" onChange={handleChange} className="w-full p-2 border rounded" required />
          <input type="text" name="address" placeholder="Receiver Address" onChange={handleChange} className="w-full p-2 border rounded" required />
          <input type="text" name="phone" placeholder="Receiver Phone" onChange={handleChange} className="w-full p-2 border rounded" required />
          <input type="email" name="email" placeholder="Receiver Email" onChange={handleChange} className="w-full p-2 border rounded" required />
          <input type="date" name="deliveryDate" onChange={handleChange} className="w-full p-2 border rounded" required />
          <select name="specialNeeds" onChange={handleChange} className="w-full p-2 border rounded">
            <option value="">No Special Needs</option>
            <option value="walker">Walker Required</option>
            <option value="fragile">Fragile</option>
          </select>
          <div className="flex justify-end gap-4">
            <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-300 rounded">Cancel</button>
            <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">Create</button>
          </div>
        </form>
      </div>
    </div>
  );
} 