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
        labels: {
          color: '#e5e7eb',
          font: {
            size: 12
          }
        }
      },
      title: {
        display: !!title,
        text: title,
        color: '#f3f4f6',
        font: {
          size: 16,
          weight: 'bold' as const
        }
      },
    },
    scales: {
      x: {
        ticks: {
          color: '#e5e7eb'
        },
        grid: {
          color: '#374151',
          lineWidth: 0.5
        }
      },
      y: {
        ticks: {
          color: '#e5e7eb'
        },
        grid: {
          color: '#374151',
          lineWidth: 0.5
        }
      }
    },
    maintainAspectRatio: false,
  };

  const styledData = {
    ...data,
    datasets: data.datasets.map(dataset => ({
      ...dataset,
      backgroundColor: dataset.backgroundColor || '#6366f1',
      borderColor: dataset.borderColor || '#4f46e5',
      borderWidth: dataset.borderWidth || 2,
      borderRadius: 6,
      borderSkipped: false,
    }))
  };

  return (
    <div style={{
      width,
      height,
      backgroundColor: '#1f2937',
      padding: '20px',
      borderRadius: '12px',
      boxShadow: '0 10px 25px rgba(0,0,0,0.3)'
    }}>
      <Bar data={styledData} options={options} />
    </div>
  );
};