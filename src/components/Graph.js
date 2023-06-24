import React, { useState, useEffect } from "react";
import axios from "axios";
import { format } from "d3-format";
import {
  XYPlot,
  XAxis,
  YAxis,
  HorizontalGridLines,
  VerticalGridLines,
  LineMarkSeries
} from "react-vis";

const Graph = () => {
  const [signalements, setSignalements] = useState([]);
  const [maxSignalements, setMaxSignalements] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/signalement/getNumberSignalementsByHour');
        console.log("res", response);
        const data = response.data.map((item) => ({
          x: item.hour,
          y: item.signalement
        }));
        setSignalements(data);
        const max = Math.max(...response.data.map(item => item.signalement));
        setMaxSignalements(max);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="shadow border-gray-500 mr-5 ml-auto pt-5 pb-4 pr-5 rounded-md w-1/2">
      <div className="flex flex-col justify-between">
        <h2 className="text-xl text-right font-semibold mt-1 mb-1">معدل الاخطارات اليومي</h2>

        <div className="flex flex-grow h-40 w-full">
          <XYPlot
            xDomain={[8, 24]}
            yDomain={[0, maxSignalements]}
            width={570}
            height={170}
          >
            <HorizontalGridLines
              style={{
                stroke: 'gray',
                strokeWidth: 0.5,
              }}
            />
            <VerticalGridLines  className="axis-x border-gray-200"
              style={{
                stroke: 'gray',
                strokeWidth: 0.5,
              }}
            />
            <XAxis
          
              className="axis-x border-gray-200"
              tickValues={[...Array(17).keys()].map(i => i + 8)}
              tickFormat={(v) => (v === 24 ? "24h " : `${v}h`)}
            />
            <YAxis
              className="axis-y  border-gray-200"
              tickTotal={Math.min(5, maxSignalements)}
              tickFormat={(v) => Math.round(v)}
            />
           <LineMarkSeries
  className="linemark-series-example"
  style={{
    strokeWidth: '2px',
    fill: 'transparent',
  }}
  lineStyle={{ stroke: '#FF2F2F' }}
  markStyle={{
    stroke: '#FF2F2F',
    size: 2, // Adjust the size of the circles
  }}
  curve="curveMonotoneX"
  data={signalements}
/>

          </XYPlot>
        </div>
      </div>
    </div>
  );
};

export default Graph;
