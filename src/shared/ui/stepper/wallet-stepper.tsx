import { Stepper, Step, StepIndicator, StepStatus, StepIcon, StepNumber, StepSeparator, Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Step {
  content: ReactNode;
}

interface WalletStepperProps {
  steps: Step[];
  activeStep: number;
}

export const WalletStepper: React.FC<WalletStepperProps> = ({ steps, activeStep }) => {
  return (
    <Stepper index={activeStep} orientation="vertical" height="400px" gap="0">
      {steps.map((step, index) => (
        <Step key={index}>
          <StepIndicator>
            <StepStatus complete={<StepIcon />} incomplete={<StepNumber />} active={<StepNumber />} />
          </StepIndicator>

          <Box flexShrink="0">{step.content}</Box>

          <StepSeparator />
        </Step>
      ))}
    </Stepper>
  );
};
