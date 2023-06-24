import React from "react";

function EnfantGender({ statistique }) {
  // Calculate the total number of female and male children
  const totalFemales = statistique.reduce((acc, val) => {
    if (val.sexe === "أنثى") {
      return acc + parseInt(val.nombre_enfants);
    }
    return acc;
  }, 0);

  const totalMales = statistique.reduce((acc, val) => {
    if (val.sexe === "ذكر") {
      return acc + parseInt(val.nombre_enfants);
    }
    return acc;
  }, 0);

  return (
    <div className="shadow border-gray-500 flex-rows mr-5 ml-5 mt-5 pt-5 pb-5 pr-5 rounded-md">
      <div className="text-right flex-auto text-xl font-bold">
        عدد الاطفال في خطر حسب الجنس
      </div>
      <div className="flex flex-row ml-10 mr-10">

      <div className="w-1/3">
          <div className="pl-20">
            <div className="rounded-tr-lg rounded-tl-lg overflow-hidden">
              <table className="table w-full h-40 text-center border border-red-400 border-opacity-40">
                {/* head */}
                <thead>
                  <tr>
                  <th className="bg-red-200 bg-opacity-40 text-gray-900 border-b text-base text-center ml-1 mr-1 rounded-tr-lg rounded-tl-lg">
                  الاناث
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  <tr>
                  <td>{parseInt(totalFemales)}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="w-1/3">
          <div className="pl-20">
            <div className="rounded-tr-lg rounded-tl-lg overflow-hidden">
              <table className="table w-full h-40 text-center border border-green-500 border-opacity-40">
                {/* head */}
                <thead>
                  <tr>
                  <th className="bg-green-500 bg-opacity-40 text-gray-900 border-b text-base text-center ml-1 mr-1 rounded-tr-lg rounded-tl-lg">
                  الذكور
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  <tr>
                  <td>{ parseInt(totalMales)}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
    </div>    </div>

  );
}

export default EnfantGender;