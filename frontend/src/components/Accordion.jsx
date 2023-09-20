import React, { useState } from 'react';
import arrowCarousel from '../assets/arrow-carousel.svg'
import arrow from '../assets/arrow.svg'
import accordionItems from '../data/dataAccordion';

function Accordion() {
  const [openItemIndex, setOpenItemIndex] = useState(null);

  const toggleItem = (index) => {
    if (index === openItemIndex) {
      setOpenItemIndex(null);
    } else {
      setOpenItemIndex(index);
    }
  };

  return (
    <div className="bg-black text-white" style={{ padding: '70px 120px 100px 120px' }}>
    <h1 className="text-2xl font-semibold mb-4">Preguntas frecuentes</h1>
    <div className="bg-white text-black">
      {accordionItems.map((item, index) => (
        <div
          key={index}
          className="border border-gray-300 rounded"
        >
          <div
            className="p-3 cursor-pointer flex justify-between items-center"
            onClick={() => toggleItem(index)}
            style={{
              border: '8px solid black',
              margin: '0', 
            }}
          >
            <h2 className="text-lg font-semibold">{item.title}</h2>
            <span className={`transform transition-transform ${index === openItemIndex ? 'rotate-180' : ''} `}>
                <img className="p-2" src={arrowCarousel} alt="icono arrow carousel" />
            </span>
          </div>
          {index === openItemIndex && (
            <div className="p-3 bg-gray-100">
              <p>{item.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
    <div className="flex justify-end text-white p-2" style={{ color: 'gray' }}> 
        <a
          href="/ruta-del-archivo.pdf" // Reemplaza con la ruta correcta de tu archivo PDF
          download="nombre-del-archivo.pdf" // Reemplaza con el nombre deseado para el archivo descargado
          className="flex items-end text-400"
        >
          Descargar PDF
          <img className="p-1" src={arrow} alt="icono arrow" />
        </a>
      </div>
    </div>
  );
}

export default Accordion;
