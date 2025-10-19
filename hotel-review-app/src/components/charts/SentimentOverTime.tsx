import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import type { ReviewAnalysis } from '../../types';

interface SentimentOverTimeProps {
  data: ReviewAnalysis;
}

const SentimentOverTime = ({ data }: SentimentOverTimeProps) => {
  const chartData = data.chartData?.sentimentOverTime || [];

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-4 rounded-lg shadow-lg border border-gray-200">
          <p className="font-semibold text-gray-900 mb-2">Month: {label}</p>
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
        <p className="text-gray-500">No sentiment over time data available</p>
      </div>
    );
  }

  return (
    <div className="h-96 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={chartData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
          <XAxis 
            dataKey="month" 
            tick={{ fontSize: 12 }}
            label={{ value: 'Month', position: 'insideBottom', offset: -5 }}
          />
          <YAxis 
            tick={{ fontSize: 12 }}
            label={{ value: 'Number of Sentences', angle: -90, position: 'insideLeft' }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Line 
            type="monotone" 
            dataKey="Positive" 
            stroke="#10B981" 
            strokeWidth={3}
            dot={{ fill: '#10B981', strokeWidth: 2, r: 4 }}
            activeDot={{ r: 6, stroke: '#10B981', strokeWidth: 2 }}
          />
          <Line 
            type="monotone" 
            dataKey="Negative" 
            stroke="#EF4444" 
            strokeWidth={3}
            dot={{ fill: '#EF4444', strokeWidth: 2, r: 4 }}
            activeDot={{ r: 6, stroke: '#EF4444', strokeWidth: 2 }}
          />
          <Line 
            type="monotone" 
            dataKey="Neutral" 
            stroke="#6B7280" 
            strokeWidth={3}
            dot={{ fill: '#6B7280', strokeWidth: 2, r: 4 }}
            activeDot={{ r: 6, stroke: '#6B7280', strokeWidth: 2 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SentimentOverTime;
