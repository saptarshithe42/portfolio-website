import React from "react"

import project_list from "./project_lists"
import ProjectCard from "./ProjectCard"

function Projects() {
    return (
        <div className="container-fluid project-section">

            <div className="container-fluid" >
                <div>
                    <h1 className="project-heading">My Projects</h1>
                </div>
                <div className="row profiles">
                    {
                        project_list.map((project, index) => {
                            return (
                                <ProjectCard project={project} key={index} />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Projects