import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './Pages/main';

document.title = "WealthNx";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
