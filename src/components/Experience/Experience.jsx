import "./Experience.css";
import { experience } from "../../data/data";
import { FaBriefcase } from "react-icons/fa";

function Experience() {
  return (
    <section className="experience" id="experience">

      <h2 className="section-title">
        Experience
      </h2>

      <div className="timeline">

        {experience.map((item) => (

          <div
            className="timeline-item"
            key={item.id}
          >

            <div className="timeline-icon">
              <FaBriefcase />
            </div>

            <div className="timeline-content">

              <div className="timeline-date">
                {item.year}
              </div>

              <h3>{item.role}</h3>

              <h4>{item.company}</h4>

              <p>{item.description}</p>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Experience;