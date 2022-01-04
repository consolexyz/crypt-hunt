import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CryptContext from './CryptContext';
import "react-alice-carousel/lib/alice-carousel.css";

ReactDOM.render(
  <React.StrictMode>
    <CryptContext>
    <App />
    </CryptContext>
  </React.StrictMode>,
  document.getElementById('root')
);

