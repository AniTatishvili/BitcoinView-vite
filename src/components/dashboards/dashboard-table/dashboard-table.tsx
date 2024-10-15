import React from "react";
import axios from "axios";

import { Box, Table, TableContainer, Tbody, Th, Thead, Tr, Text, Flex } from "@chakra-ui/react";
import { DashboardTableItem } from "./dashboard-table-item";
import { PText } from "../../../shared/typography";

// import { TAssets } from "shared/types";

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
  const [data, setData] = React.useState<UserData[]>([]);

  const url = "https://phplaravel-1309375-4888543.cloudwaysapps.com/api/signals";

  React.useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setData(response.data || null);
        console.log("User traiding signals:", response.data);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, []);

  return (
    <Flex w={"100%"} h={"fit-content"} backgroundColor={"#1F2027"} flexDir={"column"} borderRadius={"8px"} p={"1rem"}>
      <Text as="h2" color="#fff" fontSize={"24px"} fontWeight={"600"} pb={"1rem"}>
        Traiding Signals
      </Text>
      <Box>
        <TableContainer
          w={"100%"}
          h={"250px"}
          overflowY={"scroll"}
          css={{
            "&::-webkit-scrollbar": {
              width: "3px",
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
                <Th textAlign={"start"}>
                  <PText>Coins</PText>
                </Th>
                <Th textAlign={"start"} isNumeric>
                  <PText>Date</PText>
                </Th>
                <Th textAlign={"start"} isNumeric>
                  <PText>UTC</PText>
                </Th>
                <Th textAlign={"start"} isNumeric>
                  <PText>Position</PText>
                </Th>
                <Th textAlign={"start"} isNumeric>
                  <PText>Market Entry</PText>
                </Th>
                <Th textAlign={"start"} isNumeric>
                  <PText>TP</PText>
                </Th>
                <Th textAlign={"start"} isNumeric>
                  <PText>SL</PText>
                </Th>
                <Th textAlign={"start"} isNumeric>
                  <PText>RR</PText>
                </Th>
                <Th textAlign={"start"} isNumeric>
                  <PText>Risk Percentage</PText>
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {data instanceof Array &&
                data.map((items) => {
                  return <DashboardTableItem userData={items} />;
                })}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Flex>
  );
};
