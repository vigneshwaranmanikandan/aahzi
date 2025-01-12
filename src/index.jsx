import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Assuming App.jsx is in the src folder
import './index.css';    // Optional, if you have global styles

// Create a root and render the App component
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
