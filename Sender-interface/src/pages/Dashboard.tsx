import React, { useState } from "react";
import { OrderList } from "../components/OrderList";
import { TimeSlotSelector } from "../components/TimeSlotSelector";
import { CreateOrderModal } from "../components/CreateOrderModal";
import { Order } from "../types";
import { Calendar, LogOut, Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const mockOrders: Order[] = [
  {
    _id: "1",
    trackingId: "US123456789",
    senderId: "sender1",
    receiverDetails: {
      name: "John Doe",
      address: "123 Main St, Miami, FL",
      phone: "+1 305-555-0100",
      email: "john@example.com",
    },
    deliveryDate: "2024-03-20",
    selectedTimeSlot: null,
    status: "pending",
    createdAt: "2024-03-18",
  },
  {
    _id: "2",
    trackingId: "US987654321",
    senderId: "sender2",
    receiverDetails: {
      name: "Jane Smith",
      address: "456 Elm St, Miami, FL",
      phone: "+1 786-555-0101",
      email: "jane@example.com",
    },
    deliveryDate: "2024-03-21",
    selectedTimeSlot: null,
    status: "pending",
    createdAt: "2024-03-19",
  },
  {
    _id: "3",
    trackingId: "US112233445",
    senderId: "sender3",
    receiverDetails: {
      name: "Alice Johnson",
      address: "789 Oak St, Miami Beach, FL",
      phone: "+1 305-555-0102",
      email: "alice@example.com",
    },
    deliveryDate: "2024-03-22",
    selectedTimeSlot: null,
    status: "pending",
    createdAt: "2024-03-20",
  },
  {
    _id: "4",
    trackingId: "US556677889",
    senderId: "sender4",
    receiverDetails: {
      name: "Bob Brown",
      address: "101 Pine St, Coral Gables, FL",
      phone: "+1 305-555-0103",
      email: "bob@example.com",
    },
    deliveryDate: "2024-03-23",
    selectedTimeSlot: null,
    status: "pending",
    createdAt: "2024-03-21",
  },
  {
    _id: "5",
    trackingId: "US998877665",
    senderId: "sender5",
    receiverDetails: {
      name: "Charlie Davis",
      address: "202 Maple St, Key Biscayne, FL",
      phone: "+1 786-555-0104",
      email: "charlie@example.com",
    },
    deliveryDate: "2024-03-24",
    selectedTimeSlot: null,
    status: "pending",
    createdAt: "2024-03-22",
  },
  {
    _id: "6",
    trackingId: "US334455667",
    senderId: "sender6",
    receiverDetails: {
      name: "Diana Evans",
      address: "303 Birch St, Aventura, FL",
      phone: "+1 305-555-0105",
      email: "diana@example.com",
    },
    deliveryDate: "2024-03-25",
    selectedTimeSlot: null,
    status: "pending",
    createdAt: "2024-03-23",
  },
  {
    _id: "7",
    trackingId: "US776655443",
    senderId: "sender7",
    receiverDetails: {
      name: "Frank Green",
      address: "404 Cedar St, Miami Gardens, FL",
      phone: "+1 786-555-0106",
      email: "frank@example.com",
    },
    deliveryDate: "2024-03-26",
    selectedTimeSlot: null,
    status: "pending",
    createdAt: "2024-03-24",
  },
  {
    _id: "8",
    trackingId: "US223344556",
    senderId: "sender8",
    receiverDetails: {
      name: "Grace Hall",
      address: "505 Spruce St, Doral, FL",
      phone: "+1 305-555-0107",
      email: "grace@example.com",
    },
    deliveryDate: "2024-03-27",
    selectedTimeSlot: null,
    status: "pending",
    createdAt: "2024-03-25",
  },
];

const initialTimeSlots = [
  { time: "10:00 - 11:00", available: 10 },
  { time: "11:00 - 12:00", available: 10 },
  { time: "12:00 - 13:00", available: 10 },
  { time: "14:00 - 15:00", available: 9 },
  { time: "15:00 - 16:00", available: 10 },
  { time: "16:00 - 17:00", available: 10 },
];

export const DashboardPage: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>(mockOrders);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleSelectOrder = (order: Order) => {
    setSelectedOrder(order);
  };

  const handleTimeSlotSelected = (timeSlot: string) => {
    if (selectedOrder) {
      const updatedOrders = orders.map((o) =>
        o._id === selectedOrder._id
          ? { ...o, selectedTimeSlot: timeSlot, status: "scheduled" }
          : o
      );
      setOrders(updatedOrders);
      setSelectedOrder(null);
      toast.success(
        `Time slot ${timeSlot} confirmed for order ${selectedOrder.trackingId}`
      );
    }
  };

  const handleLogout = () => {
    toast.success("Logged out successfully");
    navigate("/login");
  };

  const handleCreateOrder = (newOrderData: Omit<Order, '_id' | 'createdAt' | 'status'>) => {
    const newOrder: Order = {
      ...newOrderData,
      _id: (orders.length + 1).toString(),
      createdAt: new Date().toISOString(),
      status: 'pending',
    };
    setOrders(prev => [...prev, newOrder]);
    setIsModalOpen(false);
    toast.success(`Order ${newOrder.trackingId} created successfully!`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">
            Delivery Dashboard
          </h1>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="flex items-center text-white bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-md"
            >
              <Plus className="w-5 h-5 mr-1" />
              Create Order
            </button>
            <button
              onClick={() => navigate("/schedule")}
              className="flex items-center text-gray-600 hover:text-indigo-600"
            >
              <Calendar className="w-5 h-5 mr-1" />
              View Schedule
            </button>
            <button
              onClick={handleLogout}
              className="flex items-center text-gray-600 hover:text-red-600"
            >
              <LogOut className="w-5 h-5 mr-1" />
              Logout
            </button>
          </div>
        </div>
      </header>
      <main className="container mx-auto p-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <OrderList orders={orders} onSelectOrder={handleSelectOrder} />
          </div>
          <div>
            {selectedOrder && (
              <TimeSlotSelector
                order={selectedOrder}
                timeSlots={initialTimeSlots}
                onTimeSlotSelected={handleTimeSlotSelected}
              />
            )}
          </div>
        </div>
      </main>
      <CreateOrderModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleCreateOrder}
      />
    </div>
  );
};