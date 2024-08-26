import { useTranslation } from "react-i18next";

import { Flex, Box, Text, Tooltip } from "@chakra-ui/react";

import { RiQuestionFill } from "react-icons/ri";

import { PButton } from "../../../shared/ui/buttons";
import { FormikInput, FormikRegistrationCheckbox } from "../../../shared/form";

interface PaymentMethodFieldsProps {
  formik: {
    loading: boolean;
    isValid: boolean;
    dirty: boolean;
    isSubmitting: boolean;
  };
}

export const PaymentMethodFormFields: React.FC<PaymentMethodFieldsProps> = ({ formik }) => {
  const { t } = useTranslation();

  return (
    <Flex flexDir={{ base: "column", md: "row" }} gap={4}>
      <Flex flexDir={"column"} gap={4}>
        <FormikInput name="card_number" type="text" placeholder="Card number" />
        <FormikInput name="exp_data" type="date" placeholder="Expiration date" />
        <Flex pos={"relative"}>
          <FormikInput name="cvv" type="text" placeholder="CVV" />
          <Box pos={"absolute"} right={"10px"} bottom={"16px"}>
            <Tooltip label="3-digit code on the back of credit card." aria-label="A tooltip" placement="bottom">
              <Box>
                <RiQuestionFill />
              </Box>
            </Tooltip>
          </Box>
        </Flex>
        <Flex>
          <FormikRegistrationCheckbox>Save my payment details for fututre purchase</FormikRegistrationCheckbox>
        </Flex>
      </Flex>
      <Flex w={{ base: "100%s", md: "350px" }} flexDir={"column"} bg={"#35363d"} borderRadius={"8px"} px={6} py={"1rem"} gap={4}>
        <Text>Order summary</Text>
        <Flex justify={"space-between"}>
          <Text>Balance amount</Text>
          <Text>$100</Text>
        </Flex>
        <Flex justify={"space-between"}>
          <Text>Total</Text>
          <Text>$1500</Text>
        </Flex>
        <PButton type="submit" isLoading={formik.isSubmitting} disabled={formik.isSubmitting || !formik.isValid || !formik.dirty} w={"fit-content"}>
          {formik.loading ? t("LOADING") : "Confirm"}
        </PButton>
      </Flex>
    </Flex>
  );
};
