import React from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";

import { Flex, Box, Button, Tooltip, Text } from "@chakra-ui/react";
import { useUserSelectedPackageStore } from "../../../store/dashboard/user-selected-package-store";
import useCustomToast from "../../../shared/hooks/useCustomToast";

import { RiQuestionFill } from "react-icons/ri";
import { OrbitPackageModal } from "../modal/orbit-package-modal";
import { useUserSignupStore } from "../../../store/dashboard/user-auth";

interface UserData {
  amount: number;
  package_name: string;
  is_purchase: boolean;
  purchase_id: number;
  id: number;
}

export const SliderMarkPackage = () => {
  const navigate = useNavigate();
  const showToast = useCustomToast();

  const { setUserPackageData } = useUserSelectedPackageStore();
  const { current_balance, active_package } = useUserSignupStore();
  const package_id = active_package - 2;
  const [data, setData] = React.useState<UserData[]>([]);
  const [activeIndex, setActiveIndex] = React.useState<number | null>(package_id ?? current_balance ?? 0);
  const [isOrbitSelected, setIsOrbitSelected] = React.useState(false);
  // const [userBalance, setUserBalance] = React.useState();

  const token = typeof window !== "undefined" ? JSON.parse(window.localStorage.getItem("USER_AUTH") || "{}") : {};

  const url = "https://phplaravel-1309375-4888543.cloudwaysapps.com/api/packages";
  const purckageUlr = "https://phplaravel-1309375-4888543.cloudwaysapps.com/api/purchase";

  React.useEffect(() => {
    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setData(response.data.packages);
        // console.log("User package data:", response.data);
      })
      .catch((error) => {
        showToast("error", error.response.data.message);
        setActiveIndex(2);
        console.error("Error fetching user data:", error);
      });
  }, []);

  React.useEffect(() => {
    // setUserBalance()
  }, []);

  const handleClick = (index: number) => {
    // console.log(index, "index");
    setActiveIndex(index);
    if (data[index].package_name === "Orbit") {
      setIsOrbitSelected(true);
    }
  };

  const handleMouseClick = async () => {
    // navigate("/user-dashboard/package-selection-success");PRICE_POINTS[activeIndex]?.value;
    if (activeIndex !== null) {
      const activePackage = data[activeIndex];
      if (activePackage.package_name !== "Orbit") {
        const package_id = data[activeIndex].id;

        setUserPackageData({
          amount: activePackage.amount,
          package_name: activePackage.package_name,
          is_purchase: true,
          purchase_id: activePackage.id,
        });

        try {
          const response = await axios.post(
            purckageUlr,
            { package_id: package_id },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          if (response.data.purchase.status == "Inactive") {
            navigate("/user-dashboard/deposit");
          } else {
            console.log(111);
          }

          console.log("Package updated successfully:", response.data);
        } catch (error) {
          console.error("Error updating avatar:", error);
        }
      }
      console.log("activePackage.value");
    }
  };

  return (
    <>
      <Flex w={"100%"} flexDir={"column"} align={"flex-end"}>
        <Flex w={"100%"} overflowX={"auto"}>
          <Flex w={`{base:"750px", 2xl:"800px"}`} h={"120px"} justify={"space-between"} align={"center"} pos={"relative"} zIndex={2}>
            <Flex
              w={"100%"}
              h={"7px"}
              bg={"#939090"}
              borderRadius={"3.5px"}
              pos={"absolute"}
              top={"50%"}
              left={"0"}
              transform={"translateY(-50%)"}
              zIndex={-1}></Flex>
            {Array.isArray(data) &&
              data.map((point, i) => (
                <Flex key={i} w={"80px"} flexDir={"column"} align={"center"} gap={4} fontSize={"14px"}>
                  <Flex>
                    <Text color={activeIndex === i ? "#f7931a" : "#fff"}>{point.package_name}</Text>
                    <Tooltip
                      hasArrow
                      label="You will Fund 5000$ and claim Voyager Package, it have monthly profit max 2% of your fund, your amount will be hold for min 6 month and Bitcoin View pay monthly your profit,you can cancel any time your subscription but for cancellation fee you have to pay 25% of your package."
                      aria-label="A tooltip"
                      placement="start-end"
                      bg={"#1C1C1C"}
                      color={"#fff"}
                      borderRadius={"8px"}>
                      <Box ms={"2px"}>
                        <RiQuestionFill />
                      </Box>
                    </Tooltip>
                  </Flex>
                  <Flex
                    w={activeIndex === i ? "40px" : "17px"}
                    h={activeIndex === i ? "40px" : "17px"}
                    bg={"#D9D9D9"}
                    borderRadius={"50%"}
                    cursor={"pointer"}
                    onClick={() => handleClick(i)}></Flex>
                  {point.package_name === "Orbit" ? (
                    <Text opacity={0}>Contact</Text>
                  ) : (
                    <Text color={activeIndex === i ? "#f7931a" : "#fff"}>{i === 0 ? current_balance : point.amount}</Text>
                  )}

                  {/* {point.amount === "custom" && showInput ? (
                <Input
                  type="number"
                  w={"70px"}
                  h={"24px"}
                  color={"#f7931a"}
                  fontSize={"14px"}
                  textAlign={"center"}
                  border={0}
                  p={0}
                  min={200000}
                  placeholder="----"
                  _focus={{ boxShadow: "none" }}
                  onChange={(e) => {
                    setInput(Number(e.target.value));
                    setActiveIndex(i);
                  }}
                />
              ) : (
                <Text color={activeIndex === i ? "#f7931a" : "#fff"}>{point.amount}</Text>
              )} */}
                </Flex>
              ))}
          </Flex>
        </Flex>
        <Button bg={"#3AAB41"} mt={4} onClick={handleMouseClick}>
          Purchase
        </Button>
      </Flex>

      {isOrbitSelected && <OrbitPackageModal isOpen={!!isOrbitSelected} onClose={() => setIsOrbitSelected(false)} />}
    </>
  );
};
