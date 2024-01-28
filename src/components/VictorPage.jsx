import React from "react";
import '../css/Victor.css';
import curriculums from '../docs/Curriculum_VictorPuerta.pdf';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

function Victor() {
  const email = 'victorpuetrabajo@gmail.com';

  const handleEmailClick = () => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <aside className="VictorPage flex flex-col justify-center">

        <nav className="mb-2 text-center">
        <p className="Nombre text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
           Victor Puerta
        </p>
        </nav>
        <nav className="mb-2 text-center">
          <p className="profesion text-sm sm:text-lg md:text-xl lg:text-2xl"  >Desarrollador Full Stack</p>
        </nav>
        <nav className="mb-2 text-center">
          <p className="bienvenida text-sm sm:text-lg md:text-xl lg:text-2xl">BIENVENID@S A MI PORTFOLIO COMO DESARROLLADOR FULL STACK.</p>
        </nav>
<nav className="mb-2 text-center">
  <p className="contacto text-sm sm:text-lg md:text-xl lg:text-2xl">
    Si quieres ponerte en contacto conmigo puedes escribirme a{' '}
    <a href={`mailto:${email}`} onClick={handleEmailClick}>
      victorpuetrabajo@gmail.com
    </a>
  </p>
</nav>

      <a href={curriculums} download="Curriculum_VictorPuerta.pdf">
        <button className="bg-teal-700 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
          <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/>
          </svg>
          <span>Descargar CV</span>
        </button>
      </a>

      <aside className="redesSociales">
        <a className="linkedin" href="https://www.linkedin.com/in/victor-puerta-garcia-660640170/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a className="github" href="https://github.com/puertaVictor" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </aside>
    </aside>
  );
}

export default Victor;
