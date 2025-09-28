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
  color = '#6366f1',
  strokeWidth = 3
}: LineChartProps) => {
  return (
    <div style={{
      backgroundColor: '#1f2937',
      padding: '20px',
      borderRadius: '12px',
      boxShadow: '0 10px 25px rgba(0,0,0,0.3)'
    }}>
      <ResponsiveContainer width={width} height={height}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="2 2" stroke="#374151" opacity={0.7} />
          <XAxis
            dataKey="name"
            stroke="#e5e7eb"
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            stroke="#e5e7eb"
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: '#374151',
              border: 'none',
              borderRadius: '8px',
              color: '#f3f4f6',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
            }}
          />
          <Legend
            wrapperStyle={{ color: '#e5e7eb' }}
          />
          <Line
            type="monotone"
            dataKey="value"
            stroke={color}
            strokeWidth={strokeWidth}
            name="Sales"
            dot={{ fill: color, strokeWidth: 2, r: 5 }}
            activeDot={{ r: 7, stroke: color, strokeWidth: 2, fill: '#fff' }}
          />
          {data.some(d => d.value2 !== undefined) && (
            <Line
              type="monotone"
              dataKey="value2"
              stroke="#10b981"
              strokeWidth={strokeWidth}
              name="Revenue"
              dot={{ fill: '#10b981', strokeWidth: 2, r: 5 }}
              activeDot={{ r: 7, stroke: '#10b981', strokeWidth: 2, fill: '#fff' }}
            />
          )}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};