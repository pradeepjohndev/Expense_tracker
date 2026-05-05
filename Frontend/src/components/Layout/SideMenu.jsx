import React, { useContext, useState } from 'react';
import { sideMenuData } from '../../utils/data';
import { UserContext } from '../../context/userContext';
import { useNavigate } from 'react-router-dom';
import { HiOutlineUserCircle } from "react-icons/hi2";

function SideMenu() {
    const { user, clearUser } = useContext(UserContext);
    const navigate = useNavigate();
    const [activeMenu, setActiveMenu] = useState("");

    const handleMenuClick = (path) => {
        if (path === "/logout") {
            handleLogout();
            return;
        }

        setActiveMenu(path);
        navigate(path);
    };

    const handleLogout = () => {
        localStorage.clear();
        clearUser();
        navigate("/login");
    };

    return (
        <div className="w-64 h-[calc(100vh-61px)] bg-white border-r border-gray-200 sticky top-15 z-20 shadow-sm">
            <div className="flex flex-col items-center justify-center py-6 border-b border-gray-100">
                {user?.profileImageUrl
                    ? (<img src={user.profileImageUrl} alt="Profile" className="w-20 h-20 rounded-full object-cover shadow-sm" />)
                    : (<HiOutlineUserCircle className="w-20 h-20 text-gray-400" />)}
                <h5 className="mt-3 text-gray-900 font-semibold text-sm text-center">
                    {user?.fullName || "Guest User"}
                </h5>
            </div>

            <div className="mt-4 px-2">
                {sideMenuData.map((item, index) => {
                    const isActive = activeMenu === item.path;

                    return (
                        <button key={`menu_${index}`} onClick={() => handleMenuClick(item.path)} className={`w-full flex items-center gap-3 text-sm px-4 py-3 rounded-lg mb-2 transition-all duration-200 hover:cursor-pointer
                                ${isActive ? "bg-primary text-white shadow-md" : "text-gray-700 hover:bg-gray-100"}`}>
                            <item.icon className={`text-lg ${isActive ? "text-white" : "text-gray-500"}`} />
                            <span className="font-medium">{item.name}</span>
                        </button>
                    );
                })}
            </div>
        </div>
    );
}

export default SideMenu;