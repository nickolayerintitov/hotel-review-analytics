import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import type { ReviewAnalysis } from '../../types';

interface RatingChartProps {
  data: ReviewAnalysis;
}

const RatingChart = ({ data }: RatingChartProps) => {
  const chartData = data.chartData?.overallRatingDistribution || [];

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-4 rounded-lg shadow-lg border border-gray-200">
          <p className="font-semibold text-gray-900 mb-2">Rating: {label} Stars</p>
          <div className="space-y-1">
            <p className="text-sm text-blue-600">
              Count: {payload[0].value}
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
        <BarChart
          data={chartData}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
          <XAxis 
            dataKey="rating" 
            tick={{ fontSize: 12 }}
            label={{ value: 'Rating (Stars)', position: 'insideBottom', offset: -5 }}
          />
          <YAxis 
            tick={{ fontSize: 12 }}
            label={{ value: 'Frequency', angle: -90, position: 'insideLeft' }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="count" fill="#3b82f6" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RatingChart;
