import Sizebar from "./Sizebar";
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Doughnut, Line } from "react-chartjs-2";
import { DoughnutChart } from "./DoughnitChart";


// import faker from "faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      //   position: 'top' as const,
      position: "top",
    },
    title: {
      display: true,
      text: "กราฟ Crypto",
    },
  },
};

const labels = [
  "เดือน1",
  "เดือน2",
  "เดือน3",
  "เดือน4",
  "เดือน5",
  "เดือน6",
  "1ปี",
];

export const data = {
  labels,
  datasets: [
    {
      label: "BTS",
      data: [10.64, 25.81, 16.79, 95.07, 100, 150, 120],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "ETH",
      data: [55.27, 55.27, 115.26, 17.04, 32.92, 12, 30],
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

export function LineChart() {
  return (
    <div style={{ width: "100%", height: "400px" }}>
      <Line options={options} data={data} />
    </div>
  );
}

const DataCrypto = [
  { "1วัน": -1.8 },
  { "1เดือน": 20.9 },
  { "3เดือน": 50.6 },
  { "6เดือน": -15.4 },
  { "1ปี": 7.1 },
  { "5ปี": 269.2 },
];

export default function Pageกราฟเเละกําไร() {
  return (
    <div>
      <div className="flex">
        <Sizebar />
        {/* กราฟ */}
        <div className="flex  mx-auto flex-col  py-5 w-310 ">
          <div className="flex justify-center">
            <div className="w-150 h-fit border mx-5 p-2 rounded-xl">
              <LineChart />
            </div>
            <div className="w-150 h-fit border mx-5 p-2 rounded-xl">
              <DoughnutChart />
            </div>
          </div>
          {/* text */}
          <div className="grid grid-cols-6 w-full py-5 p-5 mx-auto gap-5 text-center">
            {DataCrypto.map((obj, index) => {
              const [label, value] = Object.entries(obj)[0];
              return (
                <div key={index} className="border p-2 rounded-lg">
                  <div className="font-bold">{label}</div>
                  <div
                    className={`${
                      value < 0 ? "text-red-500" : "text-green-500"
                    }`}
                  >
                    {value}%
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </div>
  );
}
