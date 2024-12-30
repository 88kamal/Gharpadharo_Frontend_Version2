    import  { useState } from 'react';
import ViewRooms from '../../../../components/common/rooms/ViewRooms';
import { useGetRoomsByAccomodationIdQuery } from '../../../../redux/slices/roomApiSlice';
import authService from '../../../../services/authService';

const RoomOwnerAllRoomPage = () => {
    const user = authService.getCurrentUser();
    const accomodationId = user.id;
    const[page,setPage]=useState(1);
    const[limit,setLimit]=useState(20);

    const { data, isLoading, error } = useGetRoomsByAccomodationIdQuery({ accomodationId ,page,limit});

    return (
        <div className="">
            <ViewRooms data={data} isLoading={isLoading} error={error} setPage={setPage} setLimit={setLimit}/>
        </div>
    );
};

export default RoomOwnerAllRoomPage;
