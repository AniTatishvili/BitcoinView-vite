import { Box, Button, Flex, List, ListIcon, ListItem, Text } from "@chakra-ui/react";
import { PercentageDoughnut } from "../ui/charts";
import { FaCircle } from "react-icons/fa";

export const CurrentPackage = () => {
  return (
    <Box>
      <Flex justify={"space-between"} align={"center"} gap={10}>
        <Flex align={"center"} gap={"8px"}>
          <Text>Current Package</Text>
          <Button h={"30px"} bg={"#0E4534"} color={"#218B3D"} p={"4px"} cursor={"revert"}>
            Active
          </Button>
        </Flex>
        <PercentageDoughnut />
      </Flex>
      <Flex flexDir={"column"} gap={4}>
        <Text fontWeight={"600"}>Package: Voyager</Text>
        <List>
          <ListItem display={"flex"} flexDir={"row"} alignItems={"center"}>
            <ListIcon as={FaCircle} color="#44B96B" />
            <Text>Start Time: 12/12/2024</Text>
          </ListItem>
          <ListItem display={"flex"} flexDir={"row"} alignItems={"center"}>
            <ListIcon as={FaCircle} color="#C05768" />
            <Box>
              <Text>Expire Time: 12/12/2025</Text>
              <Text>Profit/ Monthly: 2%</Text>
            </Box>
          </ListItem>
          <ListItem display={"flex"} flexDir={"row"} alignItems={"center"}>
            <ListIcon as={FaCircle} color="#D2C31E" />
            <Text>Last Update: 29/12/2024</Text>
          </ListItem>
        </List>
        <Flex justify={"space-between"}>
          <Button bg={"#3AAB41"}>Claims</Button>
          <Button bg={"#EC9393"}>Cancel</Button>
        </Flex>
      </Flex>
    </Box>
  );
};
