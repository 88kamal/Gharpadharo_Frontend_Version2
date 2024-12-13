import {
    Card,
    List,
    ListItem,
    ListItemPrefix,
} from "@material-tailwind/react";
import {
    UserCircleIcon,
    PowerIcon,
    HomeIcon,
    MapIcon,
} from "@heroicons/react/24/solid";
import { Link, useNavigate } from "react-router-dom";
import { Book } from "lucide-react";
import { useLogoutMutation } from "../../../redux/slices/authApiSlice";

export default function RoomOwnerSidebar() {

    // const dispatch = useDispatch();
    const [logout] = useLogoutMutation();

    const navigate = useNavigate();

    const handleLogout = async () => {
        await logout(); // Call the logout mutation to remove token
        navigate('/');  // Redirect to the home page after logout
        // Reset the RTK query cache
        // dispatch(apiSlice.util.resetApiState());
    };


    return (
        <div className=" h-screen fixed w-full max-w-[16rem] p-4 
        rounded-none border-r border-r-primary/10 bg-gradient-to-br from-primary/10 to-secondary/10">

            <div className="">
                {/* Top Div  */}
                <div className="mb-2 p-4 ">
                    <Link to={'/'}>
                        <div
                            className=" py-6"
                        >
                            <div className="flex justify-center mb-2">
                                <img
                                    className="w-24"
                                    src="https://cdn-icons-png.flaticon.com/128/8899/8899687.png"
                                    alt="img"
                                />
                            </div>
                            <h1 className="text-center text-xl text-black font-bold app-font"> Owner Dashboard</h1>
                        </div>
                    </Link>
                </div>
            </div>

            <List>

                {/* Home Page  */}
                <Link to={'room-owner-home-page'}>
                    <ListItem className="hover:bg-primary/10 active:bg-primary/10 focus:bg-primary/10 transition-colors duration-300">
                        <ListItemPrefix>
                            <HomeIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        Home
                    </ListItem>

                </Link>

                {/* Track Emloyee Page  */}
                <Link to={'room-owner-view-all-room'}>
                    <ListItem
                        className="hover:bg-primary/10 active:bg-primary/10 focus:bg-primary/10 transition-colors duration-300">
                        <ListItemPrefix>
                            <MapIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        View Room
                    </ListItem>
                </Link>

                <Link to={'room-owner-view-all-book-room'}>
                    <ListItem
                        className="hover:bg-primary/10 active:bg-primary/10 focus:bg-primary/10 transition-colors duration-300">
                        <ListItemPrefix>
                            <Book className="h-5 w-5" />
                        </ListItemPrefix>
                        View Book Room
                    </ListItem>
                </Link>



                {/* Profile Page  */}
                <Link to={'room-owner-profile'}>
                    <ListItem className="hover:bg-primary/10 active:bg-primary/10 focus:bg-primary/10 transition-colors duration-300">
                        <ListItemPrefix>
                            <UserCircleIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        Profile
                    </ListItem>
                </Link>

                {/* Logout  */}
                <ListItem onClick={handleLogout} className="hover:bg-primary/10 active:bg-primary/10 focus:bg-primary/10 transition-colors duration-300">
                    <ListItemPrefix>
                        <PowerIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    Log Out
                </ListItem>

                <Card className=" mb-5">
                </Card>
            </List>
        </div>
    );
}