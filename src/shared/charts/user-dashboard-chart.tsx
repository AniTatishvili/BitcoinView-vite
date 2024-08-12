import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Page A", uv: 400, pv: 2400, amt: 2400 },
  { name: "Page B", uv: 300, pv: 2000, amt: 2400 },
  { name: "Page C", uv: 200, pv: 2780, amt: 2400 },
  { name: "Page D", uv: 278, pv: 1890, amt: 2400 },
  { name: "Page E", uv: 189, pv: 2390, amt: 2400 },
  { name: "Page F", uv: 239, pv: 3490, amt: 2400 },
  { name: "Page G", uv: 349, pv: 2000, amt: 2400 },
];

export const UserDashboardChart = () => (
  <ResponsiveContainer width="100%" height={220}>
    <LineChart data={data}>
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
    </LineChart>
  </ResponsiveContainer>
);
