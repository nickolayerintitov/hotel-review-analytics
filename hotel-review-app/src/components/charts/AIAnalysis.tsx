import { Brain, TrendingUp, BarChart3 } from 'lucide-react';
import type { ReviewAnalysis } from '../../types';

interface AIAnalysisProps {
  data: ReviewAnalysis;
}

const AIAnalysis = ({ data }: AIAnalysisProps) => {
  const emotions = data.aiAnalysis?.emotions || {};
  const subcategories = data.aiAnalysis?.subcategories || {};
  const topSentences = data.aiAnalysis?.topSentences || {};

  // Get top 5 emotions
  const topEmotions = Object.entries(emotions)
    .sort(([,a], [,b]) => (b as number) - (a as number))
    .slice(0, 5);

  // Get top 5 subcategories
  const topSubcategories = Object.entries(subcategories)
    .sort(([,a], [,b]) => (b as number) - (a as number))
    .slice(0, 5);

  // Get sample insights
  const sampleInsights = Object.entries(topSentences).slice(0, 6);

  // If no data, show placeholder
  if (topEmotions.length === 0 && topSubcategories.length === 0 && sampleInsights.length === 0) {
    return (
      <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
        <div className="flex items-center mb-8">
          <Brain className="w-8 h-8 text-purple-600 mr-3" />
          <h2 className="text-3xl font-bold text-gray-900">AI-Powered Insights</h2>
        </div>
        <div className="text-center py-12">
          <Brain className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <p className="text-gray-500 text-lg">AI Analysis data is being processed...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl p-8 shadow-lg border border-gray-200">
      <div className="flex items-center mb-8">
        <Brain className="w-8 h-8 text-purple-600 mr-3" />
        <h2 className="text-3xl font-bold text-gray-900">AI-Powered Insights</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Emotion Analysis */}
        <div className="space-y-4">
          <div className="flex items-center mb-4">
            <TrendingUp className="w-6 h-6 text-blue-600 mr-2" />
            <h3 className="text-xl font-semibold text-gray-900">Emotion Analysis</h3>
          </div>
          <div className="space-y-3">
            {topEmotions.map(([emotion, percentage]) => (
              <div key={emotion} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700 font-medium">{emotion}</span>
                  <span className="font-bold text-blue-600">{percentage}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-blue-400 to-blue-600 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Top Subcategories */}
        <div className="space-y-4">
          <div className="flex items-center mb-4">
            <BarChart3 className="w-6 h-6 text-green-600 mr-2" />
            <h3 className="text-xl font-semibold text-gray-900">Top Subcategories</h3>
          </div>
          <div className="space-y-3">
            {topSubcategories.map(([subcategory, count], index) => (
              <div key={subcategory} className="flex items-center justify-between p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200 hover:shadow-sm transition-shadow">
                <div className="flex items-center">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-xs font-bold text-green-600">{index + 1}</span>
                  </div>
                  <span className="text-gray-700 font-medium text-sm">{subcategory}</span>
                </div>
                <span className="font-bold text-green-600 bg-green-100 px-2 py-1 rounded-full text-xs">{count}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Sample Insights */}
        <div className="space-y-4">
          <div className="flex items-center mb-4">
            <Brain className="w-6 h-6 text-purple-600 mr-2" />
            <h3 className="text-xl font-semibold text-gray-900">Sample Insights</h3>
          </div>
          <div className="space-y-3 max-h-80 overflow-y-auto">
            {sampleInsights.map(([key, sentence]) => {
              const [category, sentiment] = key.split(' - ');
              const sentimentColor = sentiment === 'Positive' ? 'text-green-600' : 
                                   sentiment === 'Negative' ? 'text-red-600' : 'text-gray-600';
              return (
                <div key={key} className="p-4 bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-semibold text-gray-800">{category}</span>
                    <span className={`text-xs px-2 py-1 rounded-full ${sentimentColor} bg-white`}>
                      {sentiment}
                    </span>
                  </div>
                  <p className="text-sm text-gray-700 italic leading-relaxed">"{sentence}"</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Key Insights Summary */}
      <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 rounded-xl border border-gray-200">
        <h4 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
          <Brain className="w-6 h-6 text-purple-600 mr-2" />
          Key AI Insights
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-4 rounded-lg shadow-sm border border-blue-200">
            <div className="flex items-center mb-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
              <span className="font-semibold text-gray-700 text-sm">Most Common Emotion</span>
            </div>
            <div className="text-2xl font-bold text-blue-600">
              {topEmotions[0]?.[0]}
            </div>
            <div className="text-sm text-gray-600">
              {topEmotions[0]?.[1]}% of all emotions
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm border border-green-200">
            <div className="flex items-center mb-2">
              <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
              <span className="font-semibold text-gray-700 text-sm">Top Subcategory</span>
            </div>
            <div className="text-2xl font-bold text-green-600">
              {topSubcategories[0]?.[0]}
            </div>
            <div className="text-sm text-gray-600">
              {topSubcategories[0]?.[1]} mentions
            </div>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-sm border border-purple-200">
            <div className="flex items-center mb-2">
              <div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
              <span className="font-semibold text-gray-700 text-sm">Total Insights</span>
            </div>
            <div className="text-2xl font-bold text-purple-600">
              {sampleInsights.length}
            </div>
            <div className="text-sm text-gray-600">
              AI-generated insights
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIAnalysis;
