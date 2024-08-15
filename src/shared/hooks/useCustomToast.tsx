import { useToast } from "@chakra-ui/react";

const useCustomToast = () => {
  const toast = useToast();

  const showToast = (msg: string) => {
    toast({
      position: "top",
      description: msg,
      duration: 6500,
      isClosable: true,
    });
  };

  return showToast;
};

export default useCustomToast;
