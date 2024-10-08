import React from "react";
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, Flex } from "@chakra-ui/react";

interface OrbitPackageModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OrbitPackageModal: React.FC<OrbitPackageModalProps> = ({ isOpen, onClose }) => {
  return (
    <Modal size={"xl"} isCentered isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader bg={"#1F2027"} borderRadius={"8px 8px 0 0"}>
          Contact
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody bg={"#1F2027"} borderRadius={"0 0 8px 8px"} pb={6}>
          <Flex align="center">Contact info</Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
