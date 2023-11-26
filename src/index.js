import React from 'react';
import ReactDOM from 'react-dom'; 
import './index.css';
import App from './App';
 import reportWebVitals from './reportWebVitals';
 // import axios from "axios";

 //defaults.baseURL = process.env.BACKEND_URL;

const root = document.getElementById('root');
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  root
);

 reportWebVitals();
