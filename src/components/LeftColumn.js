import React, { useState, useEffect } from 'react';
import './LeftColumn.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import JsIcon from '../icons/javascript.svg';
import ReactIcon from '../icons/react.svg';
import AngularIcon from '../icons/angular.svg';
import PythonIcon from '../icons/python.svg';
import GolangIcon from '../icons/go.svg';
import RustIcon from '../icons/rust.svg';
import Html5Icon from '../icons/html5.svg';
import Css3Icon from '../icons/css3.svg';
import MySqlIcon from '../icons/mysql.svg';
import sqliteIcon from '../icons/sqlite.svg';
import cIcon from '../icons/c.svg';
import javaIcon from '../icons/java.svg'



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

                {/* Languages and Frameworks Logos */}
                <div className="skills-icons">
                    <img src={javaIcon} alt="Java" className="skill-icon" />
                    <img src={GolangIcon} alt="GoLang" className="skill-icon" />
                    <img src={RustIcon} alt="Rust" className="skill-icon" />
                    <img src={cIcon} alt="C" className="skill-icon" />
                    <img src={PythonIcon} alt="Python" className="skill-icon" />
                    <img src={JsIcon} alt="JavaScript" className="skill-icon" />
                    <img src={Html5Icon} alt="HTML5" className="skill-icon" />
                    <img src={Css3Icon} alt="CSS3" className="skill-icon" />
                    <img src={ReactIcon} alt="React" className="skill-icon" />
                    <img src={AngularIcon} alt="Angular" className="skill-icon" />
                    <img src={MySqlIcon} alt="MySql" className="skill-icon" />
                    <img src={sqliteIcon} alt="Sqlite" className="skill-icon" />

                </div>

                {/* Navigation Links */}
                <nav className="nav-links">
                    <ul>
                        <li><a href="#aboutme-section">About Me</a></li>
                        <li><a href="#projects-section">Projects</a></li>
                        <li><a href="#experience-section">Experiences</a></li>
                        <li><a href="#journeyai-section">Journey Into AI</a></li>
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