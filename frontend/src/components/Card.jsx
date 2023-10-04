import React, { useState, useEffect } from 'react';
import { cardsProducts } from '../services/ApiProducts';
import { Link } from 'react-router-dom'; 

import '../index.css';

function Card({ categoryFilter, limit}) {
  const [products, setProducts] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const allProducts = await cardsProducts();
      if (categoryFilter) {
        const filteredProducts = allProducts.filter((product) => product.collection === "Product");
        setProducts(filteredProducts.slice(0, limit));
      } else {
        setProducts(allProducts.slice(0, limit));
      }
    };

    fetchData();
  }, [categoryFilter, limit]);

  const handleAddToCart = (e, product) => { 

    const cart = JSON.parse(localStorage.getItem("cart")) || [];
  
    const existingCartItem = cart.find(item => item.product.id === product.id);
  
    if (existingCartItem) {
      existingCartItem.quantity += 1;
    } else {
      cart.push({ product, quantity: 1 });
    }
    localStorage.setItem("cart", JSON.stringify(cart));

    setCartCount(cart.reduce((total, item) => total + item.quantity, 0));
  };

  return (
    <div className="mx-8 m-8 md:ml-12">
    <div className="flex flex-wrap -mx-2">
      {products.map((product) => (
        <div key={product.id} className="w-1/2 md:w-1/2 lg:w-1/4 px-3 mb-12 flex justify-center">
          <div className="max-w-[362px] h-[520px] rounded overflow-hidden shadow-lg relative card-box md:max-w-[252px] md:h-[400px] 2xl:max-w-[530px]  2xl:h-[780px]">


              <div className="rounded bg-transparent w-full h-[340px] absolute z-2 card-menu opacity-0 flex flex-col md:h-[260px] 2xl:h-[495px]"> 
                <svg alt='icono favoritos' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className='w-28 p-2 fill-white hover:fill-black cursor-pointer md:w-24 2xl:w-[140px]'>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
                <Link to={`/product/${product.id}`} className='h-[75%]'></Link>
                <button onClick={(e) => handleAddToCart(e, product)} className="hover:bg-white hover:text-black border-black border py-6 bg-black text-white w-full text-xl md:py-4 2xl:py-10 2xl:text-3xl">Añadir al carrito</button>
              </div>


              <Link to={`/product/${product.id}`}>
              <img className="w-[362px] h-[320px] text-lg object-cover md:h-[250px] 2xl:w-[530px] 2xl:h-[480px] " src={product.image} alt={product.name} />  
              <div className="px-4 py-2 h-[80px]">
                <div className="text-4xl mb-1 mt-4 text-gray-800 md:text-2xl 2xl:text-5xl 2xl:mt-8">{product.name}</div>
                <p className="text-4xl font-semibold md:text-2xl 2xl:text-5xl mt-4 2xl:mt-8" style={{ color: '#7C3973' }}>
                  ${product.price}
                </p>
              </div>
            </Link>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
}

export default Card;






// import React, { useState, useEffect } from 'react';
// import { cardsProducts } from '../services/ApiProducts';
// import { Link } from 'react-router-dom';

// import '../index.css';

// function Card({ categoryFilter, limit }) {
//   const [products, setProducts] = useState([]);
//   const [isFavorite, setIsFavorite] = useState(false);
//   const [quantity, setQuantity] = useState(1);
//   const [cartCount, setCartCount] = useState(0);

//   useEffect(() => {
//     const fetchData = async () => {
//       const allProducts = await cardsProducts();
//       if (categoryFilter) {
//         const filteredProducts = allProducts.filter((product) => product.collection === "Product");
//         setProducts(filteredProducts.slice(0, limit));
//       } else {
//         setProducts(allProducts.slice(0, limit));
//       }
//     };

//     fetchData();
//   }, [categoryFilter, limit]);

//   const handleAddToCart = (e, product) => {
//     const cart = JSON.parse(localStorage.getItem("cart")) || [];

//     const existingCartItem = cart.find(item => item.product.id === product.id);

//     if (existingCartItem) {
//       existingCartItem.quantity += 1;
//     } else {
//       cart.push({ product, quantity: 1 });
//     }
//     localStorage.setItem("cart", JSON.stringify(cart));

//     setCartCount(cart.reduce((total, item) => total + item.quantity, 0));
//   };

//   return (
//     <div className="mx-8">
//       <div className="flex justify-around items-center ml-12">
//         {products.map((product) => (
//           <div key={product.id} className="w-1/2 md:w-1/2 lg:w-1/4 px-2 mb-12">
//             <div className="max-w-[222px] h-[350px] rounded overflow-hidden shadow-lg relative card-box">
//               <div className="rounded bg-transparent w-full h-[260px] absolute left-[-100%] z-2 card-menu opacity-0 flex flex-col">
//                 <svg alt='icono favoritos' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className='w-12 p-2 fill-white hover:fill-black cursor-pointer'>
//                   <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
//                 </svg>
//                 <Link to={`/product/${product.id}`} className='h-[75%]'></Link>
//                 <button onClick={(e) => handleAddToCart(e, product)} className="hover:bg-white hover:text-black border-black border py-2 bg-black text-white w-full">Añadir al carrito</button>
//               </div>
//               <Link to={`/product/${product.id}`}>
//                 <img className="w-[222px] h-[260px] object-cover" src={product.image} alt={product.name} />
//                 <div className="px-4 py-2 h-[80px]">
//                   <div className="text-base mb-1 text-gray-800">{product.name}</div>
//                   <p className="text-lg font-semibold" style={{ color: '#7C3973' }}>
//                     ${product.price}
//                   </p>
//                 </div>
//               </Link>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Card;







