import React from "react";
import EnfantGender from "../components/EnfantGender";
import EnfantAge from "../components/EnfantAge";
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
            <div className="statsGender">
                <EnfantGender />
            </div>
            <div className="statsGender">
                <EnfantAge />
            </div>
        </div >

    );
}