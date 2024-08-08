import { Button } from "@chakra-ui/react";

interface PButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  // disabled?: boolean;
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
      py={"8px"}
      px={"16px"}
      className={className}
      onClick={onClick}
      type={type}>
      {isLoading || isSubmitting ? "Loading..." : children}
    </Button>
  );
};
