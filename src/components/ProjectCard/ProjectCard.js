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
                                <a href={project.liveUrl}>
                                    <button className="btn project-cta">Live App</button>
                                </a>
                                <a className='secondary-link' href={project.repoUrl}>GitHub Repo</a>
                            </div>
                        </div>
                    )
                })}
            </section>
        </>
    )
}