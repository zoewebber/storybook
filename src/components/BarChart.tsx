import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export interface BarChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor?: string | string[];
    borderColor?: string | string[];
    borderWidth?: number;
  }[];
}

export interface BarChartProps {
  data: BarChartData;
  title?: string;
  width?: number;
  height?: number;
}

export const CustomBarChart = ({ data, title = 'Bar Chart', width = 600, height = 400 }: BarChartProps) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: !!title,
        text: title,
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <div style={{ width, height }}>
      <Bar data={data} options={options} />
    </div>
  );
};