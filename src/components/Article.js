
import React from "react";
import artimg from '../assets/artimg.png';
function Article() {
  return (      
    <div className="card h-64   bg-white shadow-sm rounded-lg ">
    <figure><img src={artimg} alt="Shoes" /></figure>
    <div className="card-body flex flex-col justify-center items-end text-right">
        <p className=" text-right text-sm leading-6 text-orange-500"> نشاطات</p>
      <h2 className="card-title text-sm text-black">الجلسات الوطنية حول واقع الطفولة في الجزائر</h2>
    </div>
  </div>
  )
}
export default Article;