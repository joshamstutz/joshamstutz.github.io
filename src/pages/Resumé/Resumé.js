import React from "react";
import "./Resumé.css";
import resume from "../../assets/josh_amstutz_resume.pdf";

const experienceData = [
    {
        id: "1",
        title: "corporate partner project team member",
        company: "Molson Coors – The Data Mine, Purdue University",
        description: "Collaborating with a 10-member student team to analyze the alcohol market between Molson Coors and its distributors. Building a predictive model to forecast market dynamics over the next 10 years and presenting findings to company stakeholders.",
        date: "Aug 2025 – Present"
    },
    {
        id: "2",
        title: "information services intern",
        company: "Parkview Health – Information Services",
        description: "Supporting enterprise IT operations, including troubleshooting technical issues and resolving service tickets. Assisting with infrastructure and networking projects while gaining experience in large-scale healthcare IT systems.",
        date: "May 2025 – Present"
    },
    {
        id: "3",
        title: "organizer/finance lead",
        company: "Purdue Hackers",
        description: "Overseeing finances for Purdue’s largest computer science club. Developed financeBRO, a Python-based expense tracking tool, and leading Microgrants, a program that provides student developers with project funding.",
        date: "Jan 2025 – Oct 2025"
    },
    {
        id: "4",
        title: "artificial intelligence intern",
        company: "Data Annotation",
        description: "Trained machine learning models by designing coding prompts and writing target responses. Evaluated AI-generated code for accuracy and quality against programming standards to improve performance.",
        date: "Dec 2023 – Sep 2024"
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
