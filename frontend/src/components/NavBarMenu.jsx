import React, { useState } from 'react';
import profile from "../assets/profile.svg" 

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
            <a className="text-gray-500 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer" onClick={onLogout} href="#">Mi cuenta</a>
            </li>
            <li>
            <a className="text-gray-500 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer" onClick={onLogout} href="#">Historia de compras</a>
            </li>
            <li>
            <a className="text-gray-500 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer" onClick={onLogout} href="#">Favoritos</a>
            </li>
            <li>
            <a className="text-gray-500 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer" onClick={onLogout} href="#">Logout</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default NavBarMenu;
