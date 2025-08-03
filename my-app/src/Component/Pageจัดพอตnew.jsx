import React, { useState, useEffect } from "react";

export default function PortfolioPage() {
  const [input, setInput] = useState("");
  const [stock, setStock] = useState("");
  const [data, setData] = useState(null);

  // โหลดข้อมูล JSON
  useEffect(() => {
    fetch("/data/stock_data_cleaned.json")
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        if (json.datasets.length > 0) {
          setStock(json.datasets[0].label); // ตั้งค่า default
        }
      });
  }, []);

  const addNumber = () => {
    const num = parseFloat(input);
    if (!num || !data || !stock) {
      alert("กรุณาใส่เลข และเลือกหุ้น");
      return;
    }

    const updatedDatasets = data.datasets.map((item) =>
      item.label === stock ? { ...item, data: [...item.data, num] } : item
    );

    const maxLen = Math.max(...updatedDatasets.map((d) => d.data.length));
    const updatedLabels = [...data.labels];
    while (updatedLabels.length < maxLen) {
      updatedLabels.push(`เดือน ${updatedLabels.length + 1}`);
    }

    setData({ labels: updatedLabels, datasets: updatedDatasets });
    setInput("");
  };

  if (!data) return <div>กำลังโหลดข้อมูล...</div>;

  return (
    <div style={{ padding: 20 }}>
      <h2>เพิ่มข้อมูลหุ้น</h2>

      <div>
        <label>เลือกหุ้น: </label>
        <select value={stock} onChange={(e) => setStock(e.target.value)}>
          {data.datasets.map((d) => (
            <option key={d.label}>{d.label}</option>
          ))}
        </select>
      </div>

      <div style={{ marginTop: 10 }}>
        <input
          type="number"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="ใส่เลข"
        />
        <button onClick={addNumber} style={{ marginLeft: 8 }}>
          เพิ่ม
        </button>
      </div>

      <h4 style={{ marginTop: 20 }}>ข้อมูลตอนนี้</h4>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
