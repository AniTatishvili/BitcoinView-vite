import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalFooter, ModalCloseButton, Button, useDisclosure, Flex } from "@chakra-ui/react";
import { useNavigate } from "react-router";

export const CurrentPackageCancelModal = () => {
  const navigate = useNavigate();

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        onClick={onOpen}
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
