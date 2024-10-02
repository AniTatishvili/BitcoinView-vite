import React from "react";
import axios from "axios";

import { Link } from "react-router-dom";
import { Flex, Box, Text, Button } from "@chakra-ui/react";
import { MdOutlineDoneOutline } from "react-icons/md";
import { TbCopyPlusFilled } from "react-icons/tb";
import { PButton } from "../../../../shared/ui/buttons";
import { PaymentTable } from "../../../../shared/ui/payment-table/payment-table";
import { TableFilter } from "../../../../shared/ui/table-filter";

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

export const WalletContent = () => {
  const [data, setData] = React.useState<TransactionData[]>([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [filters, setFilters] = React.useState<FilterState>({
    created_at: "",
    transaction_type: "All",
    currency: "All",
    transaction_status: "All",
    amount_usd: 0,
  });

  const referralLink = "https://CPa_erefff";
  const referralId = "CPa_erefff";

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      console.log("Copied to clipboard!");
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

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
    <Flex w={"100%"} flexDir={"column"} gap={4}>
      <Flex
        w={"100%"}
        h={"fit-content"}
        backgroundColor={"#1F2027"}
        flexDir={{ base: "column", lg: "row" }}
        justify={"space-between"}
        gap={4}
        borderRadius={"8px"}
        p={"1rem"}>
        <Flex flexDir={"column"} gap={8}>
          <Box>
            <Text>Estimated Balance</Text>
            <Box>0.00 USD</Box>
          </Box>
          <Box>
            <Text>Current Balance</Text>
            <Box color={"#6bd98f"}>$0.00 USD</Box>
          </Box>
        </Flex>
        <Flex flexDir={"column"} gap={4}>
          <Flex gap={4}>
            <Flex bg={"#79797D"} borderRadius={"8px"} color={"#fff"} fontWeight={"600"} px={"0.5rem"} py={"0.4rem"}>
              Silver
            </Flex>
            <Flex alignItems={"center"} bg={"#79797D"} borderRadius={"8px"} color={"#fff"} fontWeight={"600"} px={"0.5rem"} py={"0.4rem"} gap={2}>
              Account{" "}
              <Box color={"green"}>
                <MdOutlineDoneOutline />
              </Box>
            </Flex>
          </Flex>
          <Flex flexDir={"column"} gap={2}>
            <Flex justify={"space-between"} align={"center"} bg={"#35363D"} borderRadius={"8px"} color={"#fff"} p={"0.5rem"}>
              <Text>Lite Referral ID</Text>
              <Flex alignItems={"center"}>
                <Text>{referralId}</Text>
                <Button bg={"none"} color={"#fff"} p={0} _hover={{ bg: "none" }} onClick={() => copyToClipboard(referralId)}>
                  <TbCopyPlusFilled />
                </Button>
              </Flex>
            </Flex>
            <Flex justify={"space-between"} align={"center"} bg={"#35363D"} borderRadius={"8px"} color={"#fff"} p={"0.5rem"}>
              <Text>Lite Referral Link</Text>
              <Flex alignItems={"center"}>
                <Text>{referralLink}</Text>
                <Button bg={"none"} p={0} color={"#fff"} _hover={{ bg: "none" }} onClick={() => copyToClipboard(referralLink)}>
                  <TbCopyPlusFilled />
                </Button>
              </Flex>
            </Flex>
            <PButton w={"100%"}>Invite Friends</PButton>
          </Flex>
        </Flex>
        <Flex h={"fit-content"} flexDir={"row"} gap={4} color={"#fff"}>
          <Link to="/user-dashboard/deposit">Deposit</Link>
          <Link to="/user-dashboard/withdraw">Withdraw</Link>
        </Flex>
      </Flex>

      <Flex w={"100%"} h={"fit-content"} flexDir={"column"} backgroundColor={"#1F2027"} borderRadius={"8px"} p={"1rem"} gap={4}>
        <Text as="h3">Recent Transactions</Text>

        <TableFilter filters={filters} onFilterChange={handleFilterChange} />
        <Box color={"#f7931a"} fontSize={"14px"} textDecoration={"underline"}>
          <Link to="/">Deposit hasn't arrived?</Link>
        </Box>
        <PaymentTable data={filteredData} />
      </Flex>
    </Flex>
  );
};
