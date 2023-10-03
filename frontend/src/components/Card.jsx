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


  const handleToggleFavorites = async (productId) => {
    try {
      if (isFavorite) {
        // Si ya es favorito, elimínalo de la lista
        await removeFavorite(productId);
      } else {
        // Si no es favorito, agrégalo a la lista
        await addFavorite(productId);
      }
  
      // Cambia el estado de isFavorite
      setIsFavorite(!isFavorite);
    } catch (error) {
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
                <svg alt='icono favoritos' onClick={() => handleToggleFavorites(product.id)}  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={`w-12 p-2 fill-${isFavorite ? 'black' : 'white'} hover:fill-${isFavorite ? 'white' : 'black'} cursor-pointer`} {/*className='w-12 p-2 fill-white hover:fill-black cursor-pointer'*/}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
                <Link to={`/product/${product.id}`} className='h-[75%]'></Link>
                <button onClick={(e) => handleAddToCart(e, product)} className="hover:bg-white hover:text-black border-black border py-2 bg-black text-white w-full">Añadir al carrito</button>
              </div>
              <Link to={`/product/${product.id}`}>
              <img className="w-[222px] h-[260px] object-cover" src={product.image} alt={product.name} />  
              <div className="px-4 py-2 h-[80px]">
                <div className="text-base mb-1 text-gray-800">{product.name}</div>
                <p className="text-lg font-semibold" style={{ color: '#7C3973' }}>
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
