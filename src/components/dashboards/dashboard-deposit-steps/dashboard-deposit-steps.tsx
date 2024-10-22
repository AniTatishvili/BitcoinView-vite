import { useRef } from "react";
import axios from "axios";
// import { QRCodeSVG } from "qrcode.react";
import { useState, useEffect } from "react";

import { Field, Form, Formik } from "formik";
import { Box, Input, List, ListItem, Image, useSteps, Flex, Text, Button, InputGroup, InputLeftElement, Spinner } from "@chakra-ui/react";

import { useUserDepositStore } from "../../../store/dashboard/user-deposit-payment-store";

import { WalletStepper } from "../../../shared/ui/stepper";

import { useUserSelectedPackageStore } from "../../../store/dashboard/user-selected-package-store";
import { PButton } from "../../../shared/ui/buttons";
// import { sendAmointValues } from "../../../shared/form";
import { TbCopyPlusFilled } from "react-icons/tb";

import btc from "../../../assets/images/wallet-logos/bitcoin-btc-logo.svg";
import useCustomToast from "../../../shared/hooks/useCustomToast";
import credit_logo from "../../../assets/images/wallet-logos/credit-card.png";
// import { CheckIcon } from "@chakra-ui/icons";

interface DashboardDepositStepsProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  amount_usd: any;
  is_purchase: boolean;
  purchase_id: number;
}

const coins = [
  { name: "Credit", logo: credit_logo },
  { name: "BTC", logo: btc },
];

export const DashboardDepositSteps: React.FC<DashboardDepositStepsProps> = () => {
  const { setUserDepositData } = useUserDepositStore();
  // const { userPackageData } = useUserSelectedPackageStore();
  const { userPackageData: userDepositAmount } = useUserSelectedPackageStore();

  const [packageValues, setPackageValues] = useState({
    amount_usd: userDepositAmount?.amount || 0,
    is_purchase: userDepositAmount?.is_purchase || false,
    purchase_id: userDepositAmount?.purchase_id || 0,
  });
  const showToast = useCustomToast();
  const [userData, setUserData] = useState<{ qr_code: string; btc_wallet: string } | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const { activeStep, setActiveStep } = useSteps({
    index: 0,
    count: 3,
  });

  const [showSecond, setShowSecond] = useState(false);
  const [showThird, setShowThird] = useState(false);
  const [loading, setLoading] = useState(false);
  const qrCodeRef = useRef<HTMLImageElement | null>(null);
  const token = typeof window !== "undefined" ? JSON.parse(window.localStorage.getItem("USER_AUTH") || "{}") : {};

  const url = "https://phplaravel-1309375-4888543.cloudwaysapps.com/api/deposit";

  const filteredCoins = coins.filter((coin) => coin.name.toLowerCase().includes(searchTerm.toLowerCase()));

  useEffect(() => {
    if (searchTerm !== "") {
      setActiveStep(1);
      setShowSecond(true);
    }
  }, [searchTerm]);

  useEffect(() => {
    setPackageValues({
      amount_usd: Number(userDepositAmount?.amount.toFixed(2)),
      is_purchase: userDepositAmount?.is_purchase,
      purchase_id: userDepositAmount?.purchase_id,
    });
  }, [userDepositAmount]);

  const handleClick = (coinName: string) => {
    setSearchTerm(coinName);
    setActiveStep(1);
    setShowSecond(true);
  };

  const sendAmount = async (values: DashboardDepositStepsProps, actions: any) => {
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
      setPackageValues({
        amount_usd: 0,
        is_purchase: false,
        purchase_id: 0,
      });
      console.log(packageValues, 8777);
      actions.resetForm({ amount_usd: "", is_purchase: false, purchase_id: 0 });
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
      showToast("success", "Copied to clipboard!");
      console.log("Copied to clipboard!");
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
  };

  const handleDownloadQRCode = () => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    const qrCodeImage = userData?.qr_code;
    if (qrCodeImage && ctx) {
      const img = new window.Image();
      img.crossOrigin = "Anonymous";
      img.src = qrCodeImage;
      img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.drawImage(img, 0, 0);
        const link = document.createElement("a");
        link.href = canvas.toDataURL("image/png");
        link.download = "qr_code.png";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      };
    } else {
      showToast("error", "QR code not available for download.");
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
              <ListItem
                key={coin.name}
                display="flex"
                alignItems="center"
                fontSize={"14px"}
                opacity={coin.name === "Credit" ? 0.5 : 1}
                cursor={coin.name === "Credit" ? "not-allowed" : "pointer"}
                onClick={() => coin.name !== "Credit" && handleClick(coin.name)}>
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
            Select Amount
          </Text>
          {showSecond && (
            // { ...packageValues, amount_usd: '' }
            <Formik initialValues={packageValues} onSubmit={sendAmount}>
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
        <Box w={"100%"}>
          <Text as={"h4"} mb={2}>
            Deposit Address
          </Text>
          {showThird && (
            <Flex flexDir={{ base: "column", xl: "row" }} gap={4}>
              <Flex
                flexDir={{ base: "column", sm: "row" }}
                justify={"space-between"}
                align={"center"}
                border={"1px solid rgb(118, 118, 118)"}
                borderRadius={"8px"}
                p={4}
                gap={4}>
                <Flex w={"128px"} h={"128px"} justify={"center"} align={"center"}>
                  {loading ? (
                    <Spinner size={"xl"} color={"#f7931a"} />
                  ) : (
                    <Image src={userData?.qr_code || ""} w={"100%"} h={"100%"} objectFit={"contain"} ref={qrCodeRef} />
                  )}

                  {/* <QRCodeSVG value={userData?.qr_code || ""} /> */}
                </Flex>
                <Box>
                  <Text color={"#fff"} lineHeight={1}>
                    Adress
                  </Text>
                  <Flex align={"center"}>
                    <Text maxW={{ base: "100px", md: "150px", lg: "250px" }} w={"100%"}>
                      {userData?.btc_wallet || ""}
                    </Text>
                    <Button bg={"none"} p={0} color={"#fff"} _hover={{ bg: "none" }} onClick={() => copyToClipboard(userData?.btc_wallet || "")}>
                      <TbCopyPlusFilled />
                    </Button>
                  </Flex>
                  <Button bg={"#3AAB41"} mt={2} float={"right"} onClick={handleDownloadQRCode}>
                    Download QR
                  </Button>
                </Box>
              </Flex>
              <Flex maxW={{ base: "200px", sm: "400px" }} flexDir={"column"}>
                <Text>Next Step</Text>
                <Box w={"100%"} overflow={"hidden"}>
                  <Box w={"100%"} whiteSpace={"wrap"}>
                    1- You can copy the wallet address and paste on your bitcoin wallet to transfer amount to your Bitcoinview wallet or using QR code for
                    Bitcoin Machine to pay and transfer amount to your bitcoinview wallet
                  </Box>
                  <Box>2- You can waiting for transaction to Successful status</Box>
                  <Box>3- System Automatically active your package</Box>
                </Box>
              </Flex>
            </Flex>
          )}
        </Box>
      ),
    },
  ];

  return <WalletStepper steps={steps} activeStep={activeStep} />;
};
