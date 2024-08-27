import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";

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
          <BreadcrumbLink href={item.url}>{item.text}</BreadcrumbLink>
        </BreadcrumbItem>
      ))}
      {/* <BreadcrumbItem>
        <BreadcrumbLink href="/app/user-dashboard/overview">Home</BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink href="#">Current</BreadcrumbLink>
      </BreadcrumbItem> */}
    </Breadcrumb>
  );
};
