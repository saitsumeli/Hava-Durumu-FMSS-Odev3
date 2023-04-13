import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './App.css'
import { WeatherProvider } from './context/WeatherContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <WeatherProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
   </WeatherProvider>
);