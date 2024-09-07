import React from 'react';
import './Experience.css';

const Experience = () => {
    const experiences = [
        {
            company: 'Développement Informatique International',
            duration: '2 months of internship + 1 month of fixed-term contract',
            description: 'My mission was to transform their application into a modern web application.',
            technologies: ['Java Spring Boot', 'Angular', 'MySql', 'JavaScript', 'HTML', 'CSS', 'Bootstrap'],
        }
    ];

    return (
        <section id="experience-section" className="experience-section">
            <h2 className="section-title">My Experiences</h2>
            <div className="experience-container">
                {experiences.map((experience, index) => (
                    <div key={index} className="experience-card">
                        <h3>{experience.company}</h3>
                        <p><strong>Duration:</strong> {experience.duration}</p>
                        <p>{experience.description}</p>
                        <div className="technologies">
                            {experience.technologies.map((tech, techIndex) => (
                                <span key={techIndex} className="tech-badge">{tech}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Experience;
