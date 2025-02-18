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
                        Computer Science graduate and currently training at Zone01, I have strong experience in full-stack development with Java Spring and Angular.
                    </p>
                    <p>
                        Passionate about AI, I aim to develop a model for financial market prediction. Currently seeking an apprenticeship to further enhance my skills.
                    </p>
                    <p>
                        <a href="../../img/CV_Frederic_Tischler.pdf" download="FredericTischler_CV.pdf" className="cv-link">
                            <button className="download-cv-button">Download My CV</button>
                        </a>
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
