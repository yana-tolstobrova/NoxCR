import React from 'react';
import { Link } from 'react-router-dom';
import scleraCategory from '../assets/imagen-sclera.webp';  
import naturalCategory from '../assets/imagen-natural.webp'; 
import crazyCategory from '../assets/crazy-image.svg'; 

function FilterProducts() {
  return (
    <div className="flex mt-12 mb-12 justify-center">
      <Link to="/products/natural" className="mx-0 text-center sm:mx-4">
        <div className="w-52 h-52 sm:w-48 sm:h-48 rounded-full overflow-hidden bg-cover bg-center mb-2">
          <img src={naturalCategory} alt="Natural Products" className="w-full h-full object-cover" />
        </div>
        <div className="text-center text-2xl font-semibold hover:font-bold sm:text-lg">Natural</div>
      </Link>
      <Link to="/products/crazy" className="mx-4 text-center">
        <div className="w-52 h-52 sm:w-48 sm:h-48 rounded-full overflow-hidden bg-cover bg-center mb-2">
          <img src={crazyCategory} alt="Crazzy Products" className="w-full h-full object-cover" />
        </div>
        <div className="text-center text-2xl font-semibold hover:font-bold sm:text-lg">Crazy</div>
      </Link>
      <Link to="/products/sclera" className="mx-4 text-center">
        <div className="w-52 h-52 sm:w-48 sm:h-48 rounded-full overflow-hidden bg-cover bg-center mb-2">
          <img src={scleraCategory} alt="Esclera Products" className="w-full h-full object-cover" />
        </div>
        <div className="text-center text-2xl font-semibold hover:font-bold sm:text-lg">Sclera</div>
      </Link>
    </div>
  );
}

export default FilterProducts;

