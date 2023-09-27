import React, { useState, useEffect, useRef } from 'react';
import profile from "../assets/profile.svg" 
import { TwLink } from './TwLink';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext'; 

function NavBarMenu({ handleLogout }) {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { user, setUser } = useAuth();

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

  // if (!user) {
	// 	return <Navigate to="/login" />;
	// }
  //   const handleLogout = async () => {
	// 	try {
	// 		const resp = await axios.post('/logout');
	// 		if (resp.status === 200) {
	// 			localStorage.removeItem('user');
	// 			window.location.href = '/';
	// 		}
	// 	} catch (error) {
	// 		console.log(error);
	// 	}
	// };

  return (
    <div className="relative inline-block text-left">
      {/* Código SVG del ícono de usuario */}
      <img className='px-3 h-5' src={profile} alt="Profile-icon" onClick={toggleDropdown} /> 
      {/* Menú desplegable (se muestra u oculta según el estado de isDropdownOpen) */}
      {isDropdownOpen && (
        <div className="absolute right-0 mt-2 w-44 bg-white rounded-md shadow-lg z-10" ref={dropdownRef} onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>
          {/* Contenido del menú desplegable */}
          <ul>
            {user ? ( // Si el usuario ha iniciado sesión
              <>
                <li className="py-2">
                  <TwLink to="/mi-cuenta">Mi cuenta</TwLink>
                </li>
                <li className="py-2">
                  <TwLink to="/favoritos">Favoritos</TwLink>
                </li>
                <li className="py-2">
                  <TwLink onClick={handleLogout} to="/register">Cerrar sesión</TwLink>
                </li>
                <li className="py-2">
                  <TwLink to="/login">Iniciar sesión</TwLink>
                </li>
              </>
            ) : ( // Si el usuario no ha iniciado sesión
              <>
                <li className="py-2">
                  <TwLink to="/login">Iniciar sesión</TwLink>
                </li>
                <li className="py-2">
                  <TwLink to="/register">Crear cuenta</TwLink>
                </li>
              </>
            )}
          </ul>
        </div>
      )}
    </div>
  );
}

export default NavBarMenu;
