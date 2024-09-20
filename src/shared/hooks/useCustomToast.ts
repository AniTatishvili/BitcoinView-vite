import { useToast } from "@chakra-ui/react";

const useCustomToast = () => {
  const toast = useToast();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const showToast = (status: any, msg: string) => {
    toast({
      position: "top",
      // title: title || "Notification",
      description: msg,
      status: status,
      duration: 3500,
      isClosable: true,
    });
  };

  return showToast;
};

export default useCustomToast;
