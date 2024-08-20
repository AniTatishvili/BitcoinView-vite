import { Box, Flex, Select, Text } from "@chakra-ui/react";
import axios from "axios";
import React from "react";

export const CryptoConverter = () => {
  const amount = 1;
  // const [amount, setAmount] = React.useState(1);
  const [fromCurrency, setFromCurrency] = React.useState("usd");
  const [toCurrencies, setToCurrencies] = React.useState(["bitcoin"]);
  const [conversionRates, setConversionRates] = React.useState<any>({});
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const fetchConversionRates = async () => {
      setLoading(true);
      try {
        const responses = await Promise.all(
          toCurrencies.map((currency) =>
            axios.get("https://api.coingecko.com/api/v3/simple/price", {
              params: {
                ids: currency,
                vs_currencies: fromCurrency,
              },
            })
          )
        );
        const rates = responses.reduce((acc, response, index) => {
          acc[toCurrencies[index]] = response.data[toCurrencies[index]][fromCurrency];
          return acc;
        }, {});
        setConversionRates(rates);
      } catch (error) {
        console.error("Error fetching the conversion rates", error);
      }
      setLoading(false);
    };

    fetchConversionRates();
  }, [fromCurrency, toCurrencies]);

  const getConvertedAmounts = () => {
    if (loading) return "Loading...";

    return toCurrencies
      .map((currency) => {
        const rate = conversionRates[currency];
        if (!rate) return `${currency.toUpperCase()}: N/A`;
        return (rate * amount).toFixed(2);
      })
      .join(", ");
  };

  // const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setAmount(Number(e.target.value));
  // };

  const handleToCurrenciesChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = Array.from(e.target.selectedOptions, (option) => option.value);
    setToCurrencies(value);
  };

  return (
    <Flex w={"fit-content"} flexDir={"column"} color={"#fff"}>
      <Text>Convert Balance</Text>

      <Flex w={"200px"} h={"56px"} flexDir={"row"} justify={"space-between"} alignItems={"center"} bg={"#35363D"} borderRadius={"8px"} p={1}>
        {/* <Input type="number" value={amount} onChange={handleAmountChange} bg={"#35363D"} color={"#fff"} borderRight={"1px solid #fff"} pe={"5px"} /> */}
        <Text w={"50%"} fontSize={"14px"} borderRight={"1px solid #ccc"} px={2}>
          {getConvertedAmounts()}
        </Text>

        <Box w={"50%"} px={2}>
          <Select
            multiple={false}
            value={toCurrencies}
            onChange={handleToCurrenciesChange}
            w={"100%"}
            bg={"#35363D"}
            color={"#fff"}
            fontSize={"14px"}
            border={0}
            _focus={{
              boxShadow: 0,
            }}
            style={{ padding: 0 }}>
            <option value="bitcoin">BTC</option>
            <option value="ethereum">ETH</option>
            <option value="tether">USDT</option>
          </Select>
        </Box>
      </Flex>
    </Flex>
  );
};
