import { Button, Chip, Spinner } from '@material-tailwind/react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { LogOut } from 'lucide-react';
import authService from '../../../services/authService';
import { useGetUserByIdQuery } from '../../../redux/slices/userApiSlice';
import apiSlice from '../../../redux/slices/apiSlice';
import { useLogoutMutation } from '../../../redux/slices/authApiSlice';

function UserProfile() {
    const user = authService.getCurrentUser();
    const userId = user?.id;
    const { data: getUserById, error, isLoading, refetch } = useGetUserByIdQuery(userId)

    const date = new Date(getUserById?.user?.createdAt);

    // Formatting Options
    const options = {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true,
    };

    // Formatted Date String
    const formattedDate = date.toLocaleString('en-US', options);

    const dispatch = useDispatch();
    const [logout] = useLogoutMutation();

    const navigate = useNavigate();

    const handleLogout = async () => {
        await logout(); // Call the logout mutation to remove token
        navigate('/');  // Redirect to the home page after logout
        dispatch(apiSlice.util.resetApiState());
    };

    return (
        <div className="flex flex-col items-center min-h-screen">

            {isLoading &&
                <div className=' flex justify-center '>
                    <Spinner />
                </div>
            }
            {/* For USER  */}
            {[getUserById?.userType].includes('User') && <div className="bg-white drop-shadow border border-gray-300 rounded-md w-full p-6">
                {/* Profile Header */}
                <div className="flex items-center space-x-4 mb-6">
                    <div className=" w-16 h-16 lg:w-20 lg:h-20 bg-indigo-800 rounded-full flex items-center justify-center text-white text-3xl font-semibold">
                        {getUserById?.user?.userName?.charAt(0).toUpperCase()}
                    </div>


                    <div>
                        <h1 className=" text-xl lg:text-2xl font-bold text-gray-800">{getUserById?.user?.userName}</h1>
                        <p className="text-gray-500">Phone: {getUserById?.user?.userPhoneNumber}</p>
                    </div>
                </div>

                {/* User Information */}
                <div className="border-t pt-4 space-y-3">
                    <div className="flex items-center justify-between bg-gray-50 drop-shadow p-2">
                        <span className="text-gray-700  app-font">Email</span>
                        <span className="text-gray-600 ">{getUserById?.user?.userEmail}</span>
                    </div>
                    <div className="flex items-center justify-between bg-gray-50 drop-shadow p-2">
                        <span className="text-gray-700 app-font">Updated At</span>
                        <span className="text-gray-600">{
                            formattedDate
                        }</span>
                    </div>
                </div>
            </div>}

            {/* <pre>{JSON.stringify(getUserById?.user, null, 2)}</pre> */}

            {/* For Accomodation OWNER  */}
            {[getUserById?.userType].includes('Accomodation') && <div className="bg-white drop-shadow border border-gray-300 rounded-md w-full p-6">
                {/* Profile Header */}
                <div className="flex items-center space-x-4 mb-6">

                    <div className=" border border-gray-300 bg-white drop-shadow rounded-full">
                        <img
                            className=' w-20 h-20 rounded-full'
                            src={getUserById?.user?.accomodationImage?.url}
                            alt={getUserById?.user?.accomodationName}
                        />
                    </div>
                    <div>
                        <h1 className=" text-xl lg:text-2xl font-bold text-gray-800">{getUserById?.user?.accomodationName}</h1>
                        <p className="text-gray-500 app-font">Phone: {getUserById?.user?.ownerPhoneNumber}</p>
                    </div>

                </div>

                {/* User Information */}
                <div className="border-t pt-4 space-y-3">
                    <div className="flex items-center justify-between bg-gray-50 drop-shadow p-2">
                        <span className="text-gray-700  app-font ">Accomdation Type</span>
                        <span className="text-gray-600 ">{getUserById?.user?.accomodationType}</span>
                    </div>
                    <div className="flex items-center justify-between bg-gray-50 drop-shadow p-2">
                        <span className="text-gray-700  app-font ">Accomdation Owner Name</span>
                        <span className="text-gray-600 ">{getUserById?.user?.ownerName}</span>
                    </div>
                    <div className="flex items-center justify-between bg-gray-50 drop-shadow p-2">
                        <span className="text-gray-700  app-font ">Email</span>
                        <span className="text-gray-600 ">{getUserById?.user?.ownerEmail}</span>
                    </div>
                    <div className="flex items-center justify-between bg-gray-50 drop-shadow p-2">
                        <span className="text-gray-700 app-font ">Gender</span>
                        <span className="text-gray-600 ">{getUserById?.user?.gender}</span>
                    </div>
                    <div className="flex items-center justify-between bg-gray-50 drop-shadow p-2">
                        <span className="text-gray-700 app-font ">Updated At</span>
                        <span className="text-gray-600">{
                            formattedDate
                        }</span>
                    </div>


                </div>
            </div>}




            <div className=" mt-3 lg:hidden md:hidden sm:hidden w-full">
                <Button onClick={handleLogout} className=' w-full flex items-center justify-center gap-2 bg-red-500 shadow-none hover:shadow-none text-white border'>
                    <LogOut className='w-4 h-4' /> Logout
                </Button>
            </div>
        </div>
    );
}

export default UserProfile;