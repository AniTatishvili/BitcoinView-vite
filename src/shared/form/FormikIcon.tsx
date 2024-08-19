import { Icon } from "@chakra-ui/react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const FormikIcon = (props: { icon: any }) => {
  const { icon } = props;
  return <Icon as={icon} color="gray.300" />;
};
