import { Flex, Checkbox, Text } from "@chakra-ui/react";

interface FormCheckboxProps {
  children?: React.ReactNode;
}

export const FormikRegistrationCheckbox = ({ children }: FormCheckboxProps) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handlerAcceptUserTerms = (e: any) => {
    console.log(e.target.checked);
  };

  return (
    <Flex alignItems="flex-start">
      <Checkbox dir="flex" alignItems="flex-start" size="md" colorScheme="yellow" id="terms_accept" onChange={handlerAcceptUserTerms}>
        <Text fontSize="xs">{children}</Text>
      </Checkbox>
    </Flex>
  );
};
