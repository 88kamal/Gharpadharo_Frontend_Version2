/* eslint-disable no-unused-vars */
import { ArrowPathIcon, MagnifyingGlassIcon, TableCellsIcon, ListBulletIcon, ArrowsPointingInIcon, ArrowsPointingOutIcon } from "@heroicons/react/24/outline";
import {
    CardHeader,
    Input,
    Typography,
    Button,
    Spinner,
    Card,
    CardBody,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useGetUsersQuery } from "../../../redux/slices/userApiSlice";
// import {useGetUsersQuery} from "./src/redux/slices/userApiSlice";

const TABLE_HEAD = ["S.No", "Name", "Email", "Mobile Number"];

export default function ViewUserTable() {
    const [search, setSearch] = useState('');
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const [viewType, setViewType] = useState(() => {
        // Initialize from localStorage or default to 'table'
        return localStorage.getItem("viewType") || "table";
    });

    const [isFullscreen, setIsFullscreen] = useState(false); // Track fullscreen status


    // Pass the search, page, and limit as parameters to the query
    const { data: users, error, isLoading, refetch } = useGetUsersQuery({ search, page, limit });

    const handlePrevious = () => {
        if (page > 1) setPage(page - 1);
    };

    const handleNext = () => {
        const totalPages = Math.ceil((users?.totalUser ?? 0) / limit);
        if (page < totalPages) setPage(page + 1);
    };

    const handleCopy = (text) => {
        navigator.clipboard.writeText(text);
        toast.success(`${text} copied!`);
    };

    // Function to toggle view type
    const toggleView = () => {
        const newViewType = viewType === "table" ? "list" : "table";
        setViewType(newViewType);
        localStorage.setItem("viewType", newViewType); // Save to localStorage
    };

    useEffect(() => {
        // Sync state with localStorage in case of external changes (optional safeguard)
        const storedViewType = localStorage.getItem("viewType");
        if (storedViewType && storedViewType !== viewType) {
            setViewType(storedViewType);
        }
    }, []);


    const toggleFullscreen = () => {
        if (!isFullscreen) {
            document.documentElement.requestFullscreen();
        } else {
            document.exitFullscreen();
        }
        setIsFullscreen(!isFullscreen);
    };
    return (
        <div className="h-full w-full bg-white pt-1 rounded-md border border-indigo-300">
            <div className="rounded-none  border-b border-indigo-300 px-2 py-1">
                <div className="flex flex-wrap items-center justify-between gap-4 lg:gap-8">
                    <div>
                        <Typography variant="h5" color="blue-gray">
                            All Employee
                        </Typography>
                        <Typography color="gray" className="mt-1 font-normal">
                            See information about all employees
                        </Typography>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 mb-2">
                        <div className="w-full md:w-72">
                            <Input
                                label="Search"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                                color="indigo"
                                icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                                style={{ fontSize: '16px' }} // Add this to prevent zooming

                            />
                        </div>
                        <Button
                            variant=""
                            color="indigo"
                            size="sm"
                            className="flex hover:shadow-none shadow-none items-center gap-2 border-indigo-200 bg-transparent border text-black"
                            onClick={refetch}
                        >
                            <ArrowPathIcon className="h-5 w-5" />
                            <p >Refresh</p>
                        </Button>
                        <Button
                            variant=""
                            color="indigo"
                            size="sm"
                            className="flex hover:shadow-none shadow-none items-center gap-2 border-indigo-200 bg-transparent border text-black"
                            onClick={toggleView}
                        >
                            {viewType === "table" ? (
                                <ListBulletIcon className="h-5 w-5" />
                            ) : (
                                <TableCellsIcon className="h-5 w-5" />
                            )}
                            <p >
                                {viewType === "table" ? "List View" : "Table View"}
                            </p>
                        </Button>

                        <Button
                            variant=""
                            size="sm"
                            className="flex items-center gap-2 border hover:shadow-none shadow-none text-black bg-white border-indigo-200"
                            onClick={toggleFullscreen}
                        >
                            {isFullscreen ? (
                                <ArrowsPointingInIcon className="h-5 w-5" />
                            ) : (
                                <ArrowsPointingOutIcon className="h-5 w-5" />
                            )}
                            <span className=" hidden lg:block sm:block md:block">{isFullscreen ? "Exit Fullscreen" : "Fullscreen"}</span>
                        </Button>
                    </div>
                </div>
            </div>

            <div className="overflow-scroll p-2">
                {isLoading ? (
                    <div className="flex justify-center p-4">
                        <Spinner className="h-8 w-8 text-indigo-500" />
                    </div>
                ) : error ? (
                    <div className="p-4">
                        <div className="flex justify-center items-center">
                            <img
                                className="w-20"
                                src="https://cdn-icons-png.flaticon.com/128/9961/9961360.png"
                                alt=""
                            />
                        </div>
                        <h1 className="text-center" color="red">{error?.data?.error}</h1>
                    </div>
                ) : viewType === "table" ? (
                    <table className="w-full min-w-max table-auto text-left">
                        <thead>
                            <tr>
                                {TABLE_HEAD.map((head) => (
                                    <th
                                        key={head}
                                        className="border-y border-l border-r border-indigo-200 bg-indigo-50 p-4"
                                    >
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-bold leading-none text-indigo-700"
                                        >
                                            {head}
                                        </Typography>
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {users?.users?.map(
                                ({ _id, userName, userEmail, userPhoneNumber }, index) => (
                                    <tr key={index} className="hover:bg-indigo-50/50 cursor-pointer">
                                        <td className="px-5  border-l border-r border-b border-indigo-300">
                                            {index + 1 + (page - 1) * limit}.
                                        </td>
                                        <td className="px-5 py-2 text-black border-l border-r border-b border-indigo-300 capitalize">
                                            {userName}
                                        </td>
                                        <td
                                            className="px-5  border-l border-r border-b border-indigo-300 hover:text-indigo-700 text-black"
                                            onClick={() => handleCopy(userEmail)}
                                        >
                                            {userEmail}
                                        </td>
                                        <td
                                            className="px-5  border-l border-r border-b border-indigo-300 hover:text-indigo-700 text-black"
                                            onClick={() => handleCopy(userPhoneNumber)}
                                        >
                                            {userPhoneNumber}
                                        </td>
                                       
                                        {/* <td className="px-5  border-l border-r border-b border-indigo-300">
                                            <ViewUserDetailModal
                                                id={_id}
                                                userName={userName}
                                                userEmail={userEmail}
                                                userPhoneNumber={userPhoneNumber}
                                            />
                                        </td> */}
                                    </tr>
                                )
                            )}
                        </tbody>
                    </table>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {users?.users?.map(({ _id, userName, userEmail, userPhoneNumber },index) => (
                            <div key={_id} className="border border-indigo-300 rounded-md">
                                <div className="p-2">
                                    <Typography variant="h6" color="blue-gray" className=" capitalize text-black">
                                        {`${index+1}. ` }{userName}
                                    </Typography>
                                    <Typography className="text-sm text-gray-900">
                                        <b>Email:</b> {userEmail}
                                    </Typography>
                                    <Typography className="text-sm text-gray-900">
                                        <b>Phone:</b> {userPhoneNumber}
                                    </Typography>
                                    <div className="flex items-center justify-between mt-4 rounded-b-lg bg-indigo-50">
                                        {/* <EditUserModal id={_id} />
                                        <DeleteUserModal id={_id} />
                                        <ViewUserDetailModal
                                            id={_id}
                                            userName={userName}
                                            userEmail={userEmail}
                                            userPhoneNumber={userPhoneNumber}
                                        /> */}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <div className="flex items-center justify-between border-t border-indigo-300 p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                    Page {page} of {Math.ceil((users?.totalUser ?? 0) / limit)}
                </Typography>
                <div className="flex gap-2">
                    <Button
                        variant=""
                        size="sm"
                        className="hover:bg-indigo-50 active:bg-indigo-50 focus:bg-indigo-50 transition-colors duration-300 hover:shadow-none shadow-none bg-transparent border text-black border-indigo-200"
                        onClick={handlePrevious}
                        disabled={page === 1}
                    >
                        Previous
                    </Button>

                    <Button
                        variant=""
                        size="sm"
                        className="hover:shadow-none shadow-none bg-indigo-500"
                        onClick={handleNext}
                        disabled={page === Math.ceil((users?.totalUser ?? 0) / limit)}
                    >
                        Next
                    </Button>
                </div>
            </div>
        </div>
    );
}