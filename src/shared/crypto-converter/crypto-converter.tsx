import { Box, Flex, Select, Text } from "@chakra-ui/react";
import axios from "axios";
import React from "react";

export const CryptoConverter = () => {
  const amount = 1;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [fromCurrency, setFromCurrency] = React.useState("usd");
  const [toCurrency, setToCurrency] = React.useState("bitcoin");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [conversionRates, setConversionRates] = React.useState<any>({});
  const [loading, setLoading] = React.useState(true);

  const [cache, setCache] = React.useState<{ [key: string]: number }>({});

  React.useEffect(() => {
    const fetchConversionRates = async () => {
      setLoading(true);

      const cacheKey = `${toCurrency}_${fromCurrency}`;

      if (cache[cacheKey]) {
        setConversionRates({ [toCurrency]: cache[cacheKey] });
        setLoading(false);
        return;
      }

      try {
        const response = await axios.get("https://api.coingecko.com/api/v3/simple/price", {
          params: {
            ids: toCurrency,
            vs_currencies: fromCurrency,
          },
        });
        const rate = response.data[toCurrency][fromCurrency];

        setCache((prevCache) => ({ ...prevCache, [cacheKey]: rate }));
        setConversionRates({ [toCurrency]: rate });
      } catch (error) {
        console.error("Error fetching the conversion rates", error);
      }
      setLoading(false);
    };

    fetchConversionRates();
  }, [cache, fromCurrency, toCurrency]);

  const getConvertedAmount = () => {
    if (loading) return "Loading...";
    const rate = conversionRates[toCurrency];
    if (!rate) return `${toCurrency.toUpperCase()}: N/A`;
    return (rate * amount).toFixed(2);
  };

  const handleToCurrencyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setToCurrency(e.target.value);
  };

  return (
    <Flex w={"fit-content"} flexDir={"column"} color={"#fff"}>
      <Text>Convert Balance</Text>

      <Flex w={"200px"} h={"fit-content"} flexDir={"row"} justify={"space-between"} alignItems={"center"} bg={"#35363D"} borderRadius={"8px"} p={1}>
        <Text w={"50%"} h={"20px"} fontSize={"14px"} borderRight={"1px solid #ccc"} px={2}>
          {getConvertedAmount()}
        </Text>

        <Box w={"50%"} px={2}>
          <Select
            value={toCurrency}
            onChange={handleToCurrencyChange}
            w={"100%"}
            bg={"#35363D"}
            color={"#fff"}
            fontSize={"14px"}
            border={0}
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
