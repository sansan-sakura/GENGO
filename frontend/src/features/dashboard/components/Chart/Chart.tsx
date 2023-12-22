import { ContentFrame } from "../../../../ui/ContentFrame";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import faker from "faker";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: false,
      text: "Chart.js Bar Chart",
    },
  },
};

const labels = ["January", "February", "March", "April", "May", "June", "July"];

const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 31 })),
      backgroundColor: "red",
    },
    {
      label: "Dataset 2",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 31 })),
      backgroundColor: "green",
    },
  ],
};

export const Chart = () => {
  return (
    <div className="w-full sm:w-[80%] mx-auto">
      <ContentFrame>
        <h2>Track your progress 🚴🏼‍♀️</h2>
        <Bar options={options} data={data} />;
      </ContentFrame>
    </div>
  );
};
