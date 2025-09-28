import { ResponsivePie } from '@nivo/pie';

export interface DonutChartData {
  id: string;
  label: string;
  value: number;
  color?: string;
}

export interface DonutChartProps {
  data: DonutChartData[];
  width?: number;
  height?: number;
  innerRadius?: number;
  padAngle?: number;
  cornerRadius?: number;
  centerText?: string;
  centerSubText?: string;
}

export const CustomDonutChart = ({
  data,
  width = 600,
  height = 400,
  innerRadius = 0.8,
  padAngle = 0.5,
  cornerRadius = 4,
  centerText,
  centerSubText
}: DonutChartProps) => {
  return (
    <div style={{
      width,
      height,
      backgroundColor: '#1f2937',
      padding: '20px',
      borderRadius: '12px',
      boxShadow: '0 10px 25px rgba(0,0,0,0.3)',
      position: 'relative'
    }}>
      <ResponsivePie
        data={data}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={innerRadius}
        padAngle={padAngle}
        cornerRadius={cornerRadius}
        activeOuterRadiusOffset={8}
        borderWidth={0}
        colors={['#6366f1', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899', '#06b6d4']}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#e5e7eb"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: 'color', modifiers: [['brighter', 0.6]] }}
        enableArcLabels={false}
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
          }
        }}
        defs={[
          {
            id: 'gradientA',
            type: 'linearGradient',
            colors: [
              { offset: 0, color: 'inherit' },
              { offset: 100, color: 'inherit', opacity: 0.7 }
            ]
          }
        ]}
        legends={[
          {
            anchor: 'bottom',
            direction: 'row',
            justify: false,
            translateX: 0,
            translateY: 56,
            itemsSpacing: 12,
            itemWidth: 80,
            itemHeight: 18,
            itemTextColor: '#e5e7eb',
            itemDirection: 'left-to-right',
            itemOpacity: 1,
            symbolSize: 14,
            symbolShape: 'circle',
            effects: [
              {
                on: 'hover',
                style: {
                  itemTextColor: '#ffffff',
                  itemOpacity: 0.9
                }
              }
            ]
          }
        ]}
      />
      {(centerText || centerSubText) && (
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
            color: '#f3f4f6',
            pointerEvents: 'none'
          }}
        >
          {centerText && (
            <div style={{
              fontSize: '24px',
              fontWeight: 'bold',
              marginBottom: '4px'
            }}>
              {centerText}
            </div>
          )}
          {centerSubText && (
            <div style={{
              fontSize: '14px',
              color: '#9ca3af',
              fontWeight: 'normal'
            }}>
              {centerSubText}
            </div>
          )}
        </div>
      )}
    </div>
  );
};