import React from 'react';
import './AboutMe.css';

const AboutMe = () => {
    return (
        <section id="about-me" className="about-me-section">
            <h2 className="section-title">About Me</h2>
            <div className="about-me-container">
                <div className="about-me-card">
                    <p>
                        I am a passionate full-stack developer with a solid academic background in computer science. I hold a Bachelor's degree in Computer Science from the University of Rouen and have further developed my skills through specialized training in Application Development and Design at Zone01.
                    </p>
                    <p>
                        My expertise spans both front-end and back-end technologies, allowing me to build scalable, efficient applications. Throughout my experience, I have worked with various programming languages and frameworks, including Java, C, C++, Rust, Go, Angular, React, JavaScript, HTML/CSS, and more.
                    </p>
                    <p>
                        Driven by a deep passion for technology, I focus on creating dynamic, user-centered applications that not only meet technical requirements but also enhance the user experience.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
