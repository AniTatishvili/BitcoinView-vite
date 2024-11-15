import { Button, Flex } from "@chakra-ui/react";
import { FormikInput, FormSelectSearch } from "../../../shared/form";
import { Field, FieldProps } from "formik";
import { SlateEditor } from "../../../shared/slate-editor";

interface PushNotificationsFormFieldsProps {
  formik: {
    loading?: boolean;
    isValid: boolean;
    dirty: boolean;
    isSubmitting?: boolean;
  };
}
export const PushNotificationsFormFields: React.FC<PushNotificationsFormFieldsProps> = (isValid, dirty) => {
  return (
    <Flex flexDir={"column"} gap={4}>
      <Flex flexDir={{ base: "column", md: "row" }} gap={4}>
        <FormikInput type={"type"} placeholder={"Subject"} name={"subject"} />
        <FormikInput type={"type"} placeholder={"Date"} name={"date"} />
        <FormSelectSearch />
      </Flex>
      <Field name="editorContent">
        {({ field, form }: FieldProps) => (
          <SlateEditor
            value={field.value}
            onChange={(html: string) => {
              form.setFieldValue(field.name, html);
            }}
          />
        )}
      </Field>
      <Flex justify={"space-between"} align={"center"}>
        <Button>Save as a Template</Button>
        <Button type={"submit"} disabled={!isValid || !dirty} bg={"#3AAB41"}>
          Send
        </Button>
      </Flex>
    </Flex>
  );
};
