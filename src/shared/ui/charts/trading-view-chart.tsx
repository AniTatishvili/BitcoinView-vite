import { useEffect, useRef, useState } from "react";

export const TradingViewChart = () => {
  const container = useRef<HTMLDivElement>(null);

  const [showChart] = useState(true);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
        {
          "width": "100%",
          "height": "360",
          "symbol": "BINANCE:BTCUSDT",
          "interval": "240",
          "timezone": "Etc/UTC",
          "theme": "dark",
          "style": "1",
          "locale": "en",
          "allow_symbol_change": true,
          "watchlist": [
            "CRYPTOCAP:USDT.D",
            "BINANCE:ETHUSD",
            "BINANCE:BTCUSD",
            "BINANCE:BNBUSDT",
            "BINANCE:SOLUSDT",
            "BINANCE:TONUSDT"
          ],
          "calendar": false,
          "support_host": "https://www.tradingview.com"
        }`;
    if (container.current) {
      const existingScript = container.current.querySelector("script");
      if (existingScript) {
        container.current.removeChild(existingScript);
      }

      container.current.appendChild(script);
    }
  }, [showChart]);

  return (
    <div className="tradingview-widget-container" ref={container}>
      {showChart && <div className="tradingview-widget-container__widget"></div>}
      <div className="tradingview-widget-copyright">
        <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank">
          <span className="blue-text" style={{ color: "#fff !important" }}>
            Track all markets on TradingView
          </span>
        </a>
      </div>
    </div>
  );
};

// import { useEffect, useRef, useState } from "react";

// export const TradingViewChart = () => {
//   const container = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src = "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
//     script.type = "text/javascript";
//     script.async = true;
//     script.innerHTML = `
//         {
//           "width": "100%",
//           "height": "360",
//           "symbol": "BINANCE:BTCUSDT",
//           "interval": "240",
//           "timezone": "Etc/UTC",
//           "theme": "dark",
//           "style": "1",
//           "locale": "en",
//           "allow_symbol_change": true,
//           "watchlist": [
//             "CRYPTOCAP:USDT.D",
//             "BINANCE:ETHUSD",
//             "BINANCE:BTCUSD",
//             "BINANCE:BNBUSDT",
//             "BINANCE:SOLUSDT",
//             "BINANCE:TONUSDT"
//           ],
//           "calendar": false,
//           "support_host": "https://www.tradingview.com"
//         }`;

//     if (container.current) {
//       const existingScript = container.current.querySelector("script");
//       if (existingScript) {
//         container.current.removeChild(existingScript);
//       }

//       container.current.appendChild(script);
//     }

//     // Cleanup function to remove the script when the component unmounts
//     return () => {
//       if (container.current) {
//         const existingScript = container.current.querySelector("script");
//         if (existingScript) {
//           container.current.removeChild(existingScript);
//         }
//       }
//     };
//   }, []); // Empty dependency array to run once on mount

//   return (
//     <div className="tradingview-widget-container" ref={container}>
//       <div className="tradingview-widget-container__widget"></div>
//       <div className="tradingview-widget-copyright">
//         <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank">
//           <span className="blue-text" style={{ color: "#fff !important" }}>
//             Track all markets on TradingView
//           </span>
//         </a>
//       </div>
//     </div>
//   );
// };
