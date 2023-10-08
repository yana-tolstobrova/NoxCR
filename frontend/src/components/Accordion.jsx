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
    <div className="bg-black flex flex-col items-center text-white py-16 px-10 xl:px-28 md:px-20" style={{ ...customStyles }}>
      <h1 className="text-4xl w-full text-start font-bold mb-8 md:text-2xl xl:text-3xl xl:mb-16" id="faq">Preguntas frecuentes</h1>
      <div className="text-black flex flex-col gap-2 w-full">
        {props.accordionItems.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-gray-300"
          >
            <div
              className="px-4 py-2 cursor-pointer flex justify-between items-center"
              onClick={() => toggleItem(index)}
            >
              <h2 className="text-xl font-medium">{item.title}</h2>
              <img id="eye-image" className="w-16 h-16 md:w-10 md:h-10" src={openItemIndex === index ? eyeOpen : eyeClose} alt="ojo de apertura" />
            </div>
            {index === openItemIndex && (
              <div className="py-10 px-8 bg-gray-100 md:py-6 xl:p-10">
                <p className="text-2xl md:text-base xl:text-xl 2xl:leading-relaxed" >{item.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      {props.showDownloadLink && (
        <div className="flex justify-end items-center w-full text-white pt-12" style={{ color: '#EBEBEB' }}>
          <a
            href={pdfCare}
            target="_blank"
            rel="noopener noreferrer"
            download="cuidados-noxcr.pdf"
            className="flex items-end text-400 text-2xl md:text-base xl:text-lg"
          >
            Descargar PDF
            <img className="px-2" src={arrow} alt="icon arrow" />
          </a>
        </div>
      )}
    </div>
  );
}

export default Accordion;

