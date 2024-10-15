import { useState, useEffect } from "react";
import axios from "axios";

const useUserBalance = () => {
  const [userBalance, setUserBalance] = useState<string>("0.00");
  const [estimatedBalance, setEstimateBalance] = useState<string>("0.00");

  const token = typeof window !== "undefined" ? JSON.parse(window.localStorage.getItem("USER_AUTH") || "{}") : {};
  const url = "https://phplaravel-1309375-4888543.cloudwaysapps.com/api/user/balance";

  const fetchBalance = () => {
    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setUserBalance(response.data.current_balance);
        setEstimateBalance(response.data.estimated_balance);
        // console.log("User balanse:", response.data.current_balance);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  };

  useEffect(() => {
    fetchBalance();

    const interval = setInterval(() => {
      fetchBalance();
    }, 10000);

    return () => clearInterval(interval);
  }, [userBalance, estimatedBalance]);

  return { userBalance, estimatedBalance };
};

export default useUserBalance;
