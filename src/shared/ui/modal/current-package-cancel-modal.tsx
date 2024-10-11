import axios from "axios";

import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, ModalCloseButton, Button, useDisclosure, Flex } from "@chakra-ui/react";
import { useNavigate } from "react-router";
import useCustomToast from "../../hooks/useCustomToast";

interface CurrentPackageCancelProps {
  purchase_id: number;
}

export const CurrentPackageCancelModal: React.FC<CurrentPackageCancelProps> = ({ purchase_id }) => {
  const navigate = useNavigate();
  const showToast = useCustomToast();

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
      showToast("success", response.data.message);
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
          handleCancelPackage();
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
            {/* Current package */}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody bg={"#1F2027"} pb={6}>
            <Flex justify={"center"} align={"center"}>
              Are you sure?
            </Flex>
          </ModalBody>
          <ModalFooter justifyContent={"space-between"} bg={"#1F2027"} borderRadius={"0 0 8px 8px"}>
            <Button variant="ghost" onClick={() => navigate("/user-dashboard/user-monthly-profile")}>
              Yes, I'm sure
            </Button>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              No
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
