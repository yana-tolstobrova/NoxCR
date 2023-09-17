import React, { useState } from 'react';
import Card from '../components/Card';
import { Link } from 'react-router-dom';
import arrow from '../assets/arrow.svg';
import FilterProducts from '../components/FilterProducts';


function Main() {
  const [visibleCards, setVisibleCards] = useState(4);

  return (
    <div>
      <FilterProducts />
      <div className="flex justify-between items-center">
        <h1 className="text-left mb-4 mt-4 text-2xl ml-4 font-bold" style={{ marginLeft: '240px' }}>Productos</h1>
        <Link to="/products" className="flex items-center text-500 mr-4" style={{ marginRight: '295px' }}>
          Ver más
          <img className="p-2" src={arrow} alt="icono arrow" />
        </Link>
      </div>
      <div className="mb-4">
        <Card limit={visibleCards} />
      </div>
    </div>
  );
}

export default Main;
