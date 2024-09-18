// import React from "react";
// import { Box, Flex, Text, Tab, TabList, Menu, MenuButton, MenuList, MenuItem, Button, Hide, Show } from "@chakra-ui/react";
// import { ChevronDownIcon } from "@chakra-ui/icons";
// import { FaCalendar } from "react-icons/fa";

// interface MessagesProps {
//   text: string;
//   date: string;
// }

// const messagesArr: MessagesProps[] = [
//   {
//     text: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.",
//     date: "12/02/2024",
//   },
//   {
//     text: "Riatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident2.",
//     date: "12/02/2024",
//   },
//   {
//     text: "Pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.3",
//     date: "12/02/2024",
//   },
//   {
//     text: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.",
//     date: "12/02/2024",
//   },
//   {
//     text: "Riatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident2.",
//     date: "12/02/2024",
//   },
//   {
//     text: "Pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.3",
//     date: "12/02/2024",
//   },
//   {
//     text: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.",
//     date: "12/02/2024",
//   },
//   {
//     text: "Riatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident2.",
//     date: "12/02/2024",
//   },
//   {
//     text: "Pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.3",
//     date: "12/02/2024",
//   },
//   {
//     text: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.",
//     date: "12/02/2024",
//   },
//   {
//     text: "Riatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident2.",
//     date: "12/02/2024",
//   },
//   {
//     text: "Pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.3",
//     date: "12/02/2024",
//   },
//   {
//     text: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.",
//     date: "12/02/2024",
//   },
//   {
//     text: "Riatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident2.",
//     date: "12/02/2024",
//   },
//   {
//     text: "Pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.3",
//     date: "12/02/2024",
//   },
//   {
//     text: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.",
//     date: "12/02/2024",
//   },
//   {
//     text: "Riatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident2.",
//     date: "12/02/2024",
//   },
//   {
//     text: "Pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.3",
//     date: "12/02/2024",
//   },
// ];

// export const DashboardMessagesTabLists = () => {
//   const storedReadMessageIndexes = window.localStorage.getItem("READ_MESSAGE_INDEX");
//   let initialReadMessageIndexes = [];

//   try {
//     if (storedReadMessageIndexes) {
//       initialReadMessageIndexes = JSON.parse(storedReadMessageIndexes);
//       if (!Array.isArray(initialReadMessageIndexes)) {
//         initialReadMessageIndexes = [];
//       }
//     }
//   } catch (e) {
//     console.error("Failed to parse READ_MESSAGE_INDEX from localStorage", e);
//   }

//   const [messageIndex, setMessageIndex] = React.useState<number[]>(initialReadMessageIndexes);
//   const [selectedTab, setSelectedTab] = React.useState(0);
//   const readMessage = (indx: number) => {
//     const newReadMessageIndexes = [...messageIndex, indx];
//     setMessageIndex(newReadMessageIndexes);
//     window.localStorage.setItem("READ_MESSAGE_INDEX", JSON.stringify(newReadMessageIndexes));
//     // setcloseTabPanel(false);
//   };

