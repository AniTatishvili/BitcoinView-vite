import { Flex } from "@chakra-ui/react";
import { FormikInput } from "../../../../shared/form";
import { PButton } from "../../../../shared/ui/buttons";
import { useTranslation } from "react-i18next";

interface LoginFieldsProps {
  formik: {
    loading: boolean;
    isValid: boolean;
    dirty: boolean;
    // handleSubmit: () => void;
  };
}

export const AdminPackagesContentFormFields: React.FC<LoginFieldsProps> = ({ formik }) => {
  const { t } = useTranslation();
  const { loading } = formik;

  return (
    <Flex w={"100%"} flexDir={{ base: "column", md: "row" }} justify={"space-between"} gap={4}>
      <Flex w={"100%"} flexDir={"column"} gap={4}>
        <FormikInput name="package_name" type="text" placeholder="Package Name" />
        <FormikInput name="amount" type="text" placeholder="Package Amount" />
        <FormikInput name="duration_time" type="text" placeholder="Package Duration Time" />
        <FormikInput name="monthly_profit" type="text" placeholder="Package Monthly Profit" />
        <FormikInput name="sort_order_id" type="text" placeholder="Package Sort Order Id" />
      </Flex>
      <Flex w={"100%"} flexDir={"column"} justify={"flex-end"} align={"flex-end"} gap={4}>
        <FormikInput name="cancellation_fee" type="text" placeholder="Package Cancellation Fee" />
        <FormikInput name="condition" type="text" placeholder="Condition" />
        <FormikInput name="condition1" type="text" placeholder="Condition1" />
        <FormikInput name="duration_time" type="text" placeholder="Package Duration Time" />
        <FormikInput name="monthly_profit" type="text" placeholder="Package Monthly Profit" />
        <PButton type="submit" w={"fit-content"}>
          {loading ? t("common:USER.AUTH.LOADING") : t("common:USER.AUTH.SIGNIN")}
        </PButton>
      </Flex>
    </Flex>
  );
};
