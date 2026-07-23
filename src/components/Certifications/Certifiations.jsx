import "./Certification.css";
import { certificates } from "../../data/data";

import {
  FaCertificate,
  FaEye
} from "react-icons/fa";

function Certifications() {

  return (

    <section className="certificates" id="certificates">

      <h2 className="section-title">
        Certifications
      </h2>

      <div className="certificate-grid">

        {certificates.map((certificate) => (

          <div
            className="certificate-card"
            key={certificate.id}
          >

            <div className="certificate-icon-area">
              <FaCertificate />
            </div>

            <div className="certificate-content">

              <h3>{certificate.title}</h3>

              <p>{certificate.issuer}</p>

              <span>{certificate.year}</span>

              <a
                href={certificate.file}
                target="_blank"
                rel="noreferrer"
              >
                <button>

                  <FaEye />

                  View Certificate

                </button>

              </a>

            </div>

          </div>

        ))}

      </div>

    </section>

  );

}

export default Certifications;