import React from 'react';
import { Link } from 'react-router-dom';  // Utilisation de Link pour rediriger l'utilisateur
import './NotFound.css';  // Import CSS

const NotFound = () => {
    return (
        <section className="not-found-section">
            <h2 className="not-found-title">404 - Page Not Found</h2>
            <p className="not-found-message">Sorry, the page you are looking for does not exist.</p>

            <Link to="/" className="back-to-home">Back to home page</Link>
        </section>
    );
};

export default NotFound;

