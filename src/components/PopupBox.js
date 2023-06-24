
import printer_white from '../assets/vectors/Printer_white.svg';
import React, {useState, useEffect} from 'react';
import axios from 'axios';





const PopupBox = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
  };
  const [signalement,Setsignalement] = useState([])
    
  //getting statut informations
  useEffect(() => {
      axios.get(`http://localhost:4000/signalement/getSignalementById/1`).then((response) => { //once the dashboard is ready instead of 2 in the link it will be changed with a signalement id from the row clicked in the previous page
         Setsignalement(response.data);
     // console.log(enfantid);
      
      }); });

      const [treated,setStatut] = useState('');
const changestatut = () => {
  axios.put('http://localhost:4000/signalement/update', {
         statut: treated,
         id: 1,

       }).then(() => {
       console.log('Signalement state modif created');
     })
     .catch((error) => {
       console.error('Error:', error);
     });
 }
 const handleClick = (buttonText) => {
  
  setStatut(buttonText);
  changestatut();
  closePopup();
};
  return (
    <div>
      <button
        className="bg-green-500 hover:bg-green-600 text-white font-normal py-2 px-7 rounded-lg ml-5"
        onClick={openPopup}
      >
        تحيين
        <img src={printer_white} alt="printer icon" className="ml-2 inline-block" />
      </button>

      {isPopupOpen && (
  <div className="fixed top-60 flex items-center justify-center ">
    <div className="bg-gray-50  p-5 rounded-lg shadow-lg animate-fade-in transform transition-all duration-300">
      <h2 className='mb-5'>يرجى إختيار حالة الإخطار</h2>
      <p>حالة الإخطار الحالية هي : {signalement.statut}</p> 
      <div className="flex justify-between mt-4">
  <button
    className="bg-green-500 hover:bg-green-600 text-white font-normal py-2 px-4 rounded-lg ml-2"
    onClick={() => handleClick('معالج')}
  >
    معالج
  </button>
  <button
    className="bg-orange-500 hover:bg-orange-600 text-white font-normal py-2 px-4 rounded-lg ml-2"
    onClick={() => handleClick('قيد المعالجة')}
  >
    قيد المعالجة
  </button>
  <button
    className="bg-red-500 hover:bg-red-600 text-white font-normal py-2 px-4 rounded-lg ml-2"
    onClick={() => handleClick('غير معالج')}
  >
    غير معالج
  </button>
</div>

    </div>
  </div>
)}


    </div>
  );
};

export default PopupBox;
