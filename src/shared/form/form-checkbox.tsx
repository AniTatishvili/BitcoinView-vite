import { Flex, Checkbox, Text } from "@chakra-ui/react";
import { useUserSignupStore } from "../../store/dashboard/user-auth";

interface FormCheckboxProps {
  children?: React.ReactNode;
  name: string;
}

export const FormikRegistrationCheckbox = ({ children, name }: FormCheckboxProps) => {
  const { updateUserFields } = useUserSignupStore();
  const user_data = useUserSignupStore();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handlerAcceptUserTerms = (e: any) => {
    console.log(e.target.checked);
    updateUserFields({ [name]: e.target.checked });
  };

  return (
    <Flex alignItems="flex-start">
      <Checkbox
        dir="flex"
        alignItems="flex-start"
        size="md"
        colorScheme="yellow"
        name={name}
        onChange={handlerAcceptUserTerms}
        isChecked={user_data[name as keyof typeof user_data]}>
        <Text fontSize="xs">{children}</Text>
      </Checkbox>
    </Flex>
  );
};
