import React from "react";
import axios from "axios";

import useCustomToast from "../../hooks/useCustomToast";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

// const data = [
//   { name: "Page A", uv: 400, pv: 2400, amt: 2400 },
//   { name: "Page B", uv: 300, pv: 2000, amt: 2400 },
//   { name: "Page C", uv: 200, pv: 2780, amt: 2400 },
//   { name: "Page D", uv: 278, pv: 1890, amt: 2400 },
//   { name: "Page E", uv: 189, pv: 2390, amt: 2400 },
//   { name: "Page F", uv: 239, pv: 3490, amt: 2400 },
//   { name: "Page G", uv: 349, pv: 2000, amt: 2400 },
// ];

export const UserDashboardChart = () => {
  const showToast = useCustomToast();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [data, setData] = React.useState<any | null>(null);

  const token = typeof window !== "undefined" ? JSON.parse(window.localStorage.getItem("USER_AUTH") || "{}") : {};

  const url = "https://phplaravel-1309375-4888543.cloudwaysapps.com/api/user/monthly-totals";

  React.useEffect(() => {
    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const transformedData = response.data.map((item: { total_deposits: any }) => ({
          ...item,
          amt: item.total_deposits,
        }));
        setData(transformedData || null);
        console.log("User chart data:", response.data);
      })
      .catch((error) => {
        showToast("error", error.response.data.message);
        console.error("Error fetching user data:", error);
      });
  }, []);

  return (
    //FIXME: ResponsiveContainer shows error Warning: YAxis: Support for defaultProps will be removed from function components in a future major release.
    <ResponsiveContainer width="100%" height={370}>
      <LineChart data={data}>
        <Line type="monotone" dataKey="total-deposits" stroke="#f7931a" />
        <Line type="monotone" dataKey="total_profits" stroke="#f7931a" />
        <CartesianGrid stroke="#fff" />
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
      </LineChart>
    </ResponsiveContainer>
  );
};
