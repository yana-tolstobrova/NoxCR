import React, { useState } from 'react';
import Card from '../components/Card';
import { Link } from 'react-router-dom';
import arrow from '../assets/arrow.svg';
import FilterProducts from '../components/FilterProducts';
import Carousel from '../components/Carousel';
import Accordion from '../components/Accordion';
import Care from '../components/Care';


function Main() {
  const [visibleCards, setVisibleCards] = useState(4);

  return (
    <div>
      <Carousel />
      <h2 className="text-center mb-4 mt-4 text-2xl ml-4 font-bold" >Nuestros lentes de contacto</h2>
      <FilterProducts />
      <div className="flex justify-between items-center">
        <h2 className="text-left mb-4 mt-4 text-2xl ml-4 font-bold" style={{ marginLeft: '240px' }}>Productos</h2>
        <Link to="/products" className="flex items-center text-500 mr-4" style={{ marginRight: '295px' }}>
          Ver más
          <img className="p-2" src={arrow} alt="icono arrow del carrusel" />
        </Link>
      </div>
      <div className="mb-4">
        <Card limit={visibleCards} />
      </div>
      <Care />
      <Accordion />
    </div>
  );
}

export default Main;
