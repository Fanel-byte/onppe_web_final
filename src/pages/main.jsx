import React from "react";
import TaskCard from "../components/TaskCard";
import SignalmentMainCard from "../components/SignalmentMainCard"
import CardView from "../components/CardView.js";
import Article from "../components/Article";
import TableDoublons from '../components/TableDoublons';

function main() {
  return (

    <div className="flex flex-col justify-start items-end overflow-hidden mr-4 ml-4">
  <div className="mt-4 mb-2">
        <h1 className="text-2xl font-bold">لوحة القيادة</h1>
      </div>
      <div className="grid grid-cols-2 w-full">

<h2 className="col-span-1 flex flex-row text-xl font-semibold mb-3 justify-end ">
  <div className="bg-[#59C55E] rounded-2xl pr-6 pl-5 pb-1 pt-1 mr-64 text-sm font-bold text-white  hover:bg-green-100 hover:text-gray-800">
    رؤية كل الاخبار
  </div>
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
      
      <div className="mb-2">
        <h1 className="text-xl font-bold">معلومات مساعدة</h1>
      </div>

      <div className="grid grid-cols-2 w-full ">
        <div className="col-span-1">
          <SignalmentMainCard />
        </div>
        <div className="col-span-1 ml-5" >
          <TaskCard />
        </div>
      </div>
    </div >


  );
}
export default main;