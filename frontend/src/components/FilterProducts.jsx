import React from 'react';
import { Link } from 'react-router-dom';
import scleraCategory from '../assets/imagen-sclera.webp';  
import naturalCategory from '../assets/imagen-natural.webp'; 
import crazyCategory from '../assets/crazy-image.svg'; 

function FilterProducts() {
  return (
    <div className="flex mt-12 justify-center">
      <Link to="/products/natural" className="mx-4 text-center">
        <div className="w-44 h-44 rounded-full overflow-hidden bg-cover bg-center mb-2">
          <img src={naturalCategory} alt="Natural Products" className="w-full h-full object-cover" />
        </div>
        <div className="text-center text-lg font-semibold hover:font-bold">Natural</div>
      </Link>
      <Link to="/products/crazy" className="mx-4 text-center">
        <div className="w-44 h-44 rounded-full overflow-hidden bg-cover bg-center mb-2">
          <img src={crazyCategory} alt="Crazzy Products" className="w-full h-full object-cover" />
        </div>
        <div className="text-center text-lg font-semibold hover:font-bold">Crazy</div>
      </Link>
      <Link to="/products/sclera" className="mx-4 text-center">
        <div className="w-44 h-44 rounded-full overflow-hidden bg-cover bg-center mb-2">
          <img src={scleraCategory} alt="Esclera Products" className="w-full h-full object-cover" />
        </div>
        <div className="text-center text-lg font-semibold hover:font-bold">Sclera</div>
      </Link>
 
    </div>
  );
}

export default FilterProducts;
