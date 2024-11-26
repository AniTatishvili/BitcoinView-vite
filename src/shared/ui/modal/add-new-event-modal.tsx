import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, useDisclosure } from "@chakra-ui/react";
import { TbPlus } from "react-icons/tb";
import { AddUserSliderContentForm } from "../../../components/dashboards/admin-dashboard/add-user-slider-content";

export const AddNewEventModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        onClick={() => {
          onOpen();
        }}
        bg={"none"}
        fontSize={"22px"}
        _hover={{ backround: "transparent" }}
        _focus={{ backround: "transparent" }}
        _active={{ backround: "transparent" }}>
        <TbPlus />
      </Button>

      <Modal size={"xl"} isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader bg={"#1F2027"} borderRadius={"8px 8px 0 0"}>
            Add New Event
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody bg={"#1F2027"} pb={6}>
            <AddUserSliderContentForm />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
