import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMobile } from "@fortawesome/free-solid-svg-icons";
import '@fortawesome/fontawesome-svg-core/styles.css';
import {
  faReact,
  faJs,
  faCss3Alt,
  faHtml5,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import "../css/contacto.css";

function Victor() {
  const email = "victorpuetrabajo@gmail.com";
  const telefonoContacto = "+34 617924241";
  const linkedin = "https://www.linkedin.com/in/victor-puerta-garcia-660640170";
  const titulo = "CONTÁCTAME!";
  const leyenda = "ESTE SITIO WEB ESTÁ DESARROLLADO CON:";
  const imgTailwind = (
    <img
      src="https://docs.material-tailwind.com/svg/tailwind.svg"
      alt="Tailwind CSS"
      style={{ width: "1.5em", height: "1.5em", margin: "0.5em", marginTop: "-1.5em" }}
      className="inline-block"
    />
  );

  const handleEmailClick = () => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <aside className="contactContainer">
        <p className="contacto">{titulo}</p>
        
        <div className="info-item">
          <FontAwesomeIcon icon={faEnvelope} style={{ color: "#ffb300", fontSize: "1.5em" }} />
          <p className="correo text-sm sm:text-base md:text-lg lg:text-xl">
            <span>Email</span>
            <a href={`mailto:${email}`} onClick={handleEmailClick} className="ml-2">
              {email}
            </a>
          </p>
        </div>

        <div className="info-item">
          <FontAwesomeIcon icon={faMobile} style={{ fontSize: "1.5em" }} />
          <p className="telefono text-sm sm:text-base md:text-lg lg:text-xl">
            <span>Teléfono</span>
            {telefonoContacto}
          </p>
        </div>

        <div className="info-item">
          <FontAwesomeIcon icon={faLinkedin} style={{ color: "#007ab9", fontSize: "1.5em" }} />
          <p className="LinkedIn text-sm sm:text-base md:text-lg lg:text-xl">
            <span>LinkedIn</span>
            <a href={linkedin} target="_blank" rel="noopener noreferrer" className="ml-2">
              in/VictorPuerta
            </a>
          </p>
        </div>

        <p className="leyenda text-sm sm:text-base md:text-lg lg:text-xl">
          {leyenda}
          <br />
          <nav className="botonesTecnologia">
            <FontAwesomeIcon icon={faReact} style={{ color: "#74C0FC", fontSize: "1.5em", margin: "0.5em" }} />
            <FontAwesomeIcon icon={faHtml5} style={{ color: "#F16529", fontSize: "1.5em", margin: "0.5em" }} />
            <FontAwesomeIcon icon={faCss3Alt} style={{ color: "#264de4", fontSize: "1.5em", margin: "0.5em" }} />
            <FontAwesomeIcon icon={faJs} style={{ color: "#F0DB4F", fontSize: "1.5em", margin: "0.5em" }} />
            {imgTailwind}
          </nav>
        </p>
    </aside>
  );
}

export default Victor;