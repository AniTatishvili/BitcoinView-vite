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
  //FIXME: ResponsiveContainer shows error Warning: YAxis: Support for defaultProps will be removed from function components in a future major release.
  <ResponsiveContainer width="100%" height={370}>
    <LineChart data={data}>
      <Line type="monotone" dataKey="uv" stroke="#f7931a" />
      <CartesianGrid stroke="#fff" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
    </LineChart>
  </ResponsiveContainer>
);
