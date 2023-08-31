import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as firebase from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyD53QXX-eLRMHf6dD9HJVGrcplaTUosyVo",
  authDomain: "costs-4c8eb.firebaseapp.com",
  projectId: "costs-4c8eb",
  storageBucket: "costs-4c8eb.appspot.com",
  messagingSenderId: "327524349967",
  appId: "1:327524349967:web:a20a49e0236baa949b4b7a",
  measurementId: "G-VP01XN2T0E"
};
firebase.initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

