import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Flex,
  Text,
  Checkbox,
  Button,
  List,
  ListItem,
} from "@chakra-ui/react";
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
            <Flex
              maxH={"calc(100vh - 120px)"}
              flexDir={"column"}
              gap={4}
              overflowY={"scroll"}
              css={{
                "&::-webkit-scrollbar": {
                  width: "4px",
                  height: "4px",
                },
                "&::-webkit-scrollbar-track": {
                  width: "4px",
                },
                "&::-webkit-scrollbar-thumb": {
                  background: "#f7931a",
                  borderRadius: "24px",
                },
              }}>
              <Flex flexDir={"column"}>
                <Text as={"h4"} fontSize={"14px"} fontWeight={"600"} my={1}>
                  Trial
                </Text>
                <List fontSize={"12px"} mb={2}>
                  <ListItem display={"flex"} gap={2}>
                    <Text fontWeight={"600"}>• Minimum Deposit:</Text> $50
                  </ListItem>
                  <ListItem display={"flex"} gap={2}>
                    <Text fontWeight={"600"}>• Profit:</Text> Guaranteed 1.3% in 2 weeks
                  </ListItem>
                  <ListItem display={"flex"} gap={2}>
                    <Text fontWeight={"600"}>• Purpose:</Text> Test platform capabilities
                  </ListItem>
                  <ListItem display={"flex"} gap={2}>
                    <Text fontWeight={"600"}>• Restrictions:</Text> Only available once per client and per IP address
                  </ListItem>
                </List>
                <Text as={"h4"} fontSize={"14px"} fontWeight={"600"} my={1}>
                  Apollo
                </Text>
                <List fontSize={"12px"} mb={2}>
                  <ListItem display={"flex"} gap={2}>
                    <Text fontWeight={"600"}>• Minimum Deposit:</Text> $1,000
                  </ListItem>
                  <ListItem display={"flex"} gap={2}>
                    <Text fontWeight={"600"}>• Profit:</Text> Guaranteed 1.9%
                  </ListItem>
                  <ListItem display={"flex"} gap={2}>
                    <Text fontWeight={"600"}>• Eligible for First Profit Withdrawal:</Text> 45 days, after, every month
                  </ListItem>
                  <ListItem display={"flex"} gap={2}>
                    <Text fontWeight={"600"}>• Restrictions:</Text> Only available once per client and per IP address
                  </ListItem>
                </List>
                <Text as={"h4"} fontSize={"14px"} fontWeight={"600"} my={1}>
                  Voyager
                </Text>
                <List fontSize={"12px"} mb={2}>
                  <ListItem display={"flex"} gap={2}>
                    <Text fontWeight={"600"}>• Minimum Deposit:</Text> $5,000
                  </ListItem>
                  <ListItem display={"flex"} gap={2}>
                    <Text fontWeight={"600"}>• Monthly Profit:</Text> 1.6%
                  </ListItem>
                  <ListItem display={"flex"} gap={2}>
                    <Text fontWeight={"600"}>• Eligible for First Profit Withdrawal:</Text> 45 days, after, every month
                  </ListItem>
                  <ListItem display={"flex"} gap={2}>
                    <Text fontWeight={"600"}>• Duration:</Text> 2 months
                  </ListItem>
                  <ListItem display={"flex"} gap={2}>
                    <Text fontWeight={"600"}>• Cancellation Fee:</Text> 20% to withdraw initial investment before contract matures
                  </ListItem>
                  <ListItem display={"flex"} gap={2}>
                    <Text fontWeight={"600"}>• Withdrawals:</Text> Monthly profits can be withdrawn without penalties.
                  </ListItem>
                </List>
                <Text as={"h4"} fontSize={"14px"} fontWeight={"600"} my={1}>
                  Elite
                </Text>
                <List fontSize={"12px"} mb={2}>
                  <ListItem display={"flex"} gap={2}>
                    <Text fontWeight={"600"}>• Minimum Deposit:</Text> $8,000
                  </ListItem>
                  <ListItem display={"flex"} gap={2}>
                    <Text fontWeight={"600"}>• Monthly Profit:</Text> 1.9%
                  </ListItem>
                  <ListItem display={"flex"} gap={2}>
                    <Text fontWeight={"600"}>• Eligible for First Profit Withdrawal:</Text> 45 days, after, every month
                  </ListItem>
                  <ListItem display={"flex"} gap={2}>
                    <Text fontWeight={"600"}>• Duration:</Text> 3 months
                  </ListItem>
                  <ListItem display={"flex"} gap={2}>
                    <Text fontWeight={"600"}>• Cancellation Fee:</Text> 23% to withdraw initial investment before contract matures
                  </ListItem>
                  <ListItem display={"flex"} gap={2}>
                    <Text fontWeight={"600"}>• Withdrawals:</Text> Monthly profits can be withdrawn without penalties
                  </ListItem>
                </List>
                <Text as={"h4"} fontSize={"14px"} fontWeight={"600"} my={1}>
                  Pioneer
                </Text>
                <List fontSize={"12px"} mb={2}>
                  <ListItem display={"flex"} gap={2}>
                    <Text fontWeight={"600"}>• Minimum Deposit:</Text> $16,000
                  </ListItem>
                  <ListItem display={"flex"} gap={2}>
                    <Text fontWeight={"600"}>• Monthly Profit:</Text> 2.2%
                  </ListItem>
                  <ListItem display={"flex"} gap={2}>
                    <Text fontWeight={"600"}>• Eligible for First Profit Withdrawal:</Text> 45 days, after, every month
                  </ListItem>
                  <ListItem display={"flex"} gap={2}>
                    <Text fontWeight={"600"}>• Duration:</Text> 6 months
                  </ListItem>
                  <ListItem display={"flex"} gap={2}>
                    <Text fontWeight={"600"}>• Cancellation Fee:</Text> 23% to withdraw initial investment before contract matures
                  </ListItem>
                  <ListItem display={"flex"} gap={2}>
                    <Text fontWeight={"600"}>• Withdrawals:</Text> Monthly profits can be withdrawn without penalties
                  </ListItem>
                </List>
                <Text as={"h4"} fontSize={"14px"} fontWeight={"600"} my={1}>
                  Quantum
                </Text>
                <List fontSize={"12px"} mb={2}>
                  <ListItem display={"flex"} gap={2}>
                    <Text fontWeight={"600"}>• Minimum Deposit:</Text> $32,000
                  </ListItem>
                  <ListItem display={"flex"} gap={2}>
                    <Text fontWeight={"600"}>• Monthly Profit:</Text> 2.5%
                  </ListItem>
                  <ListItem display={"flex"} gap={2}>
                    <Text fontWeight={"600"}>• Eligible for First Profit Withdrawal:</Text> 45 days, after, every month
                  </ListItem>
                  <ListItem display={"flex"} gap={2}>
                    <Text fontWeight={"600"}>• Duration:</Text> 6 months
                  </ListItem>
                  <ListItem display={"flex"} gap={2}>
                    <Text fontWeight={"600"}>• Cancellation Fee:</Text> 26% to withdraw initial investment before contract matures
                  </ListItem>
                  <ListItem display={"flex"} gap={2}>
                    <Text fontWeight={"600"}>• Withdrawals:</Text> Monthly profits can be withdrawn without penalties
                  </ListItem>
                </List>
                <Text as={"h4"} fontSize={"14px"} fontWeight={"600"} my={1}>
                  Titan
                </Text>
                <List fontSize={"12px"} mb={2}>
                  <ListItem display={"flex"} gap={2}>
                    <Text fontWeight={"600"}>• Minimum Deposit:</Text> $64,000
                  </ListItem>
                  <ListItem display={"flex"} gap={2}>
                    <Text fontWeight={"600"}>• Monthly Profit:</Text> 2.8%
                  </ListItem>
                  <ListItem display={"flex"} gap={2}>
                    <Text fontWeight={"600"}>• Eligible for First Profit Withdrawal:</Text> 45 days, after, every month
                  </ListItem>
                  <ListItem display={"flex"} gap={2}>
                    <Text fontWeight={"600"}>• Duration:</Text> 9 months
                  </ListItem>
                  <ListItem display={"flex"} gap={2}>
                    <Text fontWeight={"600"}>• Cancellation Fee:</Text> 26% to withdraw initial investment before contract matures
                  </ListItem>
                  <ListItem display={"flex"} gap={2}>
                    <Text fontWeight={"600"}>• Withdrawals:</Text> Monthly profits can be withdrawn without penalties
                  </ListItem>
                </List>
                <Text as={"h4"} fontSize={"14px"} fontWeight={"600"} my={1}>
                  Nexus
                </Text>
                <List fontSize={"12px"} mb={2}>
                  <ListItem display={"flex"} gap={2}>
                    <Text fontWeight={"600"}>• Minimum Deposit:</Text> $128,000
                  </ListItem>
                  <ListItem display={"flex"} gap={2}>
                    <Text fontWeight={"600"}>• Monthly Profit:</Text> 3.0%
                  </ListItem>
                  <ListItem display={"flex"} gap={2}>
                    <Text fontWeight={"600"}>• Eligible for First Profit Withdrawal:</Text> 45 days, after, every month
                  </ListItem>
                  <ListItem display={"flex"} gap={2}>
                    <Text fontWeight={"600"}>• Duration:</Text> 12 months
                  </ListItem>
                  <ListItem display={"flex"} gap={2}>
                    <Text fontWeight={"600"}>• Cancellation Fee:</Text> 29% to withdraw initial investment before contract matures
                  </ListItem>
                  <ListItem display={"flex"} gap={2}>
                    <Text fontWeight={"600"}>• Withdrawals:</Text> Monthly profits can be withdrawn without penalties
                  </ListItem>
                </List>
                <Text as={"h4"} fontSize={"14px"} fontWeight={"600"} my={1}>
                  Platinum
                </Text>
                <List fontSize={"12px"} mb={2}>
                  <ListItem display={"flex"} gap={2}>
                    <Text fontWeight={"600"}>• Minimum Deposit:</Text> $163,000
                  </ListItem>
                  <ListItem display={"flex"} gap={2}>
                    <Text fontWeight={"600"}>• Monthly Profit:</Text> 3.3%
                  </ListItem>
                  <ListItem display={"flex"} gap={2}>
                    <Text fontWeight={"600"}>• Eligible for First Profit Withdrawal:</Text> 45 days, after, every month
                  </ListItem>
                  <ListItem display={"flex"} gap={2}>
                    <Text fontWeight={"600"}>• Duration:</Text> 18 months
                  </ListItem>
                  <ListItem display={"flex"} gap={2}>
                    <Text fontWeight={"600"}>• Cancellation Fee:</Text> 29% to withdraw initial investment before contract matures
                  </ListItem>
                  <ListItem display={"flex"} gap={2}>
                    <Text fontWeight={"600"}>• Withdrawals:</Text> Monthly profits can be withdrawn without penalties
                  </ListItem>
                </List>
                <Text as={"h4"} fontSize={"14px"} fontWeight={"600"} my={1}>
                  Orbit
                </Text>
                <List fontSize={"12px"} mb={2}>
                  <ListItem display={"flex"} gap={2}>
                    <Text fontWeight={"600"}>• Minimum Deposit:</Text> $216,000
                  </ListItem>
                  <ListItem display={"flex"} gap={2}>
                    <Text fontWeight={"600"}>• Monthly Profit:</Text> 3.5%
                  </ListItem>
                  <ListItem display={"flex"} gap={2}>
                    <Text fontWeight={"600"}>• Eligible for First Profit Withdrawal:</Text> 45 days, after, every month
                  </ListItem>
                  <ListItem display={"flex"} gap={2}>
                    <Text fontWeight={"600"}>• Duration:</Text> 24 months
                  </ListItem>
                  <ListItem display={"flex"} gap={2}>
                    <Text fontWeight={"600"}>• Cancellation Fee:</Text> 30% to withdraw initial investment before contract matures
                  </ListItem>
                  <ListItem display={"flex"} gap={2}>
                    <Text fontWeight={"600"}>• Withdrawals:</Text> Monthly profits can be withdrawn without penalties
                  </ListItem>
                </List>
                <Text as={"h4"} fontSize={"14px"} fontWeight={"600"} my={1}>
                  Additional Terms
                </Text>
                <List fontSize={"12px"} mb={2}>
                  <ListItem display={"flex"} gap={2}>
                    <Text fontWeight={"600"}>•</Text> Terms are subject to change in favor of the client based on feedback and progress.
                  </ListItem>
                </List>
              </Flex>
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
