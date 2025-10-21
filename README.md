# 📊 Personal EMA Tracker - Your Wellbeing Companion

A beautiful, feature-rich Progressive Web App for tracking your mental health and productivity through Ecological Momentary Assessment (EMA).

## ✨ Features

### Core Functionality
- **Quick Assessments**: Log your current state with smooth, interactive sliders
  - 😊 Mood
  - 😰 Anxiety levels
  - ⚡ Energy
  - 🎯 Focus
  - 💼 Productivity
  - 📝 Optional notes

- **History View**: Browse all your past entries with timestamps
- **Insights Dashboard**:
  - Average calculations for each metric
  - Beautiful trend charts (last 14 entries)
  - Total entry count
  - Streak tracking

### Extraordinary UX
- 🎨 Smooth animations and micro-interactions
- 🎉 Confetti celebration on entry submission
- 🔥 Streak tracking to build consistency
- 📱 Haptic feedback on mobile devices
- 🌈 Gradient color schemes and floating orbs
- ⚡ Lightning-fast performance
- 💫 Delightful hover effects and transitions

### Progressive Web App (PWA)
- 📲 Installable on your phone like a native app
- 🔌 Works offline after initial load
- 🚀 Fast, app-like experience
- 🏠 Add to home screen

### Notifications
- 🔔 Smart push notifications
- ⏰ Customizable reminder frequency (1-10 times per day)
- 📅 Automatic scheduling between 8 AM - 10 PM
- 💬 Optional SMS notifications via Twilio

### Data & Privacy
- 🔒 Local-first: All data stored in your browser by default
- ☁️ Optional Firebase cloud sync across devices
- 📥 Export all data as JSON
- 🗑️ Complete data control (clear anytime)

## 🚀 Quick Start

### Option 1: Use Locally (No Setup Required)
1. Open `index.html` in your browser
2. Start logging entries immediately!
3. Data is stored locally in your browser

### Option 2: Host Online
Deploy to:
- **GitHub Pages**: Push to repo, enable Pages in settings
- **Netlify**: Drag & drop the folder
- **Vercel**: Import from GitHub
- **Firebase Hosting**: Follow setup below

## 🔧 Advanced Setup

### 1. Firebase Setup (Optional - For Cloud Sync)

**Why use Firebase?**
- Sync data across all your devices
- Automatic cloud backup
- Real-time updates
- Free tier is generous

**Steps:**
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project
3. Add a web app to your project
4. Copy the config values
5. Open `firebase-config.js` and replace:
   ```javascript
   const firebaseConfig = {
       apiKey: "YOUR_ACTUAL_API_KEY",
       authDomain: "your-project.firebaseapp.com",
       projectId: "your-project-id",
       storageBucket: "your-project.appspot.com",
       messagingSenderId: "123456789",
       appId: "1:123456789:web:abcdef",
       measurementId: "G-ABCDEFG"
   };
   ```

6. In Firebase Console:
   - Go to Firestore Database → Create database → Start in production mode
   - Go to Settings → Cloud Messaging → Generate a new key pair

7. Enable Cloud Sync in the app's Settings tab!

### 2. SMS Notifications Setup (Optional - Via Twilio)

**Why use SMS?**
- Get text message reminders
- Never miss a check-in
- Works without internet

