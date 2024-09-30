import { useState } from "react";
import { Box, Input, List, ListItem, Image, useSteps } from "@chakra-ui/react";
import { WalletStepper } from "../../../shared/ui/stepper";

// Sample data for coins with names and logos
const coins = [
  { name: "USDT", logo: "https://example.com/usdt-logo.png" },
  { name: "WLD", logo: "https://example.com/wld-logo.png" },
  { name: "HMSTR", logo: "https://example.com/hmstr-logo.png" },
  { name: "NBN", logo: "https://example.com/nbn-logo.png" },
  { name: "BTC", logo: "https://example.com/btc-logo.png" },
];

export const DashboardDepositSteps = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { activeStep, setActiveStep } = useSteps({
    index: 0,
    count: 3,
  });

  // Filter coins
  const filteredCoins = coins.filter((coin) => coin.name.toLowerCase().includes(searchTerm.toLowerCase()));

  const handleClick = (coinName: string) => {
    console.log(activeStep, 77);
    setSearchTerm(coinName);
    setActiveStep(1);
  };
  console.log(activeStep);
  const steps = [
    {
      content: (
        <Box>
          <Input placeholder="Search coin" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />

          <List mt={4}>
            {filteredCoins.map((coin) => (
              <ListItem key={coin.name} display="flex" alignItems="center" mb={2} cursor="pointer" onClick={() => handleClick(coin.name)}>
                <Image src={coin.logo} alt={`${coin.name} logo`} boxSize="20px" mr={2} />
                {coin.name}
              </ListItem>
            ))}
          </List>
        </Box>
      ),
    },
    {
      content: (
        <Box>
          <Input placeholder="Second step input" />
        </Box>
      ),
    },
    {
      content: (
        <Box>
          <Input placeholder="Second step input" />
        </Box>
      ),
    },
  ];

  return <WalletStepper steps={steps} activeStep={activeStep} />;
};
