import "./Skills.css";

import { skills } from "../../data/data";

import {
    FaCode,
    FaDatabase,
    FaTools
} from "react-icons/fa";

import {
    SiPython,
    SiNodedotjs,
    SiMongodb
} from "react-icons/si";

function Skills() {

    return (

        <section
            className="skills"
            id="skills"
        >

            <h2 className="section-title">

                Skills

            </h2>

            <div className="skills-grid">

                {

                    skills.map((skill) => (

                        <div
                            className="skill-card"
                            key={skill.category}
                        >

                            <div className="icon">

                                {

                                    skill.category === "Frontend" ?

                                        <FaCode />

                                        :

                                        skill.category === "Backend"

                                            ?

                                            <SiPython />

                                            :

                                            skill.category === "Database"

                                                ?

                                                <FaDatabase />

                                                :

                                                <FaTools />

                                }

                            </div>

                            <h3>

                                {skill.category}

                            </h3>

                            <ul>

                                {

                                    skill.items.map((item) => (

                                        <li key={item}>

                                            {item}

                                        </li>

                                    ))

                                }

                            </ul>

                        </div>

                    ))

                }

            </div>

        </section>

    )

}

export default Skills;