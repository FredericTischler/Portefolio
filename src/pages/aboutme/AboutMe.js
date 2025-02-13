import React from 'react';
import './AboutMe.css';
import JsIcon from '../../icons/javascript.svg';
import ReactIcon from '../../icons/react.svg';
import AngularIcon from '../../icons/angular.svg';
import PythonIcon from '../../icons/python.svg';
import GolangIcon from '../../icons/go.svg';
import RustIcon from '../../icons/rust.svg';
import Html5Icon from '../../icons/html5.svg';
import Css3Icon from '../../icons/css3.svg';
import MySqlIcon from '../../icons/mysql.svg';
import sqliteIcon from '../../icons/sqlite.svg';
import cIcon from '../../icons/c.svg';
import javaIcon from '../../icons/java.svg'
import LogoWall from '../../components/logowall/logowall';

const AboutMe = () => {
    const logoImgs = [
        { imgUrl: JsIcon, altText: "JavaScript" },
        { imgUrl: AngularIcon, altText: "React Bits Logo" },
        { imgUrl: ReactIcon, altText: "React Bits Logo" },
        { imgUrl: PythonIcon, altText: "React Bits Logo" },
        { imgUrl: GolangIcon, altText: "React Bits Logo" },
        { imgUrl: RustIcon, altText: "React Bits Logo" },
        { imgUrl: Html5Icon, altText: "React Bits Logo" },
        { imgUrl: Css3Icon, altText: "React Bits Logo" },
        { imgUrl: MySqlIcon, altText: "React Bits Logo" },
        { imgUrl: sqliteIcon, altText: "React Bits Logo" },
        { imgUrl: javaIcon, altText: "React Bits Logo" },
        { imgUrl: cIcon, altText: "React Bits Logo" }
      ];
    return (
        <section id="about-me" className="about-me-section">
            <h2 className="section-title">About Me</h2>
            <div className="about-me-container">
                <div className="about-me-card">
                    <p>
                        I am a passionate full-stack developer with a solid academic background in computer science. I hold a Bachelor's degree in Computer Science from the University of Rouen and have further developed my skills through specialized training in Application Development and Design at Zone01.
                        My expertise spans both front-end and back-end technologies, allowing me to build scalable, efficient applications. Throughout my experience, I have worked with various programming languages and frameworks, including Java, C, C++, Rust, Go, Angular, React, JavaScript, HTML/CSS, and more.
                        Driven by a deep passion for technology, I focus on creating dynamic, user-centered applications that not only meet technical requirements but also enhance the user experience.
                    </p>
                </div>
            </div>
            <div style={{ height: '300px', width: '97%', position: 'absolute' }}>
                        <LogoWall
                            items={logoImgs}
                            direction='horizontal'
                            pauseOnHover={false}
                            size='clamp(5rem, 2rem + 10vmin, 15rem)'
                            duration='30s'
                            bgColor='transparent'
                            bgAccentColor='transparent'
                        />  
            </div>
        </section>
    );
};

export default AboutMe;
