import React from 'react';
import careData from '../data/dataCareProducts';

function Care() {
  return (
    <div data-testid="care-component">
      <div className="flex flex-wrap my-8 md:flex-nowrap xl:flex-nowrap xl:px-10">
        {careData.map((care, index) => (
          <div key={index} className="pt-2 mx-6 md:mx-0 md:w-1/2 w-full" data-testid={`care-item-${index}`}>
            <div className="flex justify-center mb-4">
              <img
                src={require(`../assets/${care.img}`)}
                alt="Imagen de cuidados"
                className="w-64 h-64 mb-6 md:w-32 md:h-32 xl:w-44 xl:h-44 object-cover rounded-full mb-2"
              />
            </div>
            <p className="text-2xl m-6 md:m-4 text-gray-800 leading-relaxed md:text-base md:leading-6 xl:text-lg xl:leading-relaxed text-[#575757]">{care.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Care;
