import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import type { ReviewAnalysis } from '../../types';

interface EmotionByClassProps {
  data: ReviewAnalysis;
}

const EmotionByClass = ({ data }: EmotionByClassProps) => {
  const chartData = data.chartData?.emotionByClass || [];

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-4 rounded-lg shadow-lg border border-gray-200">
          <p className="font-semibold text-gray-900 mb-2">Main Class: {label}</p>
          <div className="space-y-1">
            {payload.map((entry: any, index: number) => (
              <p key={index} className="text-sm" style={{ color: entry.color }}>
                {entry.name}: {entry.value}
              </p>
            ))}
          </div>
        </div>
      );
    }
    return null;
  };

  const COLORS = [
    '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', 
    '#DDA0DD', '#98D8C8', '#F7DC6F', '#BB8FCE', '#85C1E9'
  ];

  if (chartData.length === 0) {
    return (
      <div className="h-96 w-full flex items-center justify-center">
        <p className="text-gray-500">No emotion by class data available</p>
      </div>
    );
  }

  // Get all unique emotions
  const allEmotions = Array.from(new Set(
    chartData.flatMap((item: any) => Object.keys(item).filter(key => key !== 'main_class'))
  ));

  return (
    <div className="h-96 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={chartData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
          <XAxis 
            dataKey="main_class" 
            tick={{ fontSize: 12 }}
            label={{ value: 'Main Class', position: 'insideBottom', offset: -5 }}
            angle={-45}
            textAnchor="end"
            height={80}
          />
          <YAxis 
            tick={{ fontSize: 12 }}
            label={{ value: 'Count', angle: -90, position: 'insideLeft' }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          {allEmotions.map((emotion: any, index: number) => (
            <Bar 
              key={emotion}
              dataKey={emotion} 
              stackId="emotion"
              fill={COLORS[index % COLORS.length]}
              name={emotion}
            />
          ))}
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default EmotionByClass;
