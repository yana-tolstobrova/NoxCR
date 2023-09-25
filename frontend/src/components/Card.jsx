import React, { useState, useEffect } from 'react';
import { cardsProducts } from '../services/ApiGetProducts';
import { Link } from 'react-router-dom'; 

function Card({ categoryFilter, limit }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const allProducts = await cardsProducts();

      if (categoryFilter) {
        const filteredProducts = allProducts.filter((product) => product.collection === "Crazy");
        setProducts(filteredProducts.slice(0, limit));
      } else {
        setProducts(allProducts.slice(0, limit));
      }
    };

    fetchData();
  }, [categoryFilter, limit]);

  return (
    <div className="mx-8" style={{ marginLeft: '240px', marginRight: '240px' }}>
      <div className="flex flex-wrap -mx-2">
        {products.map((product) => (
          <div key={product.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 w-1/4 px-2 mb-12">
            <div className="max-w-[222px] h-[350px] rounded overflow-hidden shadow-lg">
              <Link to={`/product/${product.id}`}>
                <img className="w-[222px] h-[260px] object-cover" src={product.image} alt={product.name} />
                <div className="px-4 py-2 h-[80px]">
                  <div className="text-l mb-2">{product.name}</div>
                  <p className="text-base" style={{ color: 'purple' }}>
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
