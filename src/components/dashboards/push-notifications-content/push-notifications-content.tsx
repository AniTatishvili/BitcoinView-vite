import { Form, Formik } from "formik";
import { Button, Flex, Text } from "@chakra-ui/react";
import { SlateEditor } from "../../../shared/slate-editor";
import { PushNotificationsFormFields } from "./push-notifications-form-fields";
import { pushNotificationsSchema, pushNotificationsValues } from "../../../shared/form";

export const PushNotificationsContent = () => {
  const sendNewNotification = () => {
    console.log(2222);
  };

  return (
    <Flex w={"100%"} h={"100%"} flexDir={{ base: "column", md: "row" }} backgroundColor={"#1F2027"} borderRadius={"8px"} p={"1rem"} gap={4}>
      <Flex flexDir={"column"} gap={4}>
        <Formik initialValues={pushNotificationsValues} validationSchema={pushNotificationsSchema} validateOnMount onSubmit={sendNewNotification}>
          {(formik) => {
            return (
              <Form style={{ width: "100%" }}>
                <PushNotificationsFormFields
                  formik={{
                    loading: false,
                    isValid: false,
                    dirty: false,
                  }}
                  {...formik}
                />
                <SlateEditor />
                <Button>Save as a Template</Button>
                <Button type={"submit"}>Send</Button>
              </Form>
            );
          }}
        </Formik>
      </Flex>
      <Flex flexDir={"column"} gap={4}>
        <Text>Latest notifications</Text>
        <Flex>
          <Flex>Subject Date</Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
