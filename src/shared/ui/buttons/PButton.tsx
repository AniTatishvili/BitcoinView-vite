interface PButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  isLoading?: boolean;
  isSubmitting?: boolean;
}

export const PButton = ({ children, onClick, className, type, disabled, isLoading, isSubmitting }: PButtonProps) => {
  return (
    <button className={`bg-[#BCFE2F] text-[#fff] rounded-[8px] py-2 px-4 ${className}`} onClick={onClick} type={type}>
      {isLoading ? "Loading..." : children}
    </button>
  );
};
