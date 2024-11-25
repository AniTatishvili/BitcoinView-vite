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
      <FormikInput name="title" type="text" placeholder="Event title" />
      <FormikInput name="description" type="text" placeholder="Event description" />
      <FormikInput name="external_link" type="text" placeholder="Event external link" />
      <FormikInput name="video_url" type="text" placeholder="Event video url" />
      <FormikInput name="image_url" type="number" placeholder="Event image url" />

      <PButton type="submit" w={"fit-content"}>
        {loading ? t("common:USER.AUTH.LOADING") : "Claims"}
      </PButton>
    </Flex>
  );
};
