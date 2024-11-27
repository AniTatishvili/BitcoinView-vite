import axios from "axios";

import { Box } from "@chakra-ui/react";
import React from "react";
import Select from "react-select";
import useCustomToast from "../hooks/useCustomToast";

interface Adviser {
  id?: number;
  username: string;
  advisor_group: string;
}

interface FormSelectMultipleSearchProps {
  adviserData: Adviser[];
}

const FormSelectMultipleSearch: React.FC<FormSelectMultipleSearchProps> = ({ adviserData }) => {
  const showToast = useCustomToast();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [selectedOptions, setSelectedOptions] = React.useState<any[]>([]);

  // console.log(adviserData, "adviserData");
  if (!Array.isArray(adviserData) || adviserData.length === 0) {
    return <Box>No adviser data available</Box>;
  }

  const colourOptions = adviserData.map((adviser) => ({
    label: `${adviser.username} (${adviser.advisor_group})`,
    value: adviser.id,
  }));

  const token = typeof window !== "undefined" ? JSON.parse(window.localStorage.getItem("USER_AUTH") || "{}") : {};
  const url = "https://phplaravel-1309375-4888543.cloudwaysapps.com/api/assign-to-advisor";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (selected: any) => {
    if (selected.length > 2) {
      return;
    }

    setSelectedOptions(selected);

    const val = {
      user_ids: [],
      advisor_id: selected[0].value,
    };

    axios
      .post(url, val, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response, "response");
        showToast("success", "Event added successfully");
      })
      .catch((error) => {
        showToast("error", error.response.data.message);
        console.error("Error deleting event:", error);
      });
  };

  return (
    <Box>
      <Select
        closeMenuOnSelect={false}
        isMulti
        options={colourOptions}
        value={selectedOptions}
        onChange={handleChange}
        getOptionLabel={(e) => e.label}
        isClearable={true}
        // menuIsOpen={selectedOptions.length > 2 ? false : true}
      />
      {selectedOptions.length >= 2 && <Box style={{ color: "#ffc107", marginTop: "10px" }}>You can only select up to 2 options.</Box>}
    </Box>
  );
};

export default FormSelectMultipleSearch;
