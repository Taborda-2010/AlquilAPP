import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Estilos globales
import './App.css'; // O './styles/globals.css' si usas otro nombre

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
