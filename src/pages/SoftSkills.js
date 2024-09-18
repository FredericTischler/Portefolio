import React from 'react';
import './SoftSkills.css'; // Assurez-vous de lier le fichier CSS

const SoftSkills = () => {
    return (
        <section id="softskills" className="softskills-section">
            <h2 className="section-title">My Soft Skills</h2>
            <div className="softskills-container">
                <iframe
                    src="https://cv.emage-me.com/me/frederic-tischler"
                    width="100%"
                    height="1500px"
                    title="Frederic Tischler's CV"
                    className="centered-iframe no-scroll"
                ></iframe>
            </div>
        </section>
    );
};

export default SoftSkills;
