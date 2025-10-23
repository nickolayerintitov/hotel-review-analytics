import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle, 
  BarChart3, 
  Globe, 
  Brain, 
  TrendingUp, 
  Users, 
  Star,
  MapPin,
  Calendar,
  Mail,
  Phone,
  Zap,
  Target,
  PieChart,
  MessageSquare,
  Eye
} from 'lucide-react';

const LandingPage = () => {

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-blue-600">ReviewAI</h1>
              </div>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <button
                  onClick={() => scrollToSection('how-it-works')}
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
                >
                  How It Works
                </button>
                <button
                  onClick={() => scrollToSection('features')}
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Features
                </button>
                <button
                  onClick={() => scrollToSection('pricing')}
                  className="text-gray-700 hover:text-blue-600 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Pricing
                </button>
                <Link
                  to="/analytics"
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
                >
                  View Live Dashboard
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                Turn Your Guest Reviews into{' '}
                <span className="text-blue-600">Actionable Insights</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8 leading-relaxed">
                Our AI dashboard pinpoints strengths and weaknesses from guest comments across all platforms. 
                Get a unified view of what your guests really think about your hotel.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/analytics"
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
                >
                  View Live Dashboard
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <button
                  onClick={() => scrollToSection('how-it-works')}
                  className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  Learn How It Works
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform scattered guest feedback into clear, actionable insights in three simple steps
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">1. We Aggregate & Analyze</h3>
              <p className="text-gray-600 leading-relaxed">
                We automatically collect and analyze public guest reviews from all major travel and booking sites 
                including Google, TripAdvisor, Booking.com, and more.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Brain className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">2. AI Tags Every Sentence</h3>
              <p className="text-gray-600 leading-relaxed">
                Our advanced AI analyzes every sentence for Sentiment, Emotion, and key categories like 'Service', 
                'Food', 'Amenities', and 'Room Quality'.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <BarChart3 className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">3. Get Your Dashboard</h3>
              <p className="text-gray-600 leading-relaxed">
                Hotel managers receive one simple, unified dashboard with clear insights, trends, and actionable 
                recommendations to improve guest satisfaction.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Powerful Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive analytics to understand your guests better than ever before
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg border border-gray-200"
            >
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Emotion Tracking</h3>
              <p className="text-gray-600">
                Track specific emotions like joy, frustration, excitement, and disappointment to understand 
                the emotional journey of your guests.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg border border-gray-200"
            >
              <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Main Categories</h3>
              <p className="text-gray-600">
                Analyze feedback across main classes like 'Amenities', 'Room', 'Service', and 'Food' 
                to identify areas for improvement.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg border border-gray-200"
            >
              <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <PieChart className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Subcategories</h3>
              <p className="text-gray-600">
                Dive deeper with subcategories like 'Staff Attitude', 'Room Cleanliness', 'Food Quality' 
                for granular insights.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg border border-gray-200"
            >
              <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <MapPin className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Geographic Distribution</h3>
              <p className="text-gray-600">
                See where your reviews are coming from and understand regional preferences and cultural differences.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg border border-gray-200"
            >
              <div className="bg-red-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Rating Trends</h3>
              <p className="text-gray-600">
                Track rating trends over time to see the impact of your improvements and identify seasonal patterns.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl p-8 shadow-lg border border-gray-200"
            >
              <div className="bg-indigo-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <MessageSquare className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Real-time Updates</h3>
              <p className="text-gray-600">
                Get instant notifications when new reviews are posted and see real-time sentiment changes.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Dashboard Preview Section */}
      <section id="demo" className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">See Your Hotel's Data in Action</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Experience our AI-powered analytics dashboard with real data from Titanic Deluxe Golf Belek. 
              See exactly how your hotel's reviews would be analyzed and visualized.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-2xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Live Analytics Dashboard</h3>
                <p className="text-gray-600 mb-6">
                  Our dashboard shows real insights from 200+ reviews, 1,740 analyzed sentences, 
                  and comprehensive sentiment analysis across all major booking platforms.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                    <span className="text-gray-700">Real-time sentiment analysis</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                    <span className="text-gray-700">Emotion tracking across categories</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                    <span className="text-gray-700">Geographic distribution insights</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                    <span className="text-gray-700">Rating trends and patterns</span>
                  </div>
                </div>

                <Link
                  to="/analytics"
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center w-full"
                >
                  <Eye className="mr-2 w-5 h-5" />
                  View Live Dashboard
                </Link>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-white rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-blue-600">200+</div>
                    <div className="text-sm text-gray-600">Reviews Analyzed</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-green-600">1,740</div>
                    <div className="text-sm text-gray-600">Sentences Processed</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-purple-600">44.7%</div>
                    <div className="text-sm text-gray-600">Positive Sentiment</div>
                  </div>
                  <div className="bg-white rounded-lg p-4 text-center">
                    <div className="text-2xl font-bold text-orange-600">9</div>
                    <div className="text-sm text-gray-600">Countries</div>
                  </div>
                </div>
                
                <div className="text-center">
                  <p className="text-sm text-gray-500 mb-2">Sample from Titanic Deluxe Golf Belek</p>
                  <p className="text-xs text-gray-400">
                    Real data showing how our AI analyzes guest feedback across all platforms
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h2>
            <p className="text-xl text-gray-600">
              Get started with our founding member offer
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border-2 border-blue-200 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 bg-blue-600 text-white px-6 py-2 text-sm font-semibold transform rotate-12 translate-x-4 -translate-y-2">
              FOUNDING MEMBER
            </div>
            
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">Lifetime Rate</h3>
              <div className="flex items-center justify-center mb-4">
                <span className="text-6xl font-bold text-blue-600">$99</span>
                <span className="text-2xl text-gray-600 ml-2">/month</span>
              </div>
              <p className="text-lg text-gray-600 mb-6">Billed annually ($1,188/year)</p>
              <div className="bg-red-100 border border-red-200 rounded-lg p-4 mb-6">
                <p className="text-red-800 font-semibold">
                  Limited to first 10 partners • Future price: $250/month
                </p>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                <span className="text-gray-700">Unlimited review analysis</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                <span className="text-gray-700">All major booking platforms</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                <span className="text-gray-700">Real-time dashboard</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                <span className="text-gray-700">Email support</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                <span className="text-gray-700">Monthly reports</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                <span className="text-gray-700">30-day money-back guarantee</span>
              </div>
            </div>

            <div className="text-center">
              <Link
                to="/analytics"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors w-full inline-block"
              >
                View Live Dashboard - Limited Time Offer
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-blue-400 mb-4">ReviewAI</h3>
              <p className="text-gray-400 mb-4">
                Transform guest reviews into actionable insights with AI-powered analytics.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-blue-400 mr-3" />
                  <span className="text-gray-400">hello@reviewai.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-blue-400 mr-3" />
                  <span className="text-gray-400">+1 (555) 123-4567</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <button
                  onClick={() => scrollToSection('how-it-works')}
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  How It Works
                </button>
                <button
                  onClick={() => scrollToSection('features')}
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Features
                </button>
                <button
                  onClick={() => scrollToSection('pricing')}
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Pricing
                </button>
                <Link
                  to="/analytics"
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Live Dashboard
                </Link>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 ReviewAI. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
