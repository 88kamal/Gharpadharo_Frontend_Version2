import React, { useContext, useEffect, useState } from "react";
import {
    Navbar,
    Typography,
    IconButton,
    Collapse,
    Button,
    Menu,
    MenuHandler,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import ShareModal from "./ShareModal";
import { FaUserCircle } from "react-icons/fa";
import authService from "../../services/authService";
import { useGetLocalitiesQuery } from "../../redux/slices/locationApiSlice";
import myContext from "../../context/myContext";

const rolePaths = {
    2: '/admin-dashboard/admin-home-page',
    14: '/room-owner-dashboard/room-owner-home-page',
    15: '/user-dashboard/user-dashboard'
};


export default function Navbars() {
    const [openNav, setOpenNav] = useState(false);
    const [openServices, setOpenServices] = useState(false);

    const {localityId, setLocality } = useContext(myContext);

    const [selectedCityName, setSelectedCityName] = useState("");

    const {
        data: localities,
        error: localitiesError,
        isLoading: isLocalitiesLoading,
    } = useGetLocalitiesQuery();

    useEffect(() => {
        if (localities && localities.length > 0) {
            // Set default selected locality to the first item
            setSelectedCityName(localities[0].localityName);
            setLocality(localities[0]._id);
        }
    }, [localities]);

    const handleCitySelect = (e) => {
        const selectedOption = localities.find(
            (loc) => loc.localityName === e.target.value
        );
        if (selectedOption) {
            setSelectedCityName(selectedOption.localityName);
            setLocality(selectedOption._id);
        }
    };

    const user = authService.getCurrentUser();

    React.useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 960) {
                setOpenNav(false);
            }
        };

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const navList = (
        <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-1">
            {[
                { to: '/', label: 'Home' },
                { to: '/about', label: 'About Us' },
                { to: '/contact', label: 'Contact' },
            ].map((item, index) => {
                if (item.submenu) {
                    return (
                        <li
                            key={index}
                            className="relative"
                            onMouseEnter={() => setOpenServices(true)}
                            onMouseLeave={() => setOpenServices(false)}
                        >
                            <Menu open={openServices}>
                                <MenuHandler>
                                    <Typography
                                        as="div"
                                        variant="small"
                                        color="blue-gray"
                                        className="flex items-center p-1 cursor-pointer app-font"
                                    >
                                        {item.label}
                                    </Typography>
                                </MenuHandler>
                            </Menu>
                        </li>
                    );
                } else {
                    return (
                        <p
                            key={index}
                            color="blue-gray"
                            className="p-1 text-md app-font"
                        >
                            <Link to={item.to} className="flex items-center">
                                {item.label}
                            </Link>
                        </p>
                    );
                }
            })}
        </ul>
    );

    const mobileNavList = (
        <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0">
            {[
                { to: '/', label: 'Home' },
                { to: '/about', label: 'About Us' },
                { to: '/contact', label: 'Contact' },
                { to: '/list-property', label: 'List Property' },
            ].map((item, index) => {
                return (
                    <Typography
                        key={index}
                        as="li"
                        variant="small"
                        color="blue-gray"
                        className="p-1 app-font"
                    >
                        <Link to={item.to} className="flex items-center">
                            {item.label}

                        </Link>
                    </Typography>
                );
            })}
            <>
                {/* Show the LoginModal in the mobile menu */}
                {/* <LoginModal showLoginButton={true}  /> */}

                {rolePaths[user?.role] ? (
                    <div className=" text-black">
                        <Link to={rolePaths[user.role]}>
                            <FaUserCircle className="w-7 h-7 text-black" />
                        </Link>
                    </div>
                ) : (
                    <Link to={'/login'}>
                        <p className=" text-black px-1">Login</p>
                    </Link>
                )}


            </>
        </ul>
    );

    return (
        <div className="sticky inset-0 z-50 h-max max-w-full border-none rounded-none">
            <Navbar className="sticky inset-0 z-20 h-max shadow-md max-w-full border-none rounded-none py-2 px-4 lg:px-5">
                <div className="flex items-center justify-between text-blue-gray-900">
                    <Link to={'/'}>
                        <Typography
                            as="a"
                            className="mr-4 cursor-pointer py-1.5 text-xl font-bold flex gap-2 items-center"
                        >
                            <img
                                className=' w-10 h-10' src="https://www.gharpadharo.com/img/gharpadharo.png"
                                alt="logo"
                            />
                            <span className="">GharPadharo</span>

                        </Typography>
                    </Link>
                    <div className="flex ml-4 items-center gap-3 lg:gap-3">
                        <div>
                            <select
                                id="locality-select"
                                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border border-indigo-400 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm 
              bg-[#dddffc] text-gray-700 transition duration-200 ease-in-out"
                                value={selectedCityName}
                                onChange={handleCitySelect}
                            >
                                {localities?.map((locality) => (
                                    <option key={locality._id} value={locality.localityName}>
                                        {locality.localityName}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="hidden lg:block">{navList}</div>

                        <Link to={'/list-property'}>
                            <Button
                                variant=""
                                className="bg-[#dddffc] hidden lg:block border shadow-none hover:shadow-none border-indigo-400 rounded-lg py-2 px-4 lg:flex items-center space-x-2">
                                <span className="text-black font-semibold ">List Property</span>
                                <span className="bg-gradient-to-r from-purple-400 to-indigo-400 text-white font-semibold rounded-sm px-3 py-[1px] text-[10px] animate-pulse ">
                                    Free
                                </span>
                            </Button>
                        </Link>

                        <ShareModal />

                        {rolePaths[user?.role] ? (
                            <div className="hidden lg:block">
                                <Link to={rolePaths[user.role]}>
                                    <FaUserCircle className="w-7 h-7" />
                                </Link>
                            </div>
                        ) : (
                            <span className="text-black hover:text-gray-900 cursor-pointer hidden lg:block app-font">
                                <Link to={'/login'}>Login</Link>
                            </span>
                        )}



                        <IconButton
                            variant=""
                            className="ml-auto h-10 w-10 text-inherit rounded-lg border-indigo-400 lg:hidden bg-white border shadow-none hover:shadow-none"
                            ripple={false}
                            onClick={() => setOpenNav(!openNav)}
                        >
                            {openNav ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    className="h-6 w-6"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            )}
                        </IconButton>
                    </div>
                </div>
                <Collapse open={openNav}>
                    {mobileNavList}
                </Collapse>
            </Navbar>
        </div>
    );
}