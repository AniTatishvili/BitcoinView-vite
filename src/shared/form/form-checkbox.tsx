import { Flex, Checkbox, Text } from "@chakra-ui/react";

interface FormCheckboxProps {
  children?: React.ReactNode;
}

export const FormikRegistrationCheckbox = ({ children }: FormCheckboxProps) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handlerAcceptUserTerms = (e: any) => {
    console.log(e.target.checked);
  };

  // const handleChangeCompanyConfidantCheckboxStatus = (e: ChangeEvent<HTMLInputElement>) => {
  //   const checkboxValue = e.target.checked ? 1 : 0;
  //   // setCheckbox(checkboxValue);
  //   dispatch(setUpdatedUserData({ company_confidant_accept: checkboxValue }));
  // };

  return (
    <Flex alignItems="flex-start">
      <Checkbox dir="flex" alignItems="flex-start" size="md" colorScheme="yellow" onChange={handlerAcceptUserTerms}>
        <Text fontSize="xs">{children}</Text>
      </Checkbox>
    </Flex>
  );
};
