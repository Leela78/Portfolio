import "./Footer.css";

import {
  FaGithub,
  FaLinkedin
} from "react-icons/fa";

import { SiLeetcode } from "react-icons/si";

function Footer() {

  return (

    <footer className="footer">

      <h2>Nadipalli Leela Durga Bhavani</h2>

      <p>
        Full Stack Developer • Software Developer
      </p>

      <div className="footer-icons">

        <a
          href="https://github.com/Leela78"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/nadipalli-leela-durga-bhavani/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://leetcode.com/u/Leela_79/"
          target="_blank"
          rel="noreferrer"
        >
          <SiLeetcode />
        </a>

      </div>

      <p className="copyright">

        © 2026 Nadipalli Leela Durga Bhavani. All Rights Reserved.

      </p>

    </footer>

  );

}

export default Footer;