import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import searchService from "../services/searchService";
import { addFavorite } from '../services/ApiFavoritesService';
import { removeFavorite} from '../services/ApiFavoritesService';
import { useAuth } from '../contexts/AuthContext'; 

// import axios from "axios";

// import { Link } from "react-router-dom";
// import infoIcon from "../assets/Info.svg";

const CardsSearch = () => {
  const [searchParams] = useSearchParams()
  const [searchResults, setSearchResults] = useState([]);
  const query = searchParams.get('query');
  const { searchProducts } = searchService
  const [isFavorite, setIsFavorite] = useState(false);
  const { user, setUser } = useAuth();

  useEffect(() => {
    searchProducts(query)
      .then((data) => {
        setSearchResults(data);
      })
      .catch((e) => {
        console.error(e)
      })
  }, []);

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
  }
  return (
    <div>
      {searchResults.length === 0 ? (
        <p className="not-query">
         "No results found"
        </p>
      ) : (
        <div className="card">
          {searchResults.length > 0 && (
            <div className="mx-8" style={{ marginLeft: '240px', marginRight: '240px' }}>
              <h2 className="mb-10 mt-10">Resultados de la búsqueda:</h2>
              <ul className="flex flex-wrap -mx-2">
                {searchResults.map((product) => (
                  <div key={product.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 w-1/4 px-2 mb-14 flex center">
                  <div className="max-w-[222px] h-[350px] rounded overflow-hidden shadow-lg">
                  {user ? (//si el usuario es autenticado --> si usuario TRUE fav icon redirige a register/login
              <>
                <svg alt="icono favoritos"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className={`w-12 p-2 fill-${isFavorite ? 'black' : 'white'} hover:fill-${isFavorite ? 'white' : 'black'} cursor-pointer`}
                  onClick={() => handleToggleFavorites(product.id)}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
                </> ):(//si el usuario es guest fav-icon redirige a register 
                <>
                <Link to={'/register'}>
                  <svg alt="icono favoritos"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  class="w-12 p-2 text-transparent fill-current hover:text-black cursor-pointer transition-colors duration-300">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
                </Link>
                </>
                )}
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
  );
}

export default CardsSearch;
      