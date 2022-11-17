import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { TemaProvider } from './contexts/tema';
import { TempoProvide } from './contexts/tempo';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TemaProvider>
      <TempoProvide>
        <App />
      </TempoProvide>
    </TemaProvider>
  </React.StrictMode>
);