import "./Achievements.css";

import {
  FaCode,
  FaLaptopCode,
  FaGraduationCap,
  FaTrophy
} from "react-icons/fa";

function Achievements() {

  const achievements = [

    {
      id: 1,
      icon: <FaCode />,
      title: "700+ Problems Solved",
      description:
        "Solved over 700+ programming problems on CodeChef, strengthening problem-solving and algorithmic thinking."
    },

    {
      id: 2,
      icon: <FaLaptopCode />,
      title: "2+ Academic Projects",
      description:
        "Developed multiple projects including Movie Recommendation Application, Flight Analytics Dashboard, and Finance Data Processing System."
    },

    {
      id: 3,
      icon: <FaGraduationCap />,
      title: "B.Tech CGPA",
      description:
        "Maintaining a CGPA of 8.76 while continuously improving technical and software development skills."
    },

    {
      id: 4,
      icon: <FaTrophy />,
      title: "Internship Experience",
      description:
        "Successfully completed internships in Web Development and Android  Application Development, gaining practical industry experience."
    }

  ];

  return (

    <section className="achievements" id="achievements">

      <h2 className="section-title">
        Achievements
      </h2>

      <p className="section-subtitle">
        Highlights of my academic journey, technical growth, and practical experience.
      </p>

      <div className="achievement-grid">

        {achievements.map((item) => (

          <div
            className="achievement-card"
            key={item.id}
          >

            <div className="achievement-icon">
              {item.icon}
            </div>

            <h3>{item.title}</h3>

            <p>{item.description}</p>

          </div>

        ))}

      </div>

    </section>

  );

}

export default Achievements;