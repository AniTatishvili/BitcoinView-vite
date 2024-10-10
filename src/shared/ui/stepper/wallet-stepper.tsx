import { Stepper, Step, StepIndicator, StepStatus, StepIcon, StepNumber, StepSeparator, Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Step {
  content: ReactNode;
}

interface WalletStepperProps {
  steps: Step[];
  activeStep: number;
  color?: string;
}

export const WalletStepper: React.FC<WalletStepperProps> = ({ steps, activeStep, color }) => {
  return (
    <Stepper index={activeStep} orientation={"vertical"} w={"100%"} minH={"420px"} h={"100%"} gap={0}>
      {steps.map((step, index) => (
        <Step key={index}>
          <StepIndicator bg={index === 2 && color !== null && color !== undefined ? color : "#ccc"} color={"#1a202c"} border={0}>
            <StepStatus complete={<StepIcon />} incomplete={<StepNumber />} active={<StepNumber />} />
          </StepIndicator>

          <Box flexShrink="0">{step.content}</Box>

          <StepSeparator />
        </Step>
      ))}
    </Stepper>
  );
};
