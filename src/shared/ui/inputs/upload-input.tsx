import { Flex, Input } from "@chakra-ui/react";

interface UploadInputProps {
  name: string;
  id?: number;
  accept: string;
  isLoading?: boolean;
  cb: (event: React.ChangeEvent<HTMLInputElement>) => void;
  w: string;
}

export const UploadInput: React.FC<UploadInputProps> = ({ name, id, accept, isLoading, cb, w, ...props }) => {
  return (
    <>
      <label htmlFor={`${id}`}>
        <Flex
          align={"center"}
          justify={"center"}
          px={"4"}
          py={"2"}
          w={w}
          whiteSpace={"nowrap"}
          border={"none"}
          borderRadius={"4"}
          bg={isLoading ? "#d9d9d9" : "#242424"}
          color={"#f2f2f2"}
          fontWeight={"medium"}
          cursor={"pointer"}
          transition={"all 350ms ease"}
          pointerEvents={isLoading ? "none" : "auto"}
          _hover={{
            background: "#dd9933",
            color: "#242424",
          }}
          {...props}>
          {name}
        </Flex>
      </label>
      <Input type={"file"} id={`${id}`} accept={accept} display={"none"} onChange={cb} disabled={isLoading} />
    </>
  );
};
