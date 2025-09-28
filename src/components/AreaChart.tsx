import { ResponsiveLine } from '@nivo/line';

export interface AreaChartDataPoint {
  x: string | number;
  y: number;
}

export interface AreaChartSeries {
  id: string;
  color?: string;
  data: AreaChartDataPoint[];
}

export interface AreaChartProps {
  data: AreaChartSeries[];
  width?: number;
  height?: number;
  enableArea?: boolean;
  areaOpacity?: number;
  enableGridX?: boolean;
  enableGridY?: boolean;
}

export const CustomAreaChart = ({
  data,
  width = 600,
  height = 400,
  enableArea = true,
  areaOpacity = 0.3,
  enableGridX = true,
  enableGridY = true
}: AreaChartProps) => {
  return (
    <div style={{
      width,
      height,
      backgroundColor: '#1f2937',
      padding: '20px',
      borderRadius: '12px',
      boxShadow: '0 10px 25px rgba(0,0,0,0.3)'
    }}>
      <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{
          type: 'linear',
          min: 'auto',
          max: 'auto',
          stacked: false,
          reverse: false
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 0,
          tickPadding: 8,
          tickRotation: 0,
          legend: 'X Axis',
          legendOffset: 36,
          legendPosition: 'middle'
        }}
        axisLeft={{
          tickSize: 0,
          tickPadding: 8,
          tickRotation: 0,
          legend: 'Y Axis',
          legendOffset: -40,
          legendPosition: 'middle'
        }}
        enableGridX={enableGridX}
        enableGridY={enableGridY}
        colors={['#6366f1', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6']}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={3}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        enableArea={enableArea}
        areaOpacity={areaOpacity}
        useMesh={true}
        theme={{
          background: 'transparent',
          textColor: '#e5e7eb',
          fontSize: 12,
          axis: {
            domain: {
              line: {
                stroke: '#374151',
                strokeWidth: 1
              }
            },
            legend: {
              text: {
                fontSize: 12,
                fill: '#e5e7eb'
              }
            },
            ticks: {
              line: {
                stroke: '#374151',
                strokeWidth: 1
              },
              text: {
                fontSize: 11,
                fill: '#e5e7eb'
              }
            }
          },
          grid: {
            line: {
              stroke: '#374151',
              strokeWidth: 0.5
            }
          }
        }}
        legends={[
          {
            anchor: 'bottom-right',
            direction: 'column',
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 4,
            itemDirection: 'left-to-right',
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 1,
            itemTextColor: '#e5e7eb',
            symbolSize: 14,
            symbolShape: 'circle',
            symbolBorderColor: 'transparent',
            effects: [
              {
                on: 'hover',
                style: {
                  itemBackground: 'rgba(99, 102, 241, 0.1)',
                  itemOpacity: 1,
                  itemTextColor: '#ffffff'
                }
              }
            ]
          }
        ]}
      />
    </div>
  );
};