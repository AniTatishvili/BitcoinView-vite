import { Flex, Text, Button } from "@chakra-ui/react";
import { FaCcVisa, FaCcMastercard, FaCcPaypal } from "react-icons/fa";
import { PaymentMethod } from "../../../../components/dashboards/payment-method";
import { SavedPaymentMethods } from "../../../../components/dashboards/payment-method";
import { BreadCrumb } from "../../../../shared/ui/bread-crumb";

export const AddPaymentMethod = () => {
  const items = [
    { url: "/user-dashboard/overview", text: "Home", isCurrentPage: false },
    { url: "/user-dashboard/wallet", text: "Wallet", isCurrentPage: false },
    { url: "/user-dashboard/deposit", text: "Deposit", isCurrentPage: false },
    { url: "/user-dashboard/add-payment-method", text: "Add Payment Method", isCurrentPage: true },
  ];

  return (
    <Flex w={"100%"} h={"calc(100vh - 90px)"} overflow={"hidden"} pb={"1rem"}>
      <Flex
        w={"100%"}
        h={"100%"}
        overflowY={"scroll"}
        flexDir={{ base: "column", xl: "row" }}
        // flexWrap={"wrap"}
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
        <Flex w={"100%"} h={"fit-content"} flexDir={"column"} gap={4}>
          <BreadCrumb items={items} />
          <Text as="h2" fontSize={"24px"} fontWeight={"600"} pb={"1rem"}>
            Payment Method
          </Text>

          <Flex gap={4}>
            <Button bg={"none"} border={"1px solid #1F2027"} fontSize={"24px"}>
              <FaCcVisa />
            </Button>
            <Button bg={"none"} border={"1px solid #1F2027"} fontSize={"24px"}>
              <FaCcMastercard />
            </Button>
            <Button bg={"none"} border={"1px solid #1F2027"} fontSize={"24px"}>
              <FaCcPaypal />
            </Button>
          </Flex>
          <PaymentMethod />
          <SavedPaymentMethods />
        </Flex>
      </Flex>
    </Flex>
  );
};
