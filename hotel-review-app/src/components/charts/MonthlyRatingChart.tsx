import { ResponsiveContainer, ComposedChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import type { ReviewAnalysis } from '../../types';

interface MonthlyRatingChartProps {
  data: ReviewAnalysis;
}

const MonthlyRatingChart = ({ data }: MonthlyRatingChartProps) => {
  const chartData = data.chartData?.monthlyRatingAverages || [];

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-4 rounded-lg shadow-lg border border-gray-200">
          <p className="font-semibold text-gray-900 mb-2">Month: {label}</p>
          <div className="space-y-1">
            <p className="text-sm text-blue-600">
              Average Rating: {payload[0].value}
            </p>
            <p className="text-sm text-green-600">
              Reviews: {payload[1]?.value || 0}
            </p>
          </div>
        </div>
      );
    }
    return null;
  };

  if (chartData.length === 0) {
    return (
      <div className="h-96 w-full flex items-center justify-center">
        <p className="text-gray-500">No monthly rating data available</p>
      </div>
    );
  }

  return (
    <div className="h-96 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart
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
            yAxisId="rating"
            orientation="left"
            domain={[0, 5]}
            tick={{ fontSize: 12 }}
            label={{ value: 'Average Rating', angle: -90, position: 'insideLeft' }}
          />
          <YAxis 
            yAxisId="count"
            orientation="right"
            tick={{ fontSize: 12 }}
            label={{ value: 'Review Count', angle: 90, position: 'insideRight' }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Line 
            yAxisId="rating"
            type="monotone" 
            dataKey="average_rating" 
            stroke="#3b82f6" 
            strokeWidth={3}
            dot={{ fill: '#3b82f6', strokeWidth: 2, r: 4 }}
            activeDot={{ r: 6, stroke: '#3b82f6', strokeWidth: 2 }}
          />
          <Bar 
            yAxisId="count"
            dataKey="review_count" 
            fill="#10b981" 
            opacity={0.3}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MonthlyRatingChart;
