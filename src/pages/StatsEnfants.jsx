import React, { useEffect, useState } from "react";
import EnfantGender from "../components/EnfantGender";
import EnfantAge from "../components/EnfantAge";
import axios from "axios";
import jsPDF from "jspdf";
import "jspdf-autotable";


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
        /*
        const AmiriRegular = font.trim();

        doc.addFileToVFS('Amiri-Regular.ttf', AmiriRegular);
        doc.addFont('Amiri-Regular.ttf', 'Amiri', 'normal');

        doc.setFont('Amiri'); // set font
        doc.setFontSize(20);
        doc.text("عدد الاطفال في خطر حسب الفئة العمرية", 15, 15);

        doc.addPage();
        doc.setFontSize(16);
        doc.text("Table 1: Enfants par Age", 15, 15);
        doc.setFont('Amiri'); // set font for the table
        doc.setFontSize(16);
        doc.autoTable({
            startY: 25,
            head: [["العمر", "عدد الأطفال"]],
            body: statistique.map((stat) => [stat.tranche_age, stat.nombre_enfants]),
            didDrawCell: (data) => {
                // Set font for each cell
                const { cell, column, row } = data;
                if (column.index === 0 || column.index === 1) {
                    doc.setFont('Amiri');
                    doc.setTextColor(0, 0, 0); // Set color to black
                }
            }
        });

        doc.addPage();
        doc.text("Table 2: Statistique Enfant Tranche d'age", 15, 15);
        doc.setFont('Amiri'); // set font for the table
        doc.setFontSize(16);
        doc.autoTable({
            startY: 25,
            head: [["Age", "Nombre d'enfants"]],
            body: statistique.map((stat) => [stat.tranche_age, stat.nombre_enfants]),
        });
        doc.setFont('Amiri'); // set font for the table
        doc.setFontSize(16);
        doc.autoTable({
            startY: 25,
            head: [["Tranche d'age", "Sexe", "Nombre d'enfants"]],
            body: statistique.map((stat) => [stat.tranche_age, stat.sexe, stat.nombre_enfants]),
        });

        // Save the PDF
        doc.save("statistiques.pdf");*/
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