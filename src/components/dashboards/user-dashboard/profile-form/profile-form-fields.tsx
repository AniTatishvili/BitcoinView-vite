import { useTranslation } from "react-i18next";
import { Flex, Text } from "@chakra-ui/react";
import { PButton } from "../../../../shared/ui/buttons";
import { CountrySelect, FormikInput, FormikNumber, FormikRegistrationCheckbox, FormSelect } from "../../../../shared/form";

interface ProfileFieldsProps {
  formik: {
    loading: boolean;
    isValid: boolean;
    dirty: boolean;
    isSubmitting: boolean;
  };
}

export const ProfileFormFields: React.FC<ProfileFieldsProps> = ({ formik }) => {
  const { t } = useTranslation();
  return (
    <Flex flexDir={"column"} gap={4}>
      <Text as="h2" color="#fff" fontSize={"24px"} fontWeight={"600"} pb={"1rem"}>
        Update profile
      </Text>
      <Flex w={"100%"} flexDir={{ base: "column", md: "row" }} gap={4}>
        <Flex w={{ base: "100%", md: "360px" }} flexDir={"column"} gap={4}>
          <FormikInput name="first_name" type="text" placeholder="Name" />
          <FormikInput name="email" type="email" placeholder={t("common:USER.AUTH.EMAIL")} />
          <CountrySelect />
          <FormikInput name="resource" type="text" placeholder="Resource" />
          <FormSelect name="courency" label="Courancy" data={["USD", "EUR"]} />
          <FormikInput name="password" type="password" placeholder={t("common:USER.AUTH.PASSWORD")} />
          <FormikInput name="confirm_password" type="password" placeholder="Confirm password" />
          <FormSelect name="tp_account_groups" label="TP Account groups" data={["TP Account", "none"]} />
          <FormikRegistrationCheckbox name="deposit_notifications">Deposit notifications</FormikRegistrationCheckbox>
          <FormikRegistrationCheckbox name="other_notifications">Other notifications</FormikRegistrationCheckbox>
        </Flex>
        <Flex w={{ base: "100%", md: "360px" }} flexDir={"column"} gap={4}>
          <FormikInput name="last_name" type="text" placeholder="Surname" />
          <FormikNumber name="mobile" placeholder={t("common:USER.AUTH.PHONE")} />
          <FormSelect name="employee" label="Employee" data={["Employee", "None"]} />
          <FormSelect name="retention_status" label="Retention status" data={["true", "false"]} />
          <FormSelect name="customer_status" label="Customer status" data={["Customer status", "EUR"]} />
          <FormSelect name="time_zone" label="Time zone" data={["Time zone", "EUR"]} />
          <FormikRegistrationCheckbox name="chat_notifications">Support chat notifications</FormikRegistrationCheckbox>
          <FormikRegistrationCheckbox name="show_ftd">Show FTD</FormikRegistrationCheckbox>
        </Flex>
      </Flex>
      <PButton type="submit" w={"fit-content"}>
        {formik.loading ? t("LOADING") : "Confirm"}
      </PButton>
    </Flex>
  );
};