//   return (
//     <>
//       <Hide below="lg">
//         <TabList w={"100%"} display={"flex"} flexDir={"column"} alignItems={"center"} gap={4} mb={"10px"} color={"#fff"} borderBottom={0}>
//           {messagesArr.map((item, i) => {
//             return (
//               <Tab
//                 key={i}
//                 w={"100%"}
//                 display={"inline-block"}
//                 bg={"#79797D"}
//                 color={messageIndex.includes(i) ? "#35363d" : "#3AAB41"}
//                 textAlign={"start"}
//                 borderLeft={"2px solid red"}
//                 borderBottom={0}
//                 borderColor={messageIndex.includes(i) ? "#35363d" : "#3AAB41"}
//                 borderRadius={"8px"}
//                 opacity={messageIndex.includes(i) ? "0.8" : 1}
//                 p={2}
//                 _selected={{ color: "#f7931a" }}
//                 onClick={() => setSelectedTab(i)}
//                 // onMouseOver={() => handleMouseOver(i)}
//                 // onMouseOut={handleMouseOut}
//               >
//                 <Box onClick={() => readMessage(i)}>
//                   <Flex align={"center"} gap={2}>
//                     <Text w={"100%"} color={"#fff"} fontSize={"14px"} whiteSpace={"nowrap"} textOverflow={"ellipsis"} overflow={"hidden"}>
//                       {item.text}
//                     </Text>
//                     {/* <Button w={"14px"} h={"28px"} color={"red"} p={1} opacity={hoveredTabIndex === i ? 1 : 0} onClick={handleClick}>
//                           <Box>
//                             <Icon as={MdDelete} />
//                           </Box>
//                         </Button> */}
//                   </Flex>
//                   <Flex alignItems={"center"} gap={1}>
//                     <FaCalendar />
//                     <Text lineHeight={1}>{item.date}</Text>
//                   </Flex>
//                 </Box>
//               </Tab>
//             );
//           })}
//         </TabList>
//       </Hide>
//       <Show below="lg">
//         {/* <TabList w={"100%"} display={"flex"} flexDir={"column"} alignItems={"center"} gap={4} mb={"10px"} color={"#fff"} borderBottom={0}>
//           <Menu>
//             <MenuButton as={Button} rightIcon={<ChevronDownIcon />} w={"100%"}>
//               Actions
//             </MenuButton>
//             <MenuList
//               w={"100%"}
//               h={"300px"}
//               overflowY={"scroll"}
//               css={{
//                 "&::-webkit-scrollbar": {
//                   width: "4px",
//                 },
//                 "&::-webkit-scrollbar-track": {
//                   width: "6px",
//                 },
//                 "&::-webkit-scrollbar-thumb": {
//                   background: "#f7931a",
//                   borderRadius: "24px",
//                 },
//               }}>
//               {messagesArr.map((item, i) => {
//                 return (
//                   <MenuItem w={"100%"}>
//                     <Tab
//                       key={i}
//                       w={"100%"}
//                       display={"inline-block"}
//                       bg={"#79797D"}
//                       color={messageIndex.includes(i) ? "#35363d" : "#3AAB41"}
//                       textAlign={"start"}
//                       borderLeft={"2px solid red"}
//                       borderBottom={0}
//                       borderColor={messageIndex.includes(i) ? "#35363d" : "#3AAB41"}
//                       borderRadius={"8px"}
//                       opacity={messageIndex.includes(i) ? "0.8" : 1}
//                       p={2}
//                       _selected={{ color: "#f7931a" }}>
//                       <Box w={"100%"} onClick={() => readMessage(i)}>
//                         <Flex w={"100%"} align={"center"} gap={2}>
//                           <Text
//                             w={"100%"}
//                             maxW={"calc(100vw - 125px)"}
//                             color={"#fff"}
//                             fontSize={"14px"}
//                             whiteSpace={"nowrap"}
//                             textOverflow={"ellipsis"}
//                             overflow={"hidden"}>
//                             {item.text}
//                           </Text>
//                         </Flex>
//                         <Flex alignItems={"center"} gap={1}>
//                           <FaCalendar />
//                           <Text lineHeight={1}>{item.date}</Text>
//                         </Flex>
//                       </Box>
//                     </Tab>
//                   </MenuItem>
//                 );
//               })}
//             </MenuList>
//           </Menu>
//         </TabList> */}
//       </Show>
//     </>
//   );
// };
import { useState } from "react";
import { Tab, TabList, Flex, Text, Box, Button } from "@chakra-ui/react";
import { FaCalendar } from "react-icons/fa";

interface Message {
  text: string;
  date: string;
}

export function DashboardMessagesTabLists() {
  const [selectedTab, setSelectedTab] = useState<number | null>(null);
  const [showTabPanel, setShowTabPanel] = useState<boolean>(false);

  const messagesArr: Message[] = [
    { text: "Message 1", date: "2024-09-01" },
    { text: "Message 2", date: "2024-09-02" },
    { text: "Message 3", date: "2024-09-03" },
  ];

  const messageIndex = [0, 1, 2]; // Example, replace with your logic

  const readMessage = (index: number) => {
    // Your message reading logic
    setShowTabPanel(true); // Show the TabPanel when tab is clicked
  };

  return (
    <Box w={"100%"}>
      {!showTabPanel && (
        <TabList w={"100%"} display={"flex"} flexDir={"column"} alignItems={"center"} gap={4} mb={"10px"} color={"#fff"} borderBottom={0}>
          {messagesArr.map((item, i) => (
            <Tab
              key={i}
              w={"100%"}
              display={"inline-block"}
              bg={"#79797D"}
              color={messageIndex.includes(i) ? "#35363d" : "#3AAB41"}
              textAlign={"start"}
              borderLeft={"2px solid red"}
              borderColor={messageIndex.includes(i) ? "#35363d" : "#3AAB41"}
              borderRadius={"8px"}
              opacity={messageIndex.includes(i) ? "0.8" : 1}
              p={2}
              _selected={{ color: "#f7931a" }}
              onClick={() => {
                setSelectedTab(i);
                readMessage(i);
              }}>
              <Flex align={"center"} gap={2}>
                <Text w={"100%"} color={"#fff"} fontSize={"14px"} whiteSpace={"nowrap"} textOverflow={"ellipsis"} overflow={"hidden"}>
                  {item.text}
                </Text>
              </Flex>
              <Flex alignItems={"center"} gap={1}>
                <FaCalendar />
                <Text lineHeight={1}>{item.date}</Text>
              </Flex>
            </Tab>
          ))}
        </TabList>
      )}

      {showTabPanel && selectedTab !== null && (
        <Box w={"100%"} bg={"#35363d"} p={4}>
          <Text color={"#fff"}>This is the tab panel for: {messagesArr[selectedTab].text}</Text>
          <Button
            mt={4}
            colorScheme={"teal"}
            onClick={() => setShowTabPanel(false)} // Close the TabPanel
          >
            Close
          </Button>
        </Box>
      )}
    </Box>
  );
}
