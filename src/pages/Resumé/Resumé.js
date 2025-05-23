import React from "react";
import "./Resumé.css";
import resume from "../../assets/josh_amstutz_resume.pdf";

const experienceData = [
    {
        id: "1",
        title: "artificial intelligence intern",
        company: "Data Annotation",
        description: "Worked with AI teams to train models by feeding them coding prompts and writing target responses. Assisted with refining the model's ability to generate accurate code.",
        date: "Dec 2023 - Sep 2024"
    },
    {
        id: "2",
        title: "organizer/finance lead",
        company: "Purdue Hackers",
        description: "Leading the finance team, handling budgeting, tracking expenses, and ensuring financial transparency for the club's operations and events. Developed financeBRO (see projects tab) and launching microgrants soon, a program designed to get student developers the funding they need.",
        date: "Sept 2024 - present"
    }
];

const educationData = [
    {
        id: "1",
        degree: "bachelor of science in computer science",
        school: "Purdue University",
        date: "graduation: May 2027"
    },
    {
        id: "2",
        degree: "high school diploma",
        school: "South Adams High School",
        date: "graduated: May 2023"
    }
];

const Resumé = () => {
    return (
        <div className="resume-page">
            <div className="resume-container">
                <div className="resume-content">
                    <div className="resume-header">
                        <h2>resumé</h2>
                        <a href={resume} className="download-link" download="josh_amstutz_resume.pdf">download</a>
                    </div>
                    <section className="experience-section">
                        <h3>experience</h3>
                        <div className="experience-list">
                            {experienceData.map((job) => (
                                <div key={job.id} className="experience-item">
                                    <h4>{job.title}</h4>
                                    <p className="company">{job.company}</p>
                                    <p className="description">{job.description}</p>
                                    <p className="date">{job.date}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="education-section">
                        <h3>education</h3>
                        <div className="education-list">
                            {educationData.map((edu) => (
                                <div key={edu.id} className="education-item">
                                    <h4>{edu.degree}</h4>
                                    <p className="school">{edu.school}</p>
                                    <p className="date">{edu.date}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
};

export default Resumé;
