import "./About.css";
import { FaUserGraduate, FaMapMarkerAlt, FaEnvelope, FaBriefcase } from "react-icons/fa";

function About() {
  return (
    <section className="about" id="about">

      <h2 className="section-title">About Me</h2>

      <div className="about-container">

        <div className="about-left">

          <p>
            I'm a Fourth-Year Information Technology student with a passion
            for Full Stack Development and Software Engineering. I enjoy
            designing responsive user interfaces, developing scalable
            backend systems, and solving real-world problems using modern
            technologies.
          </p>

          <p>
            I continuously improve my programming, problem-solving, and
            software development skills through internships, coding
            platforms, and hands-on projects.
          </p>

        </div>

        <div className="about-right">

          <div className="info-card">
            <FaUserGraduate />
            <div>
              <h4>Education</h4>
              <p>B.Tech IT (2023-2027)</p>
            </div>
          </div>

          <div className="info-card">
            <FaBriefcase />
            <div>
              <h4>Experience</h4>
              <p>2 Internships</p>
            </div>
          </div>

          <div className="info-card">
            <FaMapMarkerAlt />
            <div>
              <h4>Location</h4>
              <p>Visakhapatnam, India</p>
            </div>
          </div>

          <div className="info-card">
            <FaEnvelope />
            <div>
              <h4>Email</h4>
              <p>nnadipallileela@gmail.com</p>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}

export default About;