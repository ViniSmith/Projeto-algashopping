import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const App = () => {
  return <div>
    Olá mundo
  </div>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
