import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import SidebarLateral from "./components/SidebarLateral";
import Victor from "./components/VictorPage.jsx";
import Sobremi from "./components/sobreMi.jsx";
import Estudios from "./components/estudios.jsx";
import Contacto from "./components/contacto.jsx";
import Experiencia from "./components/experiencia.jsx";

function App() {
  return (
    <Router basename={ProcessingInstruction.es.PUBLIC_URL}>
      <div className="app-container">
        <SidebarLateral />
        <Routes>
        <Route path="/" element={<Navigate to="/Victor" />} />
          <Route path="/Victor" element={<Victor />} />
          <Route path="/SobreMi" element={<Sobremi />} />
          <Route path="/Estudios" element={<Estudios />} />
          <Route path="/Experiencia" element={<Experiencia />} />
          <Route path="/Contacto" element={<Contacto />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
