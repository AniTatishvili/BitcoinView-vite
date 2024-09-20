import { Select } from "@chakra-ui/react";

interface SelectProps {
  children?: React.ReactNode;
  name?: string;
}

export const FormSelect = ({ children, name }: SelectProps) => {
  return (
    <Select w={"100%"} bg={"#35363D"} color={"#fff"} fontSize={"14px"} border={0} name={name}>
      {children}
    </Select>
  );
};
