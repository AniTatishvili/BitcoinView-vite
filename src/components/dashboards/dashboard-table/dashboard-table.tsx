import { Box, Table, TableContainer, Tbody, Th, Thead, Tr, Text, Flex } from "@chakra-ui/react";
import { DashboardTableItem } from "./dashboard-table-item";
import { PText } from "../../../shared/typography";

// import { TAssets } from "shared/types";

export const DashboardTable = () => {
  return (
    <Flex w={"100%"} h={"fit-content"} backgroundColor={"#1F2027"} flexDir={"column"} borderRadius={"8px"} p={"1rem"}>
      <Text as="h2" color="#fff" fontSize={"24px"} fontWeight={"600"} pb={"1rem"}>
        Overview
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
                  <PText>Amount</PText>
                </Th>
                <Th textAlign={"start"} isNumeric>
                  <PText>Coin price</PText>
                </Th>
                <Th textAlign={"start"} isNumeric>
                  <PText>PhinL</PText>
                </Th>
                <Th textAlign={"start"} isNumeric>
                  <PText>Graph</PText>
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {/* {items instanceof Array &&
                items.map((project: TProject) => {
                  return <DashboardTableItem item={items} />;
                })} */}
              <DashboardTableItem />
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Flex>
  );
};
