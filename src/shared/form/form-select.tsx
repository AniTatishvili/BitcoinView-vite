import { Flex, Select } from "@chakra-ui/react";
import { FormikLabel } from "./FormikLabel";
import { useUserSignupStore } from "../../store/dashboard/user-auth";

interface SelectProps {
  // children?: React.ReactNode;
  data: string[];
  name: string;
  label?: string;
}

export const FormSelect = ({ data, name, label }: SelectProps) => {
  const { updateUserFields } = useUserSignupStore();
  const user_data = useUserSignupStore();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSelectChange = (e: any) => {
    console.log(e.target.value);
    updateUserFields({ [name]: e.target.value });
  };

  return (
    <Flex flexDir={"column"} gap={1}>
      <FormikLabel>{label}</FormikLabel>
      <Select w={"100%"} bg={"#35363D"} color={"#fff"} fontSize={"14px"} border={0} name={name} onChange={handleSelectChange}>
        <option value="">{user_data[name as keyof typeof user_data] || "Select" + " " + label}</option>
        {data.map((item, i) => {
          return (
            <option key={i} value={item}>
              {item}
            </option>
          );
        })}
      </Select>
    </Flex>
  );
};
