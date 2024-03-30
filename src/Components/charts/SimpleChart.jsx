import React from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";

export default function SimpleChart({ title, data, dataKey, grid }) {
  return (
    <div className="border p-3 m-2 rounded-lg shadow-lg w-full ">
      <h1 className="text-violet-900 font-bold text-xl">{title}</h1>
      <ResponsiveContainer width="100%" aspect={3}>
        <LineChart data={data}>
          <XAxis dataKey={dataKey} stroke="#5550bd" />
          <Line type="monotone" dataKey={dataKey} stroke="#5550bd" />
          <Tooltip />
          {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="10" />}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
