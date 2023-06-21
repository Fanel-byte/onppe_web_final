import React from "react";
export default function StatsEnfants() {
    return (
        <div flex flex-col>
            <div className="StatsEnfants flex flex-wrap flex-row-reverse mr-5 ml-5 mt-5 ">
                <div className="text-right mt-4 flex-auto text-2xl font-bold">
                    احصائيات الأطفال
                </div>
                <button
                    className=" flex flex-row justify-center items-center px-10 py-2 ml-3 bg-green-500 rounded-md text-white text-lg"

                >
                    طباعة
                </button>
                <button
                    className="  flex flex-row justify-center items-center px-10 py-2 bg-white rounded-md text-gray-700 text-lg border border-gray-300"

                >
                    تصدير
                </button>
            </div>
            <div className="shadow border-gray-500 flex-rows mr-5 ml-5 mt-5">
                <div className="text-right flex-auto text-xl font-bold ">
                    عدد الاطفال في خطر حسب الجنس
                </div>
                <div className="flex flex-wrap mt-5  ">
                    <div className="flex-auto ml-40 mr-40">
                        <table className="table text-center border border-red-400">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th className="bg-red-200 text-black border-b border-red-400">الاناث</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                <tr>
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
                                    <th className="bg-green-200 text-black border-b border-green-400">الذكور</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                <tr>
                                    <td>200 </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div >

    );
}