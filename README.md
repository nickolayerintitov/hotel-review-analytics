# 🏨 Hotel Review Analytics

A comprehensive AI-powered hotel review analysis system that processes customer reviews using advanced machine learning models to extract insights, emotions, and trends.

## 🌟 Features

### 🤖 AI-Powered Analysis
- **Sentiment Analysis**: Positive, Negative, Neutral classification
- **Emotion Detection**: 27 different emotions including Joy, Admiration, Gratitude, etc.
- **Topic Classification**: 6 main categories (Room, Service, Food, Value, Location, Amenities)
- **Subcategory Analysis**: Detailed breakdown within each main category

### 📊 Interactive Dashboard
- **Real-time Charts**: Dynamic visualizations with Recharts
- **Geographic Distribution**: Review analysis by country
- **Monthly Trends**: Rating averages and review counts over time
- **Main Class vs Subclass Heatmap**: Visual relationship mapping
- **AI Insights**: Top emotions, subcategories, and sample insights

### 🔄 Automatic Data Sync
- **Notebook Integration**: Seamless sync between Jupyter notebook and website
- **Review Count Management**: Easy adjustment of analysis scope
- **Real-time Updates**: Website updates automatically after notebook execution

## 🚀 Quick Start

### Prerequisites
- Python 3.9+
- Node.js 16+
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/nickolayerintitov/hotel-review-analytics.git
cd hotel-review-analytics
```

2. **Set up Python environment**
```bash
pip install pandas plotly transformers torch sentencepiece matplotlib seaborn protobuf
```

3. **Set up React application**
```bash
cd hotel-review-app
npm install
npm run dev
```

4. **Run the analysis**
```bash
# Open hotel_v2.ipynb in Jupyter
# Run all cells to analyze reviews
# Website will automatically update with results
```

## 📁 Project Structure

```
hotel-review-analytics/
├── hotel_v2.ipynb                 # Main analysis notebook
├── sync_notebook_to_website.py    # Automatic sync script
├── update_review_count.py         # Review count management
├── analyzed_sentences.csv         # Processed review data
├── real_comment.csv              # Original review dataset
├── hotel-review-app/             # React frontend
│   ├── src/
│   │   ├── components/charts/     # Chart components
│   │   ├── pages/                # Main pages
│   │   └── data/                 # Analytics data
│   └── package.json
└── README.md
```

## 🔧 Usage

### Changing Review Count
```bash
# Analyze 50 reviews
python update_review_count.py 50

# Analyze 100 reviews
python update_review_count.py 100
```

### Running Analysis
1. Open `hotel_v2.ipynb` in Jupyter
2. Run all cells
3. Website automatically updates at `http://localhost:5173/`

### Manual Sync
```bash
python sync_notebook_to_website.py
```

## 📊 Data Analysis

### Review Processing
- **Input**: Raw hotel reviews in CSV format
- **Processing**: Sentence-level analysis using ML models
- **Output**: Structured data with sentiment, emotion, and topic classifications

### Models Used
- **Topic Classification**: `MoritzLaurer/mDeBERTa-v3-base-mnli-xnli`
- **Sentiment Analysis**: `cardiffnlp/twitter-xlm-roberta-base-sentiment`
- **Emotion Detection**: `AnasAlokla/multilingual_go_emotions`

### Key Metrics
- **Total Reviews**: 200 (configurable)
- **Total Sentences**: 1,740 analyzed
- **Categories**: 6 main categories, 25+ subcategories
- **Emotions**: 10+ different emotions detected
- **Countries**: 9 countries represented

## 🎯 Features Overview

### Dashboard Components
1. **Statistics Cards**: Review counts, sentiment breakdown
2. **Rating Distribution**: Star rating analysis
3. **Monthly Trends**: Time-based rating analysis
4. **Geographic Analysis**: Country-wise review distribution
5. **Main Class Distribution**: Category popularity
6. **AI-Powered Insights**: Emotion analysis and sample insights
7. **Interactive Charts**: Hover tooltips and responsive design

### Data Visualization
- **Pie Charts**: Category distributions
- **Bar Charts**: Rating and sentiment analysis
- **Line Charts**: Time-based trends
- **Heatmaps**: Category relationships
- **Progress Bars**: Emotion percentages

## 🔄 Workflow

1. **Data Input**: Load hotel reviews from CSV
2. **Preprocessing**: Clean and structure data
3. **ML Analysis**: Run sentiment, emotion, and topic classification
4. **Data Processing**: Calculate statistics and insights
5. **Website Sync**: Automatically update frontend
6. **Visualization**: Display interactive charts and insights

## 🛠️ Technical Stack

### Backend
- **Python**: Data processing and ML
- **Pandas**: Data manipulation
- **Transformers**: Hugging Face ML models
- **Matplotlib/Seaborn**: Static visualizations

### Frontend
- **React**: User interface
- **TypeScript**: Type safety
- **Recharts**: Interactive charts
- **Tailwind CSS**: Styling
- **Framer Motion**: Animations

## 📈 Sample Results

### Current Analysis (200 Reviews)
- **Positive Sentiment**: 44.7%
- **Negative Sentiment**: 31.9%
- **Neutral Sentiment**: 23.4%
- **Top Emotion**: Neutral (45.5%)
- **Most Mentioned Category**: Amenities (74.5% of reviews)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🔗 Links

- **Repository**: [https://github.com/nickolayerintitov/hotel-review-analytics](https://github.com/nickolayerintitov/hotel-review-analytics)
- **Live Demo**: Run locally at `http://localhost:5173/`

## 📞 Support

For questions or support, please open an issue in the GitHub repository.

---

**Built with ❤️ using AI and modern web technologies**