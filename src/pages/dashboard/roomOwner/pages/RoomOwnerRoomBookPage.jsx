import { useState } from "react";
import { useGetOrdersByAccomodationQuery } from "../../../../redux/slices/orderSlice";
import authService from "../../../../services/authService";
import "tailwindcss/tailwind.css";
import ViewRoomBookings from "../../../../components/common/rooms/ViewRoomBookings";

const RoomOwnerRoomBookPage = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);

  const user = authService.getCurrentUser();
  const accomodationId = user?.id;

  const [filters, setFilters] = useState({
    accomodationId,
    status: "",
    startDate: "",
    endDate: "",
    limit,
    page,
  });

  const { data: ordersData,isError, error, isLoading, refetch } = useGetOrdersByAccomodationQuery(filters);
  if (isError) {
    console.log("Error details:", error);
  }

  return (
    <div className="  min-h-screen">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">Room Bookings</h1>
      <ViewRoomBookings
        ordersData={ordersData}
        error={error}
        isError={isError}
        isLoading={isLoading}
        filters={filters}
        setFilters={setFilters}
        page={page}
        setPage={setPage}
        limit={limit}
      />
    </div>
  );
};

export default RoomOwnerRoomBookPage;