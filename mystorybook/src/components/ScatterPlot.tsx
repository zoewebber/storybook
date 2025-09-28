import Plot from 'react-plotly.js';

export interface ScatterPlotData {
  x: number[];
  y: number[];
  text?: string[];
  name?: string;
  marker?: {
    color?: string | string[];
    size?: number | number[];
    opacity?: number;
  };
}

export interface ScatterPlotProps {
  data: ScatterPlotData[];
  title?: string;
  width?: number;
  height?: number;
  xAxisTitle?: string;
  yAxisTitle?: string;
}

export const CustomScatterPlot = ({
  data,
  title = 'Scatter Plot',
  width = 600,
  height = 400,
  xAxisTitle = 'X Axis',
  yAxisTitle = 'Y Axis'
}: ScatterPlotProps) => {
  const plotData = data.map(series => ({
    ...series,
    type: 'scatter' as const,
    mode: 'markers' as const,
  }));

  const layout = {
    title: title,
    width: width,
    height: height,
    xaxis: {
      title: xAxisTitle,
    },
    yaxis: {
      title: yAxisTitle,
    },
    hovermode: 'closest' as const,
  };

  return (
    <Plot
      data={plotData}
      layout={layout}
      config={{ displayModeBar: false }}
    />
  );
};