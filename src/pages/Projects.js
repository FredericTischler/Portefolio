import React from 'react';
import './Projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Projects = () => {
    const projectList = [
        {
            name: 'Turing Machine',
            description: 'An interactive simulation of a Turing machine with a graphical interface.',
            technologies: ['Java'],
            githubLink: 'https://github.com/Kheesi/Turing-Machine'
        },
        {
            name: 'Groupie Tracker',
            description: 'A website utilizing an API to display information about artists and their concerts.',
            technologies: ['API', 'JavaScript', 'HTML/CSS', 'Go'],
            githubLink: 'https://github.com/Kheesi/Groupie-tracker'
        },
        {
            name: 'Lem-in',
            description: 'A pathfinding algorithm where ants must find the shortest route through a network of tunnels while following movement constraints.',
            technologies: ['Go'],
            githubLink: 'https://github.com/Kheesi/Lem-in'
        },
        {
            name: 'Words Shared',
            description: 'A C program that lists and displays words shared between multiple files, sorted by occurrence in descending order and lexicographically.',
            technologies: ['C'],
            githubLink: 'https://github.com/Kheesi/Words-Shared'
        },
        {
            name: 'Graph',
            description: 'A Python project analyzing and testing several algorithms related to graph theory.',
            technologies: ['Python'],
            githubLink: 'https://github.com/Kheesi/Projet-Graphe'
        },
        {
            name: 'System Client/Server',
            description: 'A client-server system where the client sends bash commands to the server, which executes them on dedicated threads and returns the result.',
            technologies: ['C'],
            githubLink: 'https://github.com/Kheesi/Server-client'
        }
    ];




    return (
        <section id="projects" className="projects-section">
            <h2 className="section-title">My Projects</h2>
            <div className="projects-container">
                {projectList.map((project, index) => (
                    <div key={index} className="project-card">
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
                ))}
            </div>
        </section>
    );
};

export default Projects;
