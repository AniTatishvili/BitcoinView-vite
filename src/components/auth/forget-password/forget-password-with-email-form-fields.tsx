import { Stack } from "@chakra-ui/react";
import { FormikInput } from "../../../shared/form";
import { PButton } from "../../../shared/ui/buttons";

interface ForgetPasswordFieldsProps {
  formik: {
    loading: boolean;
    isValid: boolean;
    dirty: boolean;
    isSubmitting?: boolean;
  };
}

export const ForgetPasswordWithEmailFormFields: React.FC<ForgetPasswordFieldsProps> = () => {
  return (
    <Stack direction={["column"]} m="0 auto" spacing={4}>
      <FormikInput name="email" type="email" placeholder="Email" />
      <PButton type="submit">Submit</PButton>
    </Stack>
  );
};
