import { Text, Td, Tr } from "@chakra-ui/react";
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaBtc } from "react-icons/fa";
import { LiaEthereum } from "react-icons/lia";

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
      <Tr color={"#fff"} fontSize={"14px"}>
        <Td display={"flex"} alignItems={"center"} gap={4}>
          {userData.coin}
        </Td>
        <Td>{userData.date}</Td>
        <Td>{userData.utc}</Td>
        <Td color={"green"}>{userData.position}</Td>
        <Td display={"flex"} alignItems={"center"} gap={4}>
          {userData.market_entry}
        </Td>
        <Td>{userData.tp}</Td>
        <Td>{userData.sl}</Td>
        <Td color={"red"}>{userData.rr}</Td>
        <Td display={"flex"} alignItems={"center"} gap={4}>
          {userData.risk_percentage}
        </Td>
      </Tr>

      {/* <Tr color={"#fff"} fontSize={"14px"}>
        <Td display={"flex"} alignItems={"center"} gap={4}>
          <SiTether />
          Bitcoin{" "}
          <Text as="span" color={"#999"}>
            BTC
          </Text>
        </Td>
        <Td>
          {" "}
          0.000255{" "}
          <Text as="span" color={"#999"}>
            ($47.3%)
          </Text>
        </Td>
        <Td>$21,3543.00</Td>
        <Td color={"red"}>-8.97%</Td>
        <Td color={"red"}>
          <FaArrowTrendDown />
        </Td>
      </Tr> */}
    </>
  );
};
