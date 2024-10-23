import React from "react";
import axios from "axios";

import { Link } from "react-router-dom";
import { Flex, Box, Spinner } from "@chakra-ui/react";

import { useUserDepositStore } from "../../../../store/dashboard/user-deposit-payment-store";
import { PaymentTable } from "../../../../shared/ui/payment-table/payment-table";
import { TableFilter } from "../../../../shared/ui/table-filter";
import useCustomToast from "../../../../shared/hooks/useCustomToast";
import { useUserWithdrawStore } from "../../../../store/dashboard/user-withdraw-payment-store";

interface FilterState {
  created_at: string;
  payment_system: string;
  currency: string;
  transaction_status: string;
  amount_usd: number;
}

interface TransactionData {
  time: string;
  payment_system: string;
  transaction_type: string;
  btc_wallet: string;
  currency: string;
  amount_currency: string;
  amount_usd: number;
  destination: string;
  txid: string;
  transaction_status: string;
  created_at: string;
}

export const MoneyTransferDetailsTable = () => {
  const showToast = useCustomToast();
  const { userData } = useUserDepositStore();
  const { userWithdrawData } = useUserWithdrawStore();
  const [data, setData] = React.useState<TransactionData[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [filters, setFilters] = React.useState<FilterState>({
    created_at: "",
    payment_system: "All",
    currency: "All",
    transaction_status: "All",
    amount_usd: 0,
  });

  const token = typeof window !== "undefined" ? JSON.parse(window.localStorage.getItem("USER_AUTH") || "{}") : {};
  const url = "https://phplaravel-1309375-4888543.cloudwaysapps.com/api/user/transactions";

  const fetchData = () => {
    axios
      .get<TransactionData[]>(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const isWithdrawPage = /withdraw/.test(location.pathname);
        let filteredData;
        if (isWithdrawPage) {
          filteredData = response.data.filter((item) => item.transaction_type === "Withdrawal");
        } else if (/deposit/.test(location.pathname)) {
          filteredData = response.data.filter((item) => item.transaction_type === "Deposit");
        } else {
          filteredData = response.data;
        }
        setData(filteredData);
        setIsLoading(false);
        // console.log("User data:", response.data);
      })
      .catch((error) => {
        setIsLoading(false);
        showToast("error", error.response.data.message);
        console.error("Error fetching user data:", error);
      });
  };

  React.useEffect(() => {
    fetchData();
  }, [userData, userWithdrawData, url]);

  const filteredData = data.filter((item) => {
    const itemDate = new Date(item.created_at).toISOString().slice(0, 10);
    const filterDate = filters.created_at ? new Date(filters.created_at).toISOString().slice(0, 10) : "";

    return (
      (filterDate ? itemDate === filterDate : true) &&
      (filters.payment_system !== "All" ? item.payment_system === filters.payment_system : true) &&
      (filters.currency !== "All" ? item.currency === filters.currency : true) &&
      (filters.transaction_status !== "All" ? item.transaction_status === filters.transaction_status : true) &&
      (filters.amount_usd ? item.amount_usd.toString().includes(filters.amount_usd.toString()) : true)
    );
  });

  const handleFilterChange = (name: keyof FilterState, value: string) => {
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Box>
      <TableFilter filters={filters} onFilterChange={handleFilterChange} onRefresh={fetchData} />
      {/withdraw|wallet/.test(location.pathname) && (
        <Box color={"#f7931a"} fontSize={"14px"} textDecoration={"underline"} mt={2}>
          <Link to="https://bitcoinview.org/faq/deposit-hasnt-arrived/" target="_blank">
            Deposit hasn't arrived?
          </Link>
        </Box>
      )}
      {isLoading ? (
        <Flex justify={"center"} align={"center"} h={"100%"} pb={6}>
          <Spinner></Spinner>
        </Flex>
      ) : (
        <PaymentTable data={filteredData} />
      )}
    </Box>
  );
};
