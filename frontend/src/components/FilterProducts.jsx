import React from 'react';
import { Link } from 'react-router-dom';
import scleraCategory from '../assets/imagen-sclera.webp';  
import naturalCategory from '../assets/imagen-natural.webp'; 
import crazyCategory from '../assets/crazy-image.svg'; 

function FilterProducts() {
  return (
    <div className="flex mt-8 mb-6 ml-6 md:mt-2 2xl:mt-16 justify-center">
      <Link to="/products/natural" className="mx-0 text-center sm:mx-4">
        <div className="w-64 h-64 mt-12 mb-12 md:w-40 md:h-40 2xl:w-72 2xl:h-72 object-cover rounded-full">
          <img src={naturalCategory} alt="Natural Products" className="w-full h-full object-cover" />
        </div>
        <div className="text-center text-3xl font-semibold hover:font-bold md:text-xl 2xl:text-4xl">Natural</div>
      </Link>
      <Link to="/products/crazy" className="mx-4 text-center">
        <div className="w-64 h-64 mt-12 mb-12 md:w-40 md:h-40 2xl:w-72 2xl:h-72 object-cover rounded-full">
          <img src={crazyCategory} alt="Crazzy Products" className="w-full h-full object-cover" />
        </div>
        <div className="text-center text-3xl font-semibold hover:font-bold md:text-xl 2xl:text-4xl">Crazy</div>
      </Link>
      <Link to="/products/sclera" className="mx-4 text-center">
        <div className="w-64 h-64 mt-12 mb-12 md:w-40 md:h-40 2xl:w-72 2xl:h-72 object-cover rounded-full">
          <img src={scleraCategory} alt="Esclera Products" className="w-full h-full object-cover" />
        </div>
        <div className="text-center text-3xl font-semibold hover:font-bold md:text-xl 2xl:text-4xl">Sclera</div>
      </Link>
    </div>
  );
}

export default FilterProducts;

