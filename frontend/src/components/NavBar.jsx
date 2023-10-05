import React, { useContext, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import cart from '../assets/cart.svg';
import whiteCart from '../assets/whiteCart.svg';
import Search from './Search';
import NavBarMenu from './NavBarMenu';
import whiteLogo from '../assets/whiteLogo.svg';
import menuBurger from '../assets/menuBurger.svg';
import { TwLink } from './TwLink';
import { useMyCart } from '../contexts/MyCartContext'; 

function NavBar() {
  const location = useLocation();
  let anchors = null;

  const { cartCount } = useMyCart(); 

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="flex w-full justify-between items-center relative">
    
    <div className='flex items-center'>
      <img
        className="pr-3 pl-10 w-15 h-7 md:hidden"
        src={menuBurger}
        alt="Menú hamburguesa"
        onClick={toggleMobileMenu}
      />

      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-black bg-opacity-75 z-40" onClick={toggleMobileMenu}></div>
      )}

      <ul className={`md:hidden bg-black flex-row h-full min-h-screen text-white text-2xl absolute w-80 top-16 p-7 z-50 ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <li className='my-3'>
        <TwLink as="anchor" href="/#productos">
          Productos
        </TwLink>
        </li>
        <li className='my-3'>
        <TwLink as="anchor" href="/#cuidados">
          Cuidados
        </TwLink>
        </li>
        <li className='my-3'>
        <TwLink as="anchor" href="/#faq">
          FaQ
        </TwLink>
        </li>
        <li className='my-3'>
        <TwLink as="anchor" href="/#contacto">
          Contacto
        </TwLink>
        </li>
      </ul>

      <nav className='hidden md:flex space-x-4 ml-8 bg-white '>
        <TwLink className='md:text-violet-900 p-3 hover:font-bold' style={{ color: '#7C3973' }} as="anchor" href="/#productos">
          Productos
        </TwLink>
        <TwLink className='md:text-violet-900 p-3 hover:font-bold'style={{ color: '#7C3973' }} as="anchor" href="/#cuidados">
          Cuidados
        </TwLink>
        <TwLink className='md:text-violet-900 p-3 hover:font-bold'style={{ color: '#7C3973' }} as="anchor" href="/#faq">
          FaQ
        </TwLink>
        <TwLink className='md:text-violet-900 p-3 hover:font-bold'style={{ color: '#7C3973' }} as="anchor" href="/#contacto">
          Contacto
        </TwLink>
      </nav>
    
      <Link to="/">
        <img className="h-12 w-24 md:hidden ml-180px" src={whiteLogo} alt="Logo" />
      </Link>
      </div>
      <div className="flex items-center h-11">
        <Search />
        <Link to="/add-to-cart" className="relative">
          <img className="px-3 h-7 md:block hidden" src={cart} alt="Profile-icon" />
          <img className="px-3 h-7 md:hidden" src={whiteCart} alt="Profile-icon" />
          {cartCount > 0 && (
            <div className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
              {cartCount}
            </div>
          )}
        </Link>
        <NavBarMenu />
      </div>
    </div>
  );
}

export default NavBar;
