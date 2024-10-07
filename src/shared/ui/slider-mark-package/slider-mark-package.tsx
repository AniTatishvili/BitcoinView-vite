import React from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";

import { Flex, Box, Button, Tooltip, Text, Input, cookieStorageManager } from "@chakra-ui/react";
import { useUserSelectedPackageStore } from "../../../store/dashboard/user-selected-package-store";
import useCustomToast from "../../../shared/hooks/useCustomToast";

import { RiQuestionFill } from "react-icons/ri";

export const SliderMarkPackage = () => {
  const navigate = useNavigate();
  const showToast = useCustomToast();

  const { setUserPackageData } = useUserSelectedPackageStore();
  const [activeIndex, setActiveIndex] = React.useState<number | null>(0);
  const [input, setInput] = React.useState<number | null>(null);
  const [showInput] = React.useState<boolean>(true);
  const [data, setData] = React.useState([]);

  // const PRICE_POINTS = [
  //   { value: 0, label: "Trail" },
  //   { value: 5000, label: "Voyager" },
  //   { value: 10000, label: "Elite" },
  //   { value: 20000, label: "Pioneer" },
  //   { value: 50000, label: "Quantum" },
  //   { value: 80000, label: "Titan" },
  //   { value: 100000, label: "Nexus" },
  //   { value: 200000, label: "Platinum" },
  //   { value: "custom", label: "Orbit" },
  // ];

  const token = typeof window !== "undefined" ? JSON.parse(window.localStorage.getItem("USER_AUTH") || "{}") : {};

  const url = "https://phplaravel-1309375-4888543.cloudwaysapps.com/api/packages";

  React.useEffect(() => {
    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setData(response.data.packages);
        console.log("User package data:", response.data);
      })
      .catch((error) => {
        showToast("error", error.response.data.message);
        console.error("Error fetching user data:", error);
      });
  }, []);

  const handleClick = (index: number) => {
    console.log(data, "data");
    setActiveIndex(index);
    // if (data[index].value === "custom") {
    //   console.log(input);
    // } else {
    //   console.log(data[index].value);
    // }
  };

  const handleMouseClick = () => {
    // navigate("/user-dashboard/package-selection-success");PRICE_POINTS[activeIndex]?.value;
    if (activeIndex !== null) {
      const activePackage = data[activeIndex];
      // if (activePackage.value === "custom") {
      //   console.log("activePackage", { value: input, label: "Orbit" });
      //   setUserPackageData({ value: input as number, label: "Orbit" });
      // } else {
      //   console.log("activePackage", activePackage);
      //   setUserPackageData(activePackage as { value: number; label: string });
      // }

      // navigate("/user-dashboard/deposit");
    }
  };

  return (
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
          {data.map((point, i) => (
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
              {point.amount === "custom" && showInput ? (
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
              )}
            </Flex>
          ))}
        </Flex>
      </Flex>
      <Button bg={"#3AAB41"} mt={4} onClick={handleMouseClick}>
        Purchase
      </Button>
    </Flex>
  );
};
