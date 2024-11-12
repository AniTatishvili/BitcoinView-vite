import { Checkbox, Tbody, Td, Tr } from "@chakra-ui/react";

interface CustomTableBodyProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any[];
}

export const CustomTableBody = ({ data }: CustomTableBodyProps) => {
  return (
    <Tbody>
      {data.map((item, i) => (
        <Tr key={i}>
          <Td>{item.username}</Td>
          <Td>{item.registration_date}</Td>
          <Td>
            <Checkbox
              colorScheme={item.successful_deposit === true ? "green" : undefined}
              defaultChecked={item.successful_deposit === true}
              isReadOnly={true}
            />
          </Td>
          <Td>{item.successful_deposit_sum}</Td>
        </Tr>
      ))}
    </Tbody>
  );
};
