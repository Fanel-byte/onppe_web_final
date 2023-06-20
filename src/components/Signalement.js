import React, {useState} from 'react';
import Table from './Table/Table';
import Filter from "./Filtre/Filter";
import {Icon} from '@iconify/react';
import searchIcon from '@iconify-icons/ic/search';
import DatePicker from "react-datepicker";
import ar from 'date-fns/locale/ar';
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from 'react-router-dom';
import {stateoption} from "./Filtre/FilterDB";
import {typeoption} from "./Filtre/FilterDB";
import {adressoption} from "./Filtre/FilterDB";

function Signal() {
    const [state,
        setState] = useState('');
    const [type,
        setType] = useState('');
    const [adress,
        setAdress] = useState('');
    const [source,
        setSource] = useState('');
    const [selectedDateFrom,
        setSelectedDateFrom] = useState(null);
    const [selectedDateTo,
        setSelectedDateTo] = useState(null);
    const [nameSearch,
        setNameSearch] = useState('');
        const navigate = useNavigate();
    return (
        <div className="flex flex-col relative h-6  mr-4 mt-4">
            <div className="text-right">
      <h1 className="text-2xl font-bold">تحليل التبليغات</h1>
      <h2 className="text-xl font-semibold">التبليغات</h2>
  </div>
  <div className="flex items-center space-x-4">

<div className="w-full">
    <Filter options={stateoption} selected={state} setSelected={setState}/>
</div>
<div className="w-full">
    <Filter options={adressoption} selected={source} setSelected={setSource}/>
</div>
<div className="w-full">
    <Filter options={adressoption} selected={adress} setSelected={setAdress}/>
</div>
<div className="w-full">
    <DatePicker
        placeholderText={'اختر التاريخ--الى'}
        selected={selectedDateTo}
        onChange={(date) => setSelectedDateTo(date)}
        locale={ar}
        dateFormat="dd/MM/yyyy"
        className=" block w-full py-2 pl-3 pr-10 text-base  border-gray-300  focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md text-right"/>
</div>
<div className="w-full">
    <DatePicker
        placeholderText={'اختر التاريخ--من'}
        selected={selectedDateFrom}
        onChange={(date) => setSelectedDateFrom(date)}
        locale={ar}
        dateFormat="dd/MM/yyyy"
        className="block w-full py-2 pl-3 pr-10 text-base border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md text-right"/>
</div>
<div className="w-full">
    <Filter options={typeoption} selected={type} setSelected={setType}/>
</div>
<div className="w-full relative">
    <input
        type="text"
        placeholder="الاسم و اللقب"
        value={nameSearch}
        onChange={(e) => setNameSearch(e.target.value)}
        className="block w-full py-2 pl-3 pr-10 text-base border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md text-right"/>
    <div
        className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
        <Icon icon={searchIcon} className="text-gray-400"/>
    </div>
    
</div>
</div>
 <button
  className="mb-5 flex flex-row justify-center items-center px-8 py-2 gap-10 bg-green-500 rounded-md"
  style={{
      width: '148px',
      height: '44px',
  }}
  onClick={() => navigate('/AddSignalement')}
  >
  اخطار جديد
  </button>
  <Table
      fstate={state || 'الكل'}
      ftype={type || 'الكل'}
      fadress={adress || 'الكل'}
      fsource={source || 'الكل'}
      fdatefrom={selectedDateFrom}
      fdateto={selectedDateTo}
      nameSearch={nameSearch}/>

        </div>
    );
}

export default Signal;