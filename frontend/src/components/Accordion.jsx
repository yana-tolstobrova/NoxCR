import React, { useState, useEffect } from 'react';
import eyeOpen from '../assets/eye-open.png'
import eyeClose from '../assets/eye-close.png'
import arrow from '../assets/arrow.svg'
import pdfCare from '../assets/pdf-docs/cuidados-noxcr.pdf'

function Accordion(props) {
  const [openItemIndex, setOpenItemIndex] = useState(0); 

  const toggleItem = (index) => {
    if (index === openItemIndex) {
      setOpenItemIndex(null);
    } else {
      setOpenItemIndex(index);
    }
  };

  useEffect(() => {
    const eyeImage = document.getElementById('eye-image');
    if (eyeImage) {
      eyeImage.src = openItemIndex === null ? eyeClose : eyeOpen;
    }
  }, [openItemIndex]);

  const customStyles = props.customStyles || {};

  return (
    <div className="bg-black flex flex-col items-center text-white pt-8 2xl:pt-14 2xl:pb-16" style={{ ...customStyles }}>
      <h1 className="text-4xl pl-8 w-full text-start font-semibold mb-8 md:pl-20 md:text-3xl 2xl:text-6xl 2xl:mb-20 2xl:pl-44" id="faq">Preguntas frecuentes</h1>
      <div className="text-black w-10/12 rounded flex flex-col gap-2">
        {props.accordionItems.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-gray-300 rounded"
          >
            <div
              className="p-2 cursor-pointer flex justify-between items-center"
              onClick={() => toggleItem(index)}
            >
              <h2 className="text-3xl md:text-xl 2xl:text-5xl font-medium w-3/4">{item.title}</h2>
              <img id="eye-image" className="w-16 h-16 md:w-12 md:h-12 2xl:w-24 2xl:h-24" src={openItemIndex === index ? eyeOpen : eyeClose} alt="ojo de apertura" />
            </div>
            {index === openItemIndex && (
              <div className="py-10 px-8 bg-gray-100 md:py-6 2xl:py-16 2xl:px-24">
                <p className="text-3xl md:text-xl 2xl:text-5xl 2xl:leading-relaxed" >{item.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      {props.showDownloadLink && (
        <div className="flex justify-end items-end w-full pr-28 text-white py-6" style={{ color: '#EBEBEB' }}>
          <a
            href={pdfCare}
            target="_blank"
            rel="noopener noreferrer"
            download="cuidados-noxcr.pdf"
            className="flex items-end text-400 text-2xl md:text-lg 2xl:text-4xl"
          >
            Descargar PDF
            <img className="px-2" src={arrow} alt="icono arrow" />
          </a>
        </div>
      )}
    </div>
  );
}

export default Accordion;

