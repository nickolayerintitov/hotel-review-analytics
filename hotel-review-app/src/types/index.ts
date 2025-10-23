// Hotel Review Data Types
export interface Hotel {
  id: string;
  name: string;
  country: string;
  city: string;
  rating: number;
  totalReviews: number;
  image: string;
  price: {
    min: number;
    max: number;
    currency: string;
  };
  amenities: string[];
  location: {
    address: string;
    coordinates: {
      lat: number;
      lng: number;
    };
  };
  description: string;
  highlights: string[];
}

export interface Review {
  id: string;
  hotelId: string;
  user: string;
  date: string;
  rating: number;
  comment: string;
  sentiment: 'Positive' | 'Negative' | 'Neutral';
  category: 'Amenities' | 'Food' | 'Location' | 'Room' | 'Service' | 'Value';
}

export interface ReviewAnalysis {
  totalReviews: number;
  totalSentences: number;
  averageRating: number;
  sentimentBreakdown: {
    positive: number;
    negative: number;
    neutral: number;
  };
  overallRatingDistribution: {
    rating: number;
    count: number;
  }[];
  monthlyRatingAverages: {
    month: string;
    average_rating: number;
    review_count: number;
  }[];
  mainClassRatings: {
    category: string;
    averageRating: number;
    count: number;
  }[];
  countryStats: {
    country: string;
    count: number;
    averageRating: number;
  }[];
  chartData: {
    overallRatingDistribution: {
      rating: number;
      count: number;
    }[];
    monthlyRatingAverages: {
      month: string;
      average_rating: number;
      review_count: number;
    }[];
    mainClassDistribution: {
      name: string;
      value: number;
      percentage: number;
    }[];
    subclassDistribution: {
      name: string;
      value: number;
    }[];
    emotionDistribution: {
      name: string;
      value: number;
      percentage: number;
    }[];
    sentimentOverTime: {
      month: string;
      Positive: number;
      Negative: number;
      Neutral: number;
    }[];
    mainSubclassHeatmap: {
      main_class: string;
      subclass: string;
      count: number;
    }[];
    sentimentByClass: {
      main_class: string;
      Positive: number;
      Negative: number;
      Neutral: number;
    }[];
    emotionByClass: {
      main_class: string;
      [key: string]: any;
    }[];
  };
  aiAnalysis?: {
    emotions: { [key: string]: number };
    subcategories: { [key: string]: number };
    topSentences: { [key: string]: string };
  };
}

export interface CountryCityData {
  country: string;
  cities: {
    name: string;
    hotels: {
      name: string;
      rating: number;
      totalReviews: number;
    }[];
  }[];
}

export interface ChartData {
  countryCityData: CountryCityData[];
  reviewAnalysis: ReviewAnalysis;
}

// UI Component Types
export interface FilterOptions {
  countries: string[];
  cities: string[];
  ratings: number[];
  priceRange: {
    min: number;
    max: number;
  };
  amenities: string[];
  sortBy: 'rating' | 'price' | 'reviews' | 'name';
  sortOrder: 'asc' | 'desc';
}

export interface SearchFilters {
  query: string;
  filters: FilterOptions;
}

// Chart Component Props
export interface SunburstChartProps {
  data: any[];
  width?: number;
  height?: number;
  onSegmentClick?: (segment: any) => void;
}

export interface BarChartProps {
  data: any[];
  width?: number;
  height?: number;
  color?: string;
}

export interface PieChartProps {
  data: any[];
  width?: number;
  height?: number;
  colors?: string[];
}

// Navigation Types
export interface NavItem {
  label: string;
  href: string;
  icon?: React.ComponentType<any>;
  badge?: string;
}

// Form Types
export interface SearchFormData {
  query: string;
  location: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  rooms: number;
}

export interface ReviewFormData {
  rating: number;
  title: string;
  content: string;
  categories: {
    amenities: number;
    food: number;
    location: number;
    room: number;
    service: number;
    value: number;
  };
  tags: string[];
}
