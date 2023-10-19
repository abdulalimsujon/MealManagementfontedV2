import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import "../src/Assests/css/bootstrap.css"
import "../src/Assests/css/animate.min.css"
import "../src/Assests/css/style.css"
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'react-calendar/dist/Calendar.css';
import 'react-circular-progressbar/dist/styles.css';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
 
    <App />
  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
