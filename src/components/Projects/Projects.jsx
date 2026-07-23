import "./Projects.css";
import { projects } from "../../data/data";

function Projects() {

  return (

    <section className="projects" id="projects">

      <h2 className="section-title">
        Projects
      </h2>

      <p className="section-subtitle">
        A selection of projects that demonstrate my skills in software
        development, problem solving, and modern web technologies.
      </p>

      <div className="projects-grid">

        {projects.map((project) => (

          <div
            className="project-card"
            key={project.id}
          >

            <div className="project-image">

              <img
                src={project.image}
                alt={project.title}
              />

            </div>

            <div className="project-content">

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="tech-stack">

                {project.technologies.map((tech) => (

                  <span key={tech}>
                    {tech}
                  </span>

                ))}

              </div>

            </div>

          </div>

        ))}

      </div>

    </section>

  );

}

export default Projects;