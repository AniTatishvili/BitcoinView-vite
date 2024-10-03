import React from "react";
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, Flex, Box } from "@chakra-ui/react";
import moment from "moment";

interface MoneyTransferdetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any;
}

export const MoneyTransferdetailsModal: React.FC<MoneyTransferdetailsModalProps> = ({ isOpen, onClose, data }) => {
  return (
    <Modal size={"xl"} isCentered isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader bg={"#1F2027"} borderRadius={"8px 8px 0 0"}>
          Money Transfer Details
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody bg={"#1F2027"} borderRadius={"0 0 8px 8px"} pb={6}>
          <Flex direction="column" align="center" gap={2}>
            <Flex w={"100%"} flexDir={{ base: "column", sm: "row" }} gap={{ base: 1, sm: 4 }}>
              <Box w={"145px"} fontWeight={"600"}>
                Time:
              </Box>
              <Box fontSize={"14px"}>{moment(data.created_at).format("DD/MM/yyyy h:mm:ss a")}</Box>
            </Flex>
            <Flex w={"100%"} flexDir={{ base: "column", sm: "row" }} gap={{ base: 1, sm: 4 }}>
              <Box w={"145px"} fontWeight={"600"}>
                Type:
              </Box>
              <Box fontSize={"14px"}>{data.transaction_type}</Box>
            </Flex>
            <Flex w={"100%"} flexDir={{ base: "column", sm: "row" }} gap={{ base: 1, sm: 4 }}>
              <Box w={"145px"} fontWeight={"600"}>
                Deposit Wallet:
              </Box>
              <Box fontSize={"14px"}>{data.btc_wallet}</Box>
            </Flex>
            <Flex w={"100%"} flexDir={{ base: "column", sm: "row" }} gap={{ base: 1, sm: 4 }}>
              <Box w={"145px"} fontWeight={"600"}>
                Coin:
              </Box>
              <Box fontSize={"14px"}>{data.currency}</Box>
            </Flex>
            <Flex w={"100%"} flexDir={{ base: "column", sm: "row" }} gap={{ base: 1, sm: 4 }}>
              <Box w={"145px"} fontWeight={"600"}>
                Amount $:
              </Box>
              <Box fontSize={"14px"}>{data.amount_usd}</Box>
            </Flex>
            <Flex w={"100%"} flexDir={{ base: "column", sm: "row" }} gap={{ base: 1, sm: 4 }}>
              <Box w={"145px"} fontWeight={"600"}>
                Amount Currency:
              </Box>
              <Box fontSize={"14px"}>{data.amount_currency}</Box>
            </Flex>
            <Flex w={"100%"} flexDir={{ base: "column", sm: "row" }} gap={{ base: 1, sm: 4 }}>
              <Box w={"145px"} fontWeight={"600"}>
                Destination:
              </Box>
              <Box fontSize={"14px"}>{data.destination}</Box>
            </Flex>
            <Flex w={"100%"} flexDir={{ base: "column", sm: "row" }} gap={{ base: 1, sm: 4 }}>
              <Box w={"145px"} fontWeight={"600"}>
                Adviser:
              </Box>
              <Box fontSize={"14px"}>{data.txid}</Box>
            </Flex>
            <Flex w={"100%"} flexDir={{ base: "column", sm: "row" }} gap={{ base: 1, sm: 4 }}>
              <Box w={"145px"} fontWeight={"600"}>
                Status:
              </Box>
              <Box fontSize={"14px"}>{data.transaction_status}</Box>
            </Flex>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
