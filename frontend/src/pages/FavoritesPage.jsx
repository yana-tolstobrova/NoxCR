import React, { useState, useEffect } from 'react';
import { fetchFavorites, removeFavorite} from '../services/ApiFavoritesService';
import { Link } from "react-router-dom";
import { getPhotos } from '../services/ApiProducts';
import { useMyCart } from "../contexts/MyCartContext";


function FavoritesPage() {

const [favorites, setFavorites]= useState([]);
const [photos, setPhotos]= useState();
const [cartNotification, setCartNotification] = useState(null);
const { cartCount, updateCartCount } = useMyCart();

useEffect(() => {

  fetchFavorites()
  .then(data =>{
    setFavorites(data)
   })
  .catch(e=>{
    console.log(e);
  })
  
  const fetchPhotos = async () => {
    const allPhotos = await getPhotos();
    setPhotos(allPhotos);
    };

  fetchPhotos();


}, []);

const getProductPhoto = (productId) => {
  if (photos) {
    const productPhotos = photos.filter((photo) => photo.product_id === productId);
    if (productPhotos.length > 0) {
      return productPhotos[0].url;
    }
  }
  return 'No hay ninguna foto del producto';
};

const handleRemoveFavorite = (id) => {
  console.log(id);
  removeFavorite(id)
  .then( data => {
    fetchFavorites()
  .then(data =>{
    setFavorites(data)
   })
  .catch(e=>{
    console.log(e);
  })
    
  })
};
const handleAddToCart = (e, product) => { 

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
  
};
const showCartNotification = () => {
  setCartNotification(
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" class="w-6 h-6">
  <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd" />
</svg>

  );
  setTimeout(() => {
    setCartNotification(null);
  }, 500);
};
  // return (
  //   <div>

  //     {favorites.length === 0 ? (
  //       <p className="not-query">
  //        "No results found"
  //       </p>
  //     ) : (
  //       <div className="card">
  //         {favorites.length > 0 && (
  //           <div className="mx-8" style={{ marginLeft: '240px', marginRight: '240px' }}>
  //             <h2 className="mb-10 mt-10">Tus favoritos:</h2>
  //             <ul className="flex flex-wrap -mx-2">
  //               {favorites.map((product) => (
  //                 <div key={product.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 w-1/4 px-2 mb-14 flex center">
  //                 <div className="max-w-[222px] h-[350px] rounded overflow-hidden shadow-lg">
  //                 <svg alt="icono favoritos"
  //                 xmlns="http://www.w3.org/2000/svg"
  //                 viewBox="0 0 24 24"
  //                 strokeWidth="1.5"
  //                 stroke="currentColor"
  //                 onClick = {() => handleRemoveFavorite(product.id)}
  //                 className='w-12 p-2 fill-black cursor-pointer'>
  //                 <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
  //               </svg>
  //                 <Link to={`/product/${product.id}`}>
  //                   <img className="w-[222px] h-[260px] object-cover" src={getProductPhoto(product.id)} alt={product.name} />
  //                   <div className="px-4 py-2 h-[80px]">
  //                     <div className="text-l mb-2">{product.name}</div>
  //                     <p className="text-orange-700 text-base" style={{ color: 'purple' }}>
  //                     ₡{product.price}
  //                     </p>
  //                   </div>
  //                 </Link>
  //               </div>
  //               </div>
  //               ))}
  //             </ul>
  //           </div>
  //         )}
  //       </div>
  //     )}
      
  //     </div>
  // )

  return (
    <div className="mx-8 md:mx-12">
      <h2 className="text-left font-semibold text-3xl mb-8 mt-8" style={{ color: "#3D3D3D" }} id="cuidados">Favoritos</h2>
      {favorites.length === 0 ? (
        <p className="not-query">
          Aún sin los productos favoritos :(
        </p>
      ) : (
        
        <div className="card">
          {favorites.length > 0 && (
            <div className="mx-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {favorites.map((product) => (
                <div key={product.id} className="w-[260px] md:w-[190px] md:m-0 md:mb-6 lg:w-[262px] 2xl:w-[292px] m-4 px-2 mb-12 flex justify-center">
                  <div className="max-w-[362px] h-[420px] rounded overflow-hidden shadow-lg relative card-box md:max-w-[222px] md:h-[300px] 2xl:max-w-[292px] 2xl:h-[500px]">
                    <div className="rounded bg-transparent w-full h-[340px] absolute z-2 card-menu opacity-0 flex flex-col md:h-[260px] 2xl:h-[495px]">
                      {cartNotification && (
                        <div className="bg-green-400 rounded-full absolute right-2 top-2">
                          {cartNotification}
                        </div>
                      )}
                        <svg alt="icono favoritos"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          onClick={() => handleRemoveFavorite(product.id)}
                          className="w-12 p-2 cursor-pointer">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                        </svg>
                      <Link to={`/product/${product.id}`} className='h-[38%]'></Link>
                      <button onClick={(e) => handleAddToCart(e, product)} className="hover:bg-white hover:text-black border-black border py-2 bg-black text-white w-full text-lg md:py-2 md:mb-8 2xl:py-2 2xl:text-xl">Añadir al carrito</button>
                    </div>
                    <Link to={`/product/${product.id}`}>
                      <img className="w-[262px] h-[260px] text-lg object-cover md:h-[190px] 2xl:w-[530px] 2xl:h-[310px]" src={getProductPhoto(product.id)} alt={product.name} />
                      <div className="px-4 py-2 h-[80px]">
                        <div className="text-2xl mb-1 mt-4 text-gray-800 md:text-lg 2xl:text-2xl 2xl:mt-2 md:mt-0">{product.name}</div>
                        <p className="text-2xl font-semibold md:text-lg 2xl:text-2xl md:mt-2 mt-4 2xl:mt-8" style={{ color: '#7C3973' }}>
                          ₡{product.price}
                        </p>
                      </div>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
  
}

export default FavoritesPage;



