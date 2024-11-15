import { Form, Formik } from "formik";
import { Flex, Text } from "@chakra-ui/react";
import { PushNotificationsFormFields } from "./push-notifications-form-fields";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { pushNotificationsSchema, pushNotificationsValues } from "../../../shared/form";

export const PushNotificationsContent = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const sendNewNotification = (values: any) => {
    console.log("Form Values:", values);
  };

  return (
    <Flex w={"100%"} h={"100%"} flexDir={{ base: "column", md: "row" }} backgroundColor={"#1F2027"} borderRadius={"8px"} p={"1rem"} gap={4}>
      <Flex w={{ base: "100%", md: "70%" }} flexDir={"column"} gap={4}>
        <Formik initialValues={pushNotificationsValues} validationSchema={null} validateOnMount onSubmit={sendNewNotification}>
          {(formik) => {
            return (
              <Form style={{ width: "100%" }}>
                <PushNotificationsFormFields
                  formik={{
                    loading: false,
                    isValid: formik.isValid,
                    dirty: formik.dirty,
                  }}
                  {...formik}
                />
              </Form>
            );
          }}
        </Formik>
      </Flex>
      <Flex w={{ base: "100%", md: "30%" }} flexDir={"column"} gap={4}>
        <Text>Latest notifications</Text>
        <Flex bg={"#35363d"} borderRadius={"8px"} p={4}>
          <Flex>Subject Date</Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};
