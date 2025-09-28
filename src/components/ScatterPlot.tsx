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
  const plotData = data.map((series, index) => ({
    ...series,
    type: 'scatter' as const,
    mode: 'markers' as const,
    marker: {
      ...series.marker,
      color: series.marker?.color || ['#6366f1', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'][index % 5],
      size: series.marker?.size || 10,
      opacity: series.marker?.opacity || 0.8,
      line: {
        color: '#ffffff',
        width: 1
      }
    }
  }));

  const layout = {
    title: {
      text: title,
      font: { color: '#f3f4f6', size: 18, family: 'Arial, sans-serif' }
    },
    width: width,
    height: height,
    xaxis: {
      title: { text: xAxisTitle, font: { color: '#e5e7eb', size: 14 } },
      tickfont: { color: '#e5e7eb', size: 12 },
      gridcolor: '#374151',
      gridwidth: 1,
      zeroline: false,
    },
    yaxis: {
      title: { text: yAxisTitle, font: { color: '#e5e7eb', size: 14 } },
      tickfont: { color: '#e5e7eb', size: 12 },
      gridcolor: '#374151',
      gridwidth: 1,
      zeroline: false,
    },
    plot_bgcolor: 'rgba(0,0,0,0)',
    paper_bgcolor: '#1f2937',
    hovermode: 'closest' as const,
    legend: {
      font: { color: '#e5e7eb' }
    }
  };

  return (
    <div style={{
      backgroundColor: '#1f2937',
      padding: '20px',
      borderRadius: '12px',
      boxShadow: '0 10px 25px rgba(0,0,0,0.3)',
      display: 'inline-block'
    }}>
      <Plot
        data={plotData}
        layout={layout}
        config={{
          displayModeBar: false,
          staticPlot: false,
          responsive: true
        }}
      />
    </div>
  );
};