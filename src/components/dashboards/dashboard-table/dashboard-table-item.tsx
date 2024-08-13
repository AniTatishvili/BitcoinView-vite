import { Text, Td, Tr } from "@chakra-ui/react";
import { FaArrowTrendUp, FaArrowTrendDown } from "react-icons/fa6";
import { FaBtc } from "react-icons/fa";
import { LiaEthereum } from "react-icons/lia";
import { SiCardano } from "react-icons/si";
import { SiPolkadot } from "react-icons/si";
import { SiTether } from "react-icons/si";

export const DashboardTableItem = () => {
  return (
    <>
      <Tr color={"#fff"} fontSize={"14px"}>
        <Td display={"flex"} alignItems={"center"} gap={4}>
          <FaBtc /> Bitcoin{" "}
          <Text as="span" color={"#999"}>
            BTC
          </Text>
        </Td>
        <Td>
          0.000255{" "}
          <Text as="span" color={"#999"}>
            ($47.3%)
          </Text>
        </Td>
        <Td>$21,3543.00</Td>
        <Td color={"green"}>+8.97%</Td>
        <Td color={"green"}>
          <FaArrowTrendUp />
        </Td>
      </Tr>
      <Tr color={"#fff"} fontSize={"14px"}>
        <Td display={"flex"} alignItems={"center"} gap={4}>
          <LiaEthereum />
          Ethereum{" "}
          <Text as="span" color={"#999"}>
            ETH
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
      </Tr>
      <Tr color={"#fff"} fontSize={"14px"}>
        <Td display={"flex"} alignItems={"center"} gap={4}>
          <SiCardano />
          Cardano{" "}
          <Text as="span" color={"#999"}>
            ADA
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
        <Td color={"green"}>+8.97%</Td>
        <Td color={"green"}>
          <FaArrowTrendUp />
        </Td>
      </Tr>
      <Tr color={"#fff"} fontSize={"14px"}>
        <Td display={"flex"} alignItems={"center"} gap={4}>
          <SiPolkadot />
          Pilkadot{" "}
          <Text as="span" color={"#999"}>
            DOT
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
        <Td color={"green"}>+8.97%</Td>
        <Td color={"green"}>
          <FaArrowTrendUp />
        </Td>
      </Tr>
      <Tr color={"#fff"} fontSize={"14px"}>
        <Td display={"flex"} alignItems={"center"} gap={4}>
          <SiTether />
          Tether{" "}
          <Text as="span" color={"#999"}>
            USDT
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
        <Td color={"green"}>+8.97%</Td>
        <Td color={"green"}>
          <FaArrowTrendUp />
        </Td>
      </Tr>
      <Tr color={"#fff"} fontSize={"14px"}>
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
      </Tr>
      <Tr color={"#fff"} fontSize={"14px"}>
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
      </Tr>
    </>
  );
};
