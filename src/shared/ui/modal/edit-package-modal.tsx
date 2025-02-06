import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody } from "@chakra-ui/react";

interface EditPackageModalProps {
  onClose: () => void;
  children: React.ReactNode;
}

export const EditPackageModal: React.FC<EditPackageModalProps> = ({ onClose, children }) => {
  return (
    <Modal size={"xl"} isCentered isOpen onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader bg={"#1F2027"} borderRadius={"8px 8px 0 0"}>
          Edit Package
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody bg={"#1F2027"} pb={6}>
          {children}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
