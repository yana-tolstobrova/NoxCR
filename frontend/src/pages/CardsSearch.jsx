import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import searchService from "../services/searchService";
import { getPhotos } from '../services/ApiProducts';

const CardsSearch = () => {
  const [searchParams] = useSearchParams()
  const [searchResults, setSearchResults] = useState([]);
  const query = searchParams.get('query');
  const { searchProducts } = searchService
	const [photos, setPhotos]= useState();

  useEffect(() => {
    searchProducts(query)
      .then((data) => {
        setSearchResults(data);
      })
      .catch((e) => {
        console.error(e)
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
  return (
    <div>
      {searchResults.length === 0 ? (
        <p className="not-query">
         "No hay resultados"
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
                    <img className="w-[222px] h-[260px] object-cover" src={getProductPhoto(product.id)} alt={product.name} />
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
      