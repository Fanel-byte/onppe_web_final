import React, { useState, useEffect } from "react";
import profilepicture from "../assets/images/profilepicture.jpg";
import {
  BellIcon,
  GlobeAltIcon,
  ChevronDownIcon,
} from "@heroicons/react/outline";



function Header() {
  const [username, setUsername] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    // Perform logout actions here, e.g., clearing localStorage and redirecting
    localStorage.removeItem("username"); // Clear the username from localStorage
    window.location.href = "/"; // Redirect to the login page
  };

  useEffect(() => {
    // Retrieve the username from localStorage
    const storedUsername = localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  return (
    <div className="flex justify-between py-3 px-3">
      <div className="flex items-center relative">
        {/* Your profile picture and username */}
        <img src={profilepicture} className="w-5 h-5 rounded-full mr-3" />
        <p className="mr-3 text-base">{username}</p>

        {/* Dropdown menu */}
        <div className="relative">
          <ChevronDownIcon
            className="header-icon h-5 w-5 cursor-pointer self-start"
            onClick={handleMenuToggle}
          />

          {isMenuOpen && (
            <div className="absolute mt-2 right-0 z-10">
              <div className="bg-white border rounded shadow-lg w-32">
                {/* Logout option */}
                <button
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100 w-full text-left"
                  onClick={handleLogout}
                >
                  تسجيل الخروج
                </button>
                {/* You can add more options here if needed */}
              </div>
            </div>
          )}
        </div>

        {/* Bell icon */}
        <BellIcon className="header-icon h-5 w-5 ml-2" />
      </div>
      <div className="ml-auto">
        {/* Other elements */}
      </div>
    </div>
  );
}

export default Header;
