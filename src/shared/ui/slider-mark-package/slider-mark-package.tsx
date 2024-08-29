import React from "react";
import { Flex, Box, Button, Slider, SliderTrack, SliderFilledTrack, SliderThumb, SliderMark, Text, Stack, Tooltip } from "@chakra-ui/react";
import { RiQuestionFill } from "react-icons/ri";

interface SliderMarkPackageProps {
  step: number;
  marks: { value: number; label: string }[];
}

export const SliderMarkPackage: React.FC<SliderMarkPackageProps> = ({ step, marks }) => {
  const [value, setValue] = React.useState<number>(50000);

  const handleChange = (val: number | number[]) => {
    console.log(val, 1432);
    if (typeof val === "number") {
      setValue(val);
    }
  };

  // const getMarkPosition = (markValue: number) => {
  //   const max = 200000;
  //   const min = 0;
  //   return ((markValue - min) / (max - min)) * 100;
  // };

  return (
    <Flex w={"100%"} overflowX={{ base: "scroll", xl: "hidden" }}>
      <Flex w={"700px"} flexDir={"column"} align={"end"} mx={"auto"} mt={"4"}>
        <Stack w={"100%"} spacing={4}>
          <Stack w={"100%"} direction="row" justify="space-between">
            {marks.map((mark, index) => (
              <Flex key={index} fontSize="sm" color="gray.500" gap={1}>
                <Text color={"#fff"}>{mark.label}</Text>
                <Tooltip
                  label="3-digit code on the back of credit card."
                  aria-label="A tooltip"
                  placement="bottom"
                  bg={"#1C1C1C"}
                  color={"#fff"}
                  borderRadius={"8px"}>
                  <Box>
                    <RiQuestionFill />
                  </Box>
                </Tooltip>
              </Flex>
            ))}
          </Stack>

          <Slider w={"100%"} min={0} max={200000} step={step} value={value} onChange={handleChange}>
            <SliderTrack bg={"#939090"} h={"7px"}>
              <SliderFilledTrack bg={"#3AAB41"} />
              {marks.map((mark, index) => (
                <SliderMark
                  key={index}
                  value={mark.value}
                  textAlign={"center"}
                  color={"#fff"}
                  fontSize={"sm"}
                  mt={"2"}
                  mb={"2"}
                  w={"24px"}
                  ml={index === 0 ? "-12px" : "-12px"}
                  transform={"translateX(-50%)"}>
                  {mark.label}
                </SliderMark>
              ))}
            </SliderTrack>
            <SliderThumb w={"20px"} h={"20px"} />
          </Slider>

          <Stack w={"100%"} direction="row" justify="space-between">
            {marks.map((mark, index) => (
              <Text fontSize="sm" color="gray.500" key={index}>
                {mark.value}
              </Text>
            ))}
          </Stack>
        </Stack>
        <Button bg={"#3AAB41"} mt={4}>
          Purchase
        </Button>
      </Flex>
    </Flex>
  );
};

{
  /* <Box position="relative" w="100%">
<Slider min={0} max={200000} step={step} value={value} onChange={handleChange} aria-label="slider" position="relative" zIndex={1}>
  <SliderTrack bg={"#939090"} h={"7px"}>
    <SliderFilledTrack bg={"#3AAB41"} />
  </SliderTrack>
  <SliderThumb w={"20px"} h={"20px"} />
</Slider>

{marks.map((mark, index) => (
  <Box key={index} position="absolute" left={`${getMarkPosition(mark.value)}%`} transform="translateX(-50%)" zIndex={2}>
    <Box w="10px" h="10px" borderRadius="50%" bg="#3AAB41" border="2px solid #fff" />
    <Text fontSize="sm" color="#fff" textAlign="center">
      {mark.label}
    </Text>
  </Box>
))}
</Box> */
}
