import React from 'react';
import './LeftColumn.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';  // Importing the envelope icon

const LeftColumn = () => {
    return (
        <div className="left-column">
            {/* Personal Information */}
            <div className="personal-info">
                <h1>Frédéric Tischler</h1>
                <h2>Full Stack Developer</h2>
            </div>

            {/* Navigation Links */}
            <nav className="nav-links">
                <ul>
                    <li><a href="#aboutme-section">About Me</a></li>
                    <li><a href="#projects-section">Projects</a></li>
                    <li><a href="#experience-section">Experiences</a></li>

                </ul>
            </nav>

            {/* Social Media Links */}
            <div className="social-links">
                <a href="https://github.com/Kheesi" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub} />
                </a>
                <a href="https://www.linkedin.com/in/fr%C3%A9d%C3%A9ric-tischler-64b588305/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href="https://instagram.com/fredtschlr" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faInstagram} />
                </a>
                <a href="mailto:frederic.tischler@protonmail.com" target="_blank" rel="noopener noreferrer">  {/* Mail icon with mailto */}
                    <FontAwesomeIcon icon={faEnvelope} />
                </a>
            </div>
        </div>
    );
};

export default LeftColumn;
