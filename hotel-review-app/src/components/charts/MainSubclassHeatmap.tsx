import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import type { ReviewAnalysis } from '../../types';

interface MainSubclassHeatmapProps {
  data: ReviewAnalysis;
}

const MainSubclassHeatmap = ({ data }: MainSubclassHeatmapProps) => {
  const heatmapData = data.chartData?.mainSubclassHeatmap || [];

  // Transform data for the heatmap
  const processedData: { [key: string]: { [key: string]: number } } = {};
  
  heatmapData.forEach((item: any) => {
    if (!processedData[item.main_class]) {
      processedData[item.main_class] = {};
    }
    processedData[item.main_class][item.subclass] = item.count;
  });

  // Get all subclasses
  const allSubclasses = Array.from(new Set(heatmapData.map((item: any) => item.subclass)));
  const allMainClasses = Object.keys(processedData);

  // Create data for the chart
  const chartData = allMainClasses.map(mainClass => {
    const dataPoint: any = { mainClass };
    allSubclasses.forEach(subclass => {
      dataPoint[subclass] = processedData[mainClass][subclass] || 0;
    });
    return dataPoint;
  });

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-4 rounded-lg shadow-lg border border-gray-200">
          <p className="font-semibold text-gray-900 mb-2">Main Class: {label}</p>
          <div className="space-y-1">
            {payload.map((entry: any, index: number) => (
              <p key={index} className="text-sm" style={{ color: entry.color }}>
                {entry.dataKey}: {entry.value}
              </p>
            ))}
          </div>
        </div>
      );
    }
    return null;
  };

  const colors = [
    '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', 
    '#DDA0DD', '#98D8C8', '#F7DC6F', '#BB8FCE', '#85C1E9'
  ];

  if (chartData.length === 0) {
    return (
      <div className="h-96 w-full flex items-center justify-center">
        <p className="text-gray-500">No heatmap data available</p>
      </div>
    );
  }

  return (
    <div className="h-96 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={chartData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
          <XAxis 
            dataKey="mainClass" 
            tick={{ fontSize: 12 }}
            label={{ value: 'Main Class', position: 'insideBottom', offset: -5 }}
          />
          <YAxis 
            tick={{ fontSize: 12 }}
            label={{ value: 'Count', angle: -90, position: 'insideLeft' }}
          />
          <Tooltip content={<CustomTooltip />} />
          {allSubclasses.map((subclass: any, index: number) => (
            <Bar 
              key={subclass}
              dataKey={subclass} 
              stackId="mainClass"
              fill={colors[index % colors.length]}
              name={subclass}
            />
          ))}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MainSubclassHeatmap;
