// import React, { useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { TwLink } from './TwLink';
// import cart from '../assets/cart.svg';
// import whiteCart from '../assets/whiteCart.svg';
// import Search from './Search';
// import NavBarMenu from './NavBarMenu';
// import whiteLogo from '../assets/whiteLogo.svg';
// import menuBurger from '../assets/menuBurger.svg';
// import { slide as Menu } from 'react-burger-menu';

// function NavBar() {
//   const location = useLocation();
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const cartCount = 3;

//   let anchors = null;

//   if (location.pathname === '/') {
//     anchors = (
//       <>
//         <TwLink className='text-white md:text-violet-900 p-3' as="anchor" href="/#productos">
//           Productos
//         </TwLink>
//         <TwLink className='text-white md:text-violet-900 p-3' as="anchor" href="/#cuidados">
//           Cuidados
//         </TwLink>
//         <TwLink className='text-white md:text-violet-900 p-3' as="anchor" href="/#faq">
//           FaQ
//         </TwLink>
//         <TwLink className='text-white md:text-violet-900 p-3' as="anchor" href="/#contacto">
//           Contacto
//         </TwLink>
//       </>
//     );
//   }

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   return (
//     <div className="flex w-full justify-between items-center relative">
//       <img
//         className="px-3 w-15 h-7 md:hidden "
//         src={menuBurger}
//         alt="Menú hamburguesa"
//         onClick={toggleMobileMenu}
//       />
//       {/* Menú desplegable */}
//       <Menu
      
//         isOpen={isMobileMenuOpen}
//         onStateChange={({ isOpen }) => setIsMobileMenuOpen(isOpen)}
//         left
//         width={'40%'}
//         className="bg-black top-36 fixed inset-y-0 left-0 transform translate-x-0 transition-transform duration-300 ease-in-out"
        
//       >
//         <ul > Aplicar clases de Tailwind CSS
//           {anchors &&
//             React.Children.map(anchors.props.children, (child, index) => (
//               <li
//                 key={index}
//                 className='p-5'
//               >
//                 {child}
//               </li>
//             ))}
//         </ul>
//       </Menu>

//       <Link to="/">
//         <img className="h-12 w-24 md:hidden ml-180px" src={whiteLogo} alt="Logo" />
//       </Link>
//       <nav className='hidden md:block bg-white'>{anchors}</nav>
//       <div className="flex items-center h-11">
//         <Search />
//         <Link to="/add-to-cart" className="relative">
//           <img className="px-3 h-7 md:block hidden" src={cart} alt="Profile-icon" />
//           <img className="px-3 h-7 md:hidden" src={whiteCart} alt="Profile-icon" />
//           {cartCount > 0 && (
//             <div className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
//               {cartCount}
//             </div>
//           )}
//         </Link>

//         <NavBarMenu />
//       </div>
//     </div>
//   );
// }

// export default NavBar;

//opcion1!!
// import React, { useState } from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import cart from '../assets/cart.svg';
// import whiteCart from '../assets/whiteCart.svg';
// import Search from './Search';
// import NavBarMenu from './NavBarMenu';
// import whiteLogo from '../assets/whiteLogo.svg';
// import menuBurger from '../assets/menuBurger.svg';

// function NavBar() {
//   const location = useLocation();
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const cartCount = 3;

//   let anchors = null;

//   if (location.pathname === '/') {
//     anchors = (
//       <ul className="md:hidden bg-black text-white absolute left-0 right-0 top-16 p-3 z-50">
//         <li>
//           <Link to="/#productos" className='text-white md:text-violet-900 p-3 block'>
//             Productos
//           </Link>
//         </li>
//         <li>
//           <Link to="/#cuidados" className='text-white md:text-violet-900 p-3 block'>
//             Cuidados
//           </Link>
//         </li>
//         <li>
//           <Link to="/#faq" className='text-white md:text-violet-900 p-3 block'>
//             FaQ
//           </Link>
//         </li>
//         <li>
//           <Link to="/#contacto" className='text-white md:text-violet-900 p-3 block'>
//             Contacto
//           </Link>
//         </li>
//       </ul>
//     );
//   }

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   return (
//     <div className="flex w-full justify-between items-center relative">
//       <img
//         className="px-3 w-15 h-7 md:hidden "
//         src={menuBurger}
//         alt="Menú hamburguesa"
//         onClick={toggleMobileMenu}
//       />

//       {/* Menú desplegable */}
//       {isMobileMenuOpen && (
//         <div className="md:hidden fixed inset-0 bg-black bg-opacity-75 z-40" onClick={toggleMobileMenu}></div>
//       )}
//       {isMobileMenuOpen && anchors}

//       <Link to="/">
//         <img className="h-12 w-24 md:hidden ml-180px" src={whiteLogo} alt="Logo" />
//       </Link>
//       <nav className='hidden md:block bg-white'>{anchors}</nav>
//       <div className="flex items-center h-11">
//         <Search />
//         <Link to="/add-to-cart" className="relative">
//           <img className="px-3 h-7 md:block hidden" src={cart} alt="Profile-icon" />
//           <img className="px-3 h-7 md:hidden" src={whiteCart} alt="Profile-icon" />
//           {cartCount > 0 && (
//             <div className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-4 h-4 flex items-center justify-center text-xs">
//               {cartCount}
//             </div>
//           )}
//         </Link>

//         <NavBarMenu />
//       </div>
//     </div>
//   );
// }

// export default NavBar;

import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import cart from '../assets/cart.svg';
import whiteCart from '../assets/whiteCart.svg';
import Search from './Search';
import NavBarMenu from './NavBarMenu';
import whiteLogo from '../assets/whiteLogo.svg';
import menuBurger from '../assets/menuBurger.svg';

function NavBar() {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const cartCount = 3;

  let desktopAnchors = null;
  let mobileAnchors = null;

  if (location.pathname === '/') {
    desktopAnchors = (
      <nav className='hidden md:flex space-x-4 bg-white'>
        <Link to="/#productos" className='text-violet-900 p-3'>
          Productos
        </Link>
        <Link to="/#cuidados" className='text-violet-900 p-3'>
          Cuidados
        </Link>
        <Link to="/#faq" className='text-violet-900 p-3'>
          FaQ
        </Link>
        <Link to="/#contacto" className='text-violet-900 p-3'>
          Contacto
        </Link>
      </nav>
    );

    mobileAnchors = (
      <ul className={`md:hidden bg-black text-white absolute w-80  top-16 p-7 z-50 ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <li>
          <Link to="/#productos" className='text-white md:text-violet-900 p-3  block'>
            Productos
          </Link>
        </li>
        <li>
          <Link to="/#cuidados" className='text-white md:text-violet-900 p-3 block'>
            Cuidados
          </Link>
        </li>
        <li>
          <Link to="/#faq" className='text-white md:text-violet-900 p-3 block'>
            FaQ
          </Link>
        </li>
        <li>
          <Link to="/#contacto" className='text-white md:text-violet-900 p-3 block'>
            Contacto
          </Link>
        </li>
      </ul>
    );
  }

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

      {/* Menú desplegable */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-black bg-opacity-75 z-40" onClick={toggleMobileMenu}></div>
      )}
      {isMobileMenuOpen && mobileAnchors}

      <Link to="/">
        <img className="h-12 w-24 md:hidden ml-180px" src={whiteLogo} alt="Logo" />
      </Link>
      {desktopAnchors}
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




