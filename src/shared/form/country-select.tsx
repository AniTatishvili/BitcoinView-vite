import { Select } from "@chakra-ui/react";

import countries from "../../shared/data/countries.json";

export const CountrySelect = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const changeCountry = (e: any) => {
    console.log(e.target.value);
  };

  return (
    <>
      <Select placeholder="Select your country" onChange={changeCountry} w={"100%"} bg={"#35363D"} color={"#fff"} fontSize={"14px"} border={0}>
        {countries.map((country) => {
          return (
            <option key={country.id} value={country.name}>
              {country.name}
            </option>
          );
        })}
      </Select>
    </>
  );
};