**Steps:**
1. Sign up for [Twilio](https://www.twilio.com/try-twilio) (free trial)
2. Get a phone number from Twilio
3. Find your Account SID and Auth Token in the dashboard
4. Open `firebase-config.js` and update:
   ```javascript
   const twilioConfig = {
       accountSid: "YOUR_TWILIO_ACCOUNT_SID",
       authToken: "YOUR_TWILIO_AUTH_TOKEN",
       fromNumber: "+15551234567", // Your Twilio number
       toNumber: "+15559876543"   // Your phone number
   };
   ```

5. Create a Twilio Function (serverless):
   - Go to Twilio Console → Functions & Assets → Services
   - Create a new service called "EMA Notifications"
   - Add this code:

   ```javascript
   exports.handler = function(context, event, callback) {
       const twilio = require('twilio')(
           context.ACCOUNT_SID,
           context.AUTH_TOKEN
       );

       twilio.messages.create({
           body: event.message || 'EMA Check-in Time! 📊 Log your entry now.',
           from: context.PHONE_NUMBER,
           to: event.to
       }).then(message => {
           callback(null, { success: true, sid: message.sid });
       }).catch(error => {
           callback(error);
       });
   };
   ```

6. Add environment variables in Twilio Function settings
7. Deploy and test!

### 3. Push Notifications Setup

**Browser notifications work automatically!** Just:
1. Open the app
2. Go to Settings tab
3. Toggle "Enable Notifications"
4. Allow notifications when prompted
5. Set your preferred reminder frequency

The app will send you reminders throughout the day automatically.

## 📱 Installing as PWA

### On iPhone/iPad:
1. Open the app in Safari
2. Tap the Share button
3. Scroll down and tap "Add to Home Screen"
4. Tap "Add"

### On Android:
1. Open the app in Chrome
2. Tap the three dots menu
3. Tap "Install app" or "Add to Home Screen"

### On Desktop:
1. Look for the install icon in the address bar
2. Click "Install"
3. Or wait for the install banner to appear

## 🎨 Customization

### Change Colors
Edit the CSS variables in `index.html`:
```css
:root {
    --primary: #667eea;
    --secondary: #764ba2;
    --success: #43e97b;
    --warning: #f093fb;
    --danger: #f5576c;
}
```

### Modify Notification Times
In `index.html`, find the `scheduleNotifications()` function:
```javascript
const wakeHour = 8;   // Start reminders at 8 AM
const sleepHour = 22; // Stop reminders at 10 PM
```

### Add More Metrics
1. Add HTML in the form section
2. Add a slider with unique ID
3. Update the form submission to capture the new metric
4. Update the rendering functions

## 📊 Data Format

Exported JSON structure:
```json
[
  {
    "timestamp": "2025-01-15T14:30:00.000Z",
    "mood": 8,
    "anxiety": 3,
    "energy": 7,
    "focus": 9,
    "productivity": 8,
    "notes": "Had a great productive morning!",
    "synced": false
  }
]
```

## 🛠️ Technology Stack

- **Frontend**: Vanilla HTML, CSS, JavaScript
- **Charts**: Chart.js
- **Animations**: Canvas Confetti
- **Backend (Optional)**: Firebase Firestore
- **Notifications**: Web Push API + Service Workers
- **SMS (Optional)**: Twilio
- **PWA**: Service Worker + Manifest

## 🔐 Privacy & Security

- **Local-first**: All data stays on your device by default
- **No tracking**: No analytics, no third-party trackers
- **Optional cloud**: You control if/when to sync to Firebase
- **Export anytime**: Full data portability
- **Open source**: Audit the code yourself

## 📈 Best Practices for EMA

1. **Be consistent**: Try to log at the same times each day
2. **Be honest**: The data is for you - be truthful
3. **Add context**: Use notes to capture what influenced your state
4. **Review weekly**: Check your insights to spot patterns
5. **Celebrate streaks**: Build the habit with consistency

## 🐛 Troubleshooting

**Notifications not working?**
- Check browser permissions
- Make sure Service Worker is registered (check DevTools Console)
- Try re-enabling in Settings

**Data not syncing?**
- Verify Firebase configuration
- Check browser console for errors
- Ensure Firestore rules allow read/write

**App won't install?**
- Make sure you're using HTTPS or localhost
- Check that manifest.json is valid
- Try a different browser

**SMS not sending?**
- Verify Twilio credentials
- Check phone number format (+1234567890)
- Ensure Twilio Function is deployed

## 📝 License

MIT License - Use freely for personal or commercial projects!

## 🙏 Credits

Built with love using modern web technologies. Inspired by evidence-based EMA research and designed for real-world mental health tracking.

---

**Made with ❤️ for better mental health and productivity tracking**

*Generated with [Claude Code](https://claude.com/claude-code)*
