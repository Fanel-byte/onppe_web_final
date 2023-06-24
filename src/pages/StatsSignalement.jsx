import React from "react";
import Graph from "../components/Graph";
import SourceSignalStats from "../components/SourceSignalStats";
import CauseSignalStats from "../components/CauseSignalStats";
import {useEffect,useState} from 'react';
import axios from 'axios';

export default function StatsEnfants() {
  const [statistique, setStatistique] = useState([])
  useEffect(() => {
      axios.get('http://localhost:4000/enfants/getEnfantsStats').then((response) => {
          setStatistique(response.data)
      })

  }, [])


  return (
    <div flex flex-col>
      <div className="StatsSinalements flex flex-wrap flex-row-reverse mr-5 ml-5 mt-2 ">
        <div className="text-right mt-4 flex-auto text-2xl font-bold">
          إحصائيات الاخطارات
        </div>
        <button className="flex flex-row  items-center px-6 py-1 ml-3  bg-green-500 rounded-md text-white text-lg">
  طباعة
</button>

<button className="flex flex-row  items-center px-6 py-1 bg-white rounded-md text-gray-700 text-lg border border-gray-300">
  تصدير
</button>

      </div>
      <div className="flex flex-col">

      <div className="flex flex-row">
      <SourceSignalStats />

        <Graph />

      </div>
      <CauseSignalStats/>
      </div>

    </div>
  );
}
