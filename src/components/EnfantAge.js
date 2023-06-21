import React from "react";

function EnfantAge() {
    return(

<div className="shadow border-gray-500 flex-rows mr-5 ml-5 mt-5 pt-5 pb-5 pr-5 rounded-md ">
<div className="text-right flex-auto text-xl font-bold  ">
عدد الاطفال في خطر حسب الفئة العمرية
</div>
<div className="flex flex-wrap flex-row-reverse mt-5">
    <div className="flex-auto mb-5">
        <table className="table age1 text-center border border-green-400">
            {/* head */}
            <thead>
                <tr>
                    <th className="bg-green-200 text-black border-b border-green-400 text-base " colSpan={2}>الفئة العمرية</th>
                </tr>
                <tr>
                    <th className="bg-green-200 text-black border-b border-green-400 text-sm font-medium"  colSpan={2}> سنوات 0 - 6  </th>
                </tr>
                <tr>
                <th className="bg-green-200 text-black border-b border-green-400">ذكر</th>
                <th className="bg-green-200 text-black border-b border-green-400">انثى</th>
                </tr>
            </thead>
            <tbody>
                {/* row 1 */}
                <tr className="border-green-400 ">
                <td className=" text-black border-b border-r border-green-400 ">185</td>
                <td className=" text-black border-b border-green-400">200</td>
                </tr>
                 {/* row 2*/}
                 <tr className="border-green-400 ">
                <td className=" text-black border-b border-r border-green-400" colSpan={2}>200</td>
                </tr>

            </tbody>
        </table>
        </div>
        <div className="flex-auto mr-5  mb-5">
        {/**  Tableau de la 2eme tranche d'age */}
        <table className="table age1 text-center border border-green-400">
            {/* head */}
            <thead>
                <tr>
                    <th className="bg-green-200 text-black border-b border-green-400 text-base " colSpan={2}>الفئة العمرية</th>
                </tr>
                <tr>
                    <th className="bg-green-200 text-black border-b border-green-400 text-sm font-medium"  colSpan={2}> سنوات 0 - 6  </th>
                </tr>
                <tr>
                <th className="bg-green-200 text-black border-b border-green-400">ذكر</th>
                <th className="bg-green-200 text-black border-b border-green-400">انثى</th>
                </tr>
            </thead>
            <tbody>
                {/* row 1 */}
                <tr className="border-green-400 ">
                <td className=" text-black border-b border-r border-green-400 ">185</td>
                <td className=" text-black border-b border-green-400">200</td>
                </tr>
                 {/* row 2*/}
                 <tr className="border-green-400 ">
                <td className=" text-black border-b border-r border-green-400" colSpan={2}>200</td>
                </tr>

            </tbody>
        </table>
        </div>


        <div className="flex-auto ml-5  mr-5 mb-5">
        {/**  Tableau de la 2eme tranche d'age */}
        <table className="table age1 text-center border border-green-400">
            {/* head */}
            <thead>
                <tr>
                    <th className="bg-green-200 text-black border-b border-green-400 text-base " colSpan={2}>الفئة العمرية</th>
                </tr>
                <tr>
                    <th className="bg-green-200 text-black border-b border-green-400 text-sm font-medium"  colSpan={2}> سنوات 0 - 6  </th>
                </tr>
                <tr>
                <th className="bg-green-200 text-black border-b border-green-400">ذكر</th>
                <th className="bg-green-200 text-black border-b border-green-400">انثى</th>
                </tr>
            </thead>
            <tbody>
                {/* row 1 */}
                <tr className="border-green-400 ">
                <td className=" text-black border-b border-r border-green-400 ">185</td>
                <td className=" text-black border-b border-green-400">200</td>
                </tr>
                 {/* row 2*/}
                 <tr className="border-green-400 ">
                <td className=" text-black border-b border-r border-green-400" colSpan={2}>200</td>
                </tr>

            </tbody>
        </table>
        </div>
</div>
</div>)
}
export default EnfantAge ;