import { IconType } from "react-icons";

export interface MenuItem {
  link: string;
  name: string;
  icon: IconType;
}

export interface DashboardSideMenuProps {
  data: MenuItem[];
}
