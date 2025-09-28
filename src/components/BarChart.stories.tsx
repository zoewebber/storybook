import type { Meta, StoryObj } from '@storybook/react';
import { CustomBarChart } from './BarChart';

const meta: Meta<typeof CustomBarChart> = {
  title: 'Charts/BarChart',
  component: CustomBarChart,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    width: { control: { type: 'range', min: 300, max: 800, step: 50 } },
    height: { control: { type: 'range', min: 200, max: 600, step: 50 } },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const sampleData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      label: 'Sales',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
      borderColor: 'rgba(53, 162, 235, 1)',
      borderWidth: 1,
    },
  ],
};

const multiDatasetData = {
  labels: ['Q1', 'Q2', 'Q3', 'Q4'],
  datasets: [
    {
      label: 'Revenue',
      data: [65, 59, 80, 81],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1,
    },
    {
      label: 'Profit',
      data: [28, 48, 40, 19],
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
      borderColor: 'rgba(53, 162, 235, 1)',
      borderWidth: 1,
    },
  ],
};

export const Default: Story = {
  args: {
    data: sampleData,
    title: 'Monthly Sales Data',
    width: 600,
    height: 400,
  },
};

export const MultipleDatasets: Story = {
  args: {
    data: multiDatasetData,
    title: 'Quarterly Performance',
    width: 700,
    height: 450,
  },
};

export const ColorfulBars: Story = {
  args: {
    data: {
      labels: ['Product A', 'Product B', 'Product C', 'Product D', 'Product E'],
      datasets: [
        {
          label: 'Units Sold',
          data: [120, 190, 300, 500, 200],
          backgroundColor: [
            'rgba(255, 99, 132, 0.6)',
            'rgba(54, 162, 235, 0.6)',
            'rgba(255, 205, 86, 0.6)',
            'rgba(75, 192, 192, 0.6)',
            'rgba(153, 102, 255, 0.6)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 205, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
          ],
          borderWidth: 2,
        },
      ],
    },
    title: 'Product Sales Distribution',
    width: 650,
    height: 400,
  },
};

export const Compact: Story = {
  args: {
    data: {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
      datasets: [
        {
          label: 'Daily Tasks',
          data: [8, 12, 6, 9, 15],
          backgroundColor: 'rgba(75, 192, 192, 0.6)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        },
      ],
    },
    title: 'Weekly Task Completion',
    width: 400,
    height: 250,
  },
};