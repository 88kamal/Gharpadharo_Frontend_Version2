/* eslint-disable react/prop-types */
import { Outlet } from "react-router";
import UserSideBar from "./UserSideBar";

const UserLayout = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-normal md:justify-center min-h-screen">
            <div className="w-full md:max-w-6xl h-full bg-white rounded-lg shadow-2xl flex flex-col md:flex-row overflow-hidden">
                {/* Sidebar */}
                <aside className="w-full md:w-1/4 bg-indigo-400 text-white flex flex-col py-6">
                    <UserSideBar />
                </aside>

                {/* Main Content */}
                <div className="flex-1 flex flex-col h-[30rem]">
                    {/* Main Content Area */}
                    <main className="flex-1 overflow-auto p-4 sm:p-6 bg-gray-50">
                        <section className="bg-white rounded-lg shadow-md p-4 sm:p-6">
                            <Outlet />
                        </section>
                    </main>
                </div>

            </div>
        </div>
    );
};

export default UserLayout;
