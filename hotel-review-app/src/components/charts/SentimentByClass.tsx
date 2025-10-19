import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import type { ReviewAnalysis } from '../../types';

interface SentimentByClassProps {
  data: ReviewAnalysis;
}

const SentimentByClass = ({ data }: SentimentByClassProps) => {
  const chartData = data.chartData?.sentimentByClass || [];

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

  if (chartData.length === 0) {
    return (
      <div className="h-96 w-full flex items-center justify-center">
        <p className="text-gray-500">No sentiment by class data available</p>
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
          <Bar dataKey="Positive" stackId="sentiment" fill="#10B981" />
          <Bar dataKey="Negative" stackId="sentiment" fill="#EF4444" />
          <Bar dataKey="Neutral" stackId="sentiment" fill="#6B7280" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SentimentByClass;
