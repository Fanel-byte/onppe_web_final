import React, { useEffect, useState } from "react";
import axios from "axios";

function getNumberSignalementsByMotifId(motifId) {
  return axios
    .get(`http://localhost:4000/signalement/getNumberSignalementsByMotifId/${motifId}`)
    .then(response => response.data)
    .catch(error => {
      console.log(error);
      return [];
    });
}

function CauseSignalStats() {

  const [nbSignalement, setnbSignalement] = useState([]);


  useEffect(() => {
    axios.get('http://localhost:4000/signalement/getTotalNumberSignalements').then((response) => {
      setnbSignalement(response.data.totalSignalements) 
    console.log('check'+nbSignalement)   })

}, [])
 

  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedResults = [];
      for (let i = 1; i <= 13; i++) {
        const result = await getNumberSignalementsByMotifId(i);
        fetchedResults.push(result);
      }
      setResults(fetchedResults);
    };

    fetchData();
  }, []);

  return (
    <div className="shadow border-gray-500 mr-5 ml-5  mt-2 pt-5 pb-4 pr-5 rounded-md ">
      <h2 className="text-xl text-right font-semibold mb-2">
        معدل سبب الاخطارات{" "}
      </h2>

      <div className="pl-2">
        <div className="rounded-tr-lg rounded-tl-lg overflow-hidden">
          <table className="table w-full h-40 text-center border border-green-500 border-opacity-40">
            {/* head */}
            <thead>
              <tr>
                <th className="bg-green-500 bg-opacity-40 text-gray-900 border-b text-base text-center pb-2 pt-2 ">
                  المجموع
                </th>
                <th className="bg-green-500 bg-opacity-40 text-gray-900 border-b text-base text-centerrounded-tl-lg pb-2 pt-2">
                  النسبة المئوية
                </th>
                <th className="bg-green-500 bg-opacity-40 text-gray-900 border-b text-base text-center ml-1 pb-2 pt-2 ">
                  نوع الخطر
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="pt-1 pb-1 border-green-200 border-l ">{results[0]?.[0]?.signalement}</td>
                <td className="pt-1 pb-1 border-green-200 border-l ">{(results[0]?.[0]?.signalement)*100/nbSignalement}%</td>
                <td className="text-right pt-1 pb-1  border-green-200 border-l  ">
                    فقدان الطفل لوالديه وبقائه دون سند عائلي
                </td>
              </tr>
              <tr>
              <td className="pt-1 pb-1 border-green-200 border-l ">{results[4]?.[0]?.signalement}</td>
              <td className="pt-1 pb-1 border-green-200 border-l ">{(results[4]?.[0]?.signalement)*100/nbSignalement}%</td>
                  <td className="text-right pt-1 pb-1  border-green-200 border-l">

                    عجز من يقوم برعاية الطفل عن التحكم في تصرفاته
                  </td>
        
              </tr>
              <tr>
              <td className="pt-1 pb-1 border-green-200 border-l ">{results[3]?.[0]?.signalement}</td>
              <td className="pt-1 pb-1 border-green-200 border-l ">{(results[3]?.[0]?.signalement)*100/nbSignalement}%</td>
                <td className=" pt-1 pb-1 text-right border-green-200 border-l " > 
                التسول بالطفل أو تعريضه للتسول    </td>
            

              </tr>
              <tr>
              <td className="pt-1 pb-1 border-green-200 border-l ">{results[2]?.[0]?.signalement}</td>
              <td className="pt-1 pb-1 border-green-200 border-l ">{(results[2]?.[0]?.signalement)*100/nbSignalement}%</td>
                <td className=" text-right pt-1 pb-1  border-green-200 border-l">المساس بحقه في التعليم</td>
              </tr>
              <tr>
              <td className="pt-1 pb-1 border-green-200 border-l ">{results[1]?.[0]?.signalement}</td>
              <td className="pt-1 pb-1 border-green-200 border-l ">{(results[1]?.[0]?.signalement)*100/nbSignalement}%</td>
                <td className="text-right pt-1 pb-1  border-green-200 border-l">تعريض الطفل للإهمال أو التشرد</td>
              </tr>
              <tr>
              <td className="pt-1 pb-1 border-green-200 border-l ">{results[5]?.[0]?.signalement}</td>
              <td className="pt-1 pb-1 border-green-200 border-l ">{(results[5]?.[0]?.signalement)*100/nbSignalement}%</td>
                <td className=" text-right pt-1 pb-1  border-green-200 border-l">
                  التقصير البين والمتواصل في التربية والرعاية
                </td>
              </tr>
              <tr>
              <td className="pt-1 pb-1 border-green-200 border-l ">{results[9]?.[0]?.signalement}</td>
              <td className="pt-1 pb-1 border-green-200 border-l ">{(results[9]?.[0]?.signalement)*100/nbSignalement}%</td>
                <td className=" text-right pt-1 pb-1  border-green-200 border-l">
                  الاستغلال الجنسي للطفل بمختلف أشكاله
                </td>
              </tr>
              <tr>
              <td className="pt-1 pb-1 border-green-200 border-l ">{results[8]?.[0]?.signalement}</td>
              <td className="pt-1 pb-1 border-green-200 border-l ">{(results[8]?.[0]?.signalement)*100/nbSignalement}%</td>
                <td className=" text-right pt-1 pb-1  border-green-200 border-l">الطفل ضحية جريمة من أي شخص آخر</td>
              </tr>
              <tr>
              <td className="pt-1 pb-1 border-green-200 border-l ">{results[7]?.[0]?.signalement}</td>
              <td className="pt-1 pb-1 border-green-200 border-l ">{(results[7]?.[0]?.signalement)*100/nbSignalement}%</td>
                <td className=" text-right pt-1 pb-1  border-green-200 border-l">الطفل ضحية جريمة من ممثله الشرعي</td>
              </tr>
              <tr>
              <td className="pt-1 pb-1 border-green-200 border-l ">{results[11]?.[0]?.signalement}</td>
              <td className="pt-1 pb-1 border-green-200 border-l ">{(results[11]?.[0]?.signalement)*100/nbSignalement}%</td>
                <td className=" text-right pt-1 pb-1  border-green-200 border-l">وقوع الطفل ضحية نزاعات مسلحة</td>
              </tr>
              <tr>
              <td className="pt-1 pb-1 border-green-200 border-l ">{results[10]?.[0]?.signalement}</td>
              <td className="pt-1 pb-1 border-green-200 border-l ">{(results[10]?.[0]?.signalement)*100/nbSignalement}%</td>
                <td className=" text-right pt-1 pb-1  border-green-200 border-l">الاستغلال الاقتصادي للطفل</td>
              </tr>
              <tr>
              <td className="pt-1 pb-1 border-green-200 border-l ">{results[6]?.[0]?.signalement}</td>
              <td className="pt-1 pb-1 border-green-200 border-l ">{(results[6]?.[0]?.signalement)*100/nbSignalement}%</td>
                <td className=" text-right pt-1 pb-1  border-green-200 border-l">سوء معاملة الطفل</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default CauseSignalStats;
