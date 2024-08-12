import { ReactNode } from "react";
import { Text } from "@chakra-ui/react";

interface PTextProps {
  children: ReactNode;
}

export const PText = ({ children, ...props }: PTextProps) => {
  return (
    <Text color={"#999"} fontFamily={"NunitoVariable"} fontSize={"15px"} {...props}>
      {children}
    </Text>
  );
};
