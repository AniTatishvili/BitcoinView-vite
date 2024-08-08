import React from "react";

import { useTranslation } from "react-i18next";

import { Box, Flex, Table, TableContainer, Tbody, Th, Thead, Tr, TableCaption, Text, Td, Tfoot } from "@chakra-ui/react";

// import { TProject } from "shared/types";
// import { InterestAndRisksTableItem } from "./interest-and-risks-table-item";

interface ISort {
  featured: string;
  limit: string;
  offset: string;
  orderby: string;
  order: string;
}

export const DashboardTable = () => {
  const { t } = useTranslation("dashboard");

  //   const [projects, setProjects] = React.useState<TProject[]>();

  return (
    // <Box pos={"relative"} h={"400"} w={"100%"} py={"4"} px={"6"} border={"none"} borderRadius={"4"} bg={colorMode === "dark" ? "brand.darkC" : "brand.lightC"}>
    //   <Text as="h2" fontSize={"16px"} mb={"4"} pos={"sticky"} top={"0"} textTransform={"uppercase"} bg={colorMode === "dark" ? "brand.darkC" : "brand.lightC"}>
    //     {t("TITLES.INTEREST_AND_RISKS")}
    //   </Text>
    //   <Box>
    //     <TableContainer h={"320px"} overflowY={"scroll"}>
    //       <Table variant="unstyled" size={"sm"}>
    //         <Thead>
    //           <Tr borderBottom={"1px solid #999"}>
    //             <Th>
    //               <Text fontSize={"12px"}>{t("TABLES.PROJECT_NAME")}</Text>
    //             </Th>
    //             <Th isNumeric>
    //               <Text fontSize={"12px"}>{t("TABLES.AMOUNT")}</Text>
    //             </Th>
    //             <Th isNumeric>
    //               <Text fontSize={"12px"}>{t("TABLES.INTEREST")}</Text>
    //             </Th>
    //             <Th isNumeric>
    //               <Text fontSize={"12px"}>{t("TABLES.RISK")}</Text>
    //             </Th>
    //           </Tr>
    //         </Thead>
    //         <Tbody>
    //           {projects instanceof Array &&
    //             projects.map((project: TProject) => {
    //               return <InterestAndRisksTableItem key={project.id} item={project} />;
    //             })}
    //         </Tbody>
    //       </Table>
    //     </TableContainer>
    //   </Box>
    // </Box>
    <TableContainer height={"100%"}>
      <Table variant="simple">
        <TableCaption>Imperial to metric conversion factors</TableCaption>
        <Thead>
          <Tr>
            <Th>To convert</Th>
            <Th>into</Th>
            <Th isNumeric>multiply by</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>inches</Td>
            <Td>millimetres (mm)</Td>
            <Td isNumeric>25.4</Td>
          </Tr>
          <Tr>
            <Td>feet</Td>
            <Td>centimetres (cm)</Td>
            <Td isNumeric>30.48</Td>
          </Tr>
          <Tr>
            <Td>yards</Td>
            <Td>metres (m)</Td>
            <Td isNumeric>0.91444</Td>
          </Tr>
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>To convert</Th>
            <Th>into</Th>
            <Th isNumeric>multiply by</Th>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>
  );
};
