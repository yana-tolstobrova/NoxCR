import React, { useState, useEffect } from 'react';
import { cardsProducts, getPhotos } from '../services/ApiProducts';
import { Link } from 'react-router-dom'; 
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import '../index.css';

function Card({ categoryFilter, limit}) {
  const [products, setProducts] = useState([]);
  const [isFavorite, setIsFavorite] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [cartCount, setCartCount] = useState(0);
	const [photos, setPhotos]= useState();
	const { user } = useAuth();
  const navigate = useNavigate();
  const [cartNotification, setCartNotification] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const allProducts = await cardsProducts();
      if (categoryFilter) {
        const filteredProducts = allProducts.filter((product) => product.category === "Productos de cuidado");
        setProducts(filteredProducts.slice(0, limit));
      } else {
        setProducts(allProducts.slice(0, limit));
      }
    };
    const fetchPhotos = async () => {
			const allPhotos = await getPhotos();
			setPhotos(allPhotos);
		  };
	
		fetchPhotos();

    fetchData();
  }, [categoryFilter, limit]);

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
    showCartNotification(product.name);
    setCartCount(cart.reduce((total, item) => total + item.quantity, 0));
  }
};
const showCartNotification = () => {
  setCartNotification(
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" class="w-6 h-6">
  <path fill-rule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clip-rule="evenodd" />
</svg>

  );
  setTimeout(() => {
    setCartNotification(null);
  }, 500);
};


  return (
    <div className="mx-8 md:mx-12">
      <div className="flex flex-wrap justify-center">
        {products.map((product) => (
          <div key={product.id} className="w-[260px] md:w-[190px] md:m-0 md:mb-6 lg:w-[262px] 2xl:w-[362px] m-4 px-2 mb-12 flex justify-center">
            <div className="max-w-[362px] h-[420px] rounded overflow-hidden shadow-lg relative card-box md:max-w-[242px] md:h-[300px] 2xl:max-w-[330px] 2xl:h-[580px]">
              <div className="rounded bg-transparent w-full h-[340px] absolute z-2 card-menu opacity-0 flex flex-col md:h-[260px] 2xl:h-[495px]">
                {cartNotification && (
                  <div className="bg-green-400 rounded-full absolute right-2 top-2">
                    {cartNotification}
                  </div>
                )}
                <svg
                  alt="icono favoritos"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-28 p-2 fill-white hover:fill-black cursor-pointer md:w-24 2xl:w-[140px]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
                <Link to={`/product/${product.id}`} className="h-[75%]"></Link>
                <button
                  onClick={(e) => handleAddToCart(e, product)}
                  className="hover:bg-white hover:text-black border-black border mb-14 py-4 bg-black text-white w-full text-xl md:py-4 2xl:py-10 2xl:text-3xl"
                >
                  Añadir al carrito
                </button>
              </div>
  
              <Link to={`/product/${product.id}`}>
                <img
                  className="w-[262px] h-[260px] text-lg object-cover md:h-[190px] 2xl:w-[530px] 2xl:h-[350px] "
                  src={getProductPhoto(product.id)}
                  alt={product.name}
                />
                <div className="px-4 py-2 h-[80px]">
                  <div className="text-2xl mb-1 mt-4 text-gray-800 md:text-lg 2xl:text-3xl 2xl:mt-8 md:mt-0">
                    {product.name}
                  </div>
                  <p
                    className="text-2xl font-semibold md:text-lg 2xl:text-3xl md:mt-2 mt-4 2xl:mt-8"
                    style={{ color: '#7C3973' }}
                  >
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




