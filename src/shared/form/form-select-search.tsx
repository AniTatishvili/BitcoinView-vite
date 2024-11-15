import { Flex } from "@chakra-ui/react";
import { useFormikContext } from "formik";
import Select from "react-select";

export const FormSelectSearch = () => {
  const { setFieldValue } = useFormikContext();

  const options = [
    { value: "apple", label: "Apple" },
    { value: "orange", label: "Orange" },
    { value: "banana", label: "Banana" },
    { value: "grape", label: "Grape" },
    { value: "pineapple", label: "Pineapple" },
  ];

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (selectedOption: any) => {
    setFieldValue("send_to", selectedOption?.value);
    console.log("Selected:", selectedOption);
  };

  return (
    <Flex w={"100%"} flexDir={"column"} gap={1}>
      <label>Send to</label>
      <Select
        options={options}
        onChange={handleChange}
        placeholder="Send to..."
        styles={{
          control: (base) => ({ ...base, height: "40px", background: "#35363d", color: "fff", border: 0, borderRadius: "8px" }),
        }}
      />
    </Flex>
  );
};
