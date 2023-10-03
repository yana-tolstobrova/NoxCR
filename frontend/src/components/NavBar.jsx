import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { TwLink } from './TwLink';
import cart from '../assets/cart.svg';
import whiteCart from '../assets/whiteCart.svg';
import Search from './Search';
import NavBarMenu from './NavBarMenu';
import whiteLogo from '../assets/whiteLogo.svg';
import menuBurger from '../assets/menuBurger.svg';
import { slide as Menu } from 'react-burger-menu';

function NavBar() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const cartCount = 3;

  let anchors = null;

  if (location.pathname === '/') {
    anchors = (
      <>
        <TwLink as="anchor" href="/#productos">
          Productos
        </TwLink>
        <TwLink as="anchor" href="/#cuidados">
          Cuidados
        </TwLink>
        <TwLink as="anchor" href="/#faq">
          FaQ
        </TwLink>
        <TwLink as="anchor" href="/#contacto">
          Contacto
        </TwLink>
      </>
    );
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="flex w-full justify-between items-center relative">
      <img
        className="px-3 w-15 h-7 md:hidden "
        src={menuBurger}
        alt="Menú hamburguesa"
        onClick={toggleMobileMenu}
      />
      {/* Menú desplegable */}
      <Menu
      
        isOpen={isMobileMenuOpen}
        onStateChange={({ isOpen }) => setIsMobileMenuOpen(isOpen)}
        left
        width={'40%'}
        className="bg-black top-36 fixed inset-y-0 left-0 transform translate-x-0 transition-transform duration-300 ease-in-out"
        
      >
        <ul > Aplicar clases de Tailwind CSS
          {anchors &&
            React.Children.map(anchors.props.children, (child, index) => (
              <li
                key={index}
                className='p-5'
              >
                {child}
              </li>
            ))}
        </ul>
      </Menu>

      <Link to="/">
        <img className="h-12 w-24 md:hidden ml-180px" src={whiteLogo} alt="Logo" />
      </Link>
      <nav className='hidden md:block bg-white'>{anchors}</nav>
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
