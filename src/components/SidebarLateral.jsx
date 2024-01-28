import React from 'react';
import img_portfolio from '../imgs/img_portfolio.webp';
import { Link } from 'react-router-dom';
import '../css/Sidebar.css';

function SidebarLateral() {
  return (
    <aside className="sidebar flex flex-col justify-center items-center">
      <nav>
        <img src={img_portfolio} alt="Portfolio Logo" className="mb-4" />
        <nav className="mb-2 text-center">
          <Link to="/Victor" className="text-gray-500 dark:text-gray-400 font-medium dark:text-blue-500 hover:text-pink-500 text-lg md:text-xl lg:text-2xl">
            Victor
          </Link>
        </nav>
        <nav className="mb-2 text-center">
          <Link to="/sobremi" className="text-gray-500 dark:text-gray-400 font-medium dark:text-blue-500 hover:text-pink-500 text-lg md:text-xl lg:text-2xl">
            Sobre mi
          </Link>
        </nav>
        <nav className="mb-2 text-center">
          <Link to="/Estudios" className="text-gray-500 dark:text-gray-400 font-medium dark:text-blue-500 hover:text-pink-500 text-lg md:text-xl lg:text-2xl">
            Estudios
          </Link>
        </nav>
        <nav className="mb-2 text-center">
          <Link to="/Experiencia" className="text-gray-500 dark:text-gray-400 font-medium dark:text-blue-500 hover:text-pink-500 text-lg md:text-xl lg:text-2xl">
            Experiencia
          </Link>
        </nav>
        <nav className="mb-2 text-center">
          <Link to="/Contacto" className="text-gray-500 dark:text-gray-400 font-medium dark:text-blue-500 hover:text-pink-500 text-lg md:text-xl lg:text-2xl">
            Contacto
          </Link>
        </nav>
      </nav>
    </aside>
  );
}

export default SidebarLateral;
