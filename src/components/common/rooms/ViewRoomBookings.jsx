import React from "react";
import authService from "../../../services/authService";
import { Loader } from "lucide-react";

const LoadingMessage = () => (
  <div className="flex justify-center py-8">
    <p className="text-indigo-600"><Loader/></p>
  </div>
);

const ErrorMessage = ({ error }) => (
  <div className="flex flex-col items-center text-center text-red-600 py-8">
    <img
      className="w-24 h-24"
      src="https://cdn-icons-png.flaticon.com/128/9961/9961360.png"
      alt="Error"
    />
    <p>{error?.data?.error || "An error occurred"}</p>
  </div>
);

const ViewRoomBookings = ({
  ordersData,
  isError,
  error,
  isLoading,
  filters,
  setFilters,
  page,
  setPage,
  limit,
}) => {
  const user = authService.getCurrentUser();

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
      page: 1, // Reset to the first page when filters change
    }));
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
    setFilters((prevFilters) => ({ ...prevFilters, page: newPage }));
  };

  const renderOrdersTable = () => (
    <div className="overflow-x-auto">
      <table className="table-auto w-full border-collapse border border-indigo-300 rounded-lg">
        <thead>
          <tr className="bg-indigo-400">
            <th className="border px-4 py-2 text-left">Sr. No</th>
            <th className="border px-4 py-2 text-left">User Name</th>
            <th className="border px-4 py-2 text-left">Phone</th>
            <th className="border px-4 py-2 text-left">Status</th>
            <th className="border px-4 py-2 text-left">Room Name</th>
            <th className="border px-4 py-2 text-left">Amount</th>
            <th className="border px-4 py-2 text-left">Room Type</th>
            {user.role === 2 && (
              <>
                <th className="border px-4 py-2 text-left">Platform Amount</th>
                <th className="border px-4 py-2 text-left">Order ID</th>
                <th className="border px-4 py-2 text-left">Payment ID</th>
              </>
            )}
          </tr>
        </thead>
        <tbody>
          {ordersData.orders.map((order, index) => (
            <tr
              key={order.id}
              className="hover:bg-indigo-100 transition duration-300"
            >
              <td className="border px-4 py-2">
                {index + 1 + (page - 1) * limit}
              </td>
              <td className="border px-4 py-2">{order.userId.userName}</td>
              <td className="border px-4 py-2">
                {order.userId.userPhoneNumber}
              </td>
              <td className="border px-4 py-2">{order.status}</td>
              <td className="border px-4 py-2">{order.roomId.roomName}</td>
              <td className="border px-4 py-2">₹{order.roomId.roomPrice}</td>
              <td className="border px-4 py-2">{order.roomId.roomType}</td>
              {user.role === 2 && (
                <>
                  <td className="border px-4 py-2">₹{order.bookingAmount}</td>
                  <td className="border px-4 py-2">{order.razorpay_order_id}</td>
                  <td className="border px-4 py-2">
                    {order.razorpay_payment_id}
                  </td>
                </>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="bg-indigo-100 rounded-lg p-6">
        {/* Filters Section */}
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <div className="flex hidden flex-col">
            <label
              htmlFor="status"
              className="font-semibold text-gray-700 mb-2"
            >
              Status
            </label>
            <select
              id="status"
              name="status"
              value={filters.status}
              onChange={handleFilterChange}
              className="border rounded-md px-3 py-2 focus:ring-2 focus:ring-indigo-500"
            >
              <option value="confirmed">Confirmed</option>
              <option value="pending">Pending</option>
              <option value="cancelled">Cancelled</option>
            </select>
          </div>
        </div>

        {/* Conditional Rendering */}
        {isLoading && <LoadingMessage />}
        {isError && <ErrorMessage error={error} />}
        {!isLoading && !isError && renderOrdersTable()}

        {/* Pagination */}
        <div className="flex justify-between items-center mt-6">
          <button
            disabled={page === 1}
            onClick={() => handlePageChange(page - 1)}
            className="px-4 py-2 bg-indigo-500 text-white rounded-md disabled:opacity-50"
          >
            Previous
          </button>
          <span className="text-gray-600">Page {page}</span>
          <button
            disabled={!ordersData?.hasMore}
            onClick={() => handlePageChange(page + 1)}
            className="px-4 py-2 bg-indigo-500 text-white rounded-md disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewRoomBookings;
