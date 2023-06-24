import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { GlobeAltIcon } from "@heroicons/react/outline";

import icon1 from "../assets/images/icon1.png";
import icon2 from "../assets/images/icon2.png";
import icon3 from "../assets/images/icon3.png";
import icon4 from "../assets/images/icon4.png";
import logo from "../assets/images/logo.png";
import { ReactComponent as Setting } from "../assets/vectors/setting.svg";

function Navbar() {
  const [isSubmenuOpen, setSubmenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleSubmenu = () => {
    setSubmenuOpen(!isSubmenuOpen);
  };

  return (
    <div className="relative h-full bg-gray-100 shadow-sm">
      <div className="flex justify-center py-4">
        <img className="w-10 h-10 mr-2" src={logo} alt="logo" />
      </div>

      <div>
        <p className="text-center font-bold text-xs lg:text-sm text-orange-400">
          الهيئة الوطنية لحماية وترقية الطفولة
        </p>
      </div>

      <div className="flex-1">
        <ul className="mt-4 space-y-4">
          <ul className="flex flex-col items-center">
            <button
              className="mb-5 mt-20 mx-auto flex flex-row justify-center items-center px-20 py-2 gap-10 bg-green-500 rounded-md text-white text-lg"
              onClick={() => navigate("/AddSignalement")}
            >



              اخطار جديد
            </button>
          </ul>

          <li className="flex justify-end items-center px-4 group">
            <Link
              to="main"
              className="flex items-center text-gray-600 group-hover:text-CustomGreen  text-lg font-bold"
            >
              لوحة القيادة
              <svg
                className="w-5 h-5 ml-6 fill-current"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V400c0 44.2 35.8 80 80 80H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H80c-8.8 0-16-7.2-16-16V64zm406.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L320 210.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L240 221.3l57.4 57.4c12.5 12.5 32.8 12.5 45.3 0l128-128z" />
              </svg>
            </Link>
          </li>

          <li className="flex justify-end items-center px-4 group">
            <Link
              to="Signalement"
              className="flex items-center text-gray-600 group-hover:text-CustomGreen text-lg font-bold"
            >
              الاخطارات
              <svg
                className="w-5 h-5 ml-6 fill-current"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z" />
              </svg>
            </Link>
          </li>

          <li className="flex justify-end items-center px-4 mb-4 group relative">
            <button
              onClick={toggleSubmenu}
              className="flex items-center mb-4 text-gray-600 hover:text-CustomGreen text-lg focus:outline-none font-bold"
            >
     

              إحصائيات
             <svg className="w-5 h-5 ml-6 fill-current" fill="none" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
  <path d="M0 10H8V0H0V10ZM0 18H8V12H0V18ZM10 18H18V8H10V18ZM10 0V6H18V0H10Z" fill="#525252" />
</svg>

  
            </button>
            {isSubmenuOpen && (
              <ul className="menu-dropdown menu-dropdown-show absolute top-full flex flex-col items-center mt-2">
                <li className="mr-4 mb-4 text-gray-600 hover:text-CustomGreen flex flex-row items-center px-4 ">
                  <Link to="StatsSignalement" className="flex items-center ml-2 text-gray-600 hover:text-CustomGreen text-lg">إحصائيات الاخطارات
                  <svg
                className="w-4 h-4 ml-2 fill-current"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z" />
              </svg></Link>
                </li>
                <li className="  mb-4 text-gray-600 hover:text-CustomGreen flex  flex-row  px-4 ">
                  <Link to="StatistiqueEnfants"  
                   className="flex items-center text-gray-600 hover:text-CustomGreen text-lg">
                 
                    إحصائيات الاطفال
                    <svg
                      className="w-4 h-4 ml-2 fill-current"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 320 512"
                    >
                      <path d="M96 64a64 64 0 1 1 128 0A64 64 0 1 1 96 64zm48 320v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V287.8L59.1 321c-9.4 15-29.2 19.4-44.1 10S-4.5 301.9 4.9 287l39.9-63.3C69.7 184 113.2 160 160 160s90.3 24 115.2 63.6L315.1 287c9.4 15 4.9 34.7-10 44.1s-34.7 4.9-44.1-10L240 287.8V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V384H144z" />
                    </svg>
                  </Link>
                </li>
                <li className=" mb-4 text-gray-600 hover:text-CustomGreen flex  justify-end items-center px-4 ">
                  <Link to="StatsSignaleur"
                                     className="flex items-center text-gray-600 hover:text-CustomGreen text-lg">

                    <a>إحصائيات المبلغين</a>
                    <svg
                      className="w-4 h-4 ml-2 fill-current"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 640 512"
                    >
                      <path d="M320 0a40 40 0 1 1 0 80 40 40 0 1 1 0-80zm44.7 164.3L375.8 253c1.6 13.2-7.7 25.1-20.8 26.8s-25.1-7.7-26.8-20.8l-4.4-35h-7.6l-4.4 35c-1.6 13.2-13.6 22.5-26.8 20.8s-22.5-13.6-20.8-26.8l11.1-88.8L255.5 181c-10.1 8.6-25.3 7.3-33.8-2.8s-7.3-25.3 2.8-33.8l27.9-23.6C271.3 104.8 295.3 96 320 96s48.7 8.8 67.6 24.7l27.9 23.6c10.1 8.6 11.4 23.7 2.8 33.8s-23.7 11.4-33.8 2.8l-19.8-16.7zM40 64c22.1 0 40 17.9 40 40v40 80 40.2c0 17 6.7 33.3 18.7 45.3l51.1 51.1c8.3 8.3 21.3 9.6 31 3.1c12.9-8.6 14.7-26.9 3.7-37.8l-15.2-15.2-32-32c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l32 32 15.2 15.2 0 0 25.3 25.3c21 21 32.8 49.5 32.8 79.2V464c0 26.5-21.5 48-48 48H173.3c-17 0-33.3-6.7-45.3-18.7L28.1 393.4C10.1 375.4 0 351 0 325.5V224 160 104C0 81.9 17.9 64 40 64zm560 0c22.1 0 40 17.9 40 40v56 64V325.5c0 25.5-10.1 49.9-28.1 67.9L512 493.3c-12 12-28.3 18.7-45.3 18.7H400c-26.5 0-48-21.5-48-48V385.1c0-29.7 11.8-58.2 32.8-79.2l25.3-25.3 0 0 15.2-15.2 32-32c12.5-12.5 32.8-12.5 45.3 0s12.5 32.8 0 45.3l-32 32-15.2 15.2c-11 11-9.2 29.2 3.7 37.8c9.7 6.5 22.7 5.2 31-3.1l51.1-51.1c12-12 18.7-28.3 18.7-45.3V224 144 104c0-22.1 17.9-40 40-40z" />
                    </svg>
                  </Link>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>

      {/* Second part of navbar */}
      {/* Bottom Divs */}
      <div className="absolute bottom-0 left-0 right-0 justify-center">
        <div className="flex flex-col items-center text-gray-400">
          <GlobeAltIcon className="h-4 w-4" />
          <div className="text-center py-2">
            <p className="text-xs">العربية</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
