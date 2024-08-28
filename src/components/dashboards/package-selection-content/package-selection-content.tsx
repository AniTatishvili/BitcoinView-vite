import { Flex } from "@chakra-ui/react";
import { SliderMarkPackage } from "../../../shared/ui/slider-mark-package";
import { CurrentPackage } from "../../../shared/current-package";

export const PackageSelectionContent = () => {
  const marks = [
    { value: 0, label: "Trail" },
    { value: 5000, label: "Voyager" },
    { value: 10000, label: "Elite" },
    { value: 20000, label: "Pioneer" },
    { value: 50000, label: "Quantum" },
    { value: 80000, label: "Nexus" },
    { value: 100000, label: "Platunium" },
    { value: 200000, label: "Orbit" },
  ];
  return (
    <Flex>
      <Flex w={"100%"} h={"fit-content"} flexDir={"column"} backgroundColor={"#1F2027"} borderRadius={"8px"} p={"1rem"} gap={4}>
        <SliderMarkPackage step={0} marks={marks} />
      </Flex>
      <Flex w={"100%"} h={"fit-content"} flexDir={"column"} backgroundColor={"#1F2027"} borderRadius={"8px"} p={"1rem"} gap={4}>
        <CurrentPackage />
      </Flex>
    </Flex>
  );
};
