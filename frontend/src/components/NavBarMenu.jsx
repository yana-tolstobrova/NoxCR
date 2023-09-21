import React, { useState } from 'react';
import profile from "../assets/profile.svg" 
import { TwLink } from './TwLink';
import { Link } from 'react-router-dom';

function NavBarMenu({onLogout}) {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="relative inline-block text-left">
        {/* Código SVG del ícono de usuario */}
        <img className='px-3 h-5' src={profile} alt="Profile-icon" onClick={toggleDropdown} /> 
      {/* Menú desplegable (se muestra u oculta según el estado de isDropdownOpen) */}
      {isDropdownOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50"> {/* Aquí se ajusta el z-index */}
          {/* Contenido del menú desplegable */}
          <ul>
            <li>
              <Link to="/login">
                <TwLink>Iniciar sesión</TwLink> 
              </Link>
            </li>
            <li>
              <Link to="/register">
                <TwLink>Crear cuenta</TwLink> 
              </Link>
            </li>
            <li>
              <Link to="/register">
                <TwLink onClick={onLogout} href="#">Cerrar sesión</TwLink> 
              </Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default NavBarMenu;
