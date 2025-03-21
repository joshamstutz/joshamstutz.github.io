import React, { useState, useRef, useCallback } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import update from "immutability-helper";
import "./Projects.css";

const ItemType = "PROJECT";

const projectsData = [
    { id: "1", title: "financeBRO", description: "a python tool to help automate finances for student organizations.", link: "https://github.com/joshamstutz/financeBRO", status: "green", date: "jan - mar 2025" },
    { id: "2", title: "br-ckt", description: "a march madness bracket generator based on past matchup results", link: "https://br-ckt.github.io", status: "green", date: "feb - mar 2025" },
    { id: "3", title: "TeeTour", description: "an iOS app that plans golf trips based on the courses you want to visit.", link: "https://github.com/joshamstutz/TeeTour", status: "yellow", date: "aug 2024 -" },
    { id: "4", title: "HammerMaps", description: "an iOS app that emulates a real-Life minecraft map of a college campus.", link: "https://github.com/joshamstutz/HammerMaps", status: "yellow", date: "feb 2025 -" },
    { id: "5", title: "my site", description: "this website...", link: "https://github.com/joshamstutz/site", status: "yellow", date: "mar 2025 -" }
];

const ProjectCard = ({ project, index, moveCard }) => {
    const ref = useRef(null);

    const [{ handlerId }, drop] = useDrop({
        accept: ItemType,
        collect(monitor) {
            return {
                handlerId: monitor.getHandlerId(),
            };
        },
        hover: (item, monitor) => {
            if (!ref.current) {
                return;
            }
            const dragIndex = item.index;
            const hoverIndex = index;

            if (dragIndex === hoverIndex) {
                return;
            }

            const hoverBoundingRect = ref.current?.getBoundingClientRect();

            const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

            const clientOffset = monitor.getClientOffset();

            const hoverClientY = clientOffset.y - hoverBoundingRect.top;

            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return;
            }

            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return;
            }

            moveCard(dragIndex, hoverIndex);

            item.index = hoverIndex;
        },
    });

    const [{ isDragging }, drag] = useDrag({
        type: ItemType,
        item: () => {
            return { id: project.id, index };
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    drag(drop(ref));

    return (
        <div
            ref={ref}
            className="project-card"
            style={{
                opacity: isDragging ? 0.5 : 1,
                cursor: 'move'
            }}
            data-handler-id={handlerId}
        >
            <div className={`dot ${project.status}`}>
                <span>{project.status === "green" ? "Completed" : project.status === "yellow" ? "In Progress" : "Stopped"}</span>
            </div>
            <div className="date">{project.date}</div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">view project</a>
        </div>
    );
};

const Projects = () => {
    const [projects, setProjects] = useState(projectsData);

    const moveCard = useCallback((dragIndex, hoverIndex) => {
        setProjects((prevProjects) =>
            update(prevProjects, {
                $splice: [
                    [dragIndex, 1],
                    [hoverIndex, 0, prevProjects[dragIndex]]
                ]
            })
        );
    }, []);

    return (
        <DndProvider backend={HTML5Backend}>
            <div className="projects-container">
                <h2>my projects</h2>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <ProjectCard
                            key={project.id}
                            index={index}
                            project={project}
                            moveCard={moveCard}
                        />
                    ))}
                </div>
            </div>
        </DndProvider>
    );
};

export default Projects;