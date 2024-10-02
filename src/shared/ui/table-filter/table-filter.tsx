import { Button, Flex, Select, Input } from "@chakra-ui/react";
import { PButton } from "../buttons";

interface Filters {
  amount_usd: string | number | readonly string[] | undefined;
  created_at: string;
  transaction_type: string;
  currency: string;
  transaction_status: string;
}

interface TableFilterProps {
  filters: Filters;
  onFilterChange: (name: keyof Filters, value: string) => void;
}

export const TableFilter: React.FC<TableFilterProps> = ({ filters, onFilterChange }) => {
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
          name="depositType"
          bg={"#35363D"}
          color={"#fff"}
          borderRadius={"8px"}
          border={0}
          value={filters.transaction_type}
          onChange={(e) => onFilterChange("transaction_type", e.target.value)}>
          <option value="All">All</option>
          <option value="Wallet">Wallet</option>
          <option value="Card">Card</option>
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
        <Select
          name="transaction_status"
          bg={"#35363D"}
          color={"#fff"}
          borderRadius={"8px"}
          border={0}
          value={filters.transaction_status}
          onChange={(e) => onFilterChange("transaction_status", e.target.value)}>
          <option value="All">All</option>
          <option value="Pending">Pending</option>
          <option value="Processing">Processing</option>
          <option value="Successful">Successful</option>
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
      <PButton w={{ base: "fit-content", lg: "50%" }} onClick={() => {}}>
        Search
      </PButton>
      <Button
        w={{ base: "fit-content", lg: "50%" }}
        bg={"none"}
        m={"auto"}
        _hover={{ background: "none" }}
        _focus={{ border: 0 }}
        onClick={() => {
          onFilterChange("created_at", "");
          onFilterChange("transaction_type", "All");
          onFilterChange("currency", "All");
          onFilterChange("transaction_status", "All");
          onFilterChange("amount_usd", "");
        }}>
        Reset
      </Button>
    </Flex>
  );
};
