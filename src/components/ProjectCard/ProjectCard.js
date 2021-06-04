import React from 'react';
import "./styles.css";
import { projectData } from "../../ProjectData/projects";
import { PageTitle } from "../PageTitle/PageTitle";

export function ProjectCard() {
    return (
        <>
            <PageTitle title="Recent Projects" />
            <section className="secondary-projects">
                {projectData.map((project, key) => {
                    return (
                        <div className="project-card">
                            {/* <div className="secondary-project-img" key={key}>
                                <img src={project.image} alt="" />
                            </div> */}
                            <div className="project-info">
                                <h3>{project.name}</h3>
                                <p>{project.description}</p>
                                <button className="btn project-cta">
                                    <a className="btn-link" href={project.liveUrl}>GitHub Repo</a>
                                </button>
                                <a href={project.repoUrl}>GitHub Repo</a>
                            </div>
                        </div>
                    )
                })}
            </section>
        </>
    )
}