/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import {
    UserCircleIcon,
    HomeIcon,
    PlusCircleIcon,
    MapIcon,
    UserIcon,
  } from "@heroicons/react/24/solid";
import { Book } from 'lucide-react';
const BusinessMangerBottomNavigation = () => {
    return (
        <div className="fixed z-50 bottom-0 left-0 w-full bg-primary/10 border-t border-primary/10 shadow-lg">
            <div className="flex justify-around py-1">
                <NavItem
                    icon={<HomeIcon className="w-6 h-6" />}
                    label="Home"
                    link={'admin-home-page'}
                />

                <NavItem
                    icon={<MapIcon className="w-6 h-6" />}
                    label="View Acco. & User"
                    link={'admin-view-all-users-and-accomodation-owners'}
                />

                <NavItem
                    icon={<Book className="w-6 h-6" />}
                    label="View Book Room"
                    link={'admin-view-all-book-room'}
                />

                <NavItem
                    icon={<UserCircleIcon className="w-6 h-6" />}
                    label="Profile"
                    link={'admin-profile'}
                />
            </div>
        </div>
    );
};

const NavItem = ({ icon, label, link }) => (
    <Link to={link}>
        <button type='button' className="flex flex-col items-center text-black hover:text-primary">
            {icon}
            <span className="text-xs mt-1">{label}</span>
        </button>
    </Link>
);

export default BusinessMangerBottomNavigation;