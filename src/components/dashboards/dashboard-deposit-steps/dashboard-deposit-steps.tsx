import axios from "axios";
// import { QRCodeSVG } from "qrcode.react";
import { useState, useEffect } from "react";

import { Field, Form, Formik } from "formik";
import { Box, Input, List, ListItem, Image, useSteps, Flex, Text, Button, InputGroup, InputLeftElement, Spinner } from "@chakra-ui/react";

import { useUserDepositStore } from "../../../store/dashboard/user-deposit-payment-store";

import { WalletStepper } from "../../../shared/ui/stepper";
import { PButton } from "../../../shared/ui/buttons";
import { sendAmointValues } from "../../../shared/form";
import { TbCopyPlusFilled } from "react-icons/tb";

import usdt_logo from "../../../assets/images/wallet-logos/tether-usdt-logo.svg";
import btc from "../../../assets/images/wallet-logos/bitcoin-btc-logo.svg";
// import { CheckIcon } from "@chakra-ui/icons";

interface DashboardDepositStepsProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  amount_usd: any;
}

const coins = [
  { name: "USDT", logo: usdt_logo },
  { name: "BTC", logo: btc },
];

export const DashboardDepositSteps: React.FC<DashboardDepositStepsProps> = () => {
  const { setUserDepositData } = useUserDepositStore();
  const [userData, setUserData] = useState<{ qr_code: string; btc_wallet: string } | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const { activeStep, setActiveStep } = useSteps({
    index: 0,
    count: 3,
  });

  const [showSecond, setShowSecond] = useState(false);
  const [showThird, setShowThird] = useState(false);
  const [loading, setLoading] = useState(false);

  const token = typeof window !== "undefined" ? JSON.parse(window.localStorage.getItem("USER_AUTH") || "{}") : {};

  const url = "https://phplaravel-1309375-4888543.cloudwaysapps.com/api/deposit";

  const filteredCoins = coins.filter((coin) => coin.name.toLowerCase().includes(searchTerm.toLowerCase()));

  useEffect(() => {
    if (searchTerm !== "") {
      setActiveStep(1);
      setShowSecond(true);
    }
  }, [searchTerm]);

  const handleClick = (coinName: string) => {
    setSearchTerm(coinName);
    setActiveStep(1);
    setShowSecond(true);
  };

  const sendAmount = async (values: DashboardDepositStepsProps) => {
    setActiveStep(2);
    setShowThird(true);
    setLoading(true);

    try {
      const response = await axios.post(url, values, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const {
        qr_code,
        transaction: { btc_wallet },
      } = response.data;
      setUserData({ qr_code, btc_wallet });
      setUserDepositData({ qr_code, btc_wallet });
      console.log("Sent successfully:", response.data);
    } catch (error) {
      console.error("Error updating avatar:", error);
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      console.log("Copied to clipboard!");
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  const steps = [
    {
      content: (
        <Box>
          <Text as={"h4"} mb={2}>
            Select Coin
          </Text>
          <Input
            placeholder="Search coin"
            value={searchTerm}
            borderColor={"rgb(118, 118, 118)"}
            borderRadius={"8px"}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <List display={"flex"} gap={3} mt={2}>
            {filteredCoins.map((coin) => (
              <ListItem key={coin.name} display="flex" alignItems="center" fontSize={"14px"} cursor="pointer" onClick={() => handleClick(coin.name)}>
                <Image src={coin.logo} alt={`${coin.name} logo`} boxSize="20px" mr={1} />
                {coin.name}
              </ListItem>
            ))}
          </List>
        </Box>
      ),
    },
    {
      content: (
        <Box>
          <Text as={"h4"} mb={2}>
            Select Network
          </Text>
          {showSecond && (
            <Formik initialValues={sendAmointValues} onSubmit={sendAmount}>
              {() => {
                return (
                  <Form>
                    <Flex flexDir={{ base: "column", sm: "row" }} gap={3}>
                      <InputGroup>
                        <InputLeftElement pointerEvents={"none"} color={"##fff"} fontSize={"1.2em"}>
                          $
                        </InputLeftElement>
                        <Field
                          type="number"
                          name="amount_usd"
                          placeholder="Type amount"
                          style={{
                            width: "229px",
                            height: "40px",
                            background: "transparent",
                            color: "#fff",
                            fontSize: "16px",
                            lineHeight: 1,
                            border: "1px solid rgb(118, 118, 118)",
                            borderRadius: "8px",
                            padding: "0.75rem 1rem 0.75rem 1.8rem",
                            boxSizing: "border-box",
                            outline: 0,
                          }}
                        />
                        {/* <InputRightElement>
                          <CheckIcon color="green.500" />
                        </InputRightElement> */}
                      </InputGroup>

                      <PButton type="submit">Apply</PButton>
                    </Flex>
                  </Form>
                );
              }}
            </Formik>
          )}
        </Box>
      ),
    },
    {
      content: (
        <Box>
          <Text as={"h4"} mb={2}>
            Deposit Address
          </Text>
          {showThird && (
            <Flex
              flexDir={{ base: "column", sm: "row" }}
              justify={"space-between"}
              align={"center"}
              border={"1px solid rgb(118, 118, 118)"}
              borderRadius={"8px"}
              p={4}
              gap={4}>
              <Flex w={"128px"} h={"128px"} justify={"center"} align={"center"}>
                {loading ? <Spinner size={"xl"} color={"#f7931a"} /> : <Image src={userData?.qr_code || ""} w={"100%"} h={"100%"} objectFit={"contain"} />}

                {/* <QRCodeSVG value={userData?.qr_code || ""} /> */}
              </Flex>
              <Box>
                <Text color={"#fff"} lineHeight={1}>
                  Adress
                </Text>
                <Flex align={"center"}>
                  <Text maxW={{ base: "100px", md: "150px", lg: "250px" }} w={"100%"} whiteSpace={"nowrap"} overflow={"hidden"} textOverflow={"ellipsis"}>
                    {userData?.btc_wallet || ""}
                  </Text>
                  <Button bg={"none"} p={0} color={"#fff"} _hover={{ bg: "none" }} onClick={() => copyToClipboard(userData?.btc_wallet || "")}>
                    <TbCopyPlusFilled />
                  </Button>
                </Flex>
              </Box>
            </Flex>
          )}
        </Box>
      ),
    },
  ];

  return <WalletStepper steps={steps} activeStep={activeStep} />;
};
