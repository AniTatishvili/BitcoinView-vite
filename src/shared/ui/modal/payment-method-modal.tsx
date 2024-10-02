import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, Button, useDisclosure, Flex, Image } from "@chakra-ui/react";
import React from "react";
// import { QRCodeSVG } from "qrcode.react";

interface PaymentMethodModalPops {
  src: string;
}

export const PaymentMethodModal: React.FC<PaymentMethodModalPops> = ({ src }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        w={"43px"}
        h={"46px"}
        p={0}
        onClick={onOpen}
        bg={"transparent"}
        _hover={{ backround: "transparent" }}
        _focus={{ backround: "transparent" }}
        _active={{ backround: "transparent" }}>
        <Image src={src} alt="QR Code" />
        {/* <QRCodeSVG value="https://example.com" /> */}
      </Button>

      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader bg={"#1F2027"} borderRadius={"8px 8px 0 0"}>
            QR Code
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody bg={"#1F2027"} borderRadius={"0 0 8px 8px"} pb={6}>
            <Flex justify={"center"} align={"center"}>
              <Image src={src} alt="QR Code" />
              {/* <QRCodeSVG value="https://example.com" /> */}
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
