import { useState } from "react";
import { MoonPayBuyWidget } from "@moonpay/moonpay-react";
import { Button } from "@chakra-ui/react";

// interface MoonPayBuyWidgetProps {
//   variant: string;
//   baseCurrencyCode: string;
//   baseCurrencyAmount: string;
//   defaultCurrencyCode: string;
//   visible: boolean;
// }

export const MoonPayWidget: React.FC = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <MoonPayBuyWidget variant="embedded" baseCurrencyCode="usd" baseCurrencyAmount="500" defaultCurrencyCode="eth" visible={visible} />
      <Button onClick={() => setVisible(!visible)}>Toggle widget</Button>
    </>
  );
};
