import { TabList } from "@chakra-ui/react";

type TChildren = {
  children: JSX.Element | JSX.Element[];
};

export const DashboardSideMenu = ({ children }: TChildren) => {
  return (
    <TabList backgroundColor={"#1F2027"} color={"#fff"} display={"flex"} flexDir={"column"} alignItems={"start"} p={"1rem"} gap={"8px"}>
      {children}
    </TabList>
  );
};
