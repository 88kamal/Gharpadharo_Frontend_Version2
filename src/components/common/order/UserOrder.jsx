import React, { useState } from 'react';

const UserOrder = ({ orders, isLoading, isError }) => {
  const [filter, setFilter] = useState('Completed');

  if (isLoading) {
    return <div className="flex items-center justify-center h-screen text-xl font-semibold text-blue-500">Loading...</div>;
  }

  if (isError) {
    return <div className="flex items-center justify-center h-screen text-xl font-semibold text-red-500">An error occurred. Please try again later.</div>;
  }

  if (!orders || orders?.length === 0) {
    return <div className="flex items-center justify-center h-screen text-xl font-semibold text-gray-500">No bookings found.</div>;
  }

  const filteredOrders = orders?.orders?.filter(order => 
    order?.status?.toLowerCase().trim() === filter.toLowerCase().trim()
  );

  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Your Bookings</h1>
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="border border-gray-300 rounded-md p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="Pending">Pending</option>
          <option value="Completed">Completed</option>
          <option value="Failed">Failed</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredOrders?.map((order) => (
          <div
            className="bg-white shadow-md rounded-lg p-4 border border-gray-200 hover:shadow-lg transition-shadow duration-300"
            key={order?._id}
          >
            <h2 className="text-lg font-semibold text-gray-700 mb-2">Booking Details</h2>
            <p className="text-gray-600 mb-1"><strong>Status:</strong> {order?.status}</p>
            <p className="text-gray-600 mb-1"><strong>Booking Amount:</strong> ₹{order?.bookingAmount}</p>
            <p className="text-gray-600 mb-3"><strong>Order ID:</strong> {order?.razorpay_order_id}</p>

            <div className="bg-gray-50 p-3 rounded-lg">
              <h3 className="text-md font-semibold text-gray-700 mb-2">Room Details</h3>
              <p className="text-gray-600 mb-1"><strong>Name:</strong> {order?.roomId?.roomName}</p>
              <p className="text-gray-600 mb-1"><strong>Type:</strong> {order?.roomId?.roomType}</p>
              <p className="text-gray-600 mb-1"><strong>Price:</strong> ₹{order?.roomId?.roomPrice}</p>
              <p className="text-gray-600 mb-3"><strong>Details:</strong> {order?.roomId?.roomDetails}</p>

              <div className="flex gap-2 overflow-auto">
                {order?.roomId?.roomImage?.map((image) => (
                  <img
                    src={image?.url}
                    alt={order?.roomId?.roomName}
                    key={image?._id}
                    className="h-24 w-24 object-cover rounded-md border border-gray-300"
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredOrders?.length === 0 && (
        <div className="text-center text-gray-500 mt-6">No orders found for the selected status.</div>
      )}
    </div>
  );
};

export default UserOrder;
