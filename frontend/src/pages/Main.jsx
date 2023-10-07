import React, { useState } from 'react';
import Card from '../components/Card';
import { Link } from 'react-router-dom';
import arrow from '../assets/arrow-right.svg';
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
      <div className='xl:px-24 md:px-16 px-10'>
        <h1 className="text-center mb-4 mt-12 text-4xl font-bold md:text-2xl xl:text-3xl text-color-[#3C2046]">Nuestros lentes de contacto</h1>
        <FilterProducts />
        <div className="flex justify-between mb-8 mt-28 md:mt-20 items-center">
          <h2 className="text-left font-bold text-3xl md:text-2xl xl:text-2xl text-color-[#3D3D3D]" id="productos">Productos</h2>
          <Link to="/products" className="flex items-center text-500 mr-4 hover:font-semibold hover:underline text-2xl md:text-xl xl:text-xl">
            Ver más
            <img className="ml-2"src={arrow} alt="icono arrow del carrusel" />
          </Link>
        </div>
        <div>
          <Card limit={visibleCards} />
        </div>
        <div className="flex justify-between mb-8 mt-28 md:mt-10 items-center">
          <h2 className="text-left font-bold text-3xl md:text-2xl text-color-[#3D3D3D]">Productos de cuidado</h2>
          <Link to="/products" className="flex items-center text-500 mr-4 hover:font-semibold hover:underline text-2xl md:text-xl xl:text-xl" >
            Ver más
            <img className="ml-2" src={arrow} alt="icono arrow del carrusel" />
          </Link>
        </div>
        <div>
          <Card limit={visibleCards} categoryFilter="Product" />
        </div>
      

        <h2 className="mb-4 mt-12 text-4xl font-bold md:text-2xl xl:text-3xl text-color-[#3C2046]" id="cuidados">Cuidados</h2>
      </div>
        <Care />



        <Accordion accordionItems={accordionItemsHome} showDownloadLink={true} id="faq"/>
        <h2 className="text-center mb-4 mt-20 mx-4 xl:mt-28 text-4xl font-bold md:text-xl xl:text-3xl text-color-[#3C2046] md:mt-12">¡Echa un vistazo a cómo lucen los productos en nuestros Noxi clientes!</h2>
        <SocialNetwork />
        <Footer />
    </div>
  );
}

export default Main;
