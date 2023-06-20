import React from "react";
import logo from "../assets/images/logo.png";
import profilepicture from "../assets/images/profilepicture.jpg";
import {
  BellIcon,
  GlobeAltIcon,
  ChevronDownIcon,
} from "@heroicons/react/outline";
import { useState } from "react";

function Header() {
  const [username, setUsername] = useState("بن طالب فنال");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
<div className="flex justify-between py-3 px-3">
  <div className="flex items-center">
    <img src={profilepicture} className="w-5 h-5 rounded-full mr-3" />
    <p className="mr-3 text-base">{username}</p>
    <ChevronDownIcon
      className="header-icon h-5 w-5 cursor-pointer self-start"
      onClick={handleMenuToggle}
    />
    <BellIcon className="header-icon h-5 w-5 ml-2" />
  </div>
  <div className="ml-auto">
    {/* other elements */}
  </div>
</div>


  );
}
export default Header;