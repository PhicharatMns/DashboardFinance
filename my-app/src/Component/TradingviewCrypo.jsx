// TradingViewWidget.jsx
import React, { useEffect, useRef, memo, useState } from "react";
import DataCropto from "../../data/DataCropto";
import { elements } from "chart.js";

const dateRanges = {
  "1D": "1D",
  "1M": "1M",
  "3M": "3M",
  "1Y": "12M",
  "5Y": "60M",
  ALL: "ALL",
};

function TradingViewWidget() {
  const containerRef = useRef([]);
  const [selectdateRanges, setselectdateRanges] = useState("1D");

  useEffect(() => {
    containerRef.current.forEach((container) => {
      if (container) container.innerHTML = "";
    });

    DataCropto.forEach((event, index) => {
      const container = containerRef.current[index];

      const script = document.createElement("script");
      script.src =
        "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `
        {
          "lineWidth": 2,
          "lineType": 0,
          "chartType": "area",
          "fontColor": "rgb(106, 109, 120)",
          "gridLineColor": "rgba(242, 242, 242, 0.06)",
          "volumeUpColor": "rgba(34, 171, 148, 0.5)",
          "volumeDownColor": "rgba(247, 82, 95, 0.5)",
          "backgroundColor": "#0F0F0F",
          "widgetFontColor": "#DBDBDB",
          "upColor": "#22ab94",
          "downColor": "#f7525f",
          "borderUpColor": "#22ab94",
          "borderDownColor": "#f7525f",
          "wickUpColor": "#22ab94",
          "wickDownColor": "#f7525f",
          "colorTheme": "dark",
          "isTransparent": false,
          "locale": "en",
          "chartOnly": false,
          "scalePosition": "right",
          "scaleMode": "Normal",
          "fontFamily": "-${event.ID}-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
          "valuesTracking": "1",
          "changeMode": "price-and-percent",
          "symbols": [
            [
              "BITKUB:${event.ID}|${selectdateRanges}"
            ]
          ],
          "dateRanges": [
            "1d|1",
            "1m|30",
            "3m|60",
            "12m|1D",
            "60m|1W",
            "all|1M"
          ],
          "fontSize": "10",
          "headerFontSize": "medium",
          "autosize": true,
          "width": "100%",
          "height": "100%",
          "noTimeScale": false,
          "hideDateRanges": false,
          "hideMarketStatus": false,
          "hideSymbolLogo": false
        }`;
      container.appendChild(script);
    });
  }, [selectdateRanges]);

  return (
    <div className="h-screen">
      {/* button */}
      <div className="text-center p-5">
        {Object.entries(dateRanges).map(([event, value]) => {
          return (
            <button
              key={event}
              onClick={() => setselectdateRanges(value)}
              className={`px-4 rounded-full text-sm font-semibold transition-colors duration-300 p-1 cursor-pointer ${
                selectdateRanges === value
                  ? "bg-purple-500 text-white"
                  : "hover:bg-purple-500"
              }`}
            >
              {event}
            </button>
          );
        })}
      </div>
      {/* //show grad */}
      <div>
        <div className="grid lg:grid-cols-3 grid-cols-2 gap-5">
          {DataCropto.map((event, index) => (
            <div
              className="h-100 w-full"
              key={index}
              ref={(el) => (containerRef.current[index] = el)}
              style={{ minHeight: "300px" }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default memo(TradingViewWidget);
