import React from "react";
import { useNavigate } from "react-router-dom";

import { Flex, Box, Button, Tooltip, Text, Input } from "@chakra-ui/react";
import { RiQuestionFill } from "react-icons/ri";

export const SliderMarkPackage = () => {
  const navigate = useNavigate();

  const [activeIndex, setActiveIndex] = React.useState<number | null>(null);
  const [input, setInput] = React.useState<number | null>(null);

  const PRICE_POINTS = [
    { value: 0, label: "Trail" },
    { value: 5000, label: "Voyager" },
    { value: 10000, label: "Elite" },
    { value: 20000, label: "Pioneer" },
    { value: 50000, label: "Quantum" },
    { value: 80000, label: "Titan" },
    { value: 100000, label: "Nexus" },
    { value: 200000, label: "Platunium" },
    {
      value: (
        <Input
          min={200000}
          placeholder="----"
          w={"70px"}
          h={"24px"}
          textAlign={"center"}
          border={0}
          p={0}
          onFocus={(e) => (e.target.style.borderColor = "transparent")}
          onChange={(e) => setInput(Number(e.target.value))}
        />
      ),
      label: "Orbit",
    },
  ];

  const handleClick = (index: number) => {
    setActiveIndex(index);
    console.log(input);
    console.log(PRICE_POINTS[index].value);
  };

  const handleMouseClick = () => {
    navigate("/user-dashboard/package-selection-success");
  };

  return (
    <Flex w={"100%"} maxW={"1200px"} flexDir={"column"} align={"flex-end"} gap={2} overflowX={{ base: "scroll", xl: "hidden" }}>
      <Flex w={"fit-content"} minW={"800px"} justify={"space-between"} align={"center"} pos={"relative"} zIndex={2}>
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
        {PRICE_POINTS.map((point, i) => (
          <Flex key={i} flexDir={"column"} align={"center"} gap={4}>
            <Flex>
              <Text color={activeIndex === i ? "#EC9393" : "#fff"}>{point.label}</Text>
              <Tooltip
                label="3-digit code on the back of credit card."
                aria-label="A tooltip"
                placement="bottom"
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
            <Text color={activeIndex === i ? "#EC9393" : "#fff"}>{point.value}</Text>
          </Flex>
        ))}
      </Flex>
      <Button bg={"#3AAB41"} mt={4} onClick={handleMouseClick}>
        Purchase
      </Button>
    </Flex>
  );
};
