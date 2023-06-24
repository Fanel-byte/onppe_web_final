import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const Graph = () => {
  const [signalements, setSignalements] = useState([
    { hour: "08h", count: 12 },
    { hour: "010h", count: 15 },
    { hour: "12h", count: 3 },
    { hour: "14h", count: 1 },
    { hour: "16h", count: 15 },
    { hour: "18h", count: 1 },
    { hour: "20h", count: 10 },
    // ... (remaining data entries)
  ]);

  return (
    <div className="shadow border-gray-500 mr-5 ml-auto mt-2 pt-5 pb-4 pr-5 rounded-md  w-1/2">
      <div className="flex flex-col justify-between">
        <h2 className="text-xl text-right font-semibold  mb-2">معدل الاخطارات اليومي</h2>

        <div className="flex flex-grow h-40">
          <ResponsiveContainer >
            <LineChart data={signalements}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="hour" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="count" stroke="#FF2F2F" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Graph;
