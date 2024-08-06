import React from "react";
import axios from "axios";

import { useDispatch } from "react-redux";

import { isValidPhoneNumber } from "react-phone-number-input/mobile";
import { setUpdateUserData } from "../../app/providers/store/slice/signup";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useField } from "formik";

// import { ErrorBox } from "./ErrorBox";

interface FormikNumberProps {
  name: string;
  placeholder?: string;
}

export const FormikNumber = ({ name, placeholder }: FormikNumberProps) => {
  const dispatch = useDispatch();
  const [phone, setPhone] = React.useState<string>("");
  const [country, setCountry] = React.useState<string>("us");
  const [field] = useField(name);

  const handleChangePhoneNumber = (value: string) => {
    setPhone(value);
    dispatch(setUpdateUserData(value));
  };

  React.useEffect(() => {
    // https://ip-api.com/json
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

  return (
    <>
      <div className="w-full">
        <PhoneInput
          country={country}
          value={field.value}
          inputProps={{
            type: "tel",
          }}
          placeholder={placeholder}
          onChange={(phone) => handleChangePhoneNumber(phone)}
          containerStyle={{ width: "100%", backgroundColor: "black", borderRadius: "8px" }}
        />
        {phone && !isValidPhoneNumber(phone) ? (
          <div>
            <div>Incorrect mobile number format</div>
          </div>
        ) : null}
      </div>
    </>
  );
};
