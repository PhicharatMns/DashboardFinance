import React, { useEffect, useRef, memo, useState } from "react";
import Datashare from "../../data/Datashare";

const dateRanges = {
  "1D": "1D",
  "1M": "1M",
  "3M": "3M",
  "1Y": "12M",
  "5Y": "60M",
  ALL: "ALL",
};

function TradingViewWidget() {
  // ใช้ useRef เพื่อเก็บ อาร์เรย์ของ DOM references (เช่น div แต่ละอันที่ใช้แสดงกราฟ)
  // containersRef.current คืออาร์เรย์ที่เก็บ DOM element ของแต่ละ container ที่เราจะใช้แสดงข้อมูล
  const containersRef = useRef([]);
  const [selectdataRanges, setselectdataRanges] = useState("1D");

  useEffect(() => {
    // ลูปล้างข้อมูลเก่า
    // ถ้า container ไม่เป็น null หรือ undefined ให้ล้างเนื้อหาภายใน (innerHTML = "")
    containersRef.current.forEach((container) => {
      if (container) container.innerHTML = "";
    });

    // ลูปแสดงข้อมูลใหม่
    // วนลูปข้อมูลทั้งหมด และอิง index เพื่อจับคู่กับ container ที่ต้องการแสดง
    Datashare.forEach((event, index) => {
      const container = containersRef.current[index];

      const script = document.createElement("script");
      script.src =
        "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
      script.type = "text/javascript";
      script.async = true;
      script.innerHTML = `{
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
        "locale": "th_TH",
        "chartOnly": false,
        "scalePosition": "right",
        "scaleMode": "Normal",
        "fontFamily": "-${event.ID}-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
        "valuesTracking": "1",
        "changeMode": "price-and-percent",
        "symbols": [
          [
            "${event.ID}",
            "${event.ID}|${selectdataRanges}"
          ]
        ],
        "dateRanges": [
          "1d|1",
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
  }, [selectdataRanges]);

  return (
    <div>
      {/* ตัวเลือกวันเดิอนปี function */}
      <div className="text-center p-5">
        {Object.entries(dateRanges).map(([event, value]) => {
          return (
            <button
              key={name}
              onClick={() => setselectdataRanges(value)}
              className={`px-4 rounded-full text-sm font-semibold transition-colors duration-300 p-1 cursor-pointer ${
                selectdataRanges === value
                  ? "bg-purple-500 text-white"
                  : "hover:bg-purple-500"
              }`}
            >
              {event}
            </button>
          );
        })}
      </div>
      <div className="grid lg:grid-cols-4 grid-cols-2 gap-5">
        {Datashare.map((event, index) => (
          <div
            key={event.index}
            className="h-100 w-full"
            // อการ ผูก DOM element (ref) เข้ากับตำแหน่งใน containersRef.current
            // ตาม index ของข้อมูลที่กำลัง map อยู่ เช่นจาก Datashare.map(...)
            ref={(element) => (containersRef.current[index] = element)}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default memo(TradingViewWidget);

TradingViewWidget.jsx;
