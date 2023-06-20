import React,{useEffect,useState} from 'react';
import { Icon } from '@iconify/react';
import Axios from 'axios';  
export default function AddSignalement() {

    //infos to fill
    const [prenom,Setprenom] = useState('');
    const [nom,Setnom] = useState('');
    const [sexe,Setsexe] = useState('');
    const [age,Setage] = useState('');
    const [adresse,Setadresse] = useState('');
    const [wilayacode,Setwilayaid] = useState('');
    const [situationparent,Setrelation] = useState('');
    const [prenom_ar,Setprenomar] = useState('');
    const [nom_ar,Setnomar] = useState('');
    const [dateincident,Setdateincident] = useState('');
    const [descriptif,Setdescriptif] = useState('');
    const [typesignaleurid,Settypesignaleurid] = useState('');
    const [motifid,Setmotif] = useState('');
    


    const submitchild = () => {
        Axios.post('http://localhost:4000/enfants/create', {
        
        prenom: prenom,
        nom: nom,
        adresse: adresse,
        sexe:sexe,
        age: age,
        wilayacode: wilayacode,
        situationparent: situationparent,
      }).then(() => {
          alert('Child information successfully created');
       })};

    const submitsignal = () => {
       Axios.post('http://localhost:4000/signalement/create', {
              descriptif: descriptif,
              dateincident: dateincident,
              typesignaleurid: typesignaleurid,
              motifid: motifid,
            }).then(() => {
            alert('Signalement successfully created');
          })
          .catch((error) => {
            console.error('Error:', error);
          });
      }

    
 
       

      
    return (
        
        <>
          <center>
          <p class="font-bold text-3xl mt-16  mx-">هنا يمكنك الابلاغ عن اي خطر يمس بالاطفال</p>
          <p class="font-bold text-3xl  mt-2 mb-6 mx-">
          عن طريق ملء بطاقة الاخطار او الاتصال على الرقم الاخضر 
        1111</p> 
        
        <center>
        <button type="button" class="flex justify-center focus:outline-none text-white focus:ring-green-300 font-normal rounded-lg text-3xl px-5 py-2.5 mr-2 mb-2 dark:bg-green-500 dark:hover:bg-green-600">
        <Icon icon="fluent:call-16-regular" color="white" width="40" height="40" class='mr-3 pb-1'/>
            اتصل الان
        </button>
        </center>
  <h1 class="font-bold text-2xl mt-14 mb-10">بطاقة تلقي الاخطارات</h1> </center>
        


<form dir='rtl' class="mx-10 " >

    <div class="mb-10 mx-10">
        <label for="date" class="block mb-7 text-xl font-medium text-gray-300 dark:text-gray-950 "> تاريخ الإخطار</label>
        <input dir='rtl'  onChange={(e)=>{Setdateincident(e.target.value)}} name="dateincident" type="Date" id="dateincident" class="bg-gray-50 border border-gray-300 text-white-900 text-xl rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-5 dark:bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-yellow-500 dark:focus:border-yellow-500   " />
    </div> 
    
    <div class="mx-10 mb-10 flex justify-center items-center">
    <div class="flex-grow-0 flex-shrink-0 h-0.5 bg-yellow-600 rounded-full w-1/3"></div>
    <h2 class="text-2xl font-semibold text-gray-800 dark:text-black mx-4">معلومات الشخص المخطر</h2>
    <div class="flex-grow-0 flex-shrink-0 h-0.5 bg-yellow-600 rounded-full w-1/3"></div>
    </div>

    <div class="mb-10 mx-10">
        <label for="relation" class="block mb-7 text-xl font-medium text-gray-300 dark:text-black "> علاقة الشخص المخطر (القائم بالاخطار)</label>
        <select dir='rtl' onChange={(e)=>{Settypesignaleurid(e.target.value)}} type="text" id="relation" class="bg-gray-50 border border-yellow-300 text-white-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-5  dark:border-gray-600  dark:text-indigo-950 " >       
        <option value="1">الطفل</option>
        <option value="2">ممثله الشرعي</option>
        <option value="3">شخص طبيعية</option>
        <option value="4">شخص معنوي  </option>
        </select>
    
    </div>   


    <div class="mx-10 mb-10 flex justify-center items-center">
    <div class="flex-grow-0 flex-shrink-0 h-0.5 bg-yellow-600 rounded-full w-1/3"></div>
    <h2 class="text-2xl font-semibold text-gray-800 dark:text-black mx-4">معلومات الطفل في خطر</h2>
    <div class="flex-grow-0 flex-shrink-0 h-0.5 bg-yellow-600 rounded-full w-1/3"></div>
    </div>

    <div class="grid gap-10 mb-6 md:grid-cols-2 mx-10">
        <div>
        <label for="prenom"   class="block mb-7 text-xl font-medium text-gray-300 dark:text-black "> الإسم</label>
        <input dir='rtl'name="prenom" onChange={(a)=>{Setprenom(a.target.value)}} type="text" class="bg-gray-50 border border-yellow-300 text-white-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-5  dark:border-gray-600  dark:text-indigo-950 " />       
    
         </div>
         <div>
        <label for="nom"  class="block mb-7 text-xl font-medium text-gray-300 dark:text-black "> اللقب</label>
        <input dir='rtl' name="nom" onChange={(e)=>{Setnom(e.target.value)}}  type="text" class="bg-gray-50 border border-yellow-300 text-white-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-5  dark:border-gray-600  dark:text-indigo-950 " />       
         </div>
         <div>
        <label for="sexe" class="block mb-7 text-xl font-medium text-gray-300 dark:text-black "> الجنس</label>
        <select id="sexe" onChange={(e)=>{Setsexe(e.target.value)}} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-5 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-yellow-500 dark:focus:border-yellow-500">
        <option value="ذكر">ذكر</option>
        <option value="أنثى">أنثى</option>
        </select>
         </div>
         <div>
        <label for="prenom" class="block mb-7 text-xl font-medium text-gray-300 dark:text-black "> السن</label>
        <input dir='rtl' onChange={(e)=>{Setage(e.target.value)}}type="text" class="bg-gray-50 border border-yellow-300 text-white-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-5  dark:border-gray-600  dark:text-indigo-950 " />       
         </div>
       
    </div>
    
    <div class="mb-10 mx-10">
        <label for="relation" class="block mb-7 text-xl font-medium text-gray-300 dark:text-black ">الحالة العائلية للوالدين</label>
        <select dir='rtl' onChange={(e)=>{Setrelation(e.target.value)}} type="text" id="relation" class="bg-gray-50 border border-yellow-300 text-white-900 text-xl rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-5  dark:border-gray-600  dark:text-indigo-950 " >       
        <option value="متزوجان">متزوجان</option>
        <option value="مطلقان">مطلقان</option>
        <option value="أرمل(ة)">أرمل(ة)</option>
        <option value="  أخرى">  أخرى</option>
        </select>
    </div>   

        
    <div class="mx-10 mb-10 flex justify-center items-center">
    <div class="flex-grow-0 flex-shrink-0 h-0.5 bg-yellow-600 rounded-full w-1/3"></div>
    <h2 class="text-2xl font-semibold text-gray-800 dark:text-black mx-4">مكان تواجد الطفل في خطر </h2>
    <div class="flex-grow-0 flex-shrink-0 h-0.5 bg-yellow-600 rounded-full w-1/3"></div>
    </div>

    <div class="mb-10 mx-10">
        <label for="wilaya" class="block mb-7 text-xl font-medium text-gray-300 dark:text-black "> الولاية</label>
        <select id="sexe" onChange={(e)=>{Setwilayaid(e.target.value)}} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-5 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-yellow-500 dark:focus:border-yellow-500">
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

         <div class="mb-10 mx-10">
        <label for="adresse"  class="block mb-7 text-xl font-medium text-gray-300 dark:text-black "> العنوان</label>
        <input dir='rtl'onChange={(e)=>{Setadresse(e.target.value)}} type="text" id="adress" class="bg-gray-50 border border-yellow-300 text-white-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-5  dark:border-gray-600  dark:text-indigo-950 " />       
    </div>   

    <div class="mx-10 mb-10 flex justify-center items-center">
    <div class="flex-grow-0 flex-shrink-0 h-0.5 bg-yellow-600 rounded-full w-1/3"></div>
    <h2 class="text-2xl font-semibold text-gray-800 dark:text-black mx-4">سبب الاخطار</h2>
    <div class="flex-grow-0 flex-shrink-0 h-0.5 bg-yellow-600 rounded-full w-1/3"></div>
    </div>

    <div class="mb-10 mx-10">
        <label for="adress" class="block mb-7 text-xl font-medium text-gray-300 dark:text-black "> السبب الرئيسي للاخطار</label>
        <select onChange={(e)=>{Setmotif(e.target.value)}} dir='rtl' type="text" id="adress" class="bg-gray-50 border border-yellow-300 text-white-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-5  dark:border-gray-600  dark:text-indigo-950 " >       
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
    <div class="mb-10 mx-10">
        <label for="adress" class="block mb-7 text-xl font-medium text-gray-300 dark:text-black "> محتوى الإخطار مع شرح موجز</label>
        <input id="descriptif" name="descriptif" onChange={(e)=>{Setdescriptif(e.target.value)}} rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-yellow-500 focus:border-yellow-500 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-yellow-500 dark:focus:border-yellow-500" ></input>
         </div>   


         <div class="flex items-center justify-center  mb-10 mx-10">
    <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300  rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-100/80 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-transparent">
        <div class="flex flex-col items-center justify-center pt-5 pb-6">
            <svg aria-hidden="true" class="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
        <span class="mb-2 text-gray-500 dark:text-gray-400 text-2xl">تحميل ملف</span>
            <p class="text-xs text-gray-500 dark:text-gray-400">the maximum file size is 5mb (jpg. jpeg. png. pdf. doc)</p>
        </div>
        <input id="dropzone-file" type="file" class="hidden" />
    </label>
</div> 
<center>
<button onClick={() => { submitchild(); submitsignal(); }} type="button" class="flex justify-center focus:outline-none text-white focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-500 dark:hover:bg-green-600 ">إرسال</button>
</center>
</form>
        
        </>
    )
}
