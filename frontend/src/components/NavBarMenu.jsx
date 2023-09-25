import React, { useState, useEffect, useRef } from 'react';
import profile from "../assets/profile.svg" 
import { TwLink } from './TwLink';
import { Link } from 'react-router-dom';

function NavBarMenu({onLogout}) {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);


  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setDropdownOpen(false);
  };

  useEffect(() => {
    
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdown();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);



  return (
    <div className="relative inline-block text-left">
        {/* Código SVG del ícono de usuario */}
        <img className='px-3 h-5' src={profile} alt="Profile-icon" onClick={toggleDropdown} /> 
      {/* Menú desplegable (se muestra u oculta según el estado de isDropdownOpen) */}
      {isDropdownOpen && (
        <div className="absolute right-0 mt-2 w-44 bg-white rounded-md shadow-lg z-10"> {/* Aquí se ajusta el z-index */}
          {/* Contenido del menú desplegable */}
          <ul>
            <li className="py-2">
                <TwLink to="/login">Iniciar sesión</TwLink>
            </li>
            <li className="py-2">
                <TwLink to="/register">Crear cuenta</TwLink>
            </li>
            <li className="py-2 ">
                <TwLink onClick={onLogout}>Cerrar sesión</TwLink>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default NavBarMenu;
