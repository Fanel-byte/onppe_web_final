import React from "react";
import {useEffect,useState} from 'react';
import axios from 'axios';

function SourceSignalStats() {
    const [statistiques, setStatistiques] = useState({});
  
    useEffect(() => {
      axios.get('http://localhost:4000/signalement/getNumberSignalementsBySource/تطبيق الهاتف')
        .then((response) => {
          setStatistiques(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);
  return (
    <div className="shadow border-gray-500 mr-5 ml-5 mt-2 pt-5 pb-4 pr-5 rounded-md w-1/2">
      <h2 className="text-xl text-right font-semibold mb-2">
        معدل مصدر الاخطارات
      </h2>

      <div className="flex flex-row ml-2">
        <div className="w-1/3">
          <div className="pl-2">
            <div className="rounded-tr-lg rounded-tl-lg overflow-hidden">
              <table className="table w-full h-40 text-center border border-green-500 border-opacity-40">
                {/* head */}
                <thead>
                  <tr>
                  <th className="bg-green-500 bg-opacity-40 text-gray-900 border-b text-base text-center ml-1 mr-1 rounded-tr-lg rounded-tl-lg">
                     عن طريق تطبيق الهاتف
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  <tr>
                    <td>{statistiques.رقم}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
       
        <div className="w-1/3">
          <div className="pl-2">
            <div className="rounded-tr-lg rounded-tl-lg overflow-hidden">
              <table className="table w-full h-40 text-center border border-green-500 border-opacity-40">
                {/* head */}
                <thead>
                  <tr>
                  <th className="bg-green-500 bg-opacity-40 text-gray-900 border-b text-base text-center ml-1 mr-1 rounded-tr-lg rounded-tl-lg">
                  عن طريق المنصة الرقمية                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  <tr>
                    <td>{statistiques.source1}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div> <div className="w-1/3">
          <div className="pl-2">
            <div className="rounded-tr-lg rounded-tl-lg overflow-hidden">
              <table className="table w-full h-40 text-center border border-green-500 border-opacity-40">
                {/* head */}
                <thead>
                  <tr>
                    <th className="bg-green-500 bg-opacity-40 text-gray-900 border-b text-base text-center ml-1 mr-1 rounded-tr-lg rounded-tl-lg">
                    عن طريق رقم 1111                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  <tr>
                    <td>{statistiques.source1}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SourceSignalStats;
