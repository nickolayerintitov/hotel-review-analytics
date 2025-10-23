import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Star, Calendar, User, Filter, Search } from 'lucide-react';
import { reviewAnalytics } from '../data/hotelData';

// Load merged reviews JSON (each entry is a full review merged by review_id)
const loadAnalyzedReviews = async () => {
  try {
    const response = await fetch('/merged_reviews.json');
    if (!response.ok) throw new Error('Failed to load merged reviews');
    const data = await response.json();
    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.error('Error loading merged reviews:', error);
    return [];
  }
};

const ReviewsPage = () => {
  const [reviews, setReviews] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedSentiment, setSelectedSentiment] = useState('All');

  useEffect(() => {
    const loadReviews = async () => {
      setLoading(true);
      const loadedReviews = await loadAnalyzedReviews();
      setReviews(loadedReviews);
      setLoading(false);
    };
    loadReviews();
  }, []);

  const categories: string[] = ['All', 'Service', 'Location', 'Amenities', 'Food', 'Room', 'Value'];
  const sentiments: string[] = ['All', 'Positive', 'Negative', 'Neutral'];

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-600 mx-auto"></div>
          <p className="mt-4 text-lg text-gray-600">Loading reviews...</p>
        </div>
      </div>
    );
  }

  const filteredReviews = reviews.filter(review => {
    const matchesSearch = review.comment.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         review.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         (review.location && review.location.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || 
                           (review.mainClasses && review.mainClasses.includes(selectedCategory));
    const matchesSentiment = selectedSentiment === 'All' || review.sentiment === selectedSentiment;
    
    return matchesSearch && matchesCategory && matchesSentiment;
  });

  const getSentimentColor = (sentiment: string) => {
    switch (sentiment) {
      case 'Positive': return 'text-success-600 bg-success-50';
      case 'Negative': return 'text-accent-600 bg-accent-50';
      case 'Neutral': return 'text-secondary-600 bg-secondary-50';
      default: return 'text-secondary-600 bg-secondary-50';
    }
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      'Service': 'text-primary-600 bg-primary-50',
      'Location': 'text-success-600 bg-success-50',
      'Amenities': 'text-accent-600 bg-accent-50',
      'Food': 'text-warning-600 bg-warning-50',
      'Room': 'text-secondary-600 bg-secondary-50',
      'Value': 'text-primary-600 bg-primary-50'
    };
    return colors[category as keyof typeof colors] || 'text-secondary-600 bg-secondary-50';
  };

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
              AI-Analyzed Reviews
            </h1>
            <p className="text-xl text-primary-100 max-w-3xl mx-auto">
              Real customer reviews analyzed by AI models. Discover authentic insights from {reviewAnalytics.totalReviews.toLocaleString()} reviews across {reviewAnalytics.countryStats.length} locations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <div className="bg-white rounded-xl p-6 shadow-soft border border-secondary-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-secondary-600 text-sm font-medium mb-1">Total Reviews</p>
                  <p className="text-2xl font-bold text-secondary-900">
                    {reviewAnalytics.totalReviews.toLocaleString()}
                  </p>
                </div>
                <div className="w-12 h-12 bg-primary-50 rounded-lg flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-primary-600" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-soft border border-secondary-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-secondary-600 text-sm font-medium mb-1">Average Rating</p>
                  <p className="text-2xl font-bold text-success-600">
                    {reviewAnalytics.averageRating.toFixed(1)}
                  </p>
                </div>
                <div className="w-12 h-12 bg-success-50 rounded-lg flex items-center justify-center">
                  <Star className="w-6 h-6 text-success-600" />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-soft border border-secondary-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-secondary-600 text-sm font-medium mb-1">Categories</p>
                  <p className="text-2xl font-bold text-secondary-900">
                    {reviewAnalytics.mainClassRatings.length}
                  </p>
                </div>
                <div className="w-12 h-12 bg-accent-50 rounded-lg flex items-center justify-center">
                  <Filter className="w-6 h-6 text-accent-600" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-white border-b border-secondary-200">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col md:flex-row gap-4"
          >
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-secondary-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search reviews..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-secondary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 border border-secondary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>

            {/* Sentiment Filter */}
            <select
              value={selectedSentiment}
              onChange={(e) => setSelectedSentiment(e.target.value)}
              className="px-4 py-3 border border-secondary-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
            >
              {sentiments.map(sentiment => (
                <option key={sentiment} value={sentiment}>{sentiment}</option>
              ))}
            </select>
          </motion.div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-12">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            {filteredReviews.map((review, index) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-soft border border-secondary-200 hover:shadow-medium transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                      <User className="w-5 h-5 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-secondary-900">{review.id}</h3>
                      <div className="flex items-center space-x-2 text-sm text-secondary-500">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(review.date).toLocaleDateString()}</span>
                        {review.location && review.location !== 'nan' && (
                          <span className="text-xs text-gray-500">• {review.location}</span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < review.rating ? 'text-warning-500 fill-current' : 'text-secondary-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm font-medium text-secondary-600">
                      {review.rating}/5
                    </span>
                  </div>
                </div>

                <p className="text-secondary-700 mb-4 leading-relaxed">
                  {review.comment}
                </p>

                <div className="flex flex-wrap items-center gap-2">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${getSentimentColor(review.sentiment)}`}
                  >
                    {review.sentiment}
                  </span>
                  {review.mainClasses && review.mainClasses.map((mainClass: string, index: number) => (
                    <span
                      key={index}
                      className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(mainClass)}`}
                    >
                      {mainClass}
                    </span>
                  ))}
                  {review.country && review.country !== 'Unknown' && (
                    <span className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700">
                      {review.country}
                    </span>
                  )}
                </div>
              </motion.div>
            ))}

            {filteredReviews.length === 0 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-center py-12"
              >
                <MessageSquare className="w-16 h-16 text-secondary-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-secondary-600 mb-2">
                  No reviews found
                </h3>
                <p className="text-secondary-500">
                  Try adjusting your search or filter criteria.
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ReviewsPage;