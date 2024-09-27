import React from "react";
import { useNavigate } from "react-router-dom";
import { Flex, Box, Button, Tooltip, Text, Input } from "@chakra-ui/react";
import { RiQuestionFill } from "react-icons/ri";

export const SliderMarkPackage = () => {
  const navigate = useNavigate();

  const [activeIndex, setActiveIndex] = React.useState<number | null>(0);
  const [input, setInput] = React.useState<number | null>(null);
  const [showInput] = React.useState<boolean>(true);

  const PRICE_POINTS = [
    { value: 0, label: "Trail" },
    { value: 5000, label: "Voyager" },
    { value: 10000, label: "Elite" },
    { value: 20000, label: "Pioneer" },
    { value: 50000, label: "Quantum" },
    { value: 80000, label: "Titan" },
    { value: 100000, label: "Nexus" },
    { value: 200000, label: "Platinum" },
    { value: "custom", label: "Orbit" },
  ];

  const handleClick = (index: number) => {
    setActiveIndex(index);

    if (PRICE_POINTS[index].value === "custom") {
      console.log(input);
    } else {
      console.log(PRICE_POINTS[index].value);
    }
  };

  const handleMouseClick = () => {
    navigate("/user-dashboard/package-selection-success");
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
          {PRICE_POINTS.map((point, i) => (
            <Flex key={i} w={"80px"} flexDir={"column"} align={"center"} gap={4} fontSize={"14px"}>
              <Flex>
                <Text color={activeIndex === i ? "#f7931a" : "#fff"}>{point.label}</Text>
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
              {point.value === "custom" && showInput ? (
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
                <Text color={activeIndex === i ? "#f7931a" : "#fff"}>{point.value}</Text>
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
