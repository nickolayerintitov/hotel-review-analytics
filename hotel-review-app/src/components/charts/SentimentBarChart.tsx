import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import type { ReviewAnalysis } from '../../types';

interface SentimentBarChartProps {
  data: ReviewAnalysis;
}

const SentimentBarChart = ({ data }: SentimentBarChartProps) => {
  const sentimentData = data.sentimentBreakdown;
  
  const chartData = [
    { name: 'Positive', value: sentimentData.positive, color: '#22c55e' },
    { name: 'Negative', value: sentimentData.negative, color: '#ef4444' },
    { name: 'Neutral', value: sentimentData.neutral, color: '#64748b' }
  ];

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-white p-4 rounded-lg shadow-lg border border-gray-200">
          <p className="font-semibold text-gray-900 mb-2">{data.name}</p>
          <div className="space-y-1">
            <p className="text-sm" style={{ color: data.color }}>
              Percentage: {data.value}%
            </p>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="h-96 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={chartData}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={120}
            paddingAngle={5}
            dataKey="value"
            labelLine={false}
            label={({ name, value }) => `${name} ${value}%`}
          >
            {chartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SentimentBarChart;
