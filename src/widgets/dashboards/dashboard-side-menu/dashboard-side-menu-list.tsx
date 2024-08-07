import { TabPanels } from "@chakra-ui/react";

type TChildren = {
  children: JSX.Element | JSX.Element[];
};

export const DashboardSideMenuList = ({ children }: TChildren) => {
  return <TabPanels h={"100vh"}>{children}</TabPanels>;
};
