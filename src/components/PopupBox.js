import printer_white from '../assets/vectors/Printer_white.svg';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const PopupBox = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [signalement, setSignalement] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [newStatus, setNewStatus] = useState('');

  const togglePopup = () => {
    setPopupOpen(!isPopupOpen);
  };

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:4000/signalement/getSignalementById/${id}`)
      .then((response) => {
        setSignalement(response.data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, [id]);

  const handleClick = (buttonText) => {
    setNewStatus(buttonText);
    setLoading(true);

    axios
      .put('http://localhost:4000/signalement/update', {
        statut: buttonText,
        id: id,
      })
      .then(() => {
        console.log('Signalement state modified');
        setLoading(false);
        togglePopup(); // Close the popup after successful update
      })
      .catch((error) => {
        console.error('Error:', error);
        setLoading(false);
      });
  };

  return (
    <div>
      <button
        className="bg-green-500 hover:bg-green-600 text-white font-normal py-2 px-7 rounded-lg ml-5"
        onClick={togglePopup}
      >
        {isPopupOpen ? 'إغلاق' : 'تحيين'}
        <img src={printer_white} alt="printer icon" className="ml-2 inline-block" />
      </button>

      {isPopupOpen && signalement && (
        <div className="fixed top-60 flex items-center justify-center">
          <div className="bg-gray-50 p-5 rounded-lg shadow-lg animate-fade-in transform transition-all duration-300">
            <h2 className="mb-5">يرجى إختيار حالة الإخطار</h2>
            <p>حالة الإخطار الحالية هي: {signalement.statut}</p>
            <div className="flex justify-between mt-4">
              <button
                className="bg-green-500 hover:bg-green-600 text-white font-normal py-2 px-4 rounded-lg ml-2"
                onClick={() => handleClick('معالج')}
                disabled={isLoading}
              >
                معالج
              </button>
              <button
                className="bg-orange-500 hover:bg-orange-600 text-white font-normal py-2 px-4 rounded-lg ml-2"
                onClick={() => handleClick('قيد المعالجة')}
                disabled={isLoading}
              >
                قيد المعالجة
              </button>
              <button
                className="bg-red-500 hover:bg-red-600 text-white font-normal py-2 px-4 rounded-lg ml-2"
                onClick={() => handleClick('غير معالج')}
                disabled={isLoading}
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