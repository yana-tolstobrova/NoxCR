import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import searchService from "../services/searchService";
// import axios from "axios";

// import { Link } from "react-router-dom";
// import infoIcon from "../assets/Info.svg";

const CardsSearch = () => {
  const [searchParams] = useSearchParams()
  const [searchResults, setSearchResults] = useState([]);
  const query = searchParams.get('query');
  const { searchProducts } = searchService

  useEffect(() => {
    searchProducts(query)
      .then((data) => {
        setSearchResults(data);
      })
      .catch((e) => {
        console.error(e)
      })
  }, []);

  return (
    <div>
      {searchResults.length === 0 ? (
        <p className="not-query">
         "No results found"
        </p>
      ) : (
        <div className="card">
          {searchResults.length > 0 && (
            <div className="mx-8" style={{ marginLeft: '150px', marginRight: '100px' }}>
              <h2 className="mb-10 mt-10">Resultados de la búsqueda:</h2>
              <ul className="flex flex-wrap -mx-2">
                {searchResults.map((product) => (
                  <div key={product.id} className="w-1/2 md:w-1/2 lg:w-1/4 px-2 mb-12">
                  <div className="max-w-[222px] h-[350px] rounded overflow-hidden shadow-lg relative card-box">
                  <Link to={`/product/${product.id}`} >
                    <img className="w-[222px] h-[260px] object-cover" src={product.image} alt={product.name} />
                    <div className="px-4 py-2 h-[80px]">
                      <div className="text-base mb-1 text-gray-800">{product.name}</div>
                      <p className="text-base font-semibold" style={{ color: 'purple' }}>
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
  );
}

export default CardsSearch;
      