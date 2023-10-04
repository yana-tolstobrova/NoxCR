import React, { useState, useEffect } from 'react';
import {fetchFavorites} from "../services/ApiFavoritesService";
import { Link } from "react-router-dom";



function FavoritesPage() {

  const [favorites, setFavorites]= useState([]);

	useEffect(() => {
		fetchFavorites()
      .then((data) => {
        setFavorites([data]);
        console.log(favorites)
      })
      .catch((e) => {
        console.error(e)
      })
  }, []);


  return (
    <div>

      <h1>FavoritesPage</h1>

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
                  <Link to={`/product/${product.id}`}>
                    <img className="w-[222px] h-[260px] object-cover" src={product.image} alt={product.name} />
                    <div className="px-4 py-2 h-[80px]">
                      <div className="text-l mb-2">{product.name}</div>
                      <p className="text-orange-700 text-base" style={{ color: 'purple' }}>
                        ${product.price}
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






