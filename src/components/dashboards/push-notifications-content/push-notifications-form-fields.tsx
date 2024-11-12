import { Flex } from "@chakra-ui/react";
import { FormikInput } from "../../../shared/form";

interface PushNotificationsFormFieldsProps {
  formik: {
    loading?: boolean;
    isValid: boolean;
    dirty: boolean;
    isSubmitting?: boolean;
  };
}
export const PushNotificationsFormFields: React.FC<PushNotificationsFormFieldsProps> = () => {
  return (
    <Flex flexDir={{ base: "column", md: "row" }} gap={4}>
      <FormikInput type={"type"} placeholder={"Subject"} name={"subject"} />
      <FormikInput type={"type"} placeholder={"Subject"} name={"subject"} />
      <FormikInput type={"type"} placeholder={"Subject"} name={"subject"} />
    </Flex>
  );
};
