import { Td, Tr } from "@chakra-ui/react";

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

interface DashboardTableItemProps {
  userData: UserData;
}

export const DashboardTableItem: React.FC<DashboardTableItemProps> = ({ userData }) => {
  return (
    <>
      <Tr color={"#fff"} fontSize={"12px"}>
        <Td p={1}>{userData.coin}</Td>
        <Td p={1}>{userData.date}</Td>
        <Td p={1}>{userData.utc}</Td>
        <Td>{userData.position}</Td>
        <Td p={1}>{Number(userData.market_entry).toFixed(2)}</Td>
        <Td p={1}>{Number(userData.tp).toFixed(2)}</Td>
        <Td p={1}>{Number(userData.sl).toFixed(2)}</Td>
        <Td p={1}>{Number(userData.rr).toFixed(2)}</Td>
        <Td p={1}>{userData.risk_percentage}</Td>
      </Tr>
    </>
  );
};
