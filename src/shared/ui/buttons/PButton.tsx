import { Button } from "@chakra-ui/react";

interface PButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  isLoading?: boolean;
  isSubmitting?: boolean;
  w?: string;
}

export const PButton = ({ children, onClick, className, type, isLoading, isSubmitting, w }: PButtonProps) => {
  return (
    <Button
      w={w}
      backgroundColor={"#f7931a"}
      color={"#fff"}
      borderRadius={"8px"}
      py={"14px"}
      px={"16px"}
      mx={"auto"}
      cursor={"pointer"}
      _hover={{ opacity: 0.8 }}
      className={className}
      onClick={onClick}
      type={type}
      disabled={isLoading || isSubmitting}>
      {children}
    </Button>
  );
};
