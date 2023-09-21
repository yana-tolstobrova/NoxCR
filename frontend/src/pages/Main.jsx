import React, { useState } from 'react';
import Card from '../components/Card';
import { Link } from 'react-router-dom';
import arrow from '../assets/arrow.svg';
import FilterProducts from '../components/FilterProducts';
import Carousel from '../components/Carousel';
import Accordion from '../components/Accordion';
import Care from '../components/Care';
import SocialNetwork from '../components/SocialNetwork';
import Footer from '../components/Footer';
import accordionItemsHome from '../data/dataAccordionHome';

function Main() {
  const [visibleCards, setVisibleCards] = useState(4);

  return (
    <div>
      <Carousel />
      <h2 className="text-center mb-4 mt-4 text-2xl ml-4 font-bold" >Nuestros lentes de contacto</h2>
      <FilterProducts />
      <div className="flex justify-between items-center">
        <h2 className="text-left mb-4 mt-4 text-2xl ml-4 font-bold" style={{ marginLeft: '240px' }} id="productos">Productos</h2>
        <Link to="/products" className="flex items-center text-500 mr-4" style={{ marginRight: '295px' }}>
          Ver más
          <img className="p-2" src={arrow} alt="icono arrow del carrusel" />
        </Link>
      </div>
      
      
      <div className="mb-4">
        <Card limit={visibleCards} />
      </div>

      <div className="flex justify-between items-center">
        <h2 className="text-left mb-4 mt-4 text-2xl ml-4 font-bold" style={{ marginLeft: '240px' }}>Productos de cuidados</h2>
        <Link to="/products" className="flex items-center text-500 mr-4" style={{ marginRight: '295px' }}>
          Ver más
          <img className="p-2" src={arrow} alt="icono arrow del carrusel" />
        </Link>
      </div>
      <div className="mb-4">
        <Card limit={visibleCards} />
      </div>
      <h2 className="text-left mt-8 text-2xl ml-4  font-bold" style={{ marginLeft: '240px' }}id="cuidados">Cuidados</h2>
      <Care />
      <Accordion accordionItems={accordionItemsHome} showDownloadLink={true} />
      <h2 className="text-center mb-8 mt-14 text-2xl ml-4 font-bold" >¡Echa un vistazo a cómo lucen los productos en nuestros clientes!</h2>
      <SocialNetwork />
      <Footer />
      
    </div>
  );
}

export default Main;
