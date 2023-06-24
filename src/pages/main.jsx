import React from "react";
import TaskCard from "../components/TaskCard";
import SignalmentMainCard from "../components/SignalmentMainCard"
import CardView from "../components/CardView.js";
import Article from "../components/Article";
import TableDoublons from '../components/TableDoublons';
import association from '../assets/images/association.png';
import firefighter from '../assets/images/firefighter.png';
import police from '../assets/images/police-station.png'
import balance from '../assets/images/balance.png';
function main() {
  return (

    <div className="flex flex-col justify-start items-end overflow-hidden mr-4 ml-4">
      <div className="mt-4 mb-2">
        <h1 className="text-2xl font-bold">لوحة القيادة</h1>
      </div>
      <div className="grid grid-cols-2 w-full">

        <h2 className="col-span-1 flex flex-row text-xl font-semibold mb-3 justify-end ">

          اخبار و نشاطات
        </h2>


        <h2 className="col-span-1 text-xl font-semibold justify-self-end">احصائيات</h2>
      </div>
      <div className="grid grid-cols-2 w-full">
        <div className="flex flex-rows">
          <div className="col-span-1 text-xl font-semibold justify-self-end mr-5">  <Article /></div>
          <div className="col-span-1 text-xl font-semibold justify-self-end">  <Article /></div>
        </div>
        <div className="col-span-1 text-xl font-semibold justify-self-end"> < CardView /></div>
      </div>
      <h2 className="text-xl font-semibold text-right mt-4 mb-4 px-4">المؤسسات المتعوانة</h2>

      <div className="flex flex-wrap justify-center">
        <div className="sm:w-1/4 p-4">
          <div className="flex flex-col justify-center items-center">
            <img src={police} alt="Police" className="w-1/2 rounded-lg" style={{ height: 'auto' }} />
            <p className="text-black text-center py-2 rounded-b-lg">الشرطة</p>
          </div>
        </div>
        <div className="sm:w-1/4 p-4">
          <div className="flex flex-col justify-center items-center">
            <img src={association} alt="Association" className="w-1/2 rounded-lg" style={{ height: 'auto' }} />
            <p className="text-black text-center py-2 rounded-b-lg">المؤسسات الخيرية</p>
          </div>
        </div>
        <div className="sm:w-1/4 p-4">
          <div className="flex flex-col justify-center items-center">
            <img src={balance} alt="Balance" className="w-1/2 rounded-lg" style={{ height: 'auto' }} />
            <p className="text-black text-center py-2 rounded-b-lg">العدالة</p>
          </div>
        </div>
        <div className="sm:w-1/4 p-4">
          <div className="flex flex-col justify-center items-center">
            <img src={firefighter} alt="Firefighter" className="w-1/2 rounded-lg " style={{ height: 'auto' }} />
            <p className="text-black text-center py-2 rounded-b-lg">الحماية</p>
          </div>
        </div>
      </div>

    </div>


  );
}
export default main;
