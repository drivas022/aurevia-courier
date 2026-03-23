// Importamos React
import React from 'react';
// Importamos ReactDOM
import ReactDOM from 'react-dom/client';
// Estilos base
import './index.css';
// Este es el componente principal de nuestra app
import App from './App';
// Buscamos el div root del index.html
const root = ReactDOM.createRoot(document.getElementById('root'));
// Renderizamos la app
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);