import { Flex, Input } from "@chakra-ui/react";
import { PButton } from "../../../shared/ui/buttons";

interface DashboardDepositAmountStepFormValuesProps {
  formik: {
    loading: boolean;
    isValid: boolean;
    dirty: boolean;
    isSubmitting?: boolean;
  };
}

export const DashboardDepositAmountStepFormValues: React.FC<DashboardDepositAmountStepFormValuesProps> = () => {
  return (
    <Flex gap={3}>
      <Input type="number" name="amount_usd" placeholder="Type amount" borderRadius={"8px"} />
      <PButton type="submit">Send</PButton>
    </Flex>
  );
};
