import React from 'react';
import Projects from './Projects';
import AboutMe from './AboutMe';
import Experience from './Experience'
import JourneyAI from './JourneyAI'

const Home = () => {
    return (
        <div>
            <section id="aboutme-section">
                <AboutMe />
            </section>
            <section id="projects-section">
                <Projects />
            </section>
            <section id="experience-section">
                <Experience />
            </section>
            <section id="journeyai-section">
                <JourneyAI />
            </section>

        </div>
    );
};

export default Home;
