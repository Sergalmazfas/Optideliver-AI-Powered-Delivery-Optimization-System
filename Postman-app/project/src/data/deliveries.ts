import { Delivery } from '../types';

export const deliveries: Delivery[] = [
  {
    id: '1',
    recipientName: 'GamerX',
    recipientPhone: '+1 305-555-0100',
    address: '123 Main St, Miami, FL',
    timeSlot: '10:00 AM - 12:00 PM',
    status: 'pending',
    coordinates: { lat: 25.774, lng: -80.19 },
    specialInstructions: 'Leave with doorman.',
    specialNeeds: 'fragile',
  },
  {
    id: '2',
    recipientName: 'Techie',
    recipientPhone: '+1 786-555-0101',
    address: '456 Elm St, Miami, FL',
    timeSlot: '12:00 PM - 2:00 PM',
    status: 'in_progress',
    coordinates: { lat: 25.78, lng: -80.21 },
  },
  {
    id: '3',
    recipientName: 'Bookworm',
    recipientPhone: '+1 305-555-0102',
    address: '789 Oak St, Miami Beach, FL',
    timeSlot: '2:00 PM - 4:00 PM',
    status: 'pending',
    coordinates: { lat: 25.79, lng: -80.13 },
    specialNeeds: 'walker',
  },
  {
    id: '4',
    recipientName: 'Foodie',
    recipientPhone: '+1 305-555-0103',
    address: '101 Pine St, Coral Gables, FL',
    timeSlot: '2:00 PM - 4:00 PM',
    status: 'pending',
    coordinates: { lat: 25.75, lng: -80.27 },
    specialInstructions: 'Fragile, handle with care.',
  },
  {
    id: '5',
    recipientName: 'Fashionista',
    recipientPhone: '+1 786-555-0104',
    address: '202 Maple St, Key Biscayne, FL',
    timeSlot: '4:00 PM - 6:00 PM',
    status: 'delivered',
    coordinates: { lat: 25.7, lng: -80.16 },
  },
]; 