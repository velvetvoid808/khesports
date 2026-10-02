// Shared Firebase setup for KH Esports Championship.
// Loaded as an ES module (type="module") by both index.html (public site,
// read-only live sync) and admin.html (login + editing).
//
// The values below are Firebase's public "web app config" — they identify
// the project, they are not secrets. Actual write-access is protected by
// Firebase Authentication + Firestore Security Rules, not by hiding this file.

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-storage.js";

const firebaseConfig = {
    apiKey: "AIzaSyBPrLiYj9ebP4HXRa2S-aeTRuh-WcsjjnE",
    authDomain: "khesports-2a266.firebaseapp.com",
    projectId: "khesports-2a266",
    storageBucket: "khesports-2a266.firebasestorage.app",
    messagingSenderId: "655749446283",
    appId: "1:655749446283:web:b9799750956359e846f28e",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
