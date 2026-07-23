import "./Projects.css";
import { useState } from "react";
import { projects } from "../../data/data";
import ProjectModal from "../ProjectModal/ProjectModal";

function Projects() {

    const [selectedProject, setSelectedProject] = useState(null);

    return (

        <section
            className="projects"
            id="projects"
        >

            <h2 className="section-title">

                Featured Projects

            </h2>

            <div className="projects-grid">

                {

                    projects.map((project) => (

                        <div
                            className="project-card"
                            key={project.id}
                        >

                            {

                                project.featured && (

                                    <span className="featured">

                                        ⭐ Featured Project

                                    </span>

                                )

                            }

                            <img

                                src={project.image}

                                alt={project.title}

                            />

                            <h3>

                                {project.title}

                            </h3>

                            <p>

                                {project.shortDescription}

                            </p>

                            <div className="tech-stack">

                                {

                                    project.technologies.map((tech, index) => (

                                        <span key={index}>

                                            {tech}

                                        </span>

                                    ))

                                }

                            </div>

                            <div className="project-buttons">

                                <a

                                    href={project.demo}

                                    target="_blank"

                                    rel="noreferrer"

                                >

                                    Live Demo

                                </a>

                                <a

                                    href={project.github}

                                    target="_blank"

                                    rel="noreferrer"

                                >

                                    GitHub

                                </a>

                                <button

                                    onClick={() => setSelectedProject(project)}

                                >

                                    View Details

                                </button>

                            </div>

                        </div>

                    ))

                }

            </div>

            <ProjectModal

                project={selectedProject}

                closeModal={() => setSelectedProject(null)}

            />

        </section>

    )

}

export default Projects;