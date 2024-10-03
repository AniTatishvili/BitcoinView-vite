import React from "react";
import axios from "axios";
import { Flex, Text, Button } from "@chakra-ui/react";
import { TbCopyPlusFilled } from "react-icons/tb";
import { PaymentMethodModal } from "../../../shared/ui/modal";
import useCustomToast from "../../../shared/hooks/useCustomToast";

interface UserData {
  btcQr: string;
  btcAddress: string;
}

export const DashboardPaymentMethods = () => {
  const [data, setData] = React.useState<UserData | null>(null);

  const showToast = useCustomToast();

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      console.log("Copied to clipboard!");
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  const token = typeof window !== "undefined" ? JSON.parse(window.localStorage.getItem("USER_AUTH") || "{}") : {};

  const url = "https://phplaravel-1309375-4888543.cloudwaysapps.com/api/user/wallet-info";

  React.useEffect(() => {
    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        const { btcQr, btcAddress } = response.data;
        setData({ btcQr, btcAddress });
        console.log("User data:", response.data);
      })
      .catch((error) => {
        showToast("error", error.response.data.message);
        console.error("Error fetching user data:", error);
      });
  }, []);

  return (
    <Flex flexDir={"column"} gap={4}>
      <Text as="h3" fontSize={"18px"}>
        Pay by Crypto Coin
      </Text>
      <Flex flexDir={"column"} gap={2}>
        <Flex w={"160px"} justify={"space-between"} align={"center"}>
          <Text fontSize={"14px"}>Bitcoin BTC</Text>

          <PaymentMethodModal src={"https://phplaravel-1309375-4888543.cloudwaysapps.com/" + data?.btcQr || ""} />
        </Flex>
        <Flex justify={"space-between"} align={"center"} bg={"#35363D"} borderRadius={"8px"} color={"#fff"} p={"0.5rem"}>
          <Text w={"100%"} whiteSpace={"nowrap"} textOverflow={"ellipsis"} overflow={"hidden"}>
            {data?.btcAddress || ""}
          </Text>
          <Button h={"fit-content"} bg={"none"} color={"#fff"} p={0} _hover={{ bg: "none" }} onClick={() => copyToClipboard(data?.btcAddress || "")}>
            <TbCopyPlusFilled />
          </Button>
        </Flex>
      </Flex>
      <Flex flexDir={"column"} gap={2}>
        <Flex w={"160px"} justify={"space-between"} align={"center"}>
          <Text fontSize={"14px"}>USTD TRC20</Text>
          <PaymentMethodModal src={"https://phplaravel-1309375-4888543.cloudwaysapps.com/" + data?.btcQr || ""} />
        </Flex>
        <Flex justify={"space-between"} align={"center"} bg={"#35363D"} borderRadius={"8px"} color={"#fff"} p={"0.5rem"}>
          <Text w={"100%"} whiteSpace={"nowrap"} textOverflow={"ellipsis"} overflow={"hidden"}>
            {data?.btcAddress || ""}
          </Text>
          <Button h={"fit-content"} bg={"none"} color={"#fff"} p={0} _hover={{ bg: "none" }} onClick={() => copyToClipboard(data?.btcAddress || "")}>
            <TbCopyPlusFilled />
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};
