import { Box } from "@chakra-ui/react";
import React from "react";
import Select from "react-select";

interface Adviser {
  id?: number;
  username: string;
}

interface FormSelectMultipleSearchProps {
  adviserData: Adviser[];
}

const FormSelectMultipleSearch: React.FC<FormSelectMultipleSearchProps> = ({ adviserData }) => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [selectedOptions, setSelectedOptions] = React.useState<any[]>([]);

  // console.log(adviserData, "adviserData");
  if (!Array.isArray(adviserData) || adviserData.length === 0) {
    return <Box>No adviser data available</Box>;
  }

  const colourOptions = adviserData.map((adviser) => ({
    label: adviser,
    value: adviser,
  }));

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (selected: any) => {
    if (selected.length > 2) {
      return;
    }

    setSelectedOptions(selected);
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
