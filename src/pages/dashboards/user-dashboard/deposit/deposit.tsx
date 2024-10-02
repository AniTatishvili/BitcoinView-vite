import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Flex, Box, Text } from "@chakra-ui/react";
import { PaymentTable } from "../../../../shared/ui/payment-table/payment-table";
import { TableFilter } from "../../../../shared/ui/table-filter";
import { BreadCrumb } from "../../../../shared/ui/bread-crumb";
import { DashboardDepositSteps } from "../../../../components/dashboards/dashboard-deposit-steps";
import { DashboardPaymentMethods } from "../../../../components/dashboards/dashboard-payment-methods";

interface FilterState {
  created_at: string;
  transaction_type: string;
  currency: string;
  transaction_status: string;
  amount_usd: number;
}

interface TransactionData {
  time: string;
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

export const Deposit: React.FC = () => {
  const [data, setData] = React.useState<TransactionData[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [filters, setFilters] = React.useState<FilterState>({
    created_at: "",
    transaction_type: "All",
    currency: "All",
    transaction_status: "All",
    amount_usd: 0,
  });

  const items = [
    { url: "/user-dashboard/overview", text: "Home", isCurrentPage: false },
    { url: "/user-dashboard/wallet", text: "Wallet", isCurrentPage: false },
    { url: "/user-dashboard/deposit", text: "Deposit", isCurrentPage: true },
  ];

  const token = typeof window !== "undefined" ? JSON.parse(window.localStorage.getItem("USER_AUTH") || "{}") : {};
  const url = "https://phplaravel-1309375-4888543.cloudwaysapps.com/api/user/transactions";

  React.useEffect(() => {
    axios
      .get<TransactionData[]>(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setData(response.data);
        setIsLoading(false);
        console.log("User data:", response.data);
      })
      .catch((error) => {
        setIsLoading(false);
        console.error("Error fetching user data:", error);
      });
  }, []);

  const filteredData = data.filter((item) => {
    const itemDate = new Date(item.created_at).toISOString().slice(0, 10);
    const filterDate = filters.created_at ? new Date(filters.created_at).toISOString().slice(0, 10) : "";

    return (
      (filterDate ? itemDate === filterDate : true) &&
      (filters.transaction_type !== "All" ? item.transaction_type === filters.transaction_type : true) &&
      (filters.currency !== "All" ? item.currency === filters.currency : true) &&
      (filters.transaction_status !== "All" ? item.transaction_status === filters.transaction_status : true) &&
      (filters.amount_usd ? item.amount_usd.toString().includes(filters.amount_usd.toString()) : true)
    );
  });

  console.log(filteredData, "filteredData");
  const handleFilterChange = (name: keyof FilterState, value: string) => {
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Flex w={"100%"} h={"calc(100vh - 90px)"} overflow={"hidden"} pb={"1rem"}>
      <Flex
        w={"100%"}
        h={"100%"}
        overflowY={"scroll"}
        flexDir={{ base: "column", xl: "row" }}
        p={"1rem"}
        gap={"1rem"}
        css={{
          "&::-webkit-scrollbar": {
            width: "4px",
          },
          "&::-webkit-scrollbar-track": {
            width: "6px",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "#f7931a",
            borderRadius: "24px",
          },
        }}>
        <Flex flexDir={"column"} gap={4}>
          <BreadCrumb items={items} />
          <Flex w={"100%"} h={"fit-content"} flexDir={"column"} backgroundColor={"#1F2027"} borderRadius={"8px"} p={"1rem"} gap={4}>
            <Text as="h3">Cards & Payment method</Text>
            <Flex w={"100%"} flexDir={{ base: "column", lg: "row" }} justify={"space-between"} gap={4}>
              <DashboardDepositSteps amount_usd={undefined} />
              <Box>
                <Flex flexDir={{ base: "column", lg: "row" }} fontSize={"14px"} gap={4} mb={"1rem"}>
                  <Box bg={"#3C3C3C"} borderRadius={"8px"} p={"5px"}>
                    <Link to="/user-dashboard/transaction-history">Transactions history</Link>
                  </Box>
                  <Box bg={"#3C3C3C"} borderRadius={"8px"} p={"5px"}>
                    <Link to="/user-dashboard/add-payment-method">Add new payment method</Link>
                  </Box>
                </Flex>
                <DashboardPaymentMethods />
              </Box>
            </Flex>
          </Flex>
          <Flex w={"100%"} h={"fit-content"} flexDir={"column"} backgroundColor={"#1F2027"} borderRadius={"8px"} p={"1rem"} gap={4}>
            <Text as="h3">Recent Transactions</Text>
            <TableFilter filters={filters} onFilterChange={handleFilterChange} />
            {isLoading ? (
              <Flex justify={"center"} align={"center"} h={"100%"}>
                <div>Loading..</div>
              </Flex>
            ) : (
              <Flex
                overflowX={"scroll"}
                css={{
                  "&::-webkit-scrollbar": {
                    width: "4px",
                    height: "4px",
                  },
                  "&::-webkit-scrollbar-track": {
                    width: "6px",
                  },
                  "&::-webkit-scrollbar-thumb": {
                    background: "#f7931a",
                    borderRadius: "24px",
                  },
                }}>
                <PaymentTable data={filteredData} />
              </Flex>
            )}
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
