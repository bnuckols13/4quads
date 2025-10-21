# Personal EMA Tracker

A clean, simple web app for tracking your mental health and productivity through Ecological Momentary Assessment (EMA).

## Features

- **Quick Assessments**: Log your current state with easy-to-use sliders
  - Mood
  - Anxiety levels
  - Energy
  - Focus
  - Productivity
  - Optional notes

- **History View**: See all your past entries with timestamps

- **Insights Dashboard**:
  - View average scores for each metric
  - Interactive trend charts showing your patterns over time
  - Track up to 14 recent entries visually

- **Data Export**: Download all your data as JSON for backup or external analysis

- **Privacy First**: All data stored locally in your browser (localStorage) - nothing sent to any server

## How to Use

1. Open `index.html` in any modern web browser
2. Use the sliders to rate how you're feeling right now (1-10 scale)
3. Add optional notes if you want to capture context
4. Click "Save Entry"
5. View your history and insights in the other tabs

## Mobile Friendly

The app is fully responsive and works great on phones, tablets, and desktop browsers.

## Data Storage

Your data is stored locally in your browser using localStorage. This means:
- Complete privacy - no data leaves your device
- No internet connection required after initial load
- Data persists between sessions
- Clearing browser data will erase your entries (use Export to backup!)

## Technology

Built with vanilla HTML, CSS, and JavaScript. Uses Chart.js for visualizations.
