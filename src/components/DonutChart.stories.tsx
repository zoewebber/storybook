import type { Meta, StoryObj } from '@storybook/react';
import { CustomDonutChart } from './DonutChart';

const meta: Meta<typeof CustomDonutChart> = {
  title: 'Charts/DonutChart',
  component: CustomDonutChart,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    width: {
      control: { type: 'number', min: 200, max: 1000, step: 50 },
    },
    height: {
      control: { type: 'number', min: 200, max: 800, step: 50 },
    },
    innerRadius: {
      control: { type: 'range', min: 0.1, max: 0.9, step: 0.1 },
    },
    padAngle: {
      control: { type: 'range', min: 0, max: 5, step: 0.1 },
    },
    cornerRadius: {
      control: { type: 'number', min: 0, max: 20, step: 1 },
    },
    centerText: {
      control: { type: 'text' },
    },
    centerSubText: {
      control: { type: 'text' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const salesData = [
  {
    id: 'mobile',
    label: 'Mobile',
    value: 45,
    color: '#6366f1'
  },
  {
    id: 'desktop',
    label: 'Desktop',
    value: 32,
    color: '#10b981'
  },
  {
    id: 'tablet',
    label: 'Tablet',
    value: 15,
    color: '#f59e0b'
  },
  {
    id: 'other',
    label: 'Other',
    value: 8,
    color: '#ef4444'
  }
];

const budgetData = [
  {
    id: 'development',
    label: 'Development',
    value: 40,
  },
  {
    id: 'marketing',
    label: 'Marketing',
    value: 25,
  },
  {
    id: 'operations',
    label: 'Operations',
    value: 20,
  },
  {
    id: 'research',
    label: 'Research',
    value: 15,
  }
];

export const Default: Story = {
  args: {
    data: salesData,
    width: 600,
    height: 400,
    innerRadius: 0.8,
    padAngle: 0.5,
    cornerRadius: 4,
  },
};

export const WithCenterText: Story = {
  args: {
    data: salesData,
    width: 600,
    height: 400,
    innerRadius: 0.8,
    padAngle: 0.5,
    cornerRadius: 4,
    centerText: '100',
    centerSubText: 'Total Sales',
  },
};

export const BudgetBreakdown: Story = {
  args: {
    data: budgetData,
    width: 500,
    height: 400,
    innerRadius: 0.75,
    padAngle: 1,
    cornerRadius: 6,
    centerText: '$2.5M',
    centerSubText: 'Annual Budget',
  },
};

export const Minimal: Story = {
  args: {
    data: [
      { id: 'complete', label: 'Complete', value: 75 },
      { id: 'remaining', label: 'Remaining', value: 25 }
    ],
    width: 300,
    height: 300,
    innerRadius: 0.85,
    padAngle: 0,
    cornerRadius: 0,
    centerText: '75%',
    centerSubText: 'Progress',
  },
};

export const LargePadding: Story = {
  args: {
    data: salesData,
    width: 650,
    height: 500,
    innerRadius: 0.6,
    padAngle: 2,
    cornerRadius: 8,
    centerText: 'Analytics',
    centerSubText: 'Q4 2024',
  },
};