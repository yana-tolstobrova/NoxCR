import React from 'react';
import { Link } from 'react-router-dom';
import NaturalImage from '../assets/natural-image.svg'; 
import CrazzyImage from '../assets/crazzy-image.svg';
import EscleraImage from '../assets/esclera-image.svg';

function FilterProducts() {
  return (
    <div className="flex mt-12 justify-center">
      <Link to="/products/natural" className="mx-4 text-center">
        <div className="w-44 h-44 rounded-full overflow-hidden bg-cover bg-center mb-2">
          <img src={NaturalImage} alt="Natural Products" className="w-full h-full object-cover" />
        </div>
        <div className="text-center text-lg font-bold">Natural</div>
      </Link>
      <Link to="/products/crazzy" className="mx-4 text-center">
        <div className="w-44 h-44 rounded-full overflow-hidden bg-cover bg-center mb-2">
          <img src={CrazzyImage} alt="Crazzy Products" className="w-full h-full object-cover" />
        </div>
        <div className="text-center text-lg font-bold">Crazzy</div>
      </Link>
      <Link to="/products/esclera" className="mx-4 text-center">
        <div className="w-44 h-44 rounded-full overflow-hidden bg-cover bg-center mb-2">
          <img src={EscleraImage} alt="Esclera Products" className="w-full h-full object-cover" />
        </div>
        <div className="text-center text-lg font-bold">Esclera</div>
      </Link>
 
    </div>
  );
}

export default FilterProducts;
