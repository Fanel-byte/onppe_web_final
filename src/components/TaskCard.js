import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button
} from "@material-tailwind/react";
 
export default function TaskCard() {
  return (



    <div class="bg-[#FBFBFB] flex flex-row-reverse rounded-lg shadow-sm text-sm pb-3">
    
    <div className="graph mt-10 mr-4 card-actions justify-end "> 
    <div className="radial-progress bg-[#FBFBFB] border-8 text-[#81D285] border-[#F3F3F9] shadow-sm " style={{"--value": 40 }}>
      <div className=" justify-center item-center">
      <div className="ml-2 text-black font-semibold ">
      40%
        </div>
        <div className="text-sm text-[#9B9B9B]">
        قيد المعالجة
        </div>
      </div>
      </div>
  </div>
  
    <div class="stat ">
    <div className=" pr-20 pl-20  bg-white rounded-lg  pb-2 pt-2 shadow-sm mt-3 mb-3">
    <div class="flex justify-between  text-gray-400 text-xs">
      <div class="text-sm text-[#9B9B9B] ">عدد الاخطارات</div>
      <div class="text-sm text-[#9B9B9B]">ألاخطار</div>
    </div>
     </div>

   
    
    <div class="space-y-4">

    <div class="flex justify-between space-x-32 ml-24 mr-20 text-sm">
        <div className="">33</div>
        <div className="flex items-center ">عاجل
              <div className="w-3 h-3 bg-orange-500 rounded-sm ml-2"/>
        </div>
      </div>
    
      <div class="flex justify-between space-x-32  ml-24 mr-20 text-sm">
        <div>27</div>
        <div className="flex items-center ">عادي
              <div className="w-3 h-3 bg-green-500 rounded-sm ml-2"/>
        </div>
      </div>
    </div>
    </div>
  </div>
  


  );
}