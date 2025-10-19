# 🔄 Automatic Notebook to Website Sync

This setup allows you to automatically update the website whenever you run the `hotel_v2.ipynb` notebook.

## ✅ What's Fixed

1. **Sentiment Analysis Chart** - Now displays as a proper pie chart with correct data
2. **Automatic Sync** - Website updates immediately after running the notebook
3. **Easy Review Count Changes** - Simple script to change number of reviews

## 🚀 How to Use

### 1. Change Number of Reviews
```bash
# Change to 50 reviews
python update_review_count.py 50

# Change to 100 reviews  
python update_review_count.py 100

# Change to any number
python update_review_count.py <number>
```

### 2. Run the Notebook
- Open `hotel_v2.ipynb` in Jupyter
- Run all cells (or just the last cell for sync)
- The website will automatically update with new data

### 3. View Updated Website
- Website runs at: http://localhost:5173/
- Just refresh the page to see updated results
- All charts will show the new data immediately

## 📊 What Gets Synced

- ✅ Total Reviews & Sentences
- ✅ Sentiment Breakdown (Positive/Negative/Neutral)
- ✅ Rating Distribution
- ✅ Monthly Rating Averages
- ✅ Main Class vs Subclass Heatmap
- ✅ Emotion Distribution
- ✅ All other charts and statistics

## 🔧 Manual Sync (if needed)

If automatic sync doesn't work, you can manually run:
```bash
python sync_notebook_to_website.py
```

## 📁 Files Created

- `sync_notebook_to_website.py` - Main sync script
- `update_review_count.py` - Script to change review count
- `hotel_v2.ipynb` - Updated with automatic sync cell

## 🎯 Workflow

1. **Change review count**: `python update_review_count.py 50`
2. **Run notebook**: Execute all cells in `hotel_v2.ipynb`
3. **Refresh website**: Go to http://localhost:5173/ and refresh
4. **See updated data**: All charts show new results immediately!

The system now works exactly as requested - change the number of reviews in the notebook, run it, and the website updates automatically! 🎉
