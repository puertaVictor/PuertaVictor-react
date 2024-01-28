import React from "react";
import "../css/estudios.css";

function Estudios() {
  const estudio1 = "Grado Superior Desarrollo de Aplicaciones Web";
  const centroEstudios1 = "IES GALILEO (Valladolid)";
  const fechasEstudios1 = "Septiembre 2021 - Diciembre 2023";
  const estudio2 = "Grado Superior Administración y finanzas";
  const centroEstudios2 = "IES GALILEO (Valladolid)";
  const fechasEstudios2 = "Septiembre 2018 - Junio 2020";

  return (
    <div className="EstudiosContainer">
      <p className="Titulo text-3xl md:text-4xl lg:text-5xl">
        EDUCACIÓN
      </p>
      <aside className="Estudios1">
        <p className="parrafo1textTitulo text-base md:text-lg lg:text-xl">
          {estudio1}
        </p>
        <p className="parrafo1textCentro text-sm md:text-lg lg:text-xl">
          {centroEstudios1}
        </p>
        <p className="parrafo1textFecha text-base md:text-lg lg:text-xl">
          {fechasEstudios1}
        </p>
      </aside>

      <aside className="Estudios2">
        <p className="parrafo1textTitulo text-base md:text-lg lg:text-xl">
          {estudio2}
        </p>
        <p className="parrafo1textCentro text-sm md:text-lg lg:text-xl">
          {centroEstudios2}
        </p>
        <p className="parrafo1textFecha text-base md:text-lg lg:text-xl">
          {fechasEstudios2}
        </p>
      </aside>
    </div>
  );
}

export default Estudios;
