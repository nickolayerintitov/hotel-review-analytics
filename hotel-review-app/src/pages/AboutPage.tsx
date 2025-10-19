import { motion } from 'framer-motion';
import { BarChart3, TrendingUp, Users, Globe, Target, Zap } from 'lucide-react';

const AboutPage = () => {
  const features = [
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Comprehensive review analysis with interactive charts and visualizations'
    },
    {
      icon: TrendingUp,
      title: 'Sentiment Analysis',
      description: 'AI-powered sentiment analysis to understand customer satisfaction trends'
    },
    {
      icon: Users,
      title: 'Global Coverage',
      description: 'Reviews from multiple countries and cities worldwide'
    },
    {
      icon: Globe,
      title: 'Geographic Insights',
      description: 'Location-based analysis to identify regional patterns and trends'
    },
    {
      icon: Target,
      title: 'Category Breakdown',
      description: 'Detailed analysis across service, location, amenities, food, room, and value'
    },
    {
      icon: Zap,
      title: 'Real-time Data',
      description: 'Up-to-date analytics with live data processing and visualization'
    }
  ];

  const stats = [
    { label: 'Total Reviews Analyzed', value: '2,847' },
    { label: 'Countries Covered', value: '10' },
    { label: 'Cities Analyzed', value: '17' },
    { label: 'Categories Tracked', value: '6' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary-50 to-primary-50">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About Review Analytics
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              A comprehensive platform for analyzing hotel reviews with advanced sentiment analysis, 
              geographic insights, and interactive visualizations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-secondary-600 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-secondary-900 mb-4">
              Platform Features
            </h2>
            <p className="text-secondary-600 max-w-2xl mx-auto">
              Our analytics platform provides comprehensive insights into hotel review data 
              with advanced visualization and analysis capabilities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-soft border border-secondary-200 hover:shadow-medium transition-shadow"
                >
                  <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <h3 className="text-xl font-bold text-secondary-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-secondary-600">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-secondary-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-secondary-900 mb-6">
                Our Mission
              </h2>
              <p className="text-secondary-600 mb-6 leading-relaxed">
                We believe that data-driven insights are essential for understanding customer 
                satisfaction and improving service quality. Our platform transforms raw review 
                data into actionable insights that help businesses make informed decisions.
              </p>
              <p className="text-secondary-600 mb-6 leading-relaxed">
                By analyzing sentiment patterns, geographic trends, and category-specific 
                feedback, we provide a comprehensive view of customer experiences across 
                different regions and service areas.
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                  <Target className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-secondary-900">Data-Driven Insights</h3>
                  <p className="text-secondary-600 text-sm">Making decisions based on real data</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="bg-white rounded-xl p-8 shadow-soft border border-secondary-200"
            >
              <h3 className="text-2xl font-bold text-secondary-900 mb-6">
                Key Benefits
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-success-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-success-600 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary-900">Comprehensive Analysis</h4>
                    <p className="text-secondary-600 text-sm">Multi-dimensional review analysis</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-success-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-success-600 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary-900">Interactive Visualizations</h4>
                    <p className="text-secondary-600 text-sm">Engaging charts and graphs</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-success-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-success-600 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary-900">Global Coverage</h4>
                    <p className="text-secondary-600 text-sm">Worldwide review data analysis</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-success-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-success-600 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-secondary-900">Real-time Updates</h4>
                    <p className="text-secondary-600 text-sm">Live data processing and analysis</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-4">
              Ready to Explore Review Analytics?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Discover insights from thousands of hotel reviews and understand 
              customer satisfaction patterns across different regions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/"
                className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
              >
                View Analytics
              </a>
              <a
                href="/reviews"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors"
              >
                Browse Reviews
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;