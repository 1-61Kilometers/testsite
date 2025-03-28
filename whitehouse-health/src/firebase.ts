import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDorYYNMEVMD5SlmJJwszrs8dfdspIUHUo",
  authDomain: "whitehousehealthsystems.firebaseapp.com",
  projectId: "whitehousehealthsystems",
  storageBucket: "whitehousehealthsystems.firebasestorage.app",
  messagingSenderId: "608146500815",
  appId: "1:608146500815:web:2b1e1c02e2d2834ae01bba",
  measurementId: "G-YH1NV00NP6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Analytics and export as null if not supported (e.g., in development environment)
let analyticsInstance = null;
try {
  if (typeof window !== 'undefined') {
    analyticsInstance = getAnalytics(app);
  }
} catch (error) {
  console.log('Firebase Analytics error:', error);
}

export const analytics = analyticsInstance;