import { Button } from "@chakra-ui/react";

interface PButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  isLoading?: boolean;
  isSubmitting?: boolean;
}

export const PButton = ({ children, onClick, className, type, isLoading, isSubmitting }: PButtonProps) => {
  return (
    <Button
      w={"100%"}
      backgroundColor={"#f7931a"}
      color={"#fff"}
      borderRadius={"8px"}
      py={"14px"}
      px={"16px"}
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
