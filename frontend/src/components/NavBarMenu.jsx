import React, { useState, useEffect, useRef } from 'react';
import profile from '../assets/profile.svg';
import whiteProfile from '../assets/whiteProfile.svg';
import { TwLink } from './TwLink';
import { useAuth } from '../contexts/AuthContext'; 
import { logoutService } from '../services/ApiAuthService';

function NavBarMenu() {
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

  const handleLogout = async (e) => {
    e.preventDefault()
    try {
      const { message } = await logoutService() 
      setUser(null);
    } catch (error) {
      console.error(error);
    }
	};

  return (
    <div className="relative inline-block text-left">
      <img className='px-3 h-7 md:block hidden' src={profile} alt="Profile-icon" onClick={toggleDropdown} /> 
      <img className='px-3 h-7 md:hidden' src={whiteProfile} alt="Profile-icon" onClick={toggleDropdown} /> 

      {isDropdownOpen && (
        <div className="absolute right-0 mt-2 w-44 bg-white rounded-md shadow-lg z-10" ref={dropdownRef} onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>
          <ul>
            {user ? ( 
              <>
                <li className="py-2 flex justify-center" style={{ color: '#7C3973' }}>
                  <TwLink to="/userProfile">Mi cuenta</TwLink>
                </li>
                <li className="py-2 flex justify-center" style={{ color: '#7C3973' }}>
                  <TwLink to="/favoritos">Favoritos</TwLink>
                </li>
                <li className="py-2 flex justify-center" style={{ color: '#7C3973' }}>
                  <TwLink onClick={handleLogout}>Cerrar sesión</TwLink>
                </li>
              </>
            ) : ( 
              <>
                <li className="py-2 flex justify-center" style={{ color: '#7C3973' }}>
                  <TwLink to="/login">Iniciar sesión</TwLink>
                </li>
                <li className="py-2 flex justify-center" style={{ color: '#7C3973' }}>
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
