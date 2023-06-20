import React from "react";
import icon_nontTraite from "../assets/images/icon_nontTraite.png";
import icon_Traite from "../assets/images/icon_traite.png";
import  { useState } from 'react';

const CardView = () => {
  const [statisticTraiter, setStatisticTraiter] = useState(0);
  const [statisticNonTraiter, setStatisticNonTraiter] = useState(0);
  const getNumberSignalementsByYear = () => {
   /* try {
      //const response = await axios.get("/your-backend-api/year");
      const data = response.data;
      // Update the statistics accordingly
      setStatisticTraiter(data.traiter);
      setStatisticNonTraiter(data.nonTraiter);
    } catch (error) {
      console.log("Error fetching data:", error);
    }*/
  };

  const getNumberSignalementsByMonth = () => {
    // Code to handle getting the number of signalements by month
    // Update the statistics accordingly
  };

  const getNumberSignalementsByDay = () => {
    // Code to handle getting the number of signalements by day
    // Update the statistics accordingly
  };
  return (
    <div className="flex-col">
      <button onClick={getNumberSignalementsByYear} className="px-20 py-2 text-sm font-bold text-gray-800 bg-gray-100 rounded-2xl hover:bg-green-500 hover:text-white m-2 ">
        سنة
      </button>
      <button onClick={getNumberSignalementsByMonth} className="px-20 py-2 text-sm font-bold text-gray-800 bg-gray-100 rounded-2xl hover:bg-green-500 hover:text-white m-2">
        شهر
      </button>
      <button onClick={getNumberSignalementsByDay} className="px-20 py-2 text-sm font-bold text-gray-800 bg-gray-100 rounded-2xl hover:bg-green-500 hover:text-white ml-2 mr-35">
        يوم
      </button>

      <div className="grid grid-cols-2">
      <div className="bg-gray-100 rounded-2xl m-1">
          <img src={icon_Traite} alt="Icon" className="h-10 w-10 ml-2 mt-2 mb-2" />
          <h2 className="text-2xl font-semibold mb-2 text-green-500 font-montserrat text-center">
            اخطارات  معالجة
          </h2>
          <h2 className="text-2xl font-semibold  text-bg-gray-800 font-montserrat text-center mb-8">
          {statisticTraiter}
          </h2>
        </div>
        <div className="bg-gray-100 rounded-2xl m-1">
          <img src={icon_nontTraite} alt="Icon" className="h-10 w-10 ml-2 mt-2 mb-2" />
          <h2 className="text-2xl font-semibold mb-2 text-red-500 font-montserrat text-center">
            اخطارات غير معالجة
          </h2>
          <h2 className="text-2xl font-semibold  text-bg-gray-800 font-montserrat text-center mb-8">
           {statisticNonTraiter}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default CardView;
