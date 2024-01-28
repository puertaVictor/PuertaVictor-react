import React from "react";
import "../css/sobreMi.css";

function Victor() {
  const parrafo1 =
    "Después de dos años como administrativo, decidí dar un giro radical a mi trayectoria profesional y formarme en lo que realmente me gusta: El desarrollo de aplicaciones web. Tomé la decisión de abandonar mi zona de confort y dar un giro de 360º para poder formarme como Desarrollador Web.";

  const parrafo2 =
    "Soy una persona apasionada por la tecnología y el desarrollo web, con experiencia en el trabajo en equipo y la gestión de personas. Mi trasfondo en administración me ha proporcionado habilidades organizativas sólidas, mientras que mi compromiso con el aprendizaje constante me permite abordar desafíos con creatividad y resolución.";
    const emote = "<>Sobre mi</> ";
  return (
    <aside className="aboutMe text-white py-8 px-4">
      <div className="flex flex-col items-center">
      <p className="emote text-sm md:text-lg lg:text-xl">{emote}</p>
        <nav className="mb-2 text-center sm:text-left">
          <p className="parrafo1text text-base text-justify">{parrafo1}</p>
        </nav>
        <nav className="mb-2 text-center sm:text-left">
          <p className="parrafo2text text-base text-justify	">{parrafo2}</p>
        </nav>
      </div>
    </aside>
  );
}

export default Victor;
