import type { Meta, StoryObj } from '@storybook/react';
import { CustomPieChart } from './PieChart';

const meta: Meta<typeof CustomPieChart> = {
  title: 'Charts/PieChart',
  component: CustomPieChart,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    width: { control: { type: 'range', min: 300, max: 800, step: 50 } },
    height: { control: { type: 'range', min: 200, max: 600, step: 50 } },
    innerRadius: { control: { type: 'range', min: 0, max: 0.9, step: 0.1 } },
    padAngle: { control: { type: 'range', min: 0, max: 5, step: 0.1 } },
    cornerRadius: { control: { type: 'range', min: 0, max: 10, step: 1 } },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const sampleData = [
  {
    id: 'javascript',
    label: 'JavaScript',
    value: 35,
    color: '#f7df1e'
  },
  {
    id: 'typescript',
    label: 'TypeScript',
    value: 28,
    color: '#3178c6'
  },
  {
    id: 'python',
    label: 'Python',
    value: 20,
    color: '#3776ab'
  },
  {
    id: 'java',
    label: 'Java',
    value: 12,
    color: '#ed8b00'
  },
  {
    id: 'other',
    label: 'Other',
    value: 5,
    color: '#666666'
  }
];

export const Default: Story = {
  args: {
    data: sampleData,
    width: 600,
    height: 400,
    innerRadius: 0.5,
    padAngle: 0.7,
    cornerRadius: 3,
  },
};

export const DonutChart: Story = {
  args: {
    data: [
      { id: 'mobile', label: 'Mobile', value: 45, color: '#ff6b6b' },
      { id: 'desktop', label: 'Desktop', value: 35, color: '#4ecdc4' },
      { id: 'tablet', label: 'Tablet', value: 20, color: '#45b7d1' },
    ],
    width: 500,
    height: 400,
    innerRadius: 0.6,
    padAngle: 1,
    cornerRadius: 5,
  },
};

export const FullPie: Story = {
  args: {
    data: [
      { id: 'marketing', label: 'Marketing', value: 40, color: '#ff9999' },
      { id: 'development', label: 'Development', value: 30, color: '#66b3ff' },
      { id: 'design', label: 'Design', value: 20, color: '#99ff99' },
      { id: 'operations', label: 'Operations', value: 10, color: '#ffcc99' },
    ],
    width: 600,
    height: 400,
    innerRadius: 0,
    padAngle: 0.5,
    cornerRadius: 2,
  },
};

export const MarketShare: Story = {
  args: {
    data: [
      { id: 'chrome', label: 'Chrome', value: 65, color: '#4285f4' },
      { id: 'safari', label: 'Safari', value: 18, color: '#ff6d00' },
      { id: 'firefox', label: 'Firefox', value: 10, color: '#ff9500' },
      { id: 'edge', label: 'Edge', value: 5, color: '#0078d4' },
      { id: 'others', label: 'Others', value: 2, color: '#808080' },
    ],
    width: 700,
    height: 450,
    innerRadius: 0.4,
    padAngle: 0.8,
    cornerRadius: 4,
  },
};