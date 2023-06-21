import React from "react";

function EnfantGender() {
    return(

<div className="shadow border-gray-500 flex-rows mr-5 ml-5 mt-5 pt-5 pb-5 pr-5 rounded-md ">
<div className="text-right flex-auto text-xl font-bold  ">
    عدد الاطفال في خطر حسب الجنس
</div>
<div className="flex flex-wrap mt-5  ">
    <div className="flex-auto ml-40 mr-40">
        <table className="table text-center border border-red-400">
            {/* head */}
            <thead>
                <tr>
                    <th className="bg-red-200 text-black border-b border-red-400 text-base">الاناث</th>
                </tr>
            </thead>
            <tbody>
                {/* row 1 */}
                <tr className="border-red-400">
                    <td>100</td>
                </tr>

            </tbody>
        </table>
    </div>
    <div className="flex-auto ml-40 mr-40 mb-5">
        <table className="table text-center border border-green-400">
            {/* head */}
            <thead>
                <tr>
                    <th className="bg-green-200 text-black border-b border-green-400 text-base">الذكور</th>
                </tr>
            </thead>
            <tbody>
                {/* row 1 */}
                <tr className="border-green-400">
                    <td >200 </td>
                </tr>

            </tbody>
        </table>
    </div>
</div>
</div>)
}
export default EnfantGender ;