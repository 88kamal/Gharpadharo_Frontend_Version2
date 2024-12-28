import {
    AiOutlineShoppingCart,
    AiOutlineUser,
    AiOutlineLogout,
} from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useLogoutMutation } from "../../../redux/slices/authApiSlice";

const UserSideBar = () => {
    const navigate = useNavigate();
    const [logout] = useLogoutMutation();

    const handleLogout = async () => {
        try {
            await logout(); // Call the logout mutation to remove token
            navigate('/'); // Redirect to the home page after logout
        } catch (error) {
            console.error("Logout failed", error);
        }
    };

    const navItems = [
        { icon: <AiOutlineShoppingCart size={24} />, label: "Bookings", link: 'user-dashboard', action: () => navigate('user-dashboard') },
        { icon: <AiOutlineUser size={24} />, label: "Profile", link: 'user-profile', action: () => navigate('user-profile') },
        { icon: <AiOutlineLogout size={24} />, label: "Logout", link: null, action: handleLogout }, // Logout button triggers handleLogout
    ];

    return (
        <div className="h-full bg-indigo-400 text-white p-6 flex flex-col space-y-4">
            <div className="text-center font-bold text-2xl tracking-wide mb-8">User Dashboard</div>
            <nav className="flex flex-col space-y-6">
                {navItems.map((item, index) => (
                    <button
                        onClick={item.action}
                        key={index}
                        className="flex items-center p-4 rounded-md hover:bg-indigo-800 transition-colors"
                    >
                        {item.icon}
                        <span className="ml-3 text-lg">{item.label}</span>
                    </button>
                ))}
            </nav>
        </div>
    );
};

export default UserSideBar;
