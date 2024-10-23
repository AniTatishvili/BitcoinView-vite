import axios from "axios";

import { useNavigate } from "react-router";
import { useUserPackageCancelStore } from "../../../store/dashboard/user-package-cancel-store";
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, ModalCloseButton, Button, useDisclosure, Flex, Text } from "@chakra-ui/react";
import useCustomToast from "../../hooks/useCustomToast";
import { useUserSignupStore } from "../../../store/dashboard/user-auth";

interface CurrentPackageCancelProps {
  purchase_id: number;
}

export const CurrentPackageCancelModal: React.FC<CurrentPackageCancelProps> = ({ purchase_id }) => {
  const navigate = useNavigate();
  const showToast = useCustomToast();
  const { setUserPackageCancelData } = useUserPackageCancelStore();
  const { updateUserFields } = useUserSignupStore();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const url = "https://phplaravel-1309375-4888543.cloudwaysapps.com/api/purchase/cancel";
  const token = typeof window !== "undefined" ? JSON.parse(window.localStorage.getItem("USER_AUTH") || "{}") : {};

  const handleCancelPackage = async () => {
    try {
      const response = await axios.post(
        url,
        { purchase_id: purchase_id },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setUserPackageCancelData({
        package_cancled: true,
      });

      showToast("success", response.data.message);
      onClose();

      updateUserFields({ active_package: 0 });
      console.log("Package cancelled successfully:", response.data);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      showToast("error", error.response.data.message);
      console.error("Error canceling avatar:", error);
    }
  };

  return (
    <>
      <Button
        onClick={() => {
          onOpen();
        }}
        bg={"#f7931a"}
        _hover={{ backround: "transparent" }}
        _focus={{ backround: "transparent" }}
        _active={{ backround: "transparent" }}>
        Cancel
      </Button>

      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader bg={"#1F2027"} borderRadius={"8px 8px 0 0"}>
            Are you sure?
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody bg={"#1F2027"} pb={6}>
            <Flex flexDir={"column"} gap={2}>
              <Text>Purchase has been canceled and 75% of the amount refunded.</Text>
              <Text>Are you sure do you want to cancel this package?</Text>
            </Flex>
          </ModalBody>
          <ModalFooter justifyContent={"space-between"} bg={"#1F2027"} borderRadius={"0 0 8px 8px"}>
            <Button
              colorScheme="red"
              onClick={() => {
                navigate("/user-dashboard/package-selection");
                handleCancelPackage();
              }}>
              Yes, I'm sure
            </Button>
            <Button mr={3} onClick={onClose}>
              No
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
