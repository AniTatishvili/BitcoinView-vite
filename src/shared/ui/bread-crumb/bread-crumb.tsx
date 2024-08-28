import { Breadcrumb, BreadcrumbItem } from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface BreadCrumbsItems {
  url: string;
  text: string;
  isCurrentPage: boolean;
}
interface BreadCrumbsProps {
  items: BreadCrumbsItems[];
}

export const BreadCrumb: React.FC<BreadCrumbsProps> = ({ items }) => {
  return (
    <Breadcrumb fontWeight="medium" fontSize="sm">
      {items.map((item, i) => (
        <BreadcrumbItem key={i} isCurrentPage={item.isCurrentPage}>
          <Link to={item.url}>{item.text}</Link>
        </BreadcrumbItem>
      ))}
    </Breadcrumb>
  );
};
