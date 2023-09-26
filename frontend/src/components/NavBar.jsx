import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext'; 
import { TwLink } from './TwLink';
import profile from "../assets/profile.svg" 
import cart from "../assets/cart.svg"
import Search from './Search';
import NavBarMenu from './NavBarMenu';

function NavBar({onLogout}) {
  const { user, setUser } = useAuth();
  const location = useLocation();
  let anchors = null;

  if (location.pathname === "/") {
    anchors = (
      <>
        <TwLink as="anchor" href="/#productos">Productos</TwLink> 
        <TwLink as="anchor" href="/#cuidados">Cuidados</TwLink> 
        <TwLink as="anchor" href="/#faq">FaQ</TwLink> 
        <TwLink as="anchor" href="/#contacto">Contacto</TwLink> 
      </> 
    )
  }

  return (
    <div className="flex w-full justify-between items-center px-6">
      <nav>{anchors}</nav>
      <div className="flex items-center h-11">
          <Search />
          <Link to="/add-to-cart">
            <img className='px-3 h-5'src={cart} alt="Profile-icon" /> 
          </Link>
          <NavBarMenu />
      </div>
    </div>
  )
}

export default NavBar