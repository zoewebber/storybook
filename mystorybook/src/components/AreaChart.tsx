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
  areaOpacity = 0.4,
  enableGridX = true,
  enableGridY = true
}: AreaChartProps) => {
  return (
    <div style={{ width, height }}>
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
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'X Axis',
          legendOffset: 36,
          legendPosition: 'middle'
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Y Axis',
          legendOffset: -40,
          legendPosition: 'middle'
        }}
        enableGridX={enableGridX}
        enableGridY={enableGridY}
        colors={{ scheme: 'nivo' }}
        pointSize={8}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        enableArea={enableArea}
        areaOpacity={areaOpacity}
        useMesh={true}
        legends={[
          {
            anchor: 'bottom-right',
            direction: 'column',
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: 'left-to-right',
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: 'circle',
            symbolBorderColor: 'rgba(0, 0, 0, .5)',
            effects: [
              {
                on: 'hover',
                style: {
                  itemBackground: 'rgba(0, 0, 0, .03)',
                  itemOpacity: 1
                }
              }
            ]
          }
        ]}
      />
    </div>
  );
};