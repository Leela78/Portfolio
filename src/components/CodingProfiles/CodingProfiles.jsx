import "./CodingProfiles.css";

import { codingProfiles } from "../../data/data";

import {
  FaGithub,
  FaLinkedin,
  FaExternalLinkAlt
} from "react-icons/fa";

import {
  SiLeetcode,
  SiCodechef
} from "react-icons/si";

function CodingProfiles() {

  const getIcon = (platform) => {

    switch (platform) {

      case "GitHub":
        return <FaGithub />;

      case "LinkedIn":
        return <FaLinkedin />;

      case "LeetCode":
        return <SiLeetcode />;

      case "CodeChef":
        return <SiCodechef />;

      default:
        return null;

    }

  };

  return (

    <section className="coding" id="coding">

      <h2 className="section-title">
        Coding Profiles
      </h2>

      <p className="section-subtitle">
        I continuously improve my programming skills by building projects,
        solving coding problems, and contributing through various developer
        platforms.
      </p>

      <div className="coding-grid">

        {codingProfiles.map((profile) => (

          <div
            className="coding-card"
            key={profile.id}
          >

            <div className="coding-icon">

              {getIcon(profile.platform)}

            </div>

            <h3>{profile.platform}</h3>

            <h4>{profile.username}</h4>

            <p>{profile.description}</p>

            <a
              href={profile.link}
              target="_blank"
              rel="noopener noreferrer"
            >

              <FaExternalLinkAlt />

              Visit Profile

            </a>

          </div>

        ))}

      </div>

    </section>

  );

}

export default CodingProfiles;