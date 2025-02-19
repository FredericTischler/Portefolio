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
import javaIcon from '../../icons/java.svg';
import springIcon from '../../icons/spring.svg';
import phpIcon from '../../icons/php.svg';
import nodeIcon from '../../icons/nodedotjs.svg';
import tsIcon from '../../icons/typescript.svg';
import bootsIcon from '../../icons/bootstrap.svg';
import tailIcon from '../../icons/tailwindcss.svg';
import dockerIcon from '../../icons/docker.svg';
import kuberIcon from '../../icons/kubernetes.svg';
import gitIcon from '../../icons/git.svg';
import jetIcon from '../../icons/jetbrains.svg';
import LogoWall from '../../components/logowall/logowall';

const AboutMe = () => {
    const logoImgs = [
        { imgUrl: JsIcon, altText: "JavaScript", link: "https://www.javascript.com/" },
        { imgUrl: tsIcon, altText: "TypeScript", link: "https://www.typescriptlang.org/" },
        { imgUrl: PythonIcon, altText: "Python", link: "https://www.python.org/" },
        { imgUrl: GolangIcon, altText: "Golang", link: "https://golang.org/" },
        { imgUrl: RustIcon, altText: "Rust", link: "https://www.rust-lang.org/" },
        { imgUrl: javaIcon, altText: "Java", link: "https://www.java.com/" },
        { imgUrl: cIcon, altText: "C", link: "https://en.wikipedia.org/wiki/C_(programming_language)" },
        { imgUrl: phpIcon, altText: "PHP", link: "https://www.php.net/" },
        { imgUrl: AngularIcon, altText: "Angular", link: "https://angular.io/" },
        { imgUrl: ReactIcon, altText: "React", link: "https://reactjs.org/" },
        { imgUrl: nodeIcon, altText: "Node.js", link: "https://nodejs.org/" },
        { imgUrl: springIcon, altText: "Spring", link: "https://spring.io/" },
        { imgUrl: MySqlIcon, altText: "MySQL", link: "https://www.mysql.com/" },
        { imgUrl: sqliteIcon, altText: "SQLite", link: "https://www.sqlite.org/" },
        { imgUrl: Html5Icon, altText: "HTML", link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
        { imgUrl: Css3Icon, altText: "CSS", link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
        { imgUrl: bootsIcon, altText: "Bootstrap", link: "https://getbootstrap.com/" },
        { imgUrl: tailIcon, altText: "Tailwind CSS", link: "https://tailwindcss.com/" },
        { imgUrl: dockerIcon, altText: "Docker", link: "https://www.docker.com/" },
        { imgUrl: kuberIcon, altText: "Kubernetes", link: "https://kubernetes.io/" },
        { imgUrl: gitIcon, altText: "Git", link: "https://git-scm.com/" },
        { imgUrl: jetIcon, altText: "JetBrains", link: "https://www.jetbrains.com/" }
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
                    <a href="/CV_Frederic_Tischler.pdf" download="FredericTischler_CV.pdf" className="cv-link">
                        <button className="download-cv-button">Download My CV</button>
                    </a>
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
