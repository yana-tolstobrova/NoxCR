import React, { useState, useEffect } from 'react';
import { cardsProducts } from '../services/ApiProducts';
import { Link } from 'react-router-dom'; 

 import { fetchFavorites, addFavorite, removeFavorite } from '../services/ApiFavoritesService';
 import { useAuth } from '../contexts/AuthContext'; 

import '../index.css';

function Card({ categoryFilter, limit}) {
  const [products, setProducts] = useState([]);
  const [isFavorite, setIsFavorite] = useState();
  const [quantity, setQuantity] = useState(1);
  const [cartCount, setCartCount] = useState(0);
  const { user, setUser } = useAuth();

  useEffect(() => {
    const fetchData = async () => {
      const allProducts = await cardsProducts();

      const allFavorites = user ? await fetchFavorites():[];
      console.log(allFavorites)

      const favProducts= allProducts.map(product => {
        return {
          ...product,
          isFavorite: allFavorites.some(favorite => favorite.id === product.id)
        }
      })
      console.log(favProducts);
      
      if (categoryFilter) {
        const filteredProducts = favProducts.filter((product) => product.collection === "Product");
        setProducts(filteredProducts.slice(0, limit));
      } else {
        setProducts(favProducts.slice(0, limit));
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


   const handleToggleFavorites = async (id, isFavorite) => {

    console.log(id,isFavorite)

      try {

        await isFavorite ? removeFavorite(id) : addFavorite(id);
      
      } catch (error){
        console.error("Error al manejar favoritos:", error);

      }
    

   };
  

  return (
    <div className="mx-8" style={{ marginLeft: '240px', marginRight: '240px' }}>
    <div className="flex flex-wrap -mx-2">
      {products.map((product) => (
        <div key={product.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 w-1/4 px-2 mb-12">
          <div className="max-w-[222px] h-[350px] rounded overflow-hidden shadow-lg relative card-box">
              <div className="rounded bg-transparent w-full h-[260px] absolute left-[-100%] z-2 card-menu opacity-0 flex flex-col">
         {user ? (//si el usuario es autenticado --> si usuario TRUE fav icon debe añadir a favoritos
              <>
              <button onClick={(e) => handleToggleFavorites(product.id, product.isFavorite)}>
                <svg alt="icono favoritos"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className={`w-12 p-2 ${product.isFavorite ? 'fill-black' : 'fill-white'} hover:fill-${product.isFavorite ? 'fill-white' : 'fill-black'} cursor-pointer transition-colors duration-300`} 
                  >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
                </button>
                </> ):(//si el usuario es guest fav-icon redirige a register form
                <>
                <Link to={'/register'}>
                  <svg alt="icono favoritos"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-12 p-2 text-transparent fill-current hover:text-black cursor-pointer transition-colors duration-300">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
                </Link>
                </>
                )}
                <Link to={`/product/${product.id}`} className='h-[75%]'></Link>
                <button onClick={(e) => handleAddToCart(e, product)} className="hover:bg-white hover:text-black border-black border py-2 bg-black text-white w-full">Añadir al carrito</button>
              </div>
              <Link to={`/product/${product.id}`}>
              <img className="w-[222px] h-[260px] object-cover" src={product.image} alt={product.name} />  
              <div className="px-4 py-2 h-[80px]">
                <div className="text-base mb-1 text-gray-800">{product.name}</div>
                <p className="text-lg font-semibold" style={{ color: '#7C3973' }}>
                  ₡{product.price}
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
