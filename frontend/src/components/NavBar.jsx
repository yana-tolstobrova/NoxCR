import React from 'react'
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext'; 
import { TwLink } from './TwLink';
import profile from "../assets/profile.svg" 
import cart from "../assets/cart.svg"
import Search from './Search';

function NavBar({onLogout}) {
  const { user, setUser } = useAuth();

  return (
    <div className="flex w-full justify-between items-center px-6">
      <nav>
          <TwLink href="#productos">Productos</TwLink> 
          <TwLink href="#cuidados">Cuidados</TwLink> 
          <TwLink href="#FaQ">FaQ</TwLink> 
          <TwLink href="#Contacto">Contacto</TwLink> 
      </nav>
      <div className="flex">
          <Search />
          <Link to="/cart">
            <img className='px-3 h-5'src={cart} alt="Profile-icon" /> 
          </Link>
          <Link to="/register">
            <img className='px-3 h-5' src={profile} alt="Profile-icon" /> 
          </Link>
      </div>

         {/* <a className="text-gray-500 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer" href="/login">Login</a>
 
        <a className="text-gray-500 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer" href="/">Home</a> */}

        <a className="text-gray-500 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer" onClick={onLogout} href="#">Logout</a>  
    </div>
  )
}

export default NavBar