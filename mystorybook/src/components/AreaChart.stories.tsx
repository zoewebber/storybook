import type { Meta, StoryObj } from '@storybook/react';
import { CustomAreaChart } from './AreaChart';

const meta: Meta<typeof CustomAreaChart> = {
  title: 'Charts/AreaChart',
  component: CustomAreaChart,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    width: { control: { type: 'range', min: 300, max: 800, step: 50 } },
    height: { control: { type: 'range', min: 200, max: 600, step: 50 } },
    enableArea: { control: 'boolean' },
    areaOpacity: { control: { type: 'range', min: 0.1, max: 1, step: 0.1 } },
    enableGridX: { control: 'boolean' },
    enableGridY: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const sampleData = [
  {
    id: 'Website Traffic',
    color: '#4f8df7',
    data: [
      { x: 'Jan', y: 65 },
      { x: 'Feb', y: 72 },
      { x: 'Mar', y: 88 },
      { x: 'Apr', y: 95 },
      { x: 'May', y: 102 },
      { x: 'Jun', y: 118 },
      { x: 'Jul', y: 125 },
      { x: 'Aug', y: 132 },
      { x: 'Sep', y: 128 },
      { x: 'Oct', y: 140 },
      { x: 'Nov', y: 155 },
      { x: 'Dec', y: 162 },
    ]
  }
];

const multiSeriesData = [
  {
    id: 'Desktop',
    color: '#ff6b6b',
    data: [
      { x: 'Jan', y: 45 },
      { x: 'Feb', y: 52 },
      { x: 'Mar', y: 48 },
      { x: 'Apr', y: 61 },
      { x: 'May', y: 55 },
      { x: 'Jun', y: 67 },
      { x: 'Jul', y: 72 },
      { x: 'Aug', y: 78 },
      { x: 'Sep', y: 74 },
      { x: 'Oct', y: 85 },
      { x: 'Nov', y: 82 },
      { x: 'Dec', y: 91 },
    ]
  },
  {
    id: 'Mobile',
    color: '#4ecdc4',
    data: [
      { x: 'Jan', y: 32 },
      { x: 'Feb', y: 38 },
      { x: 'Mar', y: 44 },
      { x: 'Apr', y: 41 },
      { x: 'May', y: 47 },
      { x: 'Jun', y: 52 },
      { x: 'Jul', y: 58 },
      { x: 'Aug', y: 65 },
      { x: 'Sep', y: 61 },
      { x: 'Oct', y: 72 },
      { x: 'Nov', y: 69 },
      { x: 'Dec', y: 78 },
    ]
  },
  {
    id: 'Tablet',
    color: '#45b7d1',
    data: [
      { x: 'Jan', y: 18 },
      { x: 'Feb', y: 22 },
      { x: 'Mar', y: 19 },
      { x: 'Apr', y: 25 },
      { x: 'May', y: 28 },
      { x: 'Jun', y: 24 },
      { x: 'Jul', y: 31 },
      { x: 'Aug', y: 29 },
      { x: 'Sep', y: 35 },
      { x: 'Oct', y: 33 },
      { x: 'Nov', y: 38 },
      { x: 'Dec', y: 42 },
    ]
  }
];

export const Default: Story = {
  args: {
    data: sampleData,
    width: 600,
    height: 400,
    enableArea: true,
    areaOpacity: 0.4,
    enableGridX: true,
    enableGridY: true,
  },
};

export const MultipleDatasets: Story = {
  args: {
    data: multiSeriesData,
    width: 700,
    height: 450,
    enableArea: true,
    areaOpacity: 0.3,
    enableGridX: true,
    enableGridY: true,
  },
};

export const LineOnly: Story = {
  args: {
    data: sampleData,
    width: 600,
    height: 350,
    enableArea: false,
    enableGridX: false,
    enableGridY: true,
  },
};

export const HighOpacity: Story = {
  args: {
    data: [
      {
        id: 'Revenue Growth',
        color: '#96ceb4',
        data: [
          { x: 'Q1', y: 120 },
          { x: 'Q2', y: 165 },
          { x: 'Q3', y: 142 },
          { x: 'Q4', y: 198 },
          { x: 'Q5', y: 225 },
          { x: 'Q6', y: 280 },
          { x: 'Q7', y: 315 },
          { x: 'Q8', y: 342 },
        ]
      }
    ],
    width: 650,
    height: 400,
    enableArea: true,
    areaOpacity: 0.8,
    enableGridX: true,
    enableGridY: true,
  },
};

export const Compact: Story = {
  args: {
    data: [
      {
        id: 'Daily Active Users',
        color: '#feca57',
        data: [
          { x: 'Mon', y: 85 },
          { x: 'Tue', y: 92 },
          { x: 'Wed', y: 78 },
          { x: 'Thu', y: 96 },
          { x: 'Fri', y: 108 },
          { x: 'Sat', y: 125 },
          { x: 'Sun', y: 118 },
        ]
      }
    ],
    width: 400,
    height: 250,
    enableArea: true,
    areaOpacity: 0.5,
    enableGridX: false,
    enableGridY: false,
  },
};