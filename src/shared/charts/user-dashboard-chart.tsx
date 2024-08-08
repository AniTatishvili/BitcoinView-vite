import React from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";

interface DataPoint {
  name: string;
  uv: number;
  pv: number;
  amt: number;
}

const data: DataPoint[] = [
  { name: "Page A", uv: 400, pv: 2400, amt: 2400 },
  { name: "Page B", uv: 300, pv: 2000, amt: 2400 },
  { name: "Page C", uv: 200, pv: 2780, amt: 2400 },
  { name: "Page D", uv: 278, pv: 1890, amt: 2400 },
  { name: "Page E", uv: 189, pv: 2390, amt: 2400 },
  { name: "Page F", uv: 239, pv: 3490, amt: 2400 },
  { name: "Page G", uv: 349, pv: 2000, amt: 2400 },
];

export const UserDashboardChart: React.FC = () => {
  return (
    <LineChart width={800} height={300} data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
    </LineChart>
  );
};
