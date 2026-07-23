import "./Contact.css";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaPaperPlane
} from "react-icons/fa";

function Contact() {

  return (

    <section className="contact" id="contact">

      <h2 className="section-title">
        Get In Touch
      </h2>

      <p className="section-subtitle">
        I'm currently seeking Software Developer and Full Stack Developer
        opportunities. Feel free to reach out for internships, collaborations,
        or full-time roles.
      </p>

      <div className="contact-container">

        <div className="contact-left">

          <div className="contact-card">

            <FaEnvelope />

            <div>

              <h3>Email</h3>

              <p>
                nnadipallileela@gmail.com
              </p>

            </div>

          </div>

          <div className="contact-card">

            <FaPhoneAlt />

            <div>

              <h3>Phone</h3>

              <p>
                +91 7989470351
              </p>

            </div>

          </div>

          <div className="contact-card">

            <FaMapMarkerAlt />

            <div>

              <h3>Location</h3>

              <p>
                Visakhapatnam, Andhra Pradesh, India
              </p>

            </div>

          </div>

          <div className="social-links">

            <a
              href="https://github.com/Leela78"
              target="_blank"
              rel="noopener noreferrer"
            >

              <FaGithub />

            </a>

            <a
              href="https://www.linkedin.com/in/nadipalli-leela-durga-bhavani/"
              target="_blank"
              rel="noopener noreferrer"
            >

              <FaLinkedin />

            </a>

          </div>

        </div>

        <form className="contact-form">

          <input
            type="text"
            placeholder="Your Name"
          />

          <input
            type="email"
            placeholder="Your Email"
          />

          <input
            type="text"
            placeholder="Subject"
          />

          <textarea
            rows="6"
            placeholder="Write your message"
          ></textarea>

          <button type="submit">

            <FaPaperPlane />

            Send Message

          </button>

        </form>

      </div>

    </section>

  );

}

export default Contact;