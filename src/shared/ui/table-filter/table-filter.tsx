import { Button, Flex, Input } from "@chakra-ui/react";
import { FormSelect } from "../../form";
import { PButton } from "../buttons";

export const TableFilter = () => {
  return (
    <Flex flexDir={{ base: "column", lg: "row" }} align={"center"} gap={4}>
      <Flex w={"100%"}>
        <FormSelect name="" label="Deposit" data={["Deposit", "Withdraw", "Transfer"]} />
      </Flex>
      <Flex w={"100%"}>
        <FormSelect name="" label="Deposit" data={["Deposit", "Withdraw", "Transfer"]} />
      </Flex>
      <Flex w={"100%"}>
        <FormSelect name="" label="Deposit" data={["Deposit", "Withdraw", "Transfer"]} />
      </Flex>
      <Flex w={"100%"}>
        <FormSelect name="" label="Deposit" data={["Deposit", "Withdraw", "Transfer"]} />
      </Flex>
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
