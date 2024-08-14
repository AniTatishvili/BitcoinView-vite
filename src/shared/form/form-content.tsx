import { FC } from "react";
import { FormInput } from "./form-input";

interface FormContentProps {
  inputName: string;
  type: string;
  placeholder: string;
}

export const FormContent: FC<FormContentProps> = ({ inputName, type, placeholder }) => (
  <FormInput inputName={inputName} type={type} placeholder={placeholder} />
);
