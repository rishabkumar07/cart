import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBfcp64IwcSwvSkyFe5wIdg_5agLsGz3CQ",
  authDomain: "cart-e2338.firebaseapp.com",
  databaseURL: "https://cart-e2338.firebaseio.com",
  projectId: "cart-e2338",
  storageBucket: "cart-e2338.appspot.com",
  messagingSenderId: "952053285777",
  appId: "1:952053285777:web:13984484c990171ede1030"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


