import { Box, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react";
import { FaEdit } from "react-icons/fa";
import { AdminPackagesContentForm } from "../../../components/dashboards/admin-dashboard/admin-packages-content";

export const EditPackageModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        onClick={() => {
          onOpen();
        }}>
        <FaEdit />
      </Box>

      <Modal size={"xl"} isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader bg={"#1F2027"} borderRadius={"8px 8px 0 0"}>
            Edit package
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody bg={"#1F2027"} pb={6}>
            <AdminPackagesContentForm />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
