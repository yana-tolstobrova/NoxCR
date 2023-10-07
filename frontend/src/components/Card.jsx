import React, { useState, useEffect } from 'react';
import { cardsProducts, getPhotos } from '../services/ApiProducts';
import { Link } from 'react-router-dom'; 
import { fetchFavorites, addFavorite, removeFavorite } from '../services/ApiFavoritesService';
import { useAuth } from '../contexts/AuthContext';
import { useMyCart } from "../contexts/MyCartContext";
import { useNavigate } from 'react-router-dom';
import '../index.css';

function Card({ categoryFilter, limit, collection }) {
  const [products, setProducts] = useState([]);
  const [isFavorite, setIsFavorite] = useState();
  const [quantity, setQuantity] = useState(1);
	const [photos, setPhotos]= useState();
	const { user } = useAuth();
  const navigate = useNavigate();
  const [cartNotification, setCartNotification] = useState(null);
  const { cartCount, updateCartCount } = useMyCart();

  useEffect(() => {
    const fetchData = async () => {
      const allProducts = await cardsProducts();
      const allFavorites = user ? await fetchFavorites() : [];
      
      const filteredProducts = allProducts
        .filter((product) => {
          return collection ? product.collection === collection : true;
        })
        .filter((product) => {
          return categoryFilter ? product.category === "Productos de cuidado" : true;
        })
        .map((product) => ({
          ...product,
          isFavorite: allFavorites.some((favorite) => favorite.id === product.id),
        }));
      
      setProducts(filteredProducts.slice(0, limit));
    };
  
    const fetchPhotos = async () => {
      const allPhotos = await getPhotos();
      setPhotos(allPhotos);
    };
  
    fetchPhotos();
    fetchData();
  }, [collection, categoryFilter, limit, user]);
  
  const getProductPhoto = (productId) => {
    const productPhotos = photos.filter((photo) => photo.product_id === productId);
    if (productPhotos.length > 0) {
        return productPhotos[0].url; 
    }
    return 'No hay ningun foto del producto';
};

const handleAddToCart = (e, product) => { 
  if (!user) {
    navigate('/login');
  } else {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingCartItem = cart.find(item => item.product.id === product.id);

    if (existingCartItem) {
      existingCartItem.quantity += 1;
    } else {
      cart.push({ product, quantity: 1 });
    }
    localStorage.setItem("cart", JSON.stringify(cart));

    const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);
    updateCartCount(totalQuantity);

    showCartNotification(product.name);
  }
};

const showCartNotification = () => {
  setCartNotification(
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-6 h-6">
  <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd" />
</svg>

  );
  setTimeout(() => {
    setCartNotification(null);
  }, 500);
};

  const handleToggleFavorites = async (id, isFavorite) => {

    console.log(id, isFavorite);
    if (!user) {
      navigate('/login');
    } else {

    try {
      await isFavorite ? removeFavorite(id) : addFavorite(id);

      const updatedProducts = products.map(product => {
        if (product.id === id) {
          return {
            ...product,
            isFavorite: !isFavorite 
          };
        }
        return product;
      });

      setProducts(updatedProducts);
    } catch (error) {
      console.error("Error al manejar favoritos:", error);
    }
  }
  };
  
  return (
    <div className="">
      <div className="flex flex-wrap justify-center">
        {products.map((product) => (
            <div key={product.id} className="max-w-[222px] h-[350px] md:mx-0 lg:w-[262px] md:mb-0 m-4 px-2 xl:mb-12 flex justify-center">
              <div className="max-w-[362px] h-[420px] rounded overflow-hidden shadow-lg relative card-box md:max-w-[222px] md:h-[300px]">
                  <div className="rounded bg-transparent w-full h-[340px] absolute z-2 card-menu opacity-0 flex flex-col md:h-[260px]">
                      {cartNotification && (
                        <div className="bg-green-400 rounded-full absolute right-2 top-2">
                          {cartNotification}
                        </div>
                      )}
                  
                      <button onClick={(e) => handleToggleFavorites(product.id, product.isFavorite)}>
                      <svg alt="icono favoritos"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className={`w-12 p-2 ${product.isFavorite ? 'fill-red' : 'fill-white'} cursor-pointer transition-colors duration-300`} 
                        >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                      </svg>
                      </button>     
                      <Link to={`/product/${product.id}`} className='h-[38%]'></Link>
                      <button onClick={(e) => handleAddToCart(e, product)} className="hover:bg-white hover:text-black border-black border py-2 bg-black text-white w-full text-lg md:py-2 md:mb-8">Añadir al carrito</button>
                  </div>
                  <Link to={`/product/${product.id}`}>
                    <img className="w-[262px] h-[260px] text-lg object-cover md:h-[190px]" src={getProductPhoto(product.id)} alt={product.name} />  
                    <div className="px-4 py-2 h-[80px]">
                      <div className="text-2xl mb-1 mt-4 text-gray-800 md:text-lg md:mt-0">{product.name}</div>
                      <p className="text-2xl font-semibold md:text-lg md:mt-2 mt-4" style={{ color: '#7C3973' }}>
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









