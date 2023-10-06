import React, { useState, useEffect } from 'react';
import { fetchFavorites, removeFavorite} from '../services/ApiFavoritesService';
import { Link } from "react-router-dom";
import { getPhotos } from '../services/ApiProducts';


function FavoritesPage() {

const [favorites, setFavorites]= useState([]);
const [photos, setPhotos]= useState();
 
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
            <h2 className="text-left  font-semibold text-3xl md:text-2xl 2xl:text-5xl mb-8 mt-12" style={{color:"#3D3D3D" }}id="cuidados">Favoritos</h2>
      {favorites.length === 0 ? (
        <p className="not-query">
          "Aún sin Favoritos"
        </p>
      ) : (
        <div className="card">
          {favorites.length > 0 && (
            <div className="mx-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {favorites.map((product) => (
                <div key={product.id} className="max-w-[220px] h-[350px] bg-white rounded overflow-hidden shadow-lg relative">
                  <svg
                    alt="icono favoritos"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    onClick={() => handleRemoveFavorite(product.id)}
                    className="w-16 h-16 p-2 fill-black cursor-pointer absolute top-2 right-2 z-10"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                  </svg>
                  <Link to={`/product/${product.id}`}>
                    <img className="w-full h-[220px] object-cover" src={getProductPhoto(product.id)} alt={product.name} />
                    <div className="px-4 py-2">
                      <div className="text-xl font-semibold mb-2">{product.name}</div>
                      <p className="text-orange-700 text-lg" style={{ color: 'purple' }}>
                        ₡{product.price}
                      </p>
                    </div>
                  </Link>
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






