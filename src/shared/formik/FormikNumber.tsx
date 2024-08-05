import React from "react";
import axios from "axios";

import { isValidPhoneNumber } from "react-phone-number-input/mobile";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

import { ErrorBox } from "./ErrorBox";

export const FormikNumber = (props: any) => {
  const [phone, setPhone] = React.useState<string>("");
  const [country, setCountry] = React.useState<string>("us");

  // const handleChangePhoneNumber = (value: any) => {
  //   setNumber(value);
  //   console.log("value", value);
  // };

  React.useEffect(() => {
    // Fetch user's country using ip-api
    const fetchCountry = async () => {
      try {
        const response = await axios.get("https://ip-api.com/json");
        if (response.data && response.data.countryCode) {
          setCountry(response.data.countryCode.toLowerCase());
        }
      } catch (error) {
        console.error("Error fetching country:", error);
      }
    };

    fetchCountry();
  }, []);

  console.log(isValidPhoneNumber(phone));
  return (
    <>
      <div className="w-full">
        <PhoneInput
          country={country}
          value={phone}
          onChange={(phone) => setPhone(phone)}
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
