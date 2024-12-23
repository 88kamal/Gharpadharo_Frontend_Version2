import  { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useGetRoomsByAccomodationIdQuery } from '../../../../redux/slices/roomApiSlice';
import ViewRooms from '../../../../components/common/rooms/ViewRooms';

const AdminViewAllRoomsOfAccomodationOwner = () => {
    const {accomodationId}=useParams();
      const[page,setPage]=useState(1);
        const[limit,setLimit]=useState(20);
    
        const { data, isLoading, error } = useGetRoomsByAccomodationIdQuery({ accomodationId ,page,limit});
  return (
    <div>
            <ViewRooms data={data} isLoading={isLoading} error={error} setPage={setPage} setLimit={setLimit}/>
    </div>
  )
}

export default AdminViewAllRoomsOfAccomodationOwner