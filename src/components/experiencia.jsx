import React from "react";
import "../css/experiencia.css";

function Experiencia() {
  const estudio1 = "Desarrollador Full Stack";
  const centroEstudios1 = "CODESTEN (Valladolid)";
  const tareas1 = (
    <div>
      Colaboración desarrollo ERP en lenguaje últimas versiones, junto a spring boot, bases de datos relacional (MySQL) pruebas unitarias (JUnit)<br />
      Vistas realizadas en JavaScript junto a React<br /><br /><br />
      Colaboración desarrollo aplicación en python junto a MySQL
    </div>
  );
  const fechasEstudios1 = "Abril 2023 - Diciembre 2023";

  const estudio2 = "Administrativo";
  const tareas2 = (
    <div>
      Gestión de equipos, negociación con proveedores y clientes tanto presencialmente, email o teléfono, utilización de Excel, factusol, gestión logística.
    </div>
  );
  const centroEstudios2 = "TEKNIK DESARROLLOS MÉCANICOS (Valladolid)";
  const fechasEstudios2 = "Junio 2020 - Marzo 2022";

  return (
    <div className="EstudiosContainer">
      <p className="Titulo text-3xl md:text-4xl lg:text-5xl">EDUCACIÓN</p>

      <aside className="Estudios1">
        <p className="parrafo1textTitulo text-base md:text-lg lg:text-xl">{estudio1}</p>
        <p className="parrafo1textCentro text-sm md:text-lg lg:text-xl">{centroEstudios1}</p>
        <p className="parrafo1texttareas text-sm md:text-lg lg:text-xl">{tareas1}</p>
        <p className="parrafo1textFecha text-base md:text-lg lg:text-xl">{fechasEstudios1}</p>
      </aside>

      <aside className="Estudios2">
        <p className="parrafo1textTitulo text-base md:text-lg lg:text-xl">{estudio2}</p>
        <p className="parrafo1textCentro text-sm md:text-lg lg:text-xl">{centroEstudios2}</p>
        <p className="parrafo1texttareas text-sm md:text-lg lg:text-xl">{tareas2}</p>
        <p className="parrafo1textFecha text-base md:text-lg lg:text-xl">{fechasEstudios2}</p>
      </aside>
    </div>
  );
}

export default Experiencia;
