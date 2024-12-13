/* eslint-disable react/prop-types */
import { Outlet } from "react-router";
import TopNavbar from "../../common/TopNavbar";
import RoomOwnerSidebar from "./RoomOwnerSidebar";
import RoomOwnerRightNavbar from "./RoomOwnerRightNavbar";
import RoomOwnerBottomNavigation from "./RoomOwnerBottomNavigation";

const RoomOwnerLayout = () => {
    return (
        <div className=" min-h-screen">
            {/* Top Navbar For Mobile Screen  */}
            <div className=" lg:hidden sm:hidden md:hidden xl:hidden sticky top-0  z-50">
                <TopNavbar
                    image={"https://cdn-icons-png.flaticon.com/128/8899/8899687.png"}
                    name={"Admin"}
                />
            </div>

            {/* Main Div  */}
            <div className="min-h-screen flex ">

                {/* Sidebar hidden on mobile  */}
                <div className=" w-[16em] flex-none ... hidden sm:block lg:block xl:block md:block ">
                    <RoomOwnerSidebar/>
                </div>

                {/* main content  */}
                <main className="flex-1 min-w-0 mb-[3em] lg:mb-0 ">
                    {/* Right Navbar  */}
                    <div className=" sticky top-0 z-50 hidden lg:block md:block sm:block">
                        <RoomOwnerRightNavbar />
                    </div>

                    {/* Outlet  */}
                    <div className=" px-3 py-3" >
                        <Outlet />
                    </div>
                </main>

                {/* Bottom Navigation  */}
                <div className=" lg:hidden sm:hidden md:hidden xl:hidden">
                    <RoomOwnerBottomNavigation />
                </div>
            </div>
        </div>
    );
}

export default RoomOwnerLayout;