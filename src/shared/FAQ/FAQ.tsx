import { Button, Flex, List, ListItem, Text } from "@chakra-ui/react";
import { NavLink, useNavigate } from "react-router-dom";
import { MdArrowForwardIos } from "react-icons/md";

interface LinkItem {
  link: string;
  text: string;
}

interface FAQProps {
  linksArr: LinkItem[];
}

export const FAQ: React.FC<FAQProps> = ({ linksArr }) => {
  const navigate = useNavigate();

  return (
    <Flex w={"fit-content"} flexDir={"column"} gap={4}>
      <Text as="h4">FAQ</Text>
      <List display={"flex"} flexDir={"column"} gap={1}>
        {linksArr.map((item, i) => (
          <ListItem key={i}>
            <NavLink to={item.link}>{item.text}</NavLink>
          </ListItem>
        ))}
      </List>
      <Button
        w={"fit-content"}
        onClick={() => {
          navigate("/");
        }}>
        <Text mr={2}>More</Text> <MdArrowForwardIos />
      </Button>
    </Flex>
  );
};
