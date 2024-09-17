import { Flex, Text, Textarea, TabPanel, TabPanels } from "@chakra-ui/react";
import { PButton } from "../../../shared/ui/buttons";

interface MessagesProps {
  text: string;
  date: string;
}

const messagesArr: MessagesProps[] = [
  {
    text: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.",
    date: "12/02/2024",
  },
  {
    text: "Riatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident2.",
    date: "12/02/2024",
  },
  {
    text: "Pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.3",
    date: "12/02/2024",
  },
  {
    text: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.",
    date: "12/02/2024",
  },
  {
    text: "Riatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident2.",
    date: "12/02/2024",
  },
  {
    text: "Pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.3",
    date: "12/02/2024",
  },
  {
    text: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.",
    date: "12/02/2024",
  },
  {
    text: "Riatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident2.",
    date: "12/02/2024",
  },
  {
    text: "Pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.3",
    date: "12/02/2024",
  },
  {
    text: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.",
    date: "12/02/2024",
  },
  {
    text: "Riatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident2.",
    date: "12/02/2024",
  },
  {
    text: "Pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.3",
    date: "12/02/2024",
  },
  {
    text: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.",
    date: "12/02/2024",
  },
  {
    text: "Riatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident2.",
    date: "12/02/2024",
  },
  {
    text: "Pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.3",
    date: "12/02/2024",
  },
  {
    text: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.",
    date: "12/02/2024",
  },
  {
    text: "Riatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident2.",
    date: "12/02/2024",
  },
  {
    text: "Pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.3",
    date: "12/02/2024",
  },
];

export const DashboardMessagesTabPanels = () => {
  return (
    <TabPanels w={{ base: "100%", lg: "60%" }} h={"100%"} bg={"#35363d"} borderRadius={"8px"} p={4}>
      {messagesArr.map((item, i) => {
        return (
          <TabPanel key={i} color={"#fff"} fontSize={"14px"} p={0}>
            <Flex flexDir={"column"} gap={4}>
              <Text>{item.text}</Text>
              <Textarea w={"100%"} h={"100%"} minH={"100px"} placeholder="Send response" />
              <PButton>Send</PButton>
            </Flex>
          </TabPanel>
        );
      })}
    </TabPanels>
  );
};
