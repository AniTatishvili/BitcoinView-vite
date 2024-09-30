import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, Button, useDisclosure, Flex } from "@chakra-ui/react";

export const PaymentMethodModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        onClick={onOpen}
        bg={"transparent"}
        _hover={{ backround: "transparent" }}
        _focus={{ backround: "transparent" }}
        _active={{ backround: "transparent" }}>
        Open Modal
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader bg={"#1F2027"} borderRadius={"8px 8px 0 0"}>
            QR Code
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody bg={"#1F2027"} borderRadius={"0 0 8px 8px"}>
            <Flex justify={"center"} align={"center"}>
              text
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
