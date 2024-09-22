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
          <FormSelect>
            <option>USD</option>
            <option>EUR</option>
          </FormSelect>
          <FormikInput name="password" type="password" placeholder={t("common:USER.AUTH.PASSWORD")} />
          <FormSelect>
            <option>TP Account</option>
            <option>Account</option>
          </FormSelect>
          <FormikRegistrationCheckbox>Deposit notifications</FormikRegistrationCheckbox>
          <FormikRegistrationCheckbox>Other notifications</FormikRegistrationCheckbox>
        </Flex>
        <Flex w={{ base: "100%", md: "360px" }} flexDir={"column"} gap={4}>
          <FormikInput name="last_name" type="text" placeholder="Surname" />
          <FormikNumber name="mobile" placeholder={t("common:USER.AUTH.PHONE")} />
          <FormSelect>
            <option>TP Account</option>
            <option>Account</option>
          </FormSelect>
          <FormSelect>
            <option>TP Account</option>
            <option>Account</option>
          </FormSelect>
          <FormSelect>
            <option>Active</option>
            <option>Deny</option>
          </FormSelect>
          <FormSelect>
            <option>GMT+4</option>
            <option>GMT+3</option>
          </FormSelect>
          <FormikRegistrationCheckbox>Support chat notifications</FormikRegistrationCheckbox>
          <FormikRegistrationCheckbox>Show FTD</FormikRegistrationCheckbox>
        </Flex>
      </Flex>
      <PButton type="submit" w={"fit-content"}>
        {formik.loading ? t("LOADING") : "Confirm"}
      </PButton>
    </Flex>
  );
};
