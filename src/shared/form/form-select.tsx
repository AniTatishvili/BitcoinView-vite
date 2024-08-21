import { Select } from "@chakra-ui/react";

interface SelectProps {
  children?: React.ReactNode;
}

export const FormSelect = ({ children }: SelectProps) => {
  return (
    <Select w={"100%"} bg={"#35363D"} color={"#fff"} fontSize={"14px"} border={0}>
      {children}
    </Select>
  );
};
