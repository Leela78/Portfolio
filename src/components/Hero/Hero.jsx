import "./Hero.css";
import profile from "../../assets/images/profile.jpeg";
import { TypeAnimation } from "react-type-animation";
function Hero() {
  return (
    <section className="hero" id="home">

      <div className="hero-content">

        <h3>Hello, I'm</h3>

        <h1>Nadipalli Leela Durga Bhavani</h1>

      <TypeAnimation
  sequence={[
    "Full Stack Developer",
    2000,
    "Software Developer",
    2000,
    "Problem Solver",
    2000,
  ]}
  wrapper="h2"
  speed={50}
  repeat={Infinity}
/>

  <p>
  I'm a Fourth-Year Information Technology student passionate about
  Full Stack Development and Software Engineering. I enjoy building
  responsive web applications, designing RESTful APIs, and solving
  real-world problems through clean, efficient, and scalable code.
  Currently seeking opportunities to contribute, learn, and grow as a
  Software Developer.
</p>
         <div className="hero-stats">

  <div>
    <h2>8.76</h2>
    <p>CGPA</p>
  </div>

  <div>
    <h2>2+</h2>
    <p>Projects</p>
  </div>

  <div>
    <h2>3+</h2>
    <p>Certificates</p>
  </div>

</div>
        <div className="hero-buttons">

       <a
  href="/Leelaa_Resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
>
  <button>View Resume</button>
</a>
          <a href="#contact">
            <button className="contact-btn">
              Contact Me
            </button>
          </a>

        </div>

      </div>

    <div className="hero-image">
    <div className="image-box">
        <img
            src={profile}
            alt="Profile"
        />
    </div>
</div>
    </section>
  );
}

export default Hero;