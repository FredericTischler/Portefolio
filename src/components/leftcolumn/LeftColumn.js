import React, { useState, useEffect } from 'react';
import './LeftColumn.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Nav from 'rsuite/Nav';
import Col from 'rsuite/Col';
import PhotoCV from '../../img/Photo-CV.png';

const LeftColumn = ({ isLoggedIn }) => {
    const [isOpen, setIsOpen] = useState(true);
    const [isMobile, setIsMobile] = useState(false);
    const [active, setActive] = useState('home');

    const handleSelect = (eventKey) => {
        setActive(eventKey);
        const section = document.getElementById(`${eventKey}-section`);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 768) {
                setIsMobile(true);
                setIsOpen(false);
            } else {
                setIsMobile(false);
                setIsOpen(true);
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div>
            {isMobile && (
                <button className="toggle-button" onClick={toggleSidebar}>
                    <FontAwesomeIcon icon={faBars} />
                </button>
            )}
            <img src={PhotoCV} alt="Frédéric Tischler" className="profile-photo" />
            <div className={`left-column ${isOpen ? 'open' : 'closed'}`}>
                <div className="personal-info">
                    <h1>Frédéric Tischler</h1>
                    <h2>Full Stack Developer</h2>
                </div>
                <Col>
                    <Nav
                        vertical
                        activeKey={active}
                        onSelect={handleSelect}
                        appearance="subtle"
                        reversed
                    >
                        <Nav.Item eventKey="aboutme">About Me</Nav.Item>
                        <Nav.Item eventKey="projects">Projects</Nav.Item>
                        <Nav.Item eventKey="experience">Experience</Nav.Item>
                        <Nav.Item eventKey="journeyai">Journey Into AI</Nav.Item>
                    </Nav>
                </Col>
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