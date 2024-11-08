import { Select } from "@chakra-ui/react";

interface DataItem {
  value: string;
}

export const CustomSelect = ({ data }: { data: DataItem[] }) => {
  return (
    <Select>
      <option value={"Advisers"}>Advisers</option>
      {data?.map((item: DataItem, i: number) => {
        return (
          <option value="" key={i}>
            {item.value}
          </option>
        );
      })}
    </Select>
  );
};
