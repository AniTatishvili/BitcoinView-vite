import React from "react";
import axios from "axios";
import useCustomToast from "../../hooks/useCustomToast";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { Flex, Spinner } from "@chakra-ui/react";

// Define an interface for the API response
interface MonthlyTotals {
  month: string;
  total_deposits: number;
  total_profits: number;
}

// Define an interface for the chart data
interface ChartData extends MonthlyTotals {
  month: string;
}

const allMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const getLastSixMonths = (months: string[]): string[] => {
  if (months.length >= 6) {
    return months.slice(-6);
  } else {
    const lastMonth = months[months.length - 1];
    let lastMonthIndex = allMonths.indexOf(lastMonth);
    const result = [...months];

    while (result.length < 6) {
      const nextMonthIndex = (lastMonthIndex + 1) % 12;
      result.push(allMonths[nextMonthIndex]);
      lastMonthIndex = nextMonthIndex;
    }

    return result;
  }
};

export const UserDashboardChart: React.FC = () => {
  const showToast = useCustomToast();
  const [data, setData] = React.useState<ChartData[]>([]);

  const token = typeof window !== "undefined" ? JSON.parse(window.localStorage.getItem("USER_AUTH") || "{}") : {};

  const url = "https://phplaravel-1309375-4888543.cloudwaysapps.com/api/user/monthly-totals";

  React.useEffect(() => {
    axios
      .get<MonthlyTotals[]>(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const transformedData: ChartData[] = response.data.map((item) => {
          const monthName = item.month.split(" ")[0];
          return {
            month: monthName,
            total_deposits: item.total_deposits,
            total_profits: item.total_profits,
          };
        });

        const months = transformedData.map((item) => item.month);
        const lastSixMonths = getLastSixMonths(months);

        const completeData = lastSixMonths.map((month) => {
          const monthData = transformedData.find((data) => {
            const match = data.month.toLowerCase() === month.toLowerCase();
            return match;
          });

          return monthData || { month, total_deposits: 0, total_profits: 0 };
        });

        setData(completeData);
      })
      .catch((error) => {
        showToast("error", error.response?.data?.message || "An error occurred");
        console.error("Error fetching user data:", error);
      });
  }, []);

  const maxYAxisValue = Math.max(50000, ...data.map((item) => Math.round(item.total_deposits)));

  if (!data.length) {
    return (
      <Flex w={"100%"} h={"100%"} justify={"center"} align={"center"}>
        <Spinner size={"xl"} color={"#f7931a"} />
      </Flex>
    );
  }

  return (
    <ResponsiveContainer width="100%" height={370}>
      <LineChart data={data}>
        <Line type="monotone" dataKey="total_deposits" stroke="#f7931a" name="Total deposits" />
        <Line type="monotone" dataKey="total_profits" stroke="#4caf50" name="Total profits" />
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis dataKey="month" />
        <YAxis domain={[0, maxYAxisValue]} />
        <Tooltip />
        <Legend />
      </LineChart>
    </ResponsiveContainer>
  );
};
