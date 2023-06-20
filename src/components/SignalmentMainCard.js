import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button
} from "@material-tailwind/react";
 
export default function TaskCard() {
  return (



    <div class="bg-[#FBFBFB] flex flex-row-reverse rounded-lg shadow-sm text-sm pb-7 pr-14">
    
    <div class="signalments ">
    <div className=" pr-8 pl-8  bg-white rounded-lg   shadow-sm mt-7 mb-3 mr-5 ml-5 pb-2 pt-2">
    <div class="flex justify-between  text-gray-400 text-xs">
      <div class="text-sm text-[#9B9B9B] ">عدد الاخطارات</div>
      <div class="text-sm text-[#9B9B9B]">الطفل</div>
      <div class="text-sm text-[#9B9B9B]">ألاخطار</div>
    </div>
     </div>

   
    
    <div class="space-y-4">

    <div class="flex justify-between space-x-32 ml-16 mr-8 text-sm ">
        <div className="ml-2">33</div>
        <div> لوزاني هبة</div>
        <div className="flex items-center ">عاجل
              <div className="w-3 h-3 bg-orange-500 rounded-sm ml-2"/>
        </div>
      </div>
    
      <div class="flex justify-between space-x-32  ml-16 mr-8 text-ss">
        <div className="ml-2">27</div>
        <div> لوزاني هبة</div>

        <div className="flex items-center ">عادي
              <div className="w-3 h-3 bg-green-500 rounded-sm ml-2"/>
        </div>
      </div>
    </div>
    </div>
  </div>
  


  );
}