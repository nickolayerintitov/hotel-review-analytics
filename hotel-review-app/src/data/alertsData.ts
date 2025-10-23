import type { Alert, Case, StaffMember, AlertRule, ReviewAnalysis } from '../types';

// Staff members for case assignment
export const staffMembers: StaffMember[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    role: 'Head of Housekeeping',
    department: 'Housekeeping',
    email: 'sarah.johnson@hotel.com',
    activeCases: 3,
    totalCases: 45,
    averageResolutionTime: 24
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'Food & Beverage Manager',
    department: 'F&B',
    email: 'michael.chen@hotel.com',
    activeCases: 2,
    totalCases: 32,
    averageResolutionTime: 18
  },
  {
    id: '3',
    name: 'Emma Rodriguez',
    role: 'Guest Services Manager',
    department: 'Guest Services',
    email: 'emma.rodriguez@hotel.com',
    activeCases: 5,
    totalCases: 67,
    averageResolutionTime: 12
  },
  {
    id: '4',
    name: 'David Thompson',
    role: 'Maintenance Supervisor',
    department: 'Maintenance',
    email: 'david.thompson@hotel.com',
    activeCases: 1,
    totalCases: 23,
    averageResolutionTime: 36
  },
  {
    id: '5',
    name: 'Lisa Park',
    role: 'Front Office Manager',
    department: 'Front Office',
    email: 'lisa.park@hotel.com',
    activeCases: 4,
    totalCases: 41,
    averageResolutionTime: 20
  }
];

// Alert rules configuration
export const alertRules: AlertRule[] = [
  {
    id: '1',
    name: 'Sentiment Drop Alert',
    description: 'Alert when sentiment drops by more than 10% in any category',
    type: 'sentiment_drop',
    threshold: 10,
    timeWindow: 24,
    enabled: true,
    autoAssign: true
  },
  {
    id: '2',
    name: 'Critical Review Alert',
    description: 'Alert for reviews with rating 1-2 stars',
    type: 'critical_review',
    threshold: 2,
    timeWindow: 1,
    enabled: true,
    autoAssign: true
  },
  {
    id: '3',
    name: 'Category Issue Alert',
    description: 'Alert when any category rating drops below 3.0',
    type: 'category_issue',
    threshold: 3.0,
    timeWindow: 48,
    enabled: true,
    autoAssign: true
  },
  {
    id: '4',
    name: 'Overall Rating Decline',
    description: 'Alert when overall rating drops by more than 0.5 points',
    type: 'rating_decline',
    threshold: 0.5,
    timeWindow: 72,
    enabled: true,
    autoAssign: false
  }
];

// Function to generate alerts based on analysis data
export const generateAlerts = (analysis: ReviewAnalysis): Alert[] => {
  const alerts: Alert[] = [];
  const now = new Date().toISOString();

  // 1. Check for sentiment drops in categories
  const currentMonth = analysis.monthlyRatingAverages[analysis.monthlyRatingAverages.length - 1];
  const previousMonth = analysis.monthlyRatingAverages[analysis.monthlyRatingAverages.length - 2];
  
  if (currentMonth && previousMonth) {
    const ratingChange = currentMonth.average_rating - previousMonth.average_rating;
    if (ratingChange < -0.5) {
      alerts.push({
        id: `alert-${Date.now()}-1`,
        type: 'rating_decline',
        severity: 'high',
        title: 'Overall Rating Decline Detected',
        description: `Overall rating dropped by ${Math.abs(ratingChange).toFixed(1)} points from ${previousMonth.average_rating.toFixed(1)} to ${currentMonth.average_rating.toFixed(1)}`,
        value: currentMonth.average_rating,
        previousValue: previousMonth.average_rating,
        change: ratingChange,
        threshold: 0.5,
        timestamp: now,
        status: 'active'
      });
    }
  }

  // 2. Check for low-performing categories
  analysis.mainClassRatings.forEach((category, index) => {
    if (category.averageRating < 3.0) {
      const severity = category.averageRating < 2.5 ? 'critical' : category.averageRating < 2.8 ? 'high' : 'medium';
      alerts.push({
        id: `alert-${Date.now()}-${index + 2}`,
        type: 'category_issue',
        severity,
        title: `${category.category} Performance Alert`,
        description: `${category.category} rating is ${category.averageRating.toFixed(1)}/5.0, which is below acceptable standards.`,
        category: category.category,
        value: category.averageRating,
        threshold: 3.0,
        timestamp: now,
        status: 'active'
      });
    }
  });

  // 3. Check for sentiment drops by category
  analysis.chartData.sentimentByClass.forEach((sentimentData, index) => {
    const totalSentences = sentimentData.Positive + sentimentData.Negative + sentimentData.Neutral;
    const negativePercentage = (sentimentData.Negative / totalSentences) * 100;
    
    if (negativePercentage > 40) {
      alerts.push({
        id: `alert-${Date.now()}-${index + 10}`,
        type: 'sentiment_drop',
        severity: negativePercentage > 60 ? 'critical' : 'high',
        title: `${sentimentData.main_class} Sentiment Alert`,
        description: `${sentimentData.main_class} has ${negativePercentage.toFixed(1)}% negative sentiment, indicating significant issues.`,
        category: sentimentData.main_class,
        value: negativePercentage,
        threshold: 40,
        timestamp: now,
        status: 'active'
      });
    }
  });

  // 4. Check for recent critical reviews (simulated based on low ratings)
  const criticalReviews = analysis.overallRatingDistribution
    .filter(rating => rating.rating <= 2)
    .reduce((sum, rating) => sum + rating.count, 0);
  
  if (criticalReviews > 0) {
    alerts.push({
      id: `alert-${Date.now()}-critical`,
      type: 'critical_review',
      severity: 'high',
      title: 'Critical Reviews Detected',
      description: `${criticalReviews} critical reviews (1-2 stars) found in recent analysis. Immediate attention required.`,
      value: criticalReviews,
      threshold: 0,
      timestamp: now,
      status: 'active',
      reviewId: `review-${Date.now()}`,
      reviewText: "Sample critical review: 'Poor service and outdated amenities. The room was not as advertised and the staff was unhelpful.'",
      reviewRating: 2,
      reviewDate: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString().split('T')[0]
    });
  }

  // 5. Check for emotion spikes (high disappointment/annoyance)
  const emotionData = analysis.chartData.emotionDistribution;
  const disappointmentEmotion = emotionData.find(e => e.name === 'Disappointment');
  
  if (disappointmentEmotion && disappointmentEmotion.percentage > 5) {
    alerts.push({
      id: `alert-${Date.now()}-emotion`,
      type: 'sentiment_drop',
      severity: 'medium',
      title: 'High Disappointment Levels',
      description: `Disappointment emotion detected in ${disappointmentEmotion.percentage.toFixed(1)}% of analyzed sentences.`,
      value: disappointmentEmotion.percentage,
      threshold: 5,
      timestamp: now,
      status: 'active'
    });
  }

  return alerts;
};

