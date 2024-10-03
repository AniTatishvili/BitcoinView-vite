import axios from "axios";
// import { QRCodeSVG } from "qrcode.react";
import { useState, useEffect } from "react";

import { Field, Form, Formik } from "formik";
import { Box, Image, useSteps, Flex, Text, InputGroup, InputLeftElement, Input } from "@chakra-ui/react";

// import { useUserDepositStore } from "../../../store/dashboard/user-deposit-payment-store";

import { WalletStepper } from "../../../shared/ui/stepper";
import { PButton } from "../../../shared/ui/buttons";
import { sendWithdrawAmointValues } from "../../../shared/form";
import { TbClockHour4Filled } from "react-icons/tb";

import btc from "../../../assets/images/wallet-logos/bitcoin-btc-logo.svg";
// import { RiCloseCircleFill } from "react-icons/ri";

interface DashboardDepositStepsProps {
  btc_address: string;
}

export const DashboardWithdrawSteps: React.FC<DashboardDepositStepsProps> = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { activeStep, setActiveStep } = useSteps({
    index: 0,
    count: 4,
  });

  const [showSecond, setShowSecond] = useState(false);

  const [showThird, setShowThird] = useState(false);
  const [showForth, setShowForth] = useState(false);
  const [loading, setLoading] = useState(false);
  console.log(loading);
  const token = typeof window !== "undefined" ? JSON.parse(window.localStorage.getItem("USER_AUTH") || "{}") : {};

  const url = "https://phplaravel-1309375-4888543.cloudwaysapps.com/api/user/withdraw";

  useEffect(() => {
    if (searchTerm !== "") {
      setActiveStep(1);
      setShowSecond(true);

      setShowForth(false);
    }
  }, [searchTerm]);

  const sendAmount = async (values: DashboardDepositStepsProps) => {
    setActiveStep(2);
    setShowSecond(true);
    setLoading(true);

    const WithdrawData = { amount_usd: Number(searchTerm), btc_address: values.btc_address };

    try {
      const response = await axios.post(url, WithdrawData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setShowThird(true);
      console.log("Withdraw sent successfully:", response.data);
    } catch (error) {
      console.error("Error updating avatar:", error);
    } finally {
      setLoading(false);
    }
  };

  const steps = [
    {
      content: (
        <Box>
          <Text as={"h4"} mb={2}>
            Amount
          </Text>

          <Flex flexDir={{ base: "column", sm: "row" }} gap={3}>
            <InputGroup>
              <InputLeftElement pointerEvents={"none"} color={"##fff"} fontSize={"1.2em"}>
                $
              </InputLeftElement>
              <Input
                type="number"
                name="amount_usd"
                placeholder="Type your wallet"
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
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                onChange={(e: any) => {
                  setSearchTerm(e.target.value);
                  setActiveStep(1);
                }}
              />
            </InputGroup>
            <Text>BTC</Text>
            {/* <PButton type="submit">Apply</PButton> */}
          </Flex>
        </Box>
      ),
    },
    {
      content: (
        <Box>
          <Text as={"h4"} mb={2}>
            Your Wallet
          </Text>
          {showSecond && (
            <Formik initialValues={sendWithdrawAmointValues} onSubmit={sendAmount}>
              {() => {
                return (
                  <Form>
                    <Flex flexDir={{ base: "column", sm: "row" }} gap={3}>
                      <InputGroup>
                        <InputLeftElement pointerEvents={"none"} color={"##fff"} fontSize={"1.2em"}>
                          <Image src={btc} alt="btc_logo" boxSize="20px" mr={1} />
                        </InputLeftElement>
                        <Field
                          type="text"
                          name="btc_address"
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
            Check
          </Text>
          {showThird && (
            <Flex fontSize={"22px"}>
              <Flex color={"orange"} gap={1}>
                <TbClockHour4Filled />
                <Text fontSize={"14px"}>Pending</Text>
              </Flex>
              {/* <Flex color={"green"}>
                <TbCircleCheckFilled />{" "}
              </Flex>
              <Flex color={"red"}>
                <RiCloseCircleFill />
              </Flex> */}
            </Flex>
          )}
        </Box>
      ),
    },
    {
      content: (
        <Box>
          <Text as={"h4"} mb={2}>
            Result
          </Text>
          {showForth && <Flex fontSize={"22px"}>Failed</Flex>}
        </Box>
      ),
    },
  ];

  return <WalletStepper steps={steps} activeStep={activeStep} />;
};
