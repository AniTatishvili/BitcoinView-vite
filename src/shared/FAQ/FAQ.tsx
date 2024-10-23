import { Button, Flex, List, ListItem, Text } from "@chakra-ui/react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { MdArrowForwardIos } from "react-icons/md";

interface LinkItem {
  link: string;
  text: string;
}

interface FAQProps {
  linksArr: LinkItem[];
}

export const FAQ: React.FC<FAQProps> = ({ linksArr }) => {
  const location = useLocation();

  return (
    <Flex w={"fit-content"} flexDir={"column"} gap={4}>
      {location.pathname.includes("user-monthly-profile") && <Text as="h4">FAQ</Text>}
      <List display={"flex"} flexDir={"column"} gap={1}>
        {linksArr.map((item, i) => (
          <ListItem key={i}>
            <NavLink to={item.link} target="_blank">
              {item.text}
            </NavLink>
          </ListItem>
        ))}
      </List>
      <Link to="https://bitcoinview.org/faq/" target="_blank">
        <Button w={"fit-content"}>
          <Text mr={2}>More</Text> <MdArrowForwardIos />
        </Button>
      </Link>
    </Flex>
  );
};
