import React, {useEffect, useState} from 'react';
import Axios from 'axios';
import {format} from 'date-fns';
import locale from 'date-fns/locale/ar-SA'; // Importez la localisation arabe de votre choix
import { v4 as uuidv4 } from 'uuid';

export default function AddSignalement() {

        //infos to fill
        const [prenom,
            Setprenom] = useState('');
        const [prenomsignaleur,
            Setprenomsignaleur] = useState('');
        const [prenompere,
            Setprenompere] = useState('');
        const [prenommere,
            Setprenommere] = useState('');
        const [nom,
            Setnom] = useState('');
        const [numero,
            Setnumero] = useState('');
        const [nomsignaleur,
            Setnomsignaleur] = useState('');
        const [sexe,
            Setsexe] = useState("ذكر");
        const [sexesignaleur,
            Setsexesignaleur] = useState("ذكر");
        const [age,
            Setage] = useState('');
        const [adresse,
            Setadresse] = useState('');
        const [adresseenfant,
            Setadresseenfant] = useState('');
        const [wilayacode,
            Setwilayaid] = useState('1');
        const [situationparent,
            Setrelation] = useState("متزوجان");
        const [dateincident] = useState(new Date());
        const [descriptif,
            Setdescriptif] = useState('');
        const [typesignaleurid,
            Settypesignaleurid] = useState('1');
        const [motifid,
            Setmotif] = useState('1');
        const [childid,
            setchildid] = useState('');
        const [signaleurid,
            setsignaleurid] = useState('');
        const [path,
            setpath] = useState('');
        const [signalementid,
            setsignalementid] = useState('');
    
            const handleFileUpload = (e) => {
                setpath(e.target.files[0]);
                console.log('Selected file:', path);
              };
              
            
              let idCounter = 400; // Initialize the ID counter
    
    
    const submitchild = () => {
      Axios.post('http://localhost:4000/enfants/create', {
        prenom: prenom,
        nom: nom,
        adresse: adresseenfant,
        sexe: sexe,
        age: age,
        wilayacode: wilayacode,
        situationparent: situationparent,
        pereprenom: prenompere,
        mereprenom: prenommere
      })
      .then((response) => {
        setchildid(response.data);
        submitsignaleur();
        console.log("childid"+response.data)
      });
    };
    
    const submitsignaleur = () => {
        const charId = uuidv4(); // Generate a unique UUID
        
        Axios.post('http://localhost:4000/citoyen/create', {
          prenom: prenomsignaleur,
          nom: nomsignaleur,
          sexe: sexesignaleur,
          tel: numero,
          id: charId
        })
        .then((response) => {
          setsignaleurid(response.data);  
          console.log("signaleurid"+response.data);  
        })
        .catch((error) => {
          console.error(error);
        });
      };

      const submitsignalement = (signaleurid,childid) => {
      Axios.post('http://localhost:4000/signalement/create', {
        descriptif: descriptif,
        dateincident: dateincident,
        typesignaleurid: typesignaleurid,
        motifid: motifid,
        enfantid: childid, // Use "enfantId" instead of "enfantid"
        adresse: adresse,
        citoyenid: signaleurid, // Use the passed citoyenId as signaleurid
        source: "عن طريق المنصة الرقمية"
      })
      .then((response) => {
       
        console.log("signalementid"+response.data);

        alert('Signalement successfully created');
        setsignalementid(response.data)
      })
      .catch((error) => {
        if (error.response) {
          console.error('Response data:', error.response.data);
          console.error('Response status:', error.response.status);
        } else {
          console.error('Error:', error.message);
        }
      });
      
    };
    
      
      useEffect(() => {
        if (signaleurid) {
          submitsignalement(signaleurid,childid); // Call submitsignalement directly with signaleurid
        }
      }, [signaleurid]
      );
      
    
              
        useEffect(() => {
            if (signalementid) {
                console.log('diri geste xD'+path.type);
                
                Axios.post('http://localhost:4000/images/add', {
    
                image: {
                    "description": "vide",
                    "signalementid": signalementid
                  },
                  path: path
                    
                }).then(() => {
                    alert('img information successfully created');
                })
            }
        }, [signalementid, path]);
    
        function formatDate(date) {
            return format(new Date(date), 'dd MMMM yyyy', {locale});
        }

    return (

        <div>
            <center>
                <p className="font-bold text-3xl mt-16  mx-">هنا يمكنك الابلاغ عن اي خطر يمس بالاطفال</p>
                <p className="font-bold text-3xl  mt-2 mb-6 mx-">
                    عن طريق ملء بطاقة الاخطار
                </p>

                <h1 className="font-bold text-2xl mt-14 mb-10">بطاقة تلقي الاخطارات</h1>
            </center>

            <form dir='rtl' className="mx-10 ">

                <div className="mb-10 mx-10">
                    <label
                        htmlFor="date"
                        className="block mb-7 text-xl font-medium text-gray-300 dark:text-black">
                        تاريخ الإخطار
                    </label>
                    <span
                        dir="rtl"
                        className="bg-gray-50 border border-yellow-300 text-white-900 text-xl rounded-lg p-5 dark:border-gray-600 dark:text-indigo-950">
                        {formatDate(dateincident)}
                    </span>
                </div>

                <div className="mx-10 mb-10 flex justify-center items-center">
                    <div
                        className="flex-grow-0 flex-shrink-0 h-0.5 bg-yellow-600 rounded-full w-1/3"></div>
                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-black mx-4">معلومات الشخص المخطر</h2>
                    <div
                        className="flex-grow-0 flex-shrink-0 h-0.5 bg-yellow-600 rounded-full w-1/3"></div>
                </div>

                <div className="mb-10 mx-10">
                    <label
                        htmlFor="relation"
                        className="block mb-7 text-xl font-medium text-gray-300 dark:text-black">
                        علاقة الشخص المخطر (القائم بالاخطار)
                    </label>
                    <select
                        dir='rtl'
                        onChange={(e) => {
                        Settypesignaleurid(e.target.value)
                    }}
                        type="text"
                        id="relation"
                        className="bg-gray-50 border border-yellow-300 text-white-900 text-xl rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-5 dark:border-gray-600 dark:text-indigo-950 appearance-none pr-10">
                        <option value="1">الطفل</option>
                        <option value="2">ممثله الشرعي</option>
                        <option value="3">شخص طبيعي</option>
                        <option value="4">شخص معنوي</option>
                    </select>
                </div>
                <div className="grid gap-10 mb-6 md:grid-cols-2 mx-10">
                    <div>
                        <label
                            htmlFor="prenom"
                            className="block mb-7 text-xl font-medium text-gray-300 dark:text-black ">
                            الإسم</label>
                        <input
                            dir='rtl'
                            name="prenom"
                            onChange={(a) => {
                            Setprenomsignaleur(a.target.value)
                        }}
                            type="text"
                            className="bg-gray-50 border border-yellow-300 text-white-900 text-xl rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-5  dark:border-gray-600  dark:text-indigo-950 "/>

                    </div>
                    <div>
                        <label
                            htmlFor="nom"
                            className="block mb-7 text-xl font-medium text-gray-300 dark:text-black ">
                            اللقب</label>
                        <input
                            dir='rtl'
                            name="nom"
                            onChange={(e) => {
                            Setnomsignaleur(e.target.value)
                        }}
                            type="text"
                            className="bg-gray-50 border border-yellow-300 text-white-900 text-xl rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-5  dark:border-gray-600  dark:text-indigo-950 "/>
                    </div>
                    <div>
                        <label
                            htmlFor="sexe"
                            className="block mb-7 text-xl font-medium text-gray-300 dark:text-black ">
                            الجنس</label>
                        <select
                            id="sexe"
                            onChange={(e) => {
                            Setsexesignaleur(e.target.value)
                        }}
                            className="bg-gray-50 border border-yellow-300 text-white-900 text-xl rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-5 dark:border-gray-600 dark:text-indigo-950 appearance-none pr-10">
                            <option value="ذكر">ذكر</option>
                            <option value="أنثى">أنثى</option>
                        </select>
                    </div>
                    <div>
                        <label
                            htmlFor="nom"
                            className="block mb-7 text-xl font-medium text-gray-300 dark:text-black ">
                            رقم الهاتف</label>
                        <input
                            dir='rtl'
                            name="nom"
                            onChange={(e) => {
                            Setnumero(e.target.value)
                        }}
                            type="text"
                            className="bg-gray-50 border border-yellow-300 text-white-900 text-xl rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-5  dark:border-gray-600  dark:text-indigo-950 "/>
                    </div>

                </div>

                <div className="mx-10 mb-10 flex justify-center items-center">
                    <div
                        className="flex-grow-0 flex-shrink-0 h-0.5 bg-yellow-600 rounded-full w-1/3"></div>
                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-black mx-4">معلومات الطفل في خطر</h2>
                    <div
                        className="flex-grow-0 flex-shrink-0 h-0.5 bg-yellow-600 rounded-full w-1/3"></div>
                </div>

                <div className="grid gap-10 mb-6 md:grid-cols-2 mx-10">
                    <div>
                        <label
                            htmlFor="prenom"
                            className="block mb-7 text-xl font-medium text-gray-300 dark:text-black ">
                            الإسم</label>
                        <input
                            dir='rtl'
                            name="prenom"
                            onChange={(a) => {
                            Setprenom(a.target.value)
                        }}
                            type="text"
                            className="bg-gray-50 border border-yellow-300 text-white-900 text-xl rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-5  dark:border-gray-600  dark:text-indigo-950 "/>

                    </div>
                    <div>
                        <label
                            htmlFor="nom"
                            className="block mb-7 text-xl font-medium text-gray-300 dark:text-black ">
                            اللقب</label>
                        <input
                            dir='rtl'
                            name="nom"
                            onChange={(e) => {
                            Setnom(e.target.value)
                        }}
                            type="text"
                            className="bg-gray-50 border border-yellow-300 text-white-900 text-xl rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-5  dark:border-gray-600  dark:text-indigo-950 "/>
                    </div>
                    <div>
                        <label
                            htmlFor="sexe"
                            className="block mb-7 text-xl font-medium text-gray-300 dark:text-black ">
                            الجنس</label>
                        <select
                            id="sexe"
                            onChange={(e) => {
                            Setsexe(e.target.value)
                        }}
                            className="bg-gray-50 border border-yellow-300 text-white-900 text-xl rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-5 dark:border-gray-600 dark:text-indigo-950 appearance-none pr-10">
                            <option value="ذكر">ذكر</option>
                            <option value="أنثى">أنثى</option>
                        </select>
                    </div>
                    <div>
                        <label
                            htmlFor="prenom"
                            className="block mb-7 text-xl font-medium text-gray-300 dark:text-black ">
                            السن</label>
                        <input
                            dir='rtl'
                            onChange={(e) => {
                            Setage(e.target.value)
                        }}
                            className="bg-gray-50 border border-yellow-300 text-white-900 text-xl rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-5  dark:border-gray-600  dark:text-indigo-950 "
                            type="text"/>
                    </div>

                    <div>
                        <label
                            htmlFor="prenom"
                            className="block mb-7 text-xl font-medium text-gray-300 dark:text-black ">
                            إسم الاب</label>
                        <input
                            dir='rtl'
                            name="prenom"
                            onChange={(a) => {
                            Setprenompere(a.target.value)
                        }}
                            type="text"
                            className="bg-gray-50 border border-yellow-300 text-white-900 text-xl rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-5  dark:border-gray-600  dark:text-indigo-950 "/>

                    </div>
                    <div>
                        <label
                            htmlFor="prenom"
                            className="block mb-7 text-xl font-medium text-gray-300 dark:text-black ">
                            إسم الام</label>
                        <input
                            dir='rtl'
                            name="prenom"
                            onChange={(a) => {
                            Setprenommere(a.target.value)
                        }}
                            type="text"
                            className="bg-gray-50 border border-yellow-300 text-white-900 text-xl rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-5  dark:border-gray-600  dark:text-indigo-950 "/>

                    </div>

                </div>
                <div className="mb-10 mx-10">
                    <label
                        htmlFor="adresse"
                        className="block mb-7 text-xl font-medium text-gray-300 dark:text-black ">
                        العنوان</label>
                    <input
                        dir='rtl'
                        onChange={(e) => {
                        Setadresseenfant(e.target.value)
                    }}
                        type="text"
                        id="adress"
                        className="bg-gray-50 border border-yellow-300 text-white-900 text-xl rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-5  dark:border-gray-600  dark:text-indigo-950 "/>
                </div>

                <div className="mb-10 mx-10">
                    <label
                        htmlFor="relation"
                        className="block mb-7 text-xl font-medium text-gray-300 dark:text-black">
                        الحالة العائلية للوالدين
                    </label>
                    <select
                        dir='rtl'
                        onChange={(e) => {
                        Setrelation(e.target.value)
                    }}
                        type="text"
                        id="relation"
                        className="bg-gray-50 border border-yellow-300 text-white-900 text-xl rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-5 dark:border-gray-600 dark:text-indigo-950 appearance-none pr-10">
                        <option value="متزوجان">متزوجان</option>
                        <option value="مطلقان">مطلقان</option>
                        <option value="أرمل(ة)">أرمل(ة)</option>
                        <option value="أخرى">أخرى</option>
                    </select>

                </div>

                <div className="mx-10 mb-10 flex justify-center items-center">
                    <div
                        className="flex-grow-0 flex-shrink-0 h-0.5 bg-yellow-600 rounded-full w-1/3"></div>
                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-black mx-4">مكان تواجد الطفل في خطر
                    </h2>
                    <div
                        className="flex-grow-0 flex-shrink-0 h-0.5 bg-yellow-600 rounded-full w-1/3"></div>
                </div>

                <div className="mb-10 mx-10">
                    <label
                        htmlFor="wilaya"
                        className="block mb-7 text-xl font-medium text-gray-300 dark:text-black">
                        الولاية
                    </label>
                    <select
                        id="wilaya"
                        onChange={(e) => {
                        Setwilayaid(e.target.value)
                    }}
                        className="bg-gray-50 border border-yellow-300 text-white-900 text-xl rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-1/3 p-5 dark:border-gray-600 dark:text-indigo-950 appearance-none pr-10">
                        <option value="1">أدرار</option>
                        <option value="2">الشلف</option>
                        <option value="3">الأغواط</option>
                        <option value="4">أم البواقي</option>
                        <option value="5">باتنة</option>
                        <option value="6">بجاية</option>
                        <option value="7">بسكرة</option>
                        <option value="8">بشار</option>
                        <option value="9">البليدة</option>
                        <option value="10">البويرة</option>
                        <option value="11">تمنراست</option>
                        <option value="12">تبسة</option>
                        <option value="13">تلمسان</option>
                        <option value="14">تيارت</option>
                        <option value="15">تيزي وزو</option>
                        <option value="16">الجزائر</option>
                        <option value="17">الجلفة</option>
                        <option value="18">جيجل</option>
                        <option value="19">سطيف</option>
                        <option value="20">سعيدة</option>
                        <option value="21">سكيكدة</option>
                        <option value="22">سيدي بلعباس</option>
                        <option value="23">عنابة</option>
                        <option value="24">قالمة</option>
                        <option value="25">قسنطينة</option>
                        <option value="26">المدية</option>
                        <option value="27">مستغانم</option>
                        <option value="28">المسيلة</option>
                        <option value="29">معسكر</option>
                        <option value="30">ورقلة</option>
                        <option value="31">وهران</option>
                        <option value="32">البيض</option>
                        <option value="33">إليزي</option>
                        <option value="34">برج بوعريريج</option>
                        <option value="35">بومرداس</option>
                        <option value="36">الطارف</option>
                        <option value="37">تندوف</option>
                        <option value="38">تيسمسيلت</option>
                        <option value="39">الوادي</option>
                        <option value="40">خنشلة</option>
                        <option value="41">سوق أهراس</option>
                        <option value="42">تيبازة</option>
                        <option value="43">ميلة</option>
                        <option value="44">عين الدفلى</option>
                        <option value="45">النعامة</option>
                        <option value="46">عين تموشنت</option>
                        <option value="47">غرداية</option>
                        <option value="48">غليزان</option>
                        <option value="49">المغير</option>
                        <option value="50">المنيعة</option>
                        <option value="51">أولاد جلال</option>
                        <option value="52">برج باجي مختار</option>
                        <option value="53">بني عباس</option>
                        <option value="54">تيميمون</option>
                        <option value="55">تقرت</option>
                        <option value="56">جانت</option>
                        <option value="57">عين صالح</option>
                        <option value="58">عين قزام</option>
                    </select>
                </div>

                <div className="mb-10 mx-10">
                    <label
                        htmlFor="adresse"
                        className="block mb-7 text-xl font-medium text-gray-300 dark:text-black ">
                        العنوان</label>
                    <input
                        dir='rtl'
                        onChange={(e) => {
                        Setadresse(e.target.value)
                    }}
                        type="text"
                        id="adress"
                        className="bg-gray-50 border border-yellow-300 text-white-900 text-xl rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-5  dark:border-gray-600  dark:text-indigo-950 "/>
                </div>

                <div className="mx-10 mb-10 flex justify-center items-center">
                    <div
                        className="flex-grow-0 flex-shrink-0 h-0.5 bg-yellow-600 rounded-full w-1/3"></div>
                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-black mx-4">سبب الاخطار</h2>
                    <div
                        className="flex-grow-0 flex-shrink-0 h-0.5 bg-yellow-600 rounded-full w-1/3"></div>
                </div>

                <div className="mb-10 mx-10">
                    <label
                        htmlFor="adress"
                        className="block mb-7 text-xl font-medium text-gray-300 dark:text-black ">
                        السبب الرئيسي للاخطار</label>
                    <select
                        onChange={(e) => {
                        Setmotif(e.target.value)
                    }}
                        dir='rtl'
                        type="text"
                        id="adress"
                        className="bg-gray-50 border border-yellow-300 text-white-900 text-xl rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-5 dark:border-gray-600 dark:text-indigo-950 appearance-none pr-10">
                        <option value="1">فقدان الطفل لوالديه وبقائه دون سند عائلي</option>
                        <option value="2">تعريض الطفل للإهمال أو التشرد</option>
                        <option value="3">المساس بحقه في التعليم</option>
                        <option value="4">التسول بالطفل أو تعريضه للتسول</option>
                        <option value="5">عجز من يقوم برعاية الطفل عن التحكم في تصرفاته</option>
                        <option value="6">التقصير البين والمتواصل في التربية والرعاية</option>
                        <option value="7">سوء معاملة الطفل</option>
                        <option value="8">الطفل ضحية جريمة من ممثله الشرعي</option>
                        <option value="9">الطفل ضحية جريمة من أي شخص آخر</option>
                        <option value="10">الاستغلال الجنسي للطفل بمختلف أشكاله</option>
                        <option value="11">الاستغلال الاقتصادي للطفل</option>
                        <option value="12">وقوع الطفل ضحية نزاعات مسلحة</option>
                        <option value="13">الطفل اللاجئ</option>
                    </select>
                </div>
                <div className="mb-10 mx-10">
                    <label
                        htmlFor="adress"
                        className="block mb-7 text-xl font-medium text-gray-300 dark:text-black ">
                        محتوى الإخطار مع شرح موجز</label>
                    <input
                        id="descriptif"
                        name="descriptif"
                        onChange={(e) => {
                        Setdescriptif(e.target.value)
                    }}
                        rows="4"
                        className="bg-gray-50 border border-yellow-300 text-white-900 text-xl rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-5  dark:border-gray-600  dark:text-indigo-950 "/>
                </div>

                <div className="flex items-center justify-center mb-10 mx-10">
                     <label
                        htmlFor="dropzone-file"
                        className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-100/80 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-transparent">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg
                                aria-hidden="true"
                                className="w-10 h-10 mb-3 text-gray-400"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                            </svg>
                            <span className="mb-2 text-gray-500 dark:text-gray-400 text-2xl">تحميل ملف</span>
                            <p className="text-xs text-gray-500 dark:text-gray-400">the maximum file size is 5mb (jpg. jpeg. png. pdf. doc)</p>
                        </div>
                        <input id="dropzone-file" type="file" className="hidden" onChange={handleFileUpload} // Add the onChange event handler
                        />
                    </label> 
                </div>
                <center>
                    <button
                        onClick={() => {
                        submitchild();
                    }}
                        type="button"
                        className="flex justify-center focus:outline-none bg-green-500 text-white focus:ring-green-300 font-medium rounded-lg text-lg px-5 py-2.5 mr-2 mb-2 w-1/3 dark:bg-green-500 dark:hover:bg-green-600">
                        إرسال
                    </button>
                </center>

            </form>

        </div>
    )
}
