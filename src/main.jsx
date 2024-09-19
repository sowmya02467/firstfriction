import React from 'react'

import App from './App'
import './index.css'

import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';  // Import BrowserRouter

// Create a root and render the App inside BrowserRouter
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>  {/* Wrap your App in BrowserRouter */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
