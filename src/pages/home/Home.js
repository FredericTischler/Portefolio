import React from 'react';
import Projects from '../projects/Projects';
import AboutMe from '../aboutme/AboutMe';
import Experience from '../experiences/Experience'
import JourneyAI from '../journeyai/JourneyAI'

const Home = () => {
    return (
        <div>
            <section id="aboutme-section">
                <AboutMe />
            </section>
            <section id="experience-section">
                <Experience />
            </section>
            <section id="projects-section">
                <Projects />
            </section>
            <section id="journeyai-section">
                <JourneyAI />
            </section>

        </div>
    );
};

export default Home;
