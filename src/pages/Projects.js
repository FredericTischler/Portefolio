import React from 'react';
import './Projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import turingImage from '../img/turing.webp';
import groupieImage from '../img/groupie-tracker.png'
import lemImage from '../img/lem-in.webp'
import wordsImage from '../img/words-shared.webp'
import graphImage from '../img/graph.webp'
import systemImage from '../img/client-server.webp'


const Projects = () => {
    const projectList = [
        {
            name: 'Turing Machine',
            description: 'An interactive simulation of a Turing machine, implemented with a graphical Java Swing interface. The simulation allows users to visualize and manipulate the tape, head movements, and state transitions of the Turing machine in real-time. The project is structured using the MVC design pattern.',
            technologies: ['Java'],
            githubLink: 'https://github.com/FredericTischler/Turing-Machine',
            imageUrl: turingImage,
        },
        {
            name: 'Groupie Tracker',
            description: 'A website utilizing an API to display information about artists and their concerts. Searchbar, filters and geolocalization features are implemented.',
            technologies: ['API', 'JavaScript', 'HTML/CSS', 'Go'],
            githubLink: 'https://github.com/FredericTischler/Groupie-tracker',
            imageUrl: groupieImage,
        },
        {
            name: 'Lem-in',
            description: 'A pathfinding algorithm where ants must find the shortest route through a network of tunnels while following movement constraints.',
            technologies: ['Go'],
            githubLink: 'https://github.com/FredericTischler/Lem-in',
            imageUrl: lemImage
        },
        {
            name: 'Words Shared',
            description: 'A C program that lists and displays words shared between multiple files, sorted by occurrence in descending order and lexicographically.',
            technologies: ['C'],
            githubLink: 'https://github.com/FredericTischler/Words-Shared',
            imageUrl: wordsImage,
        },
        {
            name: 'Graph',
            description: 'A Python project analyzing and testing several algorithms related to graph theory, with a graphic visual of statistic',
            technologies: ['Python'],
            githubLink: 'https://github.com/FredericTischler/Projet-Graphe',
            imageUrl: graphImage,
        },
        {
            name: 'System Client/Server',
            description: 'A client-server system where the client sends bash commands to the server, which executes them on dedicated threads and returns the result.',
            technologies: ['C'],
            githubLink: 'https://github.com/FredericTischler/Server-client',
            imageUrl: systemImage,
        }
    ];

    return (
        <section id="projects" className="projects-section">
            <h2 className="section-title">My Projects</h2>
            <div className="projects-container">
                {projectList.map((project, index) => (
                    <div key={index} className="project-card">
                        <img src={project.imageUrl} alt={project.name} className="project-image" /> {/* Image on the left */}
                        <div className="project-content"> {/* Text on the right */}
                            <h3>{project.name}</h3>
                            <p>{project.description}</p>
                            <div className="technologies">
                                {project.technologies.map((tech, techIndex) => (
                                    <span key={techIndex} className="tech-badge">{tech}</span>
                                ))}
                            </div>
                            <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="github-link">
                                <FontAwesomeIcon icon={faGithub} /> View on GitHub
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;