import React from 'react';
import ReactDOM from 'react-dom/client';  // Changement ici : on importe depuis 'react-dom/client'
//import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';


// Créer un "root" pour le rendu de l'application
const root = ReactDOM.createRoot(document.getElementById('root'));

// Utiliser root.render pour rendre le composant <App />
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
