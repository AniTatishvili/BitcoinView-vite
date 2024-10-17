import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, useDisclosure, Flex, Text, Checkbox, Button } from "@chakra-ui/react";
import { PButton } from "../buttons";

interface TermsAndConditionsModalProps {
  isChecked: boolean;
  onCheckboxChange: (checked: boolean) => void;
}

export const TermsAndConditionsModal = ({ isChecked, onCheckboxChange }: TermsAndConditionsModalProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <PButton onClick={onOpen}>Terms and conditions</PButton>

      <Modal size={"lg"} isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader bg={"#1F2027"} borderRadius={"8px 8px 0 0"}>
            Terms and Conditions
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody bg={"#1F2027"} borderRadius={"0 0 8px 8px"} pb={6}>
            <Flex flexDir={"column"} gap={4}>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non libero autem eum, neque illo excepturi ipsam cupiditate recusandae possimus
                exercitationem asperiores eligendi, sed molestias doloribus adipisci fuga officia numquam provident.
              </Text>
              <Flex justify={"space-between"} align={"center"}>
                <Flex gap={2}>
                  <Checkbox
                    colorScheme="green"
                    isChecked={isChecked}
                    onChange={(e) => {
                      onCheckboxChange(e.target.checked);
                      // if (e.target.checked) {
                      //   onClose();
                      // }
                    }}
                  />
                  <Text>I accept</Text>
                </Flex>
                <Button bg={"#3AAB41"} onClick={onClose}>
                  Okay
                </Button>
              </Flex>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
