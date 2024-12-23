import { useEffect, useState } from "react";
import {
    Input,
    Typography,
    Button,
    Spinner,
    IconButton,
    Chip,
} from "@material-tailwind/react";
import { ArrowPathIcon, ArrowsPointingInIcon, ArrowsPointingOutIcon, ListBulletIcon, MagnifyingGlassIcon, TableCellsIcon } from "@heroicons/react/24/outline";
import { Bike, Building, Eye, Logs } from "lucide-react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
// import VerifyAccountModal from "./modal/accomodationOwner/VerifyAccountModal";
import ViewaccomodationOwnerDetailModal from "./modals/AccomodationOwner/ViewaccomodationOwnerDetailModal";
import { useGetAccomodationsQuery } from "../../../redux/slices/accomodationApiSlice";
import { RoomRounded, RoomService, RoomSharp } from "@mui/icons-material";
// import DeleteaccomodationOwnerModal from "./modal/accomodationOwner/DeleteaccomodationOwnerModal";
// import ViewaccomodationOwnerDetailModal from "./modal/accomodationOwner/ViewaccomodationOwnerDetailModal";
// import EditaccomodationOwnerModal from "./modal/accomodationOwner/EditaccomodationOwnerModal";
// import RiderozAdminActiveAndDeActiveButton from "../accomodationOwner/activeAndDeactive/RiderozAdminActiveAndDeActiveButton";

const TABLE_HEAD = ["S.No", "accomodation Image", "accomodationType", "accomodation Name", "View", "View Rooms", "Order"];

export default function ViewAccomodationOwnerTable() {
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const [city, setCity] = useState("");

    const navigate = useNavigate();


    const [viewType, setViewType] = useState(() => {
        // Initialize from localStorage or default to 'table'
        return localStorage.getItem("viewType") || "table";
    });

    const [isFullscreen, setIsFullscreen] = useState(false); // Track fullscreen status


    const { data: accomodations, error, isLoading, refetch } = useGetAccomodationsQuery({ search, page, limit, city });

    const handlePrevious = () => {
        if (page > 1) setPage(page - 1);
        refetch()
    };

    const handleNext = () => {
        const totalPages = Math.ceil((accomodations?.totalaccomodations ?? 0) / limit);
        if (page < totalPages) setPage(page + 1);
        refetch()
    };

    const handleCopy = (text) => {
        navigator.clipboard.writeText(text);
        toast.success(`${text} copied!`);
    };

    // Function to toggle view type
    const toggleViewType = () => {
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
                            All accomodation
                        </Typography>
                        <Typography color="gray" className="mt-1 font-normal">
                            See information about all accomodations
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
                            size="sm"
                            className="flex items-center gap-2 border hover:shadow-none shadow-none text-black  bg-white border-indigo-200"
                            onClick={toggleViewType}
                        >
                            {viewType === "table" ? (
                                <ListBulletIcon className="h-5 w-5" />
                            ) : (
                                <TableCellsIcon className="h-5 w-5" />
                            )}
                            <span>{viewType === "table" ? "List View" : "Table View"}</span>
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
                            <img className="w-20" src="https://cdn-icons-png.flaticon.com/128/9961/9961360.png" alt="" />
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
                            {accomodations?.accomodations?.map((accomodation, index) => {
                                const isLast = index === accomodations?.accomodations?.length - 1;
                                const classes = isLast
                                    ? "px-5 border-l border-r border-b border-indigo-300"
                                    : "px-5 border-l border-r border-b border-indigo-300";

                                return (
                                    <tr key={accomodation._id} className="hover:bg-indigo-50/50 cursor-pointer">
                                        <td className={classes}>{index + 1 + (page - 1) * limit}.</td>

                                        {/* <pre>{JSON.stringify(accomodation,null,2)}</pre> */}
                                        <td className={classes}>
                                            <LazyLoadImage
                                                alt={"img"}
                                                src={accomodation.accomodationImage?.url}
                                                className="w-10 h-10 rounded-full"
                                                effect="opacity"
                                            />
                                        </td>
                                        <td className={classes}>{accomodation.accomodationType}</td>
                                        <td className={classes}>{accomodation.ownerName}</td>


                                        <td className={classes}>
                                            <ViewaccomodationOwnerDetailModal {...accomodation} />
                                        </td>
                                        <td className={classes}>
                                            <IconButton
                                                onClick={() => navigate(`admin-view-all-rooms-of-accomodation-owners/${accomodation?._id}`)}
                                                variant="text"
                                                className="hover:bg-transparent active:bg-transparent focus:bg-transparent transition-colors duration-300"
                                            >
                                                <Building className="h-4 w-4" />
                                            </IconButton>
                                        </td>

                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {accomodations?.accomodations?.map((accomodation) => (
                            <div key={accomodation._id} className="border p-2 rounded-lg border-indigo-300">
                                <div className=" flex justify-center items-center">
                                    <LazyLoadImage
                                        alt={"img"}
                                        src={accomodation.accomodationImage?.url}
                                        className="w-20 h-20 rounded-full border object-cover mb-4 bg-white drop-shadow"
                                        effect="opacity"
                                    />
                                </div>
                                <Typography variant="h6" className=" text-center" color="blue-gray">{accomodation.accomodationName}</Typography>
                                <Typography variant="small" color="blue-gray" className=" text-center">
                                    <b> Owner: </b>{accomodation.ownerName}
                                </Typography>

                                <div className="flex justify-between mt-4 bg-indigo-50 rounded-b-lg">


                                    <div className="relative group">
                                        <ViewaccomodationOwnerDetailModal {...accomodation} />
                                        <div className="absolute hidden group-hover:block bg-gray-800 text-white text-xs rounded-lg px-2 py-1 left-1/2 transform -translate-x-1/2 -top-6">
                                            View Details
                                        </div>
                                    </div>

                                    <div className="relative group">
                                      <IconButton
                                                onClick={() => navigate(`admin-view-all-rooms-of-accomodation-owners/${accomodation?._id}`)}
                                                variant="text"
                                                className="hover:bg-transparent active:bg-transparent focus:bg-transparent transition-colors duration-300"
                                            >
                                                <Building className="h-4 w-4" />
                                            </IconButton>
                                        <div className="absolute hidden group-hover:block bg-gray-800 text-white text-xs rounded-lg px-2 py-1 left-1/2 transform -translate-x-1/2 -top-6">
                                            View Rooms
                                        </div>
                                    </div>

                                </div>





                            </div>
                        ))}
                    </div>
                )}
            </div>

            <div className="flex items-center justify-between border-t border-indigo-300 p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                    Page {page} of {Math.ceil((accomodations?.totalaccomodations ?? 0) / limit)}
                </Typography>
                <div className="flex gap-2">
                    <Button
                        variant=""
                        size="sm"
                        className="hover:bg-indigo-50 active:bg-indigo-50 focus:bg-indigo-50 transition-colors duration-300 hover:shadow-none shadow-none bg-transparent border text-black border-indigo-200 "
                        onClick={handlePrevious} disabled={page === 1}>
                        Previous
                    </Button>

                    <Button
                        variant=""
                        size="sm"
                        className=" hover:shadow-none shadow-none   bg-indigo-500 "
                        onClick={handleNext}
                        disabled={page === Math.ceil((accomodations?.totalaccomodations ?? 0) / limit)}>
                        Next
                    </Button>
                </div>
            </div>
        </div>
    );
}