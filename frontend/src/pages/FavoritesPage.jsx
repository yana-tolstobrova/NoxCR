import React, { useState, useEffect } from 'react';
import { fetchFavorites, removeFavorite} from '../services/ApiFavoritesService';
import { Link } from "react-router-dom";



function FavoritesPage() {

const [favorites, setFavorites]= useState([]);

 
useEffect(() => {

  fetchFavorites()
  .then(data =>{
    setFavorites(data)
   })
  .catch(e=>{
    console.log(e);
  })
  
}, []);



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
	
  return (
    <div>

      {favorites.length === 0 ? (
        <p className="not-query">
         "No results found"
        </p>
      ) : (
        <div className="card">
          {favorites.length > 0 && (
            <div className="mx-8" style={{ marginLeft: '240px', marginRight: '240px' }}>
              <h2 className="mb-10 mt-10">Tus favoritos:</h2>
              <ul className="flex flex-wrap -mx-2">
                {favorites.map((product) => (
                  <div key={product.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 w-1/4 px-2 mb-14 flex center">
                  <div className="max-w-[222px] h-[350px] rounded overflow-hidden shadow-lg">
                  <svg alt="icono favoritos"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  onClick = {() => handleRemoveFavorite(product.id)}
                  className='w-12 p-2 fill-black cursor-pointer'>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
                  <Link to={`/product/${product.id}`}>
                    <img className="w-[222px] h-[260px] object-cover" src={product.image} alt={product.name} />
                    <div className="px-4 py-2 h-[80px]">
                      <div className="text-l mb-2">{product.name}</div>
                      <p className="text-orange-700 text-base" style={{ color: 'purple' }}>
                      ₡{product.price}
                      </p>
                    </div>
                  </Link>
                </div>
                </div>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
     
      
      
      
      </div>
  )
}

export default FavoritesPage;






