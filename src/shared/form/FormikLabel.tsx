interface FormikLabelProps {
  children: React.ReactNode;
}

export const FormikLabel: React.FC<FormikLabelProps> = ({ children }) => {
  return <label>{children}</label>;
};
