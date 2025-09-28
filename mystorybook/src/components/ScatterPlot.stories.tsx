import type { Meta, StoryObj } from '@storybook/react';
import { CustomScatterPlot } from './ScatterPlot';

const meta: Meta<typeof CustomScatterPlot> = {
  title: 'Charts/ScatterPlot',
  component: CustomScatterPlot,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    xAxisTitle: { control: 'text' },
    yAxisTitle: { control: 'text' },
    width: { control: { type: 'range', min: 300, max: 800, step: 50 } },
    height: { control: { type: 'range', min: 200, max: 600, step: 50 } },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const generateRandomData = (count: number) => {
  const x = [];
  const y = [];
  for (let i = 0; i < count; i++) {
    x.push(Math.random() * 100);
    y.push(Math.random() * 100);
  }
  return { x, y };
};

const sampleData = [
  {
    ...generateRandomData(30),
    name: 'Dataset 1',
    marker: {
      color: 'rgba(255, 99, 132, 0.6)',
      size: 8,
    }
  }
];

export const Default: Story = {
  args: {
    data: sampleData,
    title: 'Sample Scatter Plot',
    width: 600,
    height: 400,
    xAxisTitle: 'X Values',
    yAxisTitle: 'Y Values',
  },
};

export const MultipleDatasets: Story = {
  args: {
    data: [
      {
        x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        y: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20],
        name: 'Linear Trend',
        marker: {
          color: 'rgba(54, 162, 235, 0.8)',
          size: 10,
        }
      },
      {
        x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        y: [1, 4, 9, 16, 25, 36, 49, 64, 81, 100],
        name: 'Quadratic Trend',
        marker: {
          color: 'rgba(255, 99, 132, 0.8)',
          size: 8,
        }
      }
    ],
    title: 'Multiple Trends Comparison',
    width: 700,
    height: 450,
    xAxisTitle: 'Time',
    yAxisTitle: 'Value',
  },
};

export const BubbleChart: Story = {
  args: {
    data: [
      {
        x: [20, 30, 40, 50, 60, 70, 80],
        y: [14, 25, 18, 22, 19, 31, 27],
        name: 'Sales Performance',
        marker: {
          color: ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57', '#ff9ff3', '#54a0ff'],
          size: [20, 30, 40, 25, 35, 45, 28],
          opacity: 0.7,
        },
        text: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E', 'Team F', 'Team G']
      }
    ],
    title: 'Team Performance vs Experience',
    width: 650,
    height: 400,
    xAxisTitle: 'Experience (months)',
    yAxisTitle: 'Performance Score',
  },
};

export const CorrelationPlot: Story = {
  args: {
    data: [
      {
        x: [10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80],
        y: [22, 28, 35, 42, 48, 55, 61, 68, 74, 81, 87, 94, 100, 107, 113],
        name: 'Height vs Weight',
        marker: {
          color: 'rgba(75, 192, 192, 0.6)',
          size: 8,
        }
      }
    ],
    title: 'Height vs Weight Correlation',
    width: 500,
    height: 350,
    xAxisTitle: 'Height (inches)',
    yAxisTitle: 'Weight (kg)',
  },
};