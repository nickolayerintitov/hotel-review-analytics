import { motion } from 'framer-motion';
import { BarChart3, TrendingUp, Users, MessageSquare } from 'lucide-react';
import { reviewAnalytics } from '../data/hotelData';
import SentimentBarChart from '../components/charts/SentimentBarChart';
import CountryChart from '../components/charts/CountryChart';
import MainClassChart from '../components/charts/MainClassChart';
import RatingChart from '../components/charts/RatingChart';
import MonthlyRatingChart from '../components/charts/MonthlyRatingChart';
import MainSubclassHeatmap from '../components/charts/MainSubclassHeatmap';
import SentimentOverTime from '../components/charts/SentimentOverTime';
import EmotionDistribution from '../components/charts/EmotionDistribution';
import SubclassDistribution from '../components/charts/SubclassDistribution';
import SentimentByClass from '../components/charts/SentimentByClass';
import EmotionByClass from '../components/charts/EmotionByClass';
import AIAnalysis from '../components/charts/AIAnalysis';
import Alerts from '../components/charts/Alerts';

const AnalyticsPage = () => {
  const stats = [
    {
      title: 'Reviews Analyzed',
      value: reviewAnalytics.totalReviews.toString(),
      description: 'Total unique reviews processed by AI.',
      icon: MessageSquare,
      bgColor: 'bg-blue-50',
      textColor: 'text-blue-800',
    },
    {
      title: 'Sentences Analyzed',
      value: reviewAnalytics.totalSentences.toString(),
      description: 'Individual sentences analyzed for deeper insights.',
      icon: BarChart3,
      bgColor: 'bg-green-50',
      textColor: 'text-green-800',
    },
    {
      title: 'Average Rating',
      value: `${reviewAnalytics.averageRating.toFixed(1)}`,
      description: 'Overall average rating from all reviews.',
      icon: TrendingUp,
      bgColor: 'bg-yellow-50',
      textColor: 'text-yellow-800',
    },
    {
      title: 'Countries',
      value: reviewAnalytics.countryStats.length.toString(),
      description: 'Unique countries from which reviews originated.',
      icon: Users,
      bgColor: 'bg-purple-50',
      textColor: 'text-purple-800',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl font-bold mb-6">Titanic Deluxe Golf Belek - Review Analytics</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              AI-powered analysis of hotel reviews for Titanic Deluxe Golf Belek using advanced sentiment analysis and emotion detection. 
              Discover insights from {reviewAnalytics.totalSentences} analyzed sentences.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20"
              >
                <div className="flex items-center justify-center mb-4">
                  <stat.icon className="w-8 h-8 text-blue-200" />
                </div>
                <p className="text-blue-200 text-sm font-medium mb-2">{stat.title}</p>
                <p className="text-4xl font-bold text-white">{stat.value}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Analytics Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Titanic Deluxe Golf Belek - Review Analytics Overview</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Interactive visualizations showing review distribution, sentiment analysis, and geographic coverage for Titanic Deluxe Golf Belek.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Sentiment Analysis */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="bg-white rounded-xl p-8 shadow-lg border border-gray-200"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Sentiment Analysis
              </h3>
              <SentimentBarChart data={reviewAnalytics} />
            </motion.div>

            {/* Geographic Distribution */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="bg-white rounded-xl p-8 shadow-lg border border-gray-200"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Geographic Distribution
              </h3>
              <CountryChart data={reviewAnalytics} />
            </motion.div>

            {/* Main Class Distribution */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="bg-white rounded-xl p-8 shadow-lg border border-gray-200"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Main Class Distribution
              </h3>
              <MainClassChart data={reviewAnalytics} />
            </motion.div>

            {/* Rating Distribution */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="bg-white rounded-xl p-8 shadow-lg border border-gray-200"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Overall Rating Distribution
              </h3>
              <RatingChart data={reviewAnalytics} />
            </motion.div>

            {/* Monthly Rating Averages */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 lg:col-span-2"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Rating Trends by Month
              </h3>
              <MonthlyRatingChart data={reviewAnalytics} />
            </motion.div>

            {/* Main Class vs Subclass Heatmap */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 lg:col-span-2"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Main Class vs Subclass Distribution
              </h3>
              <MainSubclassHeatmap data={reviewAnalytics} />
            </motion.div>

            {/* Sentiment Over Time */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 lg:col-span-2"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Sentiment Trends Over Time
              </h3>
              <SentimentOverTime data={reviewAnalytics} />
            </motion.div>

            {/* Emotion Distribution */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="bg-white rounded-xl p-8 shadow-lg border border-gray-200"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Emotion Distribution
              </h3>
              <EmotionDistribution data={reviewAnalytics} />
            </motion.div>

            {/* Subclass Distribution */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.3 }}
              className="bg-white rounded-xl p-8 shadow-lg border border-gray-200"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Subclass Distribution
              </h3>
              <SubclassDistribution data={reviewAnalytics} />
            </motion.div>

            {/* Sentiment by Class */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 lg:col-span-2"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Sentiment Distribution by Main Class
              </h3>
              <SentimentByClass data={reviewAnalytics} />
            </motion.div>

            {/* Emotion by Class */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.5 }}
              className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 lg:col-span-2"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Emotion Distribution by Main Class
              </h3>
              <EmotionByClass data={reviewAnalytics} />
            </motion.div>
          </div>

          {/* AI Analysis Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <AIAnalysis data={reviewAnalytics} />
          </motion.div>
        </div>
      </section>

      {/* Alerts & Case Management Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Alerts & Case Management</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Automated alerts and case management system to track and resolve issues identified in guest reviews.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
          >
            <Alerts data={reviewAnalytics} />
          </motion.div>
        </div>
      </section>

      {/* Key Insights Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Key Insights</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover patterns and trends in hotel reviews across different regions and categories.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 flex flex-col items-center text-center"
            >
              <BarChart3 className="w-12 h-12 text-blue-500 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">High Positive Sentiment</h3>
              <p className="text-gray-600">
                {reviewAnalytics.sentimentBreakdown.positive}% of reviews are positive, indicating overall customer satisfaction across all regions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 flex flex-col items-center text-center"
            >
              <TrendingUp className="w-12 h-12 text-green-500 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">AI Analysis Coverage</h3>
              <p className="text-gray-600">
                {reviewAnalytics.totalSentences} sentences analyzed using advanced AI models for comprehensive sentiment and emotion detection.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.3 }}
              className="bg-white rounded-xl p-8 shadow-lg border border-gray-200 flex flex-col items-center text-center"
            >
              <Users className="w-12 h-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-2">Comprehensive Analysis</h3>
              <p className="text-gray-600">
                Reviews are analyzed across {reviewAnalytics.mainClassRatings.length} different categories for detailed insights.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AnalyticsPage;