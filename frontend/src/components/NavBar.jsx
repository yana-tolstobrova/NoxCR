import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import cart from '../assets/cart.svg';
import whiteCart from '../assets/whiteCart.svg';
import Search from './Search';
import NavBarMenu from './NavBarMenu';
import whiteLogo from '../assets/whiteLogo.svg';
import menuBurger from '../assets/menuBurger.svg';
// import { getCartItemCount } from '../services/ApiCartCount';
// import { getOrderLines } from '../services/ApiOrders';
import { cardsProducts } from '../services/ApiProducts';
import { TwLink } from './TwLink'; 

function NavBar() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [cartTotal, setCartTotal] = useState(0);

  console.log(setCartTotal)
  useEffect(() => {
    const storedCartTotal = localStorage.getItem("cartTotal")
    if (storedCartTotal){
      setCartTotal(parseInt(storedCartTotal, 10))
    }
    // cardsProducts()
    //   .then(count => {
    //     setCartCount(count);
    //   })
    //   .catch(error => {
    //     console.error('Error al obtener la cantidad de productos en el carrito:', error);
    //   });
  }, []);
 console.log(cartTotal)
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="flex w-full justify-between items-center relative">
      <img
        className="px-3 w-15 h-7 md:hidden"
        src={menuBurger}
        alt="Menú hamburguesa"
        onClick={toggleMobileMenu}
      />

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-black bg-opacity-75 z-40" onClick={toggleMobileMenu}></div>
      )}

      <ul className={`md:hidden bg-black text-white absolute w-80 top-16 p-7 z-50 ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <li>
        <TwLink className='text-white md:text-violet-900 p-3' as="anchor" href="/#productos">
          Productos
        </TwLink>
        </li>
        <li>
        <TwLink className='text-white md:text-violet-900 p-3' as="anchor" href="/#cuidados">
          Cuidados
        </TwLink>
        </li>
        <li>
        <TwLink className='text-white md:text-violet-900 p-3' as="anchor" href="/#faq">
          FaQ
        </TwLink>
        </li>
        <li>
        <TwLink className='text-white md:text-violet-900 p-3' as="anchor" href="/#contacto">
          Contacto
        </TwLink>
        </li>
      </ul>

      {/* Desktop Menu */}
      <nav className='hidden md:flex space-x-4 bg-white'>
        <TwLink className='text-white md:text-violet-900 p-3' as="anchor" href="/#productos">
          Productos
        </TwLink>
        <TwLink className='text-white md:text-violet-900 p-3' as="anchor" href="/#cuidados">
          Cuidados
        </TwLink>
        <TwLink className='text-white md:text-violet-900 p-3' as="anchor" href="/#faq">
          FaQ
        </TwLink>
        <TwLink className='text-white md:text-violet-900 p-3' as="anchor" href="/#contacto">
          Contacto
        </TwLink>
      </nav>

      <Link to="/">
        <img className="h-12 w-24 md:hidden ml-180px" src={whiteLogo} alt="Logo" />
      </Link>

      <div className="flex items-center h-11">
        <Search />
        <Link to="/add-to-cart" className="relative">
          <img className="px-3 h-7 md:block hidden" src={cart} alt="Profile-icon" />
          <img className="px-3 h-7 md:hidden" src={whiteCart} alt="Profile-icon" />
          {cartTotal > 0 && (
            <div className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
              {cartTotal}
            </div>
          )}
        </Link>
        <NavBarMenu />
      </div>
    </div>
  );
}

export default NavBar;
