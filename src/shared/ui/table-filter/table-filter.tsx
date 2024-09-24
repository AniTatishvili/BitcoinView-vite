import { Button, Flex, Input } from "@chakra-ui/react";
import { FormSelect } from "../../form";
import { PButton } from "../buttons";

export const TableFilter = () => {
  return (
    <Flex flexDir={{ base: "column", lg: "row" }} gap={4}>
      <FormSelect name="" data={["Deposit", "Withdraw", "Transfer"]} />
      {/* <DatePicker selected={startDate} onChange={(date: any) => setStartDate(date)} /> */}
      <FormSelect name="" data={["Deposit", "Withdraw", "Transfer"]} />
      <FormSelect name="" data={["Deposit", "Withdraw", "Transfer"]} />
      <FormSelect name="" data={["Deposit", "Withdraw", "Transfer"]} />
      <Flex w={"100%"}>
        <Input type="text" placeholder="TxID" bg={"#35363D"} color={"#fff"} borderRadius={"8px"} border={0} />
      </Flex>
      <PButton w={{ base: "fit-content", lg: "50%" }}>Search</PButton>
      <Button w={{ base: "fit-content", lg: "50%" }} bg={"none"} m={"auto"} _hover={{ background: "none" }} _focus={{ border: 0 }}>
        Reset
      </Button>
    </Flex>
  );
};
