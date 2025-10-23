import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import type { ReviewAnalysis } from '../../types';

interface MainClassChartProps {
  data: ReviewAnalysis;
}

const MainClassChart = ({ data }: MainClassChartProps) => {
  const chartData = data.chartData?.mainClassDistribution || [];

  const COLORS = ['#3b82f6', '#22c55e', '#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4'];

  const CustomTooltip = ({ active, payload }: any) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div className="bg-white p-4 rounded-lg shadow-lg border border-gray-200">
          <p className="font-semibold text-gray-900 mb-2">{data.name}</p>
          <div className="space-y-1">
            <p className="text-sm text-blue-600">
              Count: {data.value}
            </p>
            <p className="text-sm text-green-600">
              Percentage: {data.percentage}%
            </p>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="h-[500px] w-full">
      <div className="mb-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
        <p className="text-sm text-blue-800">
          <strong>Note:</strong> Percentages show the proportion of reviews that mention each category. 
          A single review can mention multiple categories, so percentages may exceed 100%.
        </p>
      </div>
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
            label={({ name, percentage }) => `${name} ${percentage}%`}
          >
            {chartData.map((_, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
          <Legend 
            verticalAlign="bottom" 
            height={36}
            wrapperStyle={{
              paddingTop: '20px',
              fontSize: '12px'
            }}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MainClassChart;
