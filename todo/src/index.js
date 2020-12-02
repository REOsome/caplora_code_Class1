import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from "firebase/app";


 export const config =  {
  apiKey: "AIzaSyAEjbn-38w-atN0k2jBHfGcFkq73exZa4U",
  authDomain: "to-do-5622d.firebaseapp.com",
  databaseURL: "https://to-do-5622d.firebaseio.com",
  projectId: "to-do-5622d",
  storageBucket: "to-do-5622d.appspot.com",
  messagingSenderId: "1078066602031",
  appId: "1:1078066602031:web:6a99d24c8141d6683fa6da",
  measurementId: "G-X8Z4CS5GVW"
};

firebase.initializeApp(config);
ReactDOM.render(
  <React.StrictMode>
    <App />
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
