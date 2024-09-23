import { Select, Flex } from "@chakra-ui/react";
import { useUserSignupStore } from "../../store/dashboard/user-auth";

import countries from "../../shared/data/countries.json";
import { FormikLabel } from "./FormikLabel";

export const CountrySelect = () => {
  const { updateUserFields, country } = useUserSignupStore();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const changeCountry = (e: any) => {
    console.log(e.target.value);
    updateUserFields({ country: e.target.value });
  };

  return (
    <Flex flexDir={"column"} gap={1}>
      <FormikLabel>Country</FormikLabel>
      <Select
        placeholder={country ? country : "Select your country"}
        name="country"
        onChange={changeCountry}
        w={"100%"}
        bg={"#35363D"}
        color={"#fff"}
        fontSize={"14px"}
        border={0}>
        {countries.map((country) => {
          return (
            <option key={country.id} value={country.name}>
              {country.name}
            </option>
          );
        })}
      </Select>
    </Flex>
  );
};
