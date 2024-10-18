import { Button, Flex, Box, Select, Input } from "@chakra-ui/react";
import { GrRefresh } from "react-icons/gr";

interface Filters {
  amount_usd: string | number | readonly string[] | undefined;
  created_at: string;
  payment_system: string;
  currency: string;
  transaction_status: string;
}

interface TableFilterProps {
  filters: Filters;
  onFilterChange: (name: keyof Filters, value: string) => void;
}

export const TableFilter: React.FC<TableFilterProps> = ({ filters, onFilterChange }) => {
  const refreshTableData = () => {
    console.log("click");
  };

  return (
    <Flex flexDir={{ base: "column", lg: "row" }} align={"center"} gap={4}>
      <Flex w={"100%"}>
        <Input
          placeholder="Select Date"
          size="md"
          type="datetime-local"
          bg={"#35363D"}
          borderRadius={"8px"}
          border={0}
          value={filters.created_at}
          onChange={(e) => onFilterChange("created_at", e.target.value)}
        />
      </Flex>
      <Flex w={"100%"}>
        <Select
          name="payment_system"
          bg={"#35363D"}
          color={"#fff"}
          borderRadius={"8px"}
          border={0}
          value={filters.payment_system}
          onChange={(e) => onFilterChange("payment_system", e.target.value)}>
          <option value="All">All</option>
          <option value="wallet">Wallet</option>
          <option value="card">Card</option>
        </Select>
      </Flex>
      <Flex w={"100%"}>
        <Select
          name="currency"
          bg={"#35363D"}
          color={"#fff"}
          borderRadius={"8px"}
          border={0}
          value={filters.currency}
          onChange={(e) => onFilterChange("currency", e.target.value)}>
          <option value="All">All</option>
          <option value="usdt">USDT</option>
          <option value="btc">BTC</option>
        </Select>
      </Flex>
      <Flex w={"100%"}>
        <Input
          type="text"
          name="amount_usd"
          placeholder="Amount"
          bg={"#35363D"}
          color={"#fff"}
          borderRadius={"8px"}
          border={0}
          value={filters.amount_usd}
          onChange={(e) => onFilterChange("amount_usd", e.target.value)}
        />
      </Flex>
      <Flex w={"100%"}>
        <Select
          name="transaction_status"
          bg={"#35363D"}
          color={"#fff"}
          borderRadius={"8px"}
          border={0}
          value={filters.transaction_status}
          onChange={(e) => onFilterChange("transaction_status", e.target.value)}>
          <option value="All">All</option>
          <option value="pending">Pending</option>
          <option value="processing">Processing</option>
          <option value="successful">Successful</option>
        </Select>
      </Flex>
      <Button onClick={refreshTableData}>
        <Box as={"span"} color={"#fff"} fontSize={"20px"}>
          <GrRefresh />
        </Box>
      </Button>
      <Button
        w={{ base: "fit-content", lg: "50%" }}
        bg={"none"}
        p={0}
        m={"auto"}
        _hover={{ background: "none" }}
        _focus={{ border: 0 }}
        onClick={() => {
          onFilterChange("created_at", "");
          onFilterChange("payment_system", "All");
          onFilterChange("currency", "All");
          onFilterChange("transaction_status", "All");
          onFilterChange("amount_usd", "");
        }}>
        Reset
      </Button>
    </Flex>
  );
};
