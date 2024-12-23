
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
import { IoAddCircleOutline } from 'react-icons/io5';
const RoomOwnerBottomNavigation = () => {
  return (
    <div className="fixed z-50 bottom-0 left-0 w-full bg-primary/10 border-t border-primary/10 shadow-lg">
      <div className="flex justify-around py-1">
        <NavItem
          icon={<HomeIcon className="w-6 h-6" />}
          label="Home"
          link={'room-owner-home-page'}
        />

        <NavItem
          icon={<IoAddCircleOutline className="w-6 h-6" />}
          label="Add Rooms"
          link={'room-owner-add-room'}
        />

        <NavItem
          icon={<MapIcon className="w-6 h-6" />}
          label="View Rooms"
          link={'room-owner-view-all-rooms'}
        />

        <NavItem
          icon={<Book className="w-6 h-6" />}
          label="View Bookings"
          link={'room-owner-view-all-book-room'}
        />


        <NavItem
          icon={<UserCircleIcon className="w-6 h-6" />}
          label="Profile"
          link={'room-owner-profile'}
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

export default RoomOwnerBottomNavigation;