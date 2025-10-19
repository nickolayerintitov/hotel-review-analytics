import type { Review, ReviewAnalysis } from '../types';
import { hotelV2Analytics } from './hotel_v2_data';

// USE REAL HOTEL V2 ANALYSIS DATA (from analyzed_sentences.csv)
export const reviewAnalytics: ReviewAnalysis = hotelV2Analytics;

// Sample reviews for the reviews page
export const sampleReviews: Review[] = [
  {
    id: '1',
    hotelId: '1',
    user: 'Maria Schmidt',
    date: '2024-01-15',
    rating: 5,
    comment: 'Excellent service and beautiful location. The staff was very helpful and the room was clean and comfortable.',
    sentiment: 'Positive',
    category: 'Service'
  },
  {
    id: '2',
    hotelId: '1',
    user: 'John Smith',
    date: '2024-01-12',
    rating: 4,
    comment: 'Great location near the city center. The breakfast was good but the room could be cleaner.',
    sentiment: 'Positive',
    category: 'Location'
  },
  {
    id: '3',
    hotelId: '1',
    user: 'Anna Müller',
    date: '2024-01-10',
    rating: 2,
    comment: 'Poor service and outdated amenities. The room was not as advertised and the staff was unhelpful.',
    sentiment: 'Negative',
    category: 'Amenities'
  },
  {
    id: '4',
    hotelId: '1',
    user: 'Pierre Dubois',
    date: '2024-01-08',
    rating: 3,
    comment: 'Average experience. The location is good but the food quality could be better.',
    sentiment: 'Neutral',
    category: 'Food'
  },
  {
    id: '5',
    hotelId: '1',
    user: 'Sarah Johnson',
    date: '2024-01-05',
    rating: 5,
    comment: 'Amazing stay! The room was spacious and well-equipped. Highly recommend this hotel.',
    sentiment: 'Positive',
    category: 'Room'
  }
];