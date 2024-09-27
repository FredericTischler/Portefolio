import React, { useState, useEffect } from 'react';
import './LeftColumn.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';  // Importing the toggle icon

const LeftColumn = ({ isLoggedIn }) => {
    const [isOpen, setIsOpen] = useState(true);  // Open by default on desktop
    const [isMobile, setIsMobile] = useState(false);  // Detect if it's mobile

    // Function to toggle the sidebar visibility
    const toggleSidebar = () => {
        setIsOpen(!isOpen);  // Toggle between open and closed
    };

    // Detect if the device is mobile (using window width)
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setIsMobile(true);   // Mobile if width <= 768px
                setIsOpen(false);    // Close sidebar by default on mobile
            } else {
                setIsMobile(false);  // Not mobile
                setIsOpen(true);     // Open sidebar by default on desktop
            }
        };

        window.addEventListener('resize', handleResize);

        // Initial check
        handleResize();

        // Cleanup event listener on component unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div>
            {/* Show toggle button only on mobile when user is logged in */}
            {isMobile && (
                <button className="toggle-button" onClick={toggleSidebar}>
                    <FontAwesomeIcon icon={faBars} />
                </button>
            )}

            {/* Sidebar with conditional class based on 'isOpen' state */}
            <div className={`left-column ${isOpen ? 'open' : 'closed'}`}>
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
                        <li><a href="#softskills-section">Soft Skills</a></li>
                    </ul>
                </nav>

                {/* Social Media Links */}
                <div className="social-links">
                    <a href="https://github.com/FredericTischler" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                    <a href="https://www.linkedin.com/in/fr%C3%A9d%C3%A9ric-tischler-64b588305/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a href="https://instagram.com/fredtschlr" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram} />
                    </a>
                    <a href="mailto:frederic.tischler@protonmail.com" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faEnvelope} />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default LeftColumn;