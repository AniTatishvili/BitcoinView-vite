import React from "react";
import { Flex, Box, Button, Slider, SliderTrack, SliderFilledTrack, SliderThumb, SliderMark, Text, Stack, Tooltip } from "@chakra-ui/react";
import { RiQuestionFill } from "react-icons/ri";

interface SliderMarkPackageProps {
  step: number;
  marks: { value: number; label: string }[];
}

export const SliderMarkPackage: React.FC<SliderMarkPackageProps> = ({ step, marks }) => {
  const [value, setValue] = React.useState<number>(10);

  const handleChange = (val: number | number[]) => {
    console.log(val, 1432);
    if (typeof val === "number") {
      setValue(val);
    }
  };

  return (
    <Box width="100%" maxWidth="600px" mx="auto" mt="4">
      <Stack spacing={4}>
        <Stack direction="row" justify="space-between">
          {marks.map((mark, index) => (
            <Flex key={index} fontSize="sm" color="gray.500" gap={1}>
              <Text color={"#fff"}>{mark.label}</Text>
              <Tooltip label="3-digit code on the back of credit card." aria-label="A tooltip" placement="bottom">
                <Box>
                  <RiQuestionFill />
                </Box>
              </Tooltip>
            </Flex>
          ))}
        </Stack>

        <Slider step={step} value={value} onChange={handleChange} isRange>
          <SliderTrack>
            <SliderFilledTrack />
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
          <SliderThumb />
          {/* <SliderThumb index={1} /> */}
        </Slider>

        <Stack direction="row" justify="space-between">
          {marks.map((mark, index) => (
            <Text fontSize="sm" color="gray.500" key={index}>
              {mark.value}
            </Text>
          ))}
        </Stack>
      </Stack>
      <Button mt={4}>Purchase</Button>
    </Box>
  );
};
