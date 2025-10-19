import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import type { ReviewAnalysis } from '../../types';

interface SubclassDistributionProps {
  data: ReviewAnalysis;
}

const SubclassDistribution = ({ data }: SubclassDistributionProps) => {
  const chartData = data.chartData?.subclassDistribution || [];

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-4 rounded-lg shadow-lg border border-gray-200">
          <p className="font-semibold text-gray-900 mb-2">Subclass: {label}</p>
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

  if (chartData.length === 0) {
    return (
      <div className="h-96 w-full flex items-center justify-center">
        <p className="text-gray-500">No subclass data available</p>
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
            dataKey="name" 
            tick={{ fontSize: 12 }}
            label={{ value: 'Subclass', position: 'insideBottom', offset: -5 }}
            angle={-45}
            textAnchor="end"
            height={80}
          />
          <YAxis 
            tick={{ fontSize: 12 }}
            label={{ value: 'Count', angle: -90, position: 'insideLeft' }}
          />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="value" fill="#10b981" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SubclassDistribution;
