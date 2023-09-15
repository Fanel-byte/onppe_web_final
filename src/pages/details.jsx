import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { useParams } from 'react-router-dom';
import movie from '../assets/video/movie.mp4';
import audio from '../assets/audio/audio.mp3';
import { useNavigate } from 'react-router-dom';
import iconTraitement from '../assets/vectors/icon_traitement.svg';
import printer from '../assets/vectors/Printer.svg';
import link from '../assets/vectors/Link.svg';
import TableDoublons from '../components/TableDoublons';
import PopupBox from '../components/PopupBox';
import jsPDF from "jspdf";
import "jspdf-autotable";
import { font } from './Amiri-Regular-normal.js';

export default function Details() {

  const navigate = useNavigate();

  const { id } = useParams();
  const [signalement, Setsignalement] = useState([]);
  const [enfant, Setenfant] = useState([]);
  const [img, Setimg] = useState([]);
  const [cit, Setcit] = useState([]);

  useEffect(() => {
    Axios.get(`http://localhost:4000/signalement/getSignalementById/${id}`).then((response) => {
      Setsignalement(response.data);
    });
  }, [id]);

  const enfantid = signalement.enfantid;
  console.log('test ' + enfantid);

  useEffect(() => {
    Axios.get(`http://localhost:4000/enfants/getEnfantById${enfantid}`).then((response) => {
      Setenfant(response.data);
      console.log(response.data)
    });
  }, [enfantid]);

  useEffect(() => {
    Axios.get(`http://localhost:4000/images/getImgBySignalementId/${id}`).then((response) => {

      Setimg(response.data);
    });
  }, [id]);
  const imagePath = img.length > 0 ? img[0].path : "";
  const imagedescription = img.length > 0 ? img[0].description : "";


  const citoyenid = signalement.citoyenid;

  useEffect(() => {
    Axios.get(`http://localhost:4000/citoyen/getCitoyenById${citoyenid}`).then((response) => {
      Setcit(response.data);
    });
  }, [citoyenid]);




  function isValidDate(dateString) {
    const date = new Date(dateString);
    return !isNaN(date.getTime());
  }
  const handleExportPDF = () => {
    const doc = new jsPDF({ orientation: "p", unit: "mm" });

    // Load and register the font
    const AmiriRegular = font.trim();

    doc.addFileToVFS('Amiri-Regular.ttf', AmiriRegular);
    doc.addFont('Amiri-Regular.ttf', 'Amiri', 'normal');

    doc.setFont('Amiri'); // Set font
    doc.setFontSize(16);

    const pageWidth = doc.internal.pageSize.getWidth();
    const rightMargin = 15;

    const rightAlignText = (text, yPos) => {
      const textWidth = doc.getTextWidth(text);
      const x = pageWidth - rightMargin - textWidth;
      doc.text(text, x, yPos);
    };
    const centerText = (text, yPos) => {
      const textWidth = doc.getTextWidth(text);
      const x = (pageWidth - textWidth) / 2;
      doc.text(text, x, yPos);
    };
    // Report title
    const reportTitle = "تقرير الاخطار";
    const titleYPos = 10;
    const titleXPos = (pageWidth - doc.getTextWidth(reportTitle)) / 2;
    doc.text(reportTitle, titleXPos, titleYPos);

    // General Information section
    doc.setFontSize(14);
    centerText("معلومات عامة", 30);
    rightAlignText(`تاريخ الحادث: ${signalement.dateincident}`, 45);
    rightAlignText(`العنوان: ${signalement.adresse}`, 60);
    rightAlignText(`شرح الاخطار: ${signalement.explicationsignalement}`, 75);
    rightAlignText(`السبب: ${signalement.designationar}`, 90);

    // Child Information section
    centerText("معلومات الطفل", 115);
    rightAlignText(`الاسم: ${enfant.nom}`, 130);
    rightAlignText(`اللقب: ${enfant.prenom}`, 145);
    rightAlignText(`العمر: ${enfant.age}`, 160);
    rightAlignText(`الجنس: ${enfant.sexe}`, 175);
    rightAlignText(`العنوان: ${enfant.adresse}`, 190);
    rightAlignText(`الولاية: ${enfant.wilaya}`, 205);
    rightAlignText(`وضعية الأهل: ${enfant.sitationparentn}`, 220);


    // Reporter Information section
    const reporterSectionYPos = 240;
    centerText("معلومات المبلغ", reporterSectionYPos);
    rightAlignText(`الاسم: ${cit.nom}`, 255);
    rightAlignText(`اللقب: ${cit.prenom}`, 270);
    rightAlignText(`الجنس: ${cit.sexe}`, 285);
    doc.addPage();
    rightAlignText(`تاريخ الاخطار: ${signalement.date}`, 30);
    rightAlignText(`رقم الهاتف: ${cit.tel}`, 55);



    // Save the PDF
    doc.save("RAPPORT.pdf");




  };

  return (

    <>

      <html dir="rtl" lang="ar" className="font-mons mr-4">
        <div className="mt-4  text-right">
          <div className="flex items-center">
            <img src={iconTraitement} alt="Icon Traitement" className="ml-2 inline-block" />
            <h1 className="text-2xl font-bold ml-2">معالجة التبليغ</h1>

          </div>
          <div class="grid grid-cols-2 gap-4 ">
            <div class="mt-4 ">
              <div className="flex items-center justify-end  space-x-0.5  ">
                <PopupBox />
                <button className="border-2 border-gray-100 hover:bg-gray-200/60 hover:text-black font-normal py-2 px-4 rounded-lg ml-2">
                طباعة
                <img src={printer} alt="printer icon" className="ml-2 inline-block" onClick={handleExportPDF} />

              </button>
              </div>

              

              <div class="mt-5 pt-2 pr-2 w-full shadow border-gray-500 mr-5 ml-5 mt-2 pb-4  rounded-md">
                <div className="md:basis-5/12 basis-full">
                  <div class="flex items-center">
                    <h1 class="font-semibold text-xl flex-grow">معلومات عامة</h1>
                    <button class="bg-green-500 hover:bg-green-600 text-white ml-2 font-regular py-2 px-7 rounded-lg">
                      طلب معلومات إضافية
                    </button>
                  </div>
                  <p className="mb-4 mt-12 text-base flex-auto font-semibold text-black "><strong className="text-gray-500 font-normal">تاريخ الإخطار  : </strong> {isValidDate(signalement.date) ? new Date(signalement.date).toLocaleDateString() : ""}</p>
                  <p className="mb-4 text-base flex-auto font-semibold text-black "><strong className="text-gray-500 font-normal">العنوان:</strong> {signalement.adresse} </p>
                  <p className="w-1/2 mr-2 mb-4 text-base flex-auto font-semibold text-black"><strong className="text-gray-500 font-normal">الولاية: </strong> {enfant.wilaya}</p>
                  <p className="mb-4 text-xl text-gray-500 flex-auto font-normal">سبب الإخطار:  </p>
                  <ul class="list-none ml-4">

                    <li class="flex items-start mt-2">
                      <span class="inline-block w-3 h-3 rounded-full bg-orange-500 mt-2 mr-2 ml-3"></span>
                      <span class="text-base">{signalement.designationar}</span>
                    </li>
                  </ul>
                  <h1 className="text-xl text-gray-500 flex-auto font-normal mt-5 mb-3"> شرح الإخطار:</h1>
                  <p className="mb-4 text-base font-medium text-justify leading-loose">
                    {signalement.explicationsignalement}
                  </p>
                  <h1 class="font-semibold text-xl flex-grow">معلومات المبلغ</h1>
                  <div class='flex mt-4' >
                    <p className="w-1/2  mb-4 text-base flex-auto font-semibold text-black"><strong className="text-gray-500 font-normal">القائم الاخطار : </strong> {signalement.descriptifar} </p>
                    <p className="w-1/2 mr-2 mb-4 text-base flex-auto font-semibold text-black"><strong className="text-gray-500 font-normal">الجنس: </strong>  {cit.sexe}</p>
                  </div>

                  <div class='flex mt-4' >
                    <p className="w-1/2  mb-4 text-base flex-auto font-semibold text-black"><strong className="text-gray-500 font-normal">الاسم: </strong> {cit.prenom} </p>
                    <p className="w-1/2 mr-2 mb-4 text-base flex-auto font-semibold text-black"><strong className="text-gray-500 font-normal">اللقب: </strong>  {cit.nom}</p>
                  </div>
                  <p className="w-1/2  mb-4 text-base flex-auto font-semibold text-black"><strong className="text-gray-500 font-normal">رقم الهاتف: </strong>  {cit.tel}</p>

                  <h1 class="font-semibold text-xl flex-grow">أدلة الإخطار</h1>

                  <div class="mb-4 border-b border-gray-200 dark:border-gray-50">    <ul class="flex flex-wrap -mb-px text-sm font-medium text-center" id="myTab" data-tabs-toggle="#myTabContent" role="tablist">
                    <li class="mr-2" role="presentation">
                      <button class="inline-block p-4 border-b-2 rounded-t-lg" id="profile-tab" data-tabs-toggle="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">صور</button>
                    </li>
                    <li class="mr-2" role="presentation">
                      <button class="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300" id="dashboard-tab" data-tabs-toggle="#dashboard" type="button" role="tab" aria-controls="dashboard" aria-selected="false">ملفات</button>
                    </li>
                  </ul>
                  </div>
                  <div id="myTabContent">
                    <div class="p-4 rounded-lg bg-gray-50  " id="profile" role="tabpanel" aria-labelledby="profile-tab">
                      <div class="flex justify-center space-x-4">
                        <div class="relative group ml-3">

                          <img class="w-full h-full object-cover rounded-lg shadow-md transition-all duration-500 group-hover:brightness-50 group-hover:contrast-125" src={`http://localhost:4000/${imagePath}`} alt={imagedescription} />
                          <div class="absolute inset-0 bg-black transition-opacity duration-500 opacity-0 group-hover:opacity-70"></div>

                          <div class="absolute inset-0 flex flex-col items-center justify-center px-9 text-center text-white transition-all duration-500 opacity-0 group-hover:opacity-100">

                            <p class="mb-3 text-lg italic">{imagedescription}</p>
                          </div>
                        </div>


                        <div class="relative group ml-3">

                          <img class="w-full h-full object-cover rounded-lg shadow-md transition-all duration-500 group-hover:brightness-50 group-hover:contrast-125" src={`http://localhost:4000/${imagePath}`} alt={imagedescription} />
                          <div class="absolute inset-0 bg-black transition-opacity duration-500 opacity-0 group-hover:opacity-70"></div>

                          <div class="absolute inset-0 flex flex-col items-center justify-center px-9 text-center text-white transition-all duration-500 opacity-0 group-hover:opacity-100">

                            <p class="mb-3 text-lg italic">{imagedescription}</p>
                          </div>
                        </div>


                      </div>

                    </div>
                    <div class="hidden p-4 rounded-lg bg-gray-50  " id="dashboard" role="tabpanel" aria-labelledby="dashboard-tab">
                      <p class="text-sm text-gray-500 dark:text-gray-400">هذا بعض المحdddتوى العائم لعلامة التبويب <strong class="font-medium text-gray-800 dark:text-white">ملفات</strong>. سيتم تبديل رؤية هذا العنصر عند النقر على علامة تبويب أخرى. يقوم جافا سكريبت بتبديل الفئات للتحكم في رؤية المحتوى وتنسيقه.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>





            <div class="p-4 ">
              <div class="mt-10  p-10 shadow border-gray-500  rounded-md">
                <TableDoublons idsignal={id} />



              </div>


              <div class="mt-10  p-10   shadow border-gray-500  rounded-md">

                <button className="border-2 bg-gray-50 border-gray-100 hover:bg-gray-200/60 hover:text-black font-normal py-2 px-4 rounded-lg ml-2 mb-5">
                  رؤية كل الاخطارات المتعلقة بهذا الطفل
                  <img src={link} alt="link icon" className="ml-2 inline-block" />

                </button>
                <div class='flex' >
                  <p className="w-1/2  mb-4 text-base flex-auto font-semibold text-black"><strong className="text-gray-500 font-normal">الاسم: </strong> {enfant.prenom}</p>
                  <p className="w-1/2 mr-2 mb-4 text-base flex-auto font-semibold text-black"><strong className="text-gray-500 font-normal">اللقب: </strong> {enfant.nom}</p>
                </div>
                <div class='flex' >
                  <p className="w-1/2  mb-4 text-base flex-auto font-semibold text-black"><strong className="text-gray-500 font-normal">السن: </strong> {enfant.age}</p>
                  <p className="w-1/2 mr-2 mb-4 text-base flex-auto font-semibold text-black"><strong className="text-gray-500 font-normal">الجنس: </strong> {enfant.sexe}</p>
                </div>

                <div class='flex' >
                  <p className="w-1/2  mb-4 text-base flex-auto font-semibold text-black"><strong className="text-gray-500 font-normal">العنوان: </strong> {enfant.adresse}</p>
                  <p className="w-1/2 mr-2 mb-4 text-base flex-auto font-semibold text-black"><strong className="text-gray-500 font-normal">وضعية الوالدين: </strong> {enfant.situationparent}</p>
                </div>
                <div class='flex' >
                  <p className="w-1/2  mb-4 text-base flex-auto font-semibold text-black"><strong className="text-gray-500 font-normal">اسم الأب: </strong> {enfant.pereprenom}</p>
                  <p className="w-1/2 mr-2 mb-4 text-base flex-auto font-semibold text-black"><strong className="text-gray-500 font-normal">اسم الأم : </strong> {enfant.mereprenom}</p>
                </div>

              </div>

            </div>
          </div>



        </div>
      </html>
    </>
  )
}
