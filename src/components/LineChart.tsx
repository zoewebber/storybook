import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export interface LineChartData {
  name: string;
  value: number;
  value2?: number;
}

export interface LineChartProps {
  data: LineChartData[];
  width?: number;
  height?: number;
  color?: string;
  strokeWidth?: number;
}

export const CustomLineChart = ({
  data,
  width = 600,
  height = 300,
  color = '#8884d8',
  strokeWidth = 2
}: LineChartProps) => {
  return (
    <ResponsiveContainer width={width} height={height}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="value"
          stroke={color}
          strokeWidth={strokeWidth}
          name="Sales"
        />
        {data.some(d => d.value2 !== undefined) && (
          <Line
            type="monotone"
            dataKey="value2"
            stroke="#82ca9d"
            strokeWidth={strokeWidth}
            name="Revenue"
          />
        )}
      </LineChart>
    </ResponsiveContainer>
  );
};