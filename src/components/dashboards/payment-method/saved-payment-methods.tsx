import { Flex, Box } from "@chakra-ui/react";
import { FaCcVisa, FaCcMastercard, FaCcPaypal } from "react-icons/fa";

export const SavedPaymentMethods = () => {
  return (
    <Flex w={"100%"} flexWrap={"wrap"} gap={4} mt={6}>
      <Flex w={{ base: "100%", md: "400px" }} border={"1px solid #1F2027"} borderRadius={"8px"} cursor={"pointer"} p={4} gap={4}>
        <Box fontSize={"32px"}>
          <FaCcVisa />
        </Box>
        <Box>
          <Box>***********2355</Box>
          <Box>Expires 09/25</Box>
        </Box>
      </Flex>
      <Flex w={{ base: "100%", md: "400px" }} border={"1px solid #1F2027"} borderRadius={"8px"} cursor={"pointer"} p={4} gap={4}>
        <Box fontSize={"32px"}>
          <FaCcPaypal />
        </Box>
        <Box>
          <Box>***********2355</Box>
          <Box>Expires 09/25</Box>
        </Box>
      </Flex>
      <Flex w={{ base: "100%", md: "400px" }} border={"1px solid #1F2027"} borderRadius={"8px"} cursor={"pointer"} p={4} gap={4}>
        <Box fontSize={"32px"}>
          <FaCcMastercard />
        </Box>
        <Box>
          <Box>***********2355</Box>
          <Box>Expires 09/25</Box>
        </Box>
      </Flex>
    </Flex>
  );
};
