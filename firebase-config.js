// Firebase Configuration
// Replace these with your actual Firebase project credentials
// Get these from: Firebase Console > Project Settings > General > Your apps > Firebase SDK snippet

const firebaseConfig = {
    apiKey: "YOUR_API_KEY_HERE",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID",
    measurementId: "YOUR_MEASUREMENT_ID"
};

// Twilio Configuration (optional - for SMS notifications)
const twilioConfig = {
    accountSid: "YOUR_TWILIO_ACCOUNT_SID",
    authToken: "YOUR_TWILIO_AUTH_TOKEN",
    fromNumber: "YOUR_TWILIO_PHONE_NUMBER",
    toNumber: "YOUR_PHONE_NUMBER"
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { firebaseConfig, twilioConfig };
}
