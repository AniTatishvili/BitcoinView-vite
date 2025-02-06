import { Flex } from "@chakra-ui/react";
import { BreadCrumb } from "../../../../shared/ui/bread-crumb";
import { AdminUserReferralContent } from "../../../../components/dashboards/admin-dashboard/admin-user-referral-content";

export const AdminUserReferral = () => {
  const items = [
    { url: "/admin-dashboard/admin-dashboard-overview", text: "Home", isCurrentPage: true },
    { url: "/admin-dashboard/admin-user-referral", text: "Admin User Referral", isCurrentPage: true },
  ];

  return (
    <Flex w={"100%"} h={"calc(100vh - 90px)"} overflow={"hidden"} pb={"1rem"}>
      <Flex
        w={"100%"}
        h={"100%"}
        overflowY={"scroll"}
        flexDir={{ base: "column", xl: "row" }}
        // flexWrap={"wrap"}
        p={"1rem"}
        gap={"1rem"}
        css={{
          "&::-webkit-scrollbar": {
            width: "4px",
          },
          "&::-webkit-scrollbar-track": {
            width: "6px",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "#f7931a",
            borderRadius: "24px",
          },
        }}>
        <Flex w={"100%"} flexDir={"column"} gap={4}>
          <BreadCrumb items={items} />
          <AdminUserReferralContent />
        </Flex>
      </Flex>
    </Flex>
  );
};
