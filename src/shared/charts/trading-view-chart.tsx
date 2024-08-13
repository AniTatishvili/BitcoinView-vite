import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Box } from "@chakra-ui/react";

export const TradingViewChart: React.FC = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.async = true;
    script.innerHTML = JSON.stringify({
      autosize: true,
      symbol: "NASDAQ:AAPL",
      interval: "D",
      timezone: "Etc/UTC",
      theme: "light",
      style: "1",
      locale: "en",
      allow_symbol_change: true,
      calendar: false,
      support_host: "https://www.tradingview.com",
    });

    document.querySelector(".tradingview-widget-container__widget")?.appendChild(script);

    return () => {
      const existingScript = document.querySelector(`script[src="${script.src}"]`);
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return (
    <Box className="tradingview-widget-container" style={{ height: "220px", width: "100%" }}>
      <Box className="tradingview-widget-container__widget" style={{ height: "calc(100% - 32px)", width: "100%" }}></Box>
      <Box className="tradingview-widget-copyright">
        <NavLink to="https://www.tradingview.com/" rel="noopener nofollow" target="_blank">
          <span className="blue-text">Track all markets on TradingView</span>
        </NavLink>
      </Box>
    </Box>
  );
};