// Function to generate cases from alerts
export const generateCases = (alerts: Alert[]): Case[] => {
  const cases: Case[] = [];
  const now = new Date().toISOString();

  alerts.forEach((alert, index) => {
    // Auto-assign based on category
    let assignedTo = '';
    let priority: 'low' | 'medium' | 'high' | 'urgent' = 'medium';
    
    if (alert.category) {
      switch (alert.category) {
        case 'Room':
          assignedTo = staffMembers.find(s => s.department === 'Housekeeping')?.id || staffMembers[0].id;
          priority = 'high';
          break;
        case 'Food':
          assignedTo = staffMembers.find(s => s.department === 'F&B')?.id || staffMembers[1].id;
          priority = 'medium';
          break;
        case 'Service':
          assignedTo = staffMembers.find(s => s.department === 'Guest Services')?.id || staffMembers[2].id;
          priority = 'high';
          break;
        case 'Amenities':
          assignedTo = staffMembers.find(s => s.department === 'Maintenance')?.id || staffMembers[3].id;
          priority = 'medium';
          break;
        default:
          assignedTo = staffMembers.find(s => s.department === 'Front Office')?.id || staffMembers[4].id;
          priority = 'medium';
      }
    } else {
      assignedTo = staffMembers[4].id; // Default to Front Office Manager
    }

    // Set priority based on severity
    if (alert.severity === 'critical') priority = 'urgent';
    else if (alert.severity === 'high') priority = 'high';
    else if (alert.severity === 'medium') priority = 'medium';
    else priority = 'low';

    const caseData: Case = {
      id: `case-${Date.now()}-${index}`,
      alertId: alert.id,
      title: `Case: ${alert.title}`,
      description: alert.description,
      category: alert.category || 'General',
      priority,
      status: 'open',
      assignedTo,
      assignedBy: 'system',
      createdAt: now,
      updatedAt: now,
      dueDate: new Date(Date.now() + (priority === 'urgent' ? 24 : priority === 'high' ? 48 : 72) * 60 * 60 * 1000).toISOString(),
      reviewId: alert.reviewId,
      reviewText: alert.reviewText,
      reviewRating: alert.reviewRating,
      reviewDate: alert.reviewDate,
      notes: [`Auto-generated case from alert: ${alert.title}`]
    };

    cases.push(caseData);
  });

  return cases;
};

// Function to get staff member by ID
export const getStaffMember = (id: string): StaffMember | undefined => {
  return staffMembers.find(member => member.id === id);
};

// Function to get department by category
export const getDepartmentByCategory = (category: string): string => {
  switch (category) {
    case 'Room': return 'Housekeeping';
    case 'Food': return 'F&B';
    case 'Service': return 'Guest Services';
    case 'Amenities': return 'Maintenance';
    case 'Location': return 'Front Office';
    case 'Value': return 'Guest Services';
    default: return 'Front Office';
  }
};
