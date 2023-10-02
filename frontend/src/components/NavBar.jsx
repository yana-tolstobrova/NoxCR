import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import { TwLink } from './TwLink';
import cart from "../assets/cart.svg"
import Search from './Search';
import NavBarMenu from './NavBarMenu';


function NavBar() {
  const location = useLocation();
  let anchors = null;
  const cartCount = 3;
  // const [cartCount, setCartCount] = useState(0); 

  // const addToCart = () => {
  //   setCartCount(cartCount + 1);
  // };

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
    <div className="flex w-full justify-between items-center">
      <nav className= 'hidden md:block'>{anchors}</nav>
      <div className="flex items-center h-11">
          <Search />
          <Link to="/add-to-cart" className="relative" /*onClick={addToCart}*/>
            <img className='px-3 h-5 'src={cart} alt="Profile-icon" />
            {cartCount > 0 && (
            <div className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
              {cartCount}
            </div>
          )}
          </Link>
          <NavBarMenu />
      </div>
    </div>
  )
}

export default NavBar