import UserOrder from "../../../../components/common/order/UserOrder"
import { useGetOrdersQuery } from "../../../../redux/slices/orderSlice";

const UserRoomBookingPage = () => {
  const { data: orders, isLoading, isError } = useGetOrdersQuery();
  return (
    <div><UserOrder orders={orders} isLoading={isLoading} isError={isError}/></div>
  )
}

export default UserRoomBookingPage