import React from "react";
import { useTranslation } from "react-i18next";
import { Flex } from "@chakra-ui/react";
import { FormikInput } from "../../../../shared/form";
import { PButton } from "../../../../shared/ui/buttons";

interface AddUserSliderContentFormFieldsProps {
  formik: {
    loading: boolean;
    isValid: boolean;
    dirty: boolean;
    // handleSubmit: () => void;
  };
}

export const AddUserSliderContentFormFields: React.FC<AddUserSliderContentFormFieldsProps> = ({ formik }) => {
  const { t } = useTranslation();
  const { loading } = formik;

  return (
    <Flex w={"100%"} flexDir={"column"} gap={4}>
      <FormikInput name="title" type="text" placeholder="Package Name" />
      <FormikInput name="description" type="text" placeholder="Package Amount" />
      <FormikInput name="external_link" type="text" placeholder="Package Duration Time" />
      <FormikInput name="video_url" type="text" placeholder="Package Monthly Profit" />
      <FormikInput name="image_url" type="number" placeholder="Package Sort Order Id" />

      <PButton type="submit" w={"fit-content"}>
        {loading ? t("common:USER.AUTH.LOADING") : "Claims"}
      </PButton>
    </Flex>
  );
};
