import { useState, useEffect } from "react";
import axios from "axios";

import { Form, Formik } from "formik";
import { Box, Input, List, ListItem, Image, useSteps, Flex, Text, Button } from "@chakra-ui/react";
import { WalletStepper } from "../../../shared/ui/stepper";
import { PButton } from "../../../shared/ui/buttons";
import { sendAmointValues } from "../../../shared/form";
import { TbCopyPlusFilled } from "react-icons/tb";

import usdt_logo from "../../../assets/images/wallet-logos/tether-usdt-logo.svg";
import btc from "../../../assets/images/wallet-logos/bitcoin-btc-logo.svg";
import { DashboardDepositAmountStepFormValues } from "./dashboard-deposit-amount-step-form-values";

interface DashboardDepositStepsProps {
  amount_usd: any;
}

const coins = [
  { name: "USDT", logo: usdt_logo },
  { name: "BTC", logo: btc },
];

export const DashboardDepositSteps: React.FC<DashboardDepositStepsProps> = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { activeStep, setActiveStep } = useSteps({
    index: 0,
    count: 3,
  });

  const [showSecond, setShowSecond] = useState(false);
  const [showThird, setShowThird] = useState(false);

  const token = typeof window !== "undefined" ? JSON.parse(window.localStorage.getItem("USER_AUTH") || "{}") : {};

  const url = "https://phplaravel-1309375-4888543.cloudwaysapps.com/api/deposit";

  const filteredCoins = coins.filter((coin) => coin.name.toLowerCase().includes(searchTerm.toLowerCase()));

  useEffect(() => {
    if (searchTerm !== "") {
      console.log(666);
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
    console.log(values, 111);
    setActiveStep(2);
    setShowThird(true);

    try {
      const response = await axios.post(url, values, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log("Sent successfully:", response.data);
    } catch (error) {
      console.error("Error updating avatar:", error);
    }
  };

  const referralLink = "https://CPa_erefff";

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
          <Input placeholder="Search coin" value={searchTerm} borderRadius={"8px"} onChange={(e) => setSearchTerm(e.target.value)} />

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
              {(formik) => {
                console.log(formik.values, "formik");
                return (
                  <Form>
                    {/* <Flex gap={3}>
                  <Input type="number" name="amount_usd" placeholder="Type amount" borderRadius={"8px"} />
                  <PButton type="submit">Send</PButton>
                </Flex> */}
                    <DashboardDepositAmountStepFormValues
                      formik={{
                        loading: false,
                        isValid: false,
                        dirty: false,
                      }}
                      {...formik}
                    />
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
            <Flex flexDir={"column"} border={"1px solid rgb(118, 118, 118)"} borderRadius={"8px"} p={2}>
              <Text color={"#fff"}>Adress</Text>
              <Flex align={"center"}>
                <Text>{referralLink}</Text>
                <Button bg={"none"} p={0} color={"#fff"} _hover={{ bg: "none" }} onClick={() => copyToClipboard(referralLink)}>
                  <TbCopyPlusFilled />
                </Button>
              </Flex>
            </Flex>
          )}
        </Box>
      ),
    },
  ];

  return <WalletStepper steps={steps} activeStep={activeStep} />;
};
