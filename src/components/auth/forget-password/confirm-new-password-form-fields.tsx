import { Stack } from "@chakra-ui/react";
import { FormikInput } from "../../../shared/form";
import { PButton } from "../../../shared/ui/buttons";

interface ForgetNewPasswordFieldsProps {
  formik: {
    loading?: boolean;
    isValid: boolean;
    dirty: boolean;
    isSubmitting?: boolean;
  };
}

export const ConfirmNewPasswordFormFields: React.FC<ForgetNewPasswordFieldsProps> = () => {
  return (
    <>
      <Stack direction={["column"]} m="0 auto" spacing={4}>
        <FormikInput type="password" name="password" placeholder="New password" />
        <FormikInput type="password" name="password_confirmation" placeholder="Confirm password" />

        <PButton type="submit">Save</PButton>
      </Stack>
    </>
  );
};
