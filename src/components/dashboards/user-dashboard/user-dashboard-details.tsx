import { Avatar, Box, Button, Flex, List, ListItem, Select } from "@chakra-ui/react";
import { FaBtc } from "react-icons/fa";
import { LiaEthereum } from "react-icons/lia";
import { SiCardano } from "react-icons/si";
import { SiPolkadot } from "react-icons/si";
import { SiTether } from "react-icons/si";

export const UserDashboardDetails = () => {
  return (
    <Flex w={"100%"} h={"fit-content"} backgroundColor={"#1F2027"} flexDir={"column"} borderRadius={"8px"} p={"1rem"}>
      <Flex flexDir={"column"} gap={4}>
        <Flex w={"100%"} justify={"space-between"} align={"center"}>
          <Flex gap={3}>
            <Avatar
              name="Kola Tioluwani"
              src="https://bit.ly/tioluwani-kolawole"
              w={"40px"}
              h={"40px"}
              backgroundColor={"#79797D"}
              color={"#141316"}
              borderRadius={"50%"}
            />

            <Flex flexDir={"column"} lineHeight={1} gap={1}>
              <Flex color={"#fff"} fontSize={"16px"}>
                Kola Tioluwani
              </Flex>
              <Flex color={"#ccc"} fontSize={"14px"}>
                kola
              </Flex>
            </Flex>
          </Flex>
          <Button backgroundColor={"#f7931a"} borderRadius={"8px"} px={3} py={2} cursor={"pointer"}>
            Connect wallet
          </Button>
        </Flex>
        <List display={"Flex"} borderBottom={"1px solid #999"} gap={10} py={"15px"}>
          <ListItem display={"flex"} alignItems={"center"} gap={2} color={"green"}>
            <FaBtc /> Bitcoin
          </ListItem>
          <ListItem display={"flex"} alignItems={"center"} gap={2} color={"green"}>
            <LiaEthereum />
            +8.97%
          </ListItem>
          <ListItem display={"flex"} alignItems={"center"} gap={2} color={"green"}>
            <SiCardano />
            Cardano
          </ListItem>
          <ListItem display={"flex"} alignItems={"center"} gap={2} color={"green"}>
            <SiPolkadot />
            Pilkadot
          </ListItem>
          <ListItem display={"flex"} alignItems={"center"} gap={2} color={"red"}>
            <SiTether />
            Tether
          </ListItem>
        </List>
        <Flex justify={"space-between"} align={"center"}>
          <Box>
            <Box color={"#fff"}>Toltal Balance</Box>
            <Box color={"#f7931a"} fontSize={"28px"}>
              $168,785.32
            </Box>
          </Box>
          <Flex flexDir={"column"} gap={2}>
            <Box color={"#fff"}>Convert Balance</Box>
            <Flex justify={"space-between"} align={"center"} bg={"#35363D"} color={"#fff"} fontSize={"12px"} borderRadius={"8px"} px={"6px"}>
              <Box borderRight={"1px solid #fff"} pe={"5px"}>
                3.19999
              </Box>
              <Box w={"80px"}>
                <Select placeholder="BTC" w={"100%"} bg={"#35363D"} color={"#fff"} border={0} p={0}>
                  <option value="option1">BTC</option>
                  <option value="option2">ETH 2</option>
                  <option value="option3">ADA</option>
                </Select>
              </Box>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
