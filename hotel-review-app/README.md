# 🏨 Hotel Review Analytics Dashboard

A modern, AI-powered web application for analyzing hotel reviews using advanced sentiment analysis and interactive data visualizations.

![Hotel Review Analytics](https://img.shields.io/badge/React-18-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue) ![Vite](https://img.shields.io/badge/Vite-5.0-purple) ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0-cyan)

## ✨ Features

- 🤖 **AI-Powered Analysis**: Advanced sentiment analysis using multiple AI models (BART, DistilBERT, RoBERTa)
- 📊 **Interactive Charts**: Dynamic visualizations for sentiment, categories, and geographic data
- 🌍 **Real Data Integration**: Analysis of actual hotel review data from CSV files
- 📱 **Responsive Design**: Mobile-first design with Tailwind CSS
- 🎨 **Modern UI/UX**: Beautiful animations and smooth interactions
- 🔍 **Advanced Filtering**: Search and filter reviews by category and sentiment

## 🚀 Live Demo

[View Live Demo](https://yourusername.github.io/hotel-review-analytics) *(Replace with your actual GitHub Pages URL)*

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Charts**: Recharts
- **Animations**: Framer Motion
- **State Management**: React Query
- **Routing**: React Router
- **AI Models**: Hugging Face Transformers

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn

## 🚀 Getting Started

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/yourusername/hotel-review-analytics.git
cd hotel-review-analytics
```

2. **Install dependencies:**
```bash
npm install
```

3. **Start the development server:**
```bash
npm run dev
```

4. **Open your browser and navigate to `http://localhost:5173`**

### Build for Production

```bash
npm run build
```

## 📁 Project Structure

```
src/
├── components/
│   ├── charts/              # Interactive chart components
│   │   ├── SentimentBarChart.tsx
│   │   ├── CategoryBreakdown.tsx
│   │   ├── CountryCityChart.tsx
│   │   ├── SunburstChart.tsx
│   │   └── AIAnalysisInsights.tsx
│   └── layout/              # Layout components
│       ├── Header.tsx
│       └── Footer.tsx
├── pages/                   # Page components
│   ├── AnalyticsPage.tsx
│   ├── ReviewsPage.tsx
│   └── AboutPage.tsx
├── data/                    # Data files
│   ├── hotelData.ts
│   └── advanced_data.ts
├── types/                   # TypeScript definitions
│   └── index.ts
└── App.tsx                  # Main application
```

## 📊 Features Overview

### Analytics Dashboard
- **Sentiment Analysis**: Real-time sentiment breakdown with percentages
- **Category Breakdown**: Hierarchical view with main categories and subcategories
- **Geographic Distribution**: Country-wise review analysis
- **Hierarchical Distribution**: Interactive sunburst chart
- **AI Insights**: Emotion analysis and top subcategories

### Reviews Page
- **Real Reviews**: Authentic customer reviews from AI analysis
- **Smart Filtering**: Filter by category, sentiment, and search terms
- **Responsive Cards**: Beautiful card layout with ratings and categories

## 🤖 AI Analysis Features

The application uses cutting-edge AI models for comprehensive analysis:

- **Sentiment Classification**: BART and DistilBERT models
- **Emotion Detection**: RoBERTa emotion classifier
- **Category Classification**: Custom 6-category hierarchy with subcategories
- **Real-time Processing**: 30 reviews analyzed with 298+ sentences processed

## 📈 Data Sources

- **Real Hotel Reviews**: Processed from CSV data
- **AI Model Output**: Advanced sentiment and emotion analysis
- **Geographic Data**: User location analysis by country
- **Category Classification**: 6 main categories with 23+ subcategories

## 🌐 Deployment

This project is configured for **GitHub Pages** deployment:

1. **Push to GitHub**: Your code is automatically deployed
2. **Live URL**: `https://yourusername.github.io/hotel-review-analytics`
3. **Custom Domain**: Add your own domain in GitHub Pages settings

### Manual Deployment

```bash
# Build the project
npm run build

# Deploy to any static hosting service
# The dist/ folder contains the production build
```

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_API_URL=your_api_url_here
VITE_APP_TITLE=Hotel Review Analytics
```

### Vite Configuration

The project is pre-configured for GitHub Pages. Update the `base` path in `vite.config.ts`:

```typescript
export default defineConfig({
  base: '/your-repository-name/', // Update this
  // ... other config
})
```

## 📱 Screenshots

*Add screenshots of your application here*

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Hugging Face** for the AI models
- **Recharts** for the beautiful chart components
- **Tailwind CSS** for the utility-first styling
- **Vite** for the fast development experience

## 📞 Support

If you have any questions or need help, please:

1. Check the [Issues](https://github.com/yourusername/hotel-review-analytics/issues) page
2. Create a new issue with detailed information
3. Contact: [your-email@example.com](mailto:your-email@example.com)

---

⭐ **Star this repository if you found it helpful!**