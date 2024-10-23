import { Select, Flex } from "@chakra-ui/react";
import { useUserSignupStore } from "../../store/dashboard/user-auth";

import React from "react";
import axios from "axios";
import { FormikLabel } from "./FormikLabel";
import countries from "../../shared/data/countries.json";

export const CountrySelect = () => {
  const { updateUserFields, country } = useUserSignupStore();
  const [detectCountry, setDetectCountry] = React.useState<string>("");

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const changeCountry = (e: any) => {
    console.log(e.target.value, " e.target.value");
    updateUserFields({ country: e.target.value });
  };

  React.useEffect(() => {
    const fetchCountry = async () => {
      try {
        const response = await axios.get("https://ipapi.co/json/");
        // console.log(response.data, "response data");
        if (response.data && response.data.country_name) {
          setDetectCountry(response.data.country_name);
        }
      } catch (error) {
        console.error("Error fetching country:", error);
      }
    };

    fetchCountry();
  }, []);

  return (
    <Flex flexDir={"column"} gap={1}>
      <FormikLabel>Country</FormikLabel>
      {detectCountry && (
        <Select name="country" defaultValue={country} onChange={changeCountry} w={"100%"} h={"40px"} bg={"#35363D"} color={"#fff"} fontSize={"14px"} border={0}>
          {countries.map((country_item, i) => {
            return (
              <option key={i} value={country_item.name}>
                {country_item.name}
              </option>
            );
          })}
        </Select>
      )}
    </Flex>
  );
};
