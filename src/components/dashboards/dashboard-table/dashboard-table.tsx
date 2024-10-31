import React from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";
import { Box, Table, TableContainer, Tbody, Th, Thead, Tr, Text, Flex } from "@chakra-ui/react";
import { useUserSignupStore } from "../../../store/dashboard/user-auth";
import { DashboardTableItem } from "./dashboard-table-item";
import { PText } from "../../../shared/typography";
import { PButton } from "../../../shared/ui/buttons";

interface UserData {
  coin: string;
  date: string;
  utc: string;
  position: string;
  market_entry: string;
  tp: string;
  sl: string;
  rr: string;
  risk_percentage: string;
}

export const DashboardTable = () => {
  const navigate = useNavigate();
  const { estimated_balance, active_package_name } = useUserSignupStore();

  const [data, setData] = React.useState<UserData[]>([]);

  const url = "https://phplaravel-1309375-4888543.cloudwaysapps.com/api/signals";

  React.useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data || null);
        // console.log("User traiding signals:", response.data);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);

  return (
    <Flex w={"100%"} h={"fit-content"} backgroundColor={"#1F2027"} flexDir={"column"} borderRadius={"8px"} p={"1rem"}>
      <Text as="h2" color="#fff" fontSize={"24px"} fontWeight={"600"} pb={"1rem"}>
        Trading Signals
      </Text>
      <Box pos={"relative"} zIndex={1}>
        <TableContainer
          w={"100%"}
          h={"250px"}
          overflow={"scroll"}
          css={{
            "&::-webkit-scrollbar": {
              width: "4px",
              height: "4px",
            },
            "&::-webkit-scrollbar-track": {
              width: "4px",
            },
            "&::-webkit-scrollbar-thumb": {
              background: "#f7931a",
              borderRadius: "24px",
            },
          }}>
          <Table variant="simple" size={"md"} w={"100%"}>
            <Thead>
              <Tr>
                <Th textAlign={"start"} p={1}>
                  <PText>Coins</PText>
                </Th>
                <Th textAlign={"start"} p={1}>
                  <PText>Date</PText>
                </Th>
                <Th textAlign={"start"} p={1}>
                  <PText>UTC</PText>
                </Th>
                <Th textAlign={"start"} p={1}>
                  <PText>Position</PText>
                </Th>
                <Th textAlign={"start"} p={1}>
                  <PText>Market Entry</PText>
                </Th>
                <Th textAlign={"start"} p={1}>
                  <PText>TP</PText>
                </Th>
                <Th textAlign={"start"} p={1}>
                  <PText>SL</PText>
                </Th>
                <Th textAlign={"start"} p={1}>
                  <PText>RR</PText>
                </Th>
                <Th textAlign={"start"} p={1}>
                  <PText>Risk</PText>
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {data instanceof Array &&
                data.map((items, i) => {
                  return <DashboardTableItem key={i} userData={items} />;
                })}
            </Tbody>
          </Table>
        </TableContainer>
        {active_package_name !== "Trial" && Number(estimated_balance) > 0 ? (
          <Flex
            w={"100%"}
            h={"calc(100% - 76px)"}
            bg={"rgba(20,19,22,.6)"}
            backdropFilter={"blur(8px)"}
            justify={"center"}
            align={"center"}
            pos={"absolute"}
            left={0}
            bottom={0}
            zIndex={1}>
            <PButton onClick={() => navigate("/user-dashboard/package-selection")}>Upgrade Account</PButton>
          </Flex>
        ) : null}
      </Box>
    </Flex>
  );
};
