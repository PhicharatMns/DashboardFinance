import Sizebar from "./Component/Sizebar";
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
import { Line } from "react-chartjs-2";
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
      text: "Chart.js Line Chart",
    },
  },
};

const labels = ["เดือน1", "เดือน2", "เดือน3", "เดือน4", "เดือน5", "เดือน6", "1ปี"];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: [10.64, 25.81, 16.79, 95.07,100,150,120],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Dataset 2",
      data: [55.27, 55.27, 115.26, 17.04, 32.92,12,30],
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

export function LineChart() {
  return (
    <div style={{ width: "100%", height: "400px", margin: "auto" }}>
      <Line options={options} data={data} />
    </div>
  );
}

export default function Pageกราฟเเละกําไร() {
  return (
    <div className="flex">
      <Sizebar />
      <div className="p-5 flex">
        <div className="w-200 ">
          <LineChart />
        </div>
        <div className="w-200 ">
          <LineChart />
        </div>
      </div>
    </div>
  );
}
