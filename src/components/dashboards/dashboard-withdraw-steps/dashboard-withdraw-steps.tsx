import { Flex, Box, FormLabel, Text, Input } from "@chakra-ui/react";

export const DashboardWithdrawSteps = () => {
  return (
    <>
      <Flex>
        <Flex>
          <Box w={"230px"}>
            <FormLabel>Request</FormLabel>
            <Input type="text" placeholder="Enter Amount" bg={"#35363D"} color={"#fff"} borderRadius={"8px"} border={0} />
          </Box>
          <Box>
            <Text>Check</Text>
          </Box>
          <Box>
            <Text>Result</Text>
          </Box>
        </Flex>
        <Flex>
          <Box w="30px" h={"30px"} bg={"red"} borderRadius={"50%"}>
            1
          </Box>
          <Box w="30px" h={"30px"} bg={"red"} borderRadius={"50%"}>
            2
          </Box>
          <Box w="30px" h={"30px"} bg={"red"} borderRadius={"50%"}>
            3
          </Box>
        </Flex>
      </Flex>
    </>
  );
};
