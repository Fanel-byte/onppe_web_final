import React from "react";

function EnfantAge({ statistique }) {
  // Calculate the total number of female and male children in each age tranche
  const totalsByGenderFirst = statistique.reduce(
    (acc, val) => {
      if (val.tranche_age === "0-6") {
        if (val.sexe === "ذكر") {
          acc.male += val.nombre_enfants;
        } else if (val.sexe === "أنثى") {
          acc.female += val.nombre_enfants;
        }
      }
      return acc;
    },
    { male: 0, female: 0 }
  );

  const totalsByGenderSecond = statistique.reduce(
    (acc2, val) => {
      if (val.tranche_age === "7-13") {
        if (val.sexe === "ذكر") {
          acc2.male += val.nombre_enfants;
        } else if (val.sexe === "أنثى") {
          acc2.female += val.nombre_enfants;
        }
      }
      return acc2;
    },
    { male: 0, female: 0 }
  );

  const totalsByGenderThird = statistique.reduce(
    (acc3, val) => {
      if (val.tranche_age === "14-19") {
        if (val.sexe === "ذكر") {
          acc3.male += val.nombre_enfants;
        } else if (val.sexe === "أنثى") {
          acc3.female += val.nombre_enfants;
        }
      }
      return acc3;
    },
    { male: 0, female: 0 }
  );

  return (
    <div className="shadow border-gray-500 flex-rows mr-5 ml-5 mt-5 pt-5 pb-5 pr-5 rounded-md ">
      <div className="text-right text-xl font-bold mb-2 ">
        عدد الاطفال في خطر حسب الفئة العمرية
      </div>
      <div className="flex  flex-row ml-2">
        <div className="   w-1/3">
          <div className="   pl-10">
            <table className=" w-full h-40 text-center border-l border-r overflow-hidden border-green-400  ">
              {/* head */}
              <thead>
                <tr>
                  <th
                    className="bg-green-500 bg-opacity-40 text-black border-b  text-base pt-3 pb-3  rounded-tr-lg rounded-tl-lg"
                    colSpan={2}
                  >
                    الفئة العمرية
                  </th>
                </tr>
                <tr>
                  <th
                    className="bg-green-200 text-black border-b border-green-400 text-sm font-medium  pt-2 pb-2"
                    colSpan={2}
                  >
                    {" "}
                    سنوات 0 - 6{" "}
                  </th>
                </tr>
                <tr>
                  <th className="bg-green-200 text-black border-b border-green-400  pt-2 pb-2">
                    ذكر
                  </th>
                  <th className="bg-green-200 text-black border-b border-green-400  pt-2 pb-2">
                    انثى
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr className="border-green-400 ">
                  <td className=" text-black border-b border-r border-green-400   pt-2 pb-2">
                    {parseInt(totalsByGenderFirst.male)}
                  </td>
                  <td className=" text-black border-b border-green-400  pt-2 pb-2">
                    {parseInt(totalsByGenderFirst.female)}
                  </td>
                </tr>
                {/* row 2*/}
                <tr className="border-green-400 ">
                  <td
                    className=" text-black border-b border-r border-green-400 pt-2 pb-2"
                    colSpan={2}
                  >
                    {parseInt(totalsByGenderFirst.female) +
                      parseInt(totalsByGenderFirst.male)}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="   w-1/3">
          <div className="   pl-10">
            <table className=" w-full h-40 text-center border-l border-r overflow-hidden border-green-400  ">
              {/* head */}
              <thead>
                <tr>
                  <th
                    className="bg-green-500 bg-opacity-40 text-black border-b  text-base pt-3 pb-3  rounded-tr-lg rounded-tl-lg"
                    colSpan={2}
                  >
                    الفئة العمرية
                  </th>
                </tr>
                <tr>
                  <th
                    className="bg-green-200 text-black border-b border-green-400 text-sm font-medium  pt-2 pb-2"
                    colSpan={2}
                  >
                    {" "}
                    سنوات 0 - 6{" "}
                  </th>
                </tr>
                <tr>
                  <th className="bg-green-200 text-black border-b border-green-400  pt-2 pb-2">
                    ذكر
                  </th>
                  <th className="bg-green-200 text-black border-b border-green-400  pt-2 pb-2">
                    انثى
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr className="border-green-400 ">
                  <td className=" text-black border-b border-r border-green-400   pt-2 pb-2">
                    {parseInt(totalsByGenderFirst.male)}
                  </td>
                  <td className=" text-black border-b border-green-400  pt-2 pb-2">
                    {parseInt(totalsByGenderFirst.female)}
                  </td>
                </tr>
                {/* row 2*/}
                <tr className="border-green-400 ">
                  <td
                    className=" text-black border-b border-r border-green-400 pt-2 pb-2"
                    colSpan={2}
                  >
                    {parseInt(totalsByGenderFirst.female) +
                      parseInt(totalsByGenderFirst.male)}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="   w-1/3">
          <div className="   pl-10">
            <table className=" w-full h-40 text-center border-l border-r overflow-hidden border-green-400  ">
              {/* head */}
              <thead>
                <tr>
                  <th
                    className="bg-green-500 bg-opacity-40 text-black border-b  text-base pt-3 pb-3  rounded-tr-lg rounded-tl-lg"
                    colSpan={2}
                  >
                    الفئة العمرية
                  </th>
                </tr>
                <tr>
                  <th
                    className="bg-green-200 text-black border-b border-green-400 text-sm font-medium  pt-2 pb-2"
                    colSpan={2}
                  >
                    {" "}
                    سنوات 0 - 6{" "}
                  </th>
                </tr>
                <tr>
                  <th className="bg-green-200 text-black border-b border-green-400  pt-2 pb-2">
                    ذكر
                  </th>
                  <th className="bg-green-200 text-black border-b border-green-400  pt-2 pb-2">
                    انثى
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr className="border-green-400 ">
                  <td className=" text-black border-b border-r border-green-400   pt-2 pb-2">
                    {parseInt(totalsByGenderFirst.male)}
                  </td>
                  <td className=" text-black border-b border-green-400  pt-2 pb-2">
                    {parseInt(totalsByGenderFirst.female)}
                  </td>
                </tr>
                {/* row 2*/}
                <tr className="border-green-400 ">
                  <td
                    className=" text-black border-b border-r border-green-400 pt-2 pb-2"
                    colSpan={2}
                  >
                    {parseInt(totalsByGenderFirst.female) +
                      parseInt(totalsByGenderFirst.male)}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
export default EnfantAge;
