import {
  Flex,
  Box,
  Input,
  Stepper,
  Step,
  StepIndicator,
  StepStatus,
  StepIcon,
  StepNumber,
  StepTitle,
  StepDescription,
  StepSeparator,
  useSteps,
} from "@chakra-ui/react";

import { RiCloseCircleFill } from "react-icons/ri";
import { TbClockHour4Filled } from "react-icons/tb";
import { TbCircleCheckFilled } from "react-icons/tb";

export const DashboardWithdrawSteps = () => {
  const steps = [
    { title: "Request", description: <Input type="text" placeholder="Enter Amount" bg={"#35363D"} color={"#fff"} borderRadius={"8px"} border={0} /> },
    {
      title: "Check",
      description: (
        <Flex fontSize={"22px"}>
          <Flex color={"orange"}>
            <TbClockHour4Filled />
          </Flex>
          <Flex color={"green"}>
            <TbCircleCheckFilled />
          </Flex>
          <Flex color={"red"}>
            <RiCloseCircleFill />
          </Flex>
        </Flex>
      ),
    },
    { title: "Result", description: "Faild" },
  ];

  const { activeStep } = useSteps({
    index: 1,
    count: steps.length,
  });

  return (
    <Stepper index={activeStep} orientation="vertical" height="250px" gap="0">
      {steps.map((step, index) => (
        <Step key={index}>
          <StepIndicator bg={"#ccc"} color={"#1a202c"} border={0}>
            <StepStatus complete={<StepIcon />} incomplete={<StepNumber />} active={<StepNumber />} />
          </StepIndicator>

          <Box flexShrink="0">
            <StepTitle>{step.title}</StepTitle>
            <StepDescription>{step.description}</StepDescription>
          </Box>

          <StepSeparator />
        </Step>
      ))}
    </Stepper>
  );
};

// render(<Example />)
