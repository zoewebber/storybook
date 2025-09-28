import type { Meta, StoryObj } from '@storybook/react';
import { CustomLineChart } from './LineChart';

const meta: Meta<typeof CustomLineChart> = {
  title: 'Charts/LineChart',
  component: CustomLineChart,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    color: { control: 'color' },
    strokeWidth: { control: { type: 'range', min: 1, max: 5, step: 1 } },
    width: { control: { type: 'range', min: 300, max: 800, step: 50 } },
    height: { control: { type: 'range', min: 200, max: 600, step: 50 } },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const sampleData = [
  { name: 'Jan', value: 400, value2: 240 },
  { name: 'Feb', value: 300, value2: 139 },
  { name: 'Mar', value: 200, value2: 980 },
  { name: 'Apr', value: 278, value2: 390 },
  { name: 'May', value: 189, value2: 480 },
  { name: 'Jun', value: 239, value2: 380 },
  { name: 'Jul', value: 349, value2: 430 },
];

export const Default: Story = {
  args: {
    data: sampleData,
    width: 600,
    height: 300,
    color: '#8884d8',
    strokeWidth: 2,
  },
};

export const SingleLine: Story = {
  args: {
    data: sampleData.map(({ name, value }) => ({ name, value })),
    width: 500,
    height: 250,
    color: '#ff7300',
    strokeWidth: 3,
  },
};

export const ThickStroke: Story = {
  args: {
    data: sampleData,
    width: 700,
    height: 350,
    color: '#82ca9d',
    strokeWidth: 4,
  },
};

export const Compact: Story = {
  args: {
    data: [
      { name: 'Q1', value: 1200 },
      { name: 'Q2', value: 1800 },
      { name: 'Q3', value: 1600 },
      { name: 'Q4', value: 2100 },
    ],
    width: 400,
    height: 200,
    color: '#ff6b6b',
    strokeWidth: 2,
  },
};