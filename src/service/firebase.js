// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: ProcessingInstruction.env.REACT_APP_FIREBASE_API_KEY,
	authDomain: ProcessingInstruction.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
	databaseURL: ProcessingInstruction.env.REACT_APP_FIREBASE_DB_URL,
	projectId: ProcessingInstruction.env.REACT_APP_FIREBASE_PROJECT_ID,
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
