import React from "react";
import '../Style/Navbar.css';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

import icon1 from "../assets/images/icon1.png";
import icon2 from "../assets/images/icon2.png";
import icon3 from "../assets/images/icon3.png";
import icon4 from "../assets/images/icon4.png";
import logo from '../assets/images/logo.png';
import { ReactComponent as Setting } from '../assets/vectors/setting.svg';


import { GlobeAltIcon } from '@heroicons/react/outline';

function Navbar() {

    const navigate = useNavigate();
  return (
   
 
  <div className=" relative h-full bg-gray-100 shadow-sm ">
     
       <div class="flex justify-center py-4">
        <img class="w-10 h-10 mr-2" src={logo} alt="logo" />
      </div>

      <div >
         <p className="text-center  font-bold text-xs   lg:text-sm text-orange-400 ">الهيئة الوطنية لحماية وترقية الطفولة</p>
      </div>
    
      <div className="flex-1">
         <ul className="mt-4 space-y-4">
         <ul className="flex flex-col items-center">

         <button
            className="mb-5 mt-20 mx-auto flex flex-row justify-center items-center px-20 py-2 gap-10 bg-green-500 rounded-md text-white text-lg"
           
            onClick={() => navigate('/AddSignalement')}
            >
            اخطار جديد
            </button>
            </ul>

            <li className="flex justify-end items-center px-4  group  ">
          <Link to="/main" className="flex items-center  text-gray-600  group-hover:text-CustomGreen text-lg">
            لوحة القيادة
            <svg className="w-5 h-5 ml-6  fill-current"  fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M64 64c0-17.7-14.3-32-32-32S0 46.3 0 64V400c0 44.2 35.8 80 80 80H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H80c-8.8 0-16-7.2-16-16V64zm406.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L320 210.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L240 221.3l57.4 57.4c12.5 12.5 32.8 12.5 45.3 0l128-128z"/></svg>

          </Link>
          </li>
        
          <li className="flex justify-end items-center px-4  group  ">
          <Link to="/Signalement" className="flex items-center text-gray-600 group-hover:text-CustomGreen text-lg">
            الاخطارات
            <svg className="w-5 h-5 ml-6 fill-current"  fill="none"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z"/></svg>

          </Link>
          </li>
         
          <li className="flex justify-end items-center px-4  group">
          <Link to="/Signalement" className="flex items-center text-gray-600 group-hover:text-CustomGreen text-xl text-bold">
          إحصائيات
            <svg className="w-5 h-5 ml-6 fill-current"  fill="none"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z"/></svg>
            
          </Link>
          </li>
        </ul>
    </div>
    
{/*Second part of navbar */}

{/* Bottom Divs */}
<div className="absolute bottom-0 left-0 right-0  justify-center">
  <div className="flex flex-col items-center text-gray-400">
    <GlobeAltIcon class="h-4 w-4" />
    <div className="text-center py-2">
      <p className="text-xs">العربية</p>
    </div>
  </div>
</div>
      </div>
   
  );
}
export default Navbar;


