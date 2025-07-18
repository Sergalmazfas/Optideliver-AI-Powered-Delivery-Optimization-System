export interface Delivery {
  id: string;
  recipientName: string;
  recipientPhone: string;
  address: string;
  timeSlot: string;
  status: 'pending' | 'in_progress' | 'delivered' | 'attempted';
  coordinates: {
    lat: number;
    lng: number;
  };
  specialInstructions?: string;
  specialNeeds?: string;
}

export interface DeliveryMetrics {
  totalDeliveries: number;
  completedDeliveries: number;
  distanceCovered: number;
  efficiencyScore: number;
}

export interface PostmanProfile {
  id: string;
  name: string;
  employeeId: string;
  zone: string;
}