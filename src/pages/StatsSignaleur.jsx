import React, { useEffect, useState } from "react";
import EnfantGender from "../components/EnfantGender";
import EnfantAge from "../components/EnfantAge";
import axios from "axios";
import jsPDF from "jspdf";
import "jspdf-autotable";
import { font } from './Amiri-Regular-normal.js';
import SignaleurType from "../components/SignaleurType";
import SignaleurEnfant from "../components/SignaleurEnfant";


export default function StatsSignaleur() {
    const [signaleurStatistique, setSignaleurStatistique] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4000/citoyen/getSignaleurStats')
            .then((response) => {
                setSignaleurStatistique(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    const [InfoComparisonCounts, setInfoComparisonCounts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:4000/citoyen/getInfoComparisonCounts')
            .then((response) => {
                setInfoComparisonCounts(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);


    const handleExportPDF = () => {
    }
    return (
        <div flex flex-col>
            <div className="StatsEnfants flex flex-wrap flex-row-reverse mr-5 ml-5 mt-5 ">
                <div className="text-right mt-4 flex-auto text-2xl font-bold">
                    احصائيات المخطرين
                </div>
                <button
                    className=" flex flex-row justify-center items-center px-10 py-2 ml-3 bg-green-500 rounded-md text-white text-lg" onClick={handleExportPDF}

                >
                    طباعة
                </button>
                <button
                    className="  flex flex-row justify-center items-center px-10 py-2 bg-white rounded-md text-gray-700 text-lg border border-gray-300"

                >
                    تصدير
                </button>
            </div>
            <div className="flex flex-wrap shadow border-gray-500 flex-rows mr-5 ml-5 mt-5 pt-5 pb-5 pr-5 rounded-md">
                <div className="flex-auto text-right justify-center text-xl font-bold w-1/2">
                    عدد الاخطارات المقدمة خسب نوع المخطر
                    <SignaleurType statistique={signaleurStatistique} />
                </div>
                <div className="flex-auto text-right text-xl font-bold w-1/2">
                    عدد الأطفال في خطر حسب الفئة العمرية
                    <SignaleurEnfant InfoComparisonCounts={InfoComparisonCounts} />
                </div>
            </div>

        </div>

    );
}