import React from "react";
import axios from "axios";
import { useUserSignupStore } from "../../store/dashboard/user-auth";
import { isValidPhoneNumber } from "react-phone-number-input/mobile";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useField } from "formik";
import { Flex } from "@chakra-ui/react";
import { FormikLabel } from "./FormikLabel";

interface FormikNumberProps {
  name: string;
  placeholder?: string;
}

export const FormikNumber = ({ name, placeholder }: FormikNumberProps) => {
  const { mobile } = useUserSignupStore();
  const [country, setCountry] = React.useState<string>("us");
  const [field, , helpers] = useField(name);
  const { setValue } = helpers;

  const handleChangePhoneNumber = (value: string) => {
    const formattedValue = value.startsWith("+") ? value : `+${value}`;
    setValue(formattedValue);
  };

  React.useEffect(() => {
    const fetchCountry = async () => {
      try {
        const response = await axios.get("https://ipapi.co/json/");
        if (response.data && response.data.country_code) {
          setCountry(response.data.country_code.toLowerCase());
        }
      } catch (error) {
        console.error("Error fetching country:", error);
      }
    };

    fetchCountry();
  }, []);

  React.useEffect(() => {
    setValue(mobile);
  }, [mobile, name, setValue]);

  return (
    <Flex w={"100%"} flexDir={"column"} gap={1}>
      <FormikLabel>Phone</FormikLabel>
      <PhoneInput
        country={country}
        value={field.value || mobile}
        inputProps={{
          type: "tel",
        }}
        placeholder={placeholder}
        onChange={handleChangePhoneNumber}
        containerStyle={{ width: "100%", backgroundColor: "black", borderRadius: "8px" }}
      />
      {field.value && !isValidPhoneNumber(field.value) ? <div style={{ color: "red", fontSize: "0.875rem" }}>Incorrect mobile number format</div> : null}
    </Flex>
  );
};
