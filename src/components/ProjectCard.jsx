import React from "react"

// styles
import "./ProjectCard.css"

function ProjectCard({ project }) {
    return (
        <div className="project-card">
            <img src={project.image} className="card-img" />
            <div className="card-body">
                <h5 className="card-title">{project.name}</h5>
                {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card"s content.</p> */}
                <div className="project-link-buttons-container">
                    <a href={project.github_link} className="btn btn-primary" target="_blank">
                        <i className="fa-brands fa-github"></i> Github </a>

                    <a href={project.deployed_link} className="btn btn-primary" target="_blank">
                        <i className="fa-solid fa-up-right-from-square"></i> Demo </a>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard