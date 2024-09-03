import { Select } from "@chakra-ui/react";

interface PackageFilterProps {
  onChange: (value: string) => void;
}

export const PackageFilter: React.FC<PackageFilterProps> = ({ onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value);
    console.log(e.target.value, 5555);
  };

  return (
    <Select w={{ base: "100%", lg: "155px" }} onChange={handleChange} defaultValue={"All"}>
      <option value="All">Packages</option>
      <option value="Trali">Trali</option>
      <option value="Voyager">Voyager</option>
      <option value="Elite">Elite</option>
      <option value="Poineer">Poineer</option>
      <option value="Quantum">Quantum</option>
      <option value="Titan">Titan</option>
      <option value="Nexus">Nexus</option>
      <option value="Platinium">Platinium</option>
      <option value="Orbit">Orbit</option>
    </Select>
  );
};
