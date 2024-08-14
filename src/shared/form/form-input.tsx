import { Flex, FormLabel, Input } from "@chakra-ui/react";
import { FC } from "react";
import { useFormContext } from "react-hook-form";

interface FormInputProps {
  inputName: string;
  type?: string;
  placeholder?: string;
}

export const FormInput: FC<FormInputProps> = ({ inputName, type, placeholder }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const error = errors[inputName]?.message as string;

  return (
    <Flex>
      <FormLabel>{inputName}:</FormLabel>
      <Input {...register(inputName)} type={type} placeholder={placeholder} />
      {error && <p className="text-sm text-[#CC241D]">{error}</p>}
    </Flex>
  );
};

// import { useTranslation } from "react-i18next";
// import { Flex } from "@chakra-ui/react";
// import { PButton } from "../../../shared/ui/buttons";
// import { FormContent, FormikNumber } from "../../../shared/form";
// import { useFormContext } from "react-hook-form";

// interface SignupFieldsProps {
//   formik: {
//     loading: boolean;
//     isValid: boolean;
//     dirty: boolean;
//     isSubmitting: boolean;
//   };
// }

// export const SignupFields = () => {
//   const { t } = useTranslation();
//   const {
//     formState: { isSubmitting, isValid },
//   } = useFormContext();
//   console.log(11111);
//   return (
//     <Flex flexDir={"column"} gap={"16px"}>
//       <FormContent inputName="username" type="text" placeholder={t("USERNAME")} />
//       <FormContent inputName="email" type="email" placeholder={t("EMAIL")} />
//       <FormikNumber name="phone_number" placeholder={t("PHONE")} />
//       <FormContent inputName="password" type="password" placeholder={t("PASSWORD")} />
//       <PButton type="submit" isLoading={isSubmitting} disabled={isSubmitting || !isValid}>
//         {t("SIGNUP")}
//       </PButton>
//     </Flex>
//   );
// };
