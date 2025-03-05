import React from "react";
import "./Projects.css";

const projects = [
    {
        title: "TeeTour",
        description: "an iOS app that automatically plans golf trips based on the courses you want to visit.",
        link: "#",
        status: "yellow",
        date: "aug 2024 -"
    },
    {
        title: "financeBRO",
        description: "a python tool to help automate finances for student organizations.",
        link: "#",
        status: "yellow",
        date: "jan 2025 -"
    },
    {
        title: "HammerMaps",
        description: "an iOS app that emulates a real-life minecraft map of a college campus.",
        link: "#",
        status: "yellow",
        date: "feb 2025 -"
    },
];

const Projects = () => {
    return (
        <div className="projects-container">
            <h2>projects</h2>
            <p>past. present. future.</p>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <div className={`dot ${project.status}`}>
                            <span>
                                {project.status === "green"
                                    ? "Completed"
                                    : project.status === "yellow"
                                        ? "In Progress"
                                        : "Stopped"}
                            </span>
                        </div> {/* Dot with text */}
                        <div className="date">{project.date}</div> {/* Date element */}
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <a href={project.link} target="_blank" rel="noopener noreferrer">view project</a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;