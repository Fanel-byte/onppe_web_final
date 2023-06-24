import React, { useEffect, useState } from "react";
import EnfantGender from "../components/EnfantGender";
import EnfantAge from "../components/EnfantAge";
import axios from "axios";
import jsPDF from "jspdf";
import "jspdf-autotable";
import { font } from "./Amiri-Regular-normal";

export default function StatsEnfants() {
    const [statistique, setStatistique] = useState([])
    useEffect(() => {
        axios.get('http://localhost:4000/enfants/getEnfantsStats').then((response) => {
            setStatistique(response.data)
        })

    }, [])

    const handleExportPDF = () => {
        const doc = new jsPDF();

        // Load and register the font
        const AmiriRegular = font.trim();

        doc.addFileToVFS('Amiri-Regular.ttf', AmiriRegular);
        doc.addFont('Amiri-Regular.ttf', 'Amiri', 'normal');

        doc.setFont('Amiri'); // Set font
        doc.setFontSize(20);
        doc.setFontSize(16);
        doc.text("عدد الاطفال في خطر حسب الجنس", 15, 15);


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
        const totalsByGenderFirst = statistique.reduce((acc, val) => {
            if (val.tranche_age === "0-6") {
                if (val.sexe === "ذكر") {
                    acc.male += parseInt(val.nombre_enfants);
                } else if (val.sexe === "أنثى") {
                    acc.female += parseInt(val.nombre_enfants);
                }
            }
            return acc;
        }, { male: 0, female: 0 });
        const table1Data = [
            ["الجنس", "عدد الاطفال"],
            ["ذكر", totalMales.toString()],
            ["أنثى", totalFemales.toString()],
        ];
        drawTable(25, table1Data);

        doc.addPage();
        doc.setFontSize(16);
        doc.text("عدد الاطفال في خطر حسب الفئة العمرية", 15, 15);

        const ageRanges = ["0-6", "7-13", "14-19"];

        const table2Data = ageRanges.map((range) => {
            const totalsByGender = statistique.reduce((acc, val) => {
                if (val.tranche_age === range) {
                    if (val.sexe === "ذكر") {
                        acc.male += parseInt(val.nombre_enfants);
                    } else if (val.sexe === "أنثى") {
                        acc.female += parseInt(val.nombre_enfants);
                    }
                }
                return acc;
            }, { male: 0, female: 0 });
            const total = parseInt(totalsByGender.male + totalsByGender.female);


            return [range, totalsByGender.male.toString(), totalsByGender.female.toString(), total.toString()];
        });

        const columnNames = ["الفئة العمرية", "ذكر", "أنثى", "مجموع"];
        table2Data.unshift(columnNames); // Add column names as the first row of the table

        drawTable(25, table2Data);

        drawTable(25, table2Data);

        // Save the PDF
        doc.save("statistiques.pdf");

        function drawTable(startY, data) {
            const margin = 10;
            const columnCount = data[0].length;
            const columnWidth = (doc.internal.pageSize.getWidth() - 2 * margin) / columnCount;
            const rowHeight = 20;

            doc.setFontSize(12);
            doc.setFillColor(255, 255, 255); // Set cell background color to white

            for (let i = 0; i < data.length; i++) {
                const rowData = data[i];

                for (let j = 0; j < columnCount; j++) {
                    const cellValue = rowData[j];
                    const cellX = margin + j * columnWidth;
                    const cellY = startY + (i + 1) * rowHeight;

                    doc.rect(cellX, cellY, columnWidth, rowHeight, 'S');
                    doc.text(cellValue, cellX + 5, cellY + 15);
                }
            }
        }

    };
    return (
        <div flex flex-col>
            <div className="StatsEnfants flex flex-wrap flex-row-reverse mr-5 ml-5 mt-5 ">
                <div className="text-right mt-4 flex-auto text-2xl font-bold">
                    احصائيات الأطفال
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
            <div className="statsGender">

                <EnfantGender statistique={statistique} />
            </div>
            <div className="statsGender">
                <EnfantAge statistique={statistique} />
            </div>
        </div >

    );
}