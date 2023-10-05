import React from 'react';
import careData from '../data/dataCareProducts';

function Care() {
  return (
    <div data-testid="care-component" className="mx-auto px-2">
      <div className="flex flex-col my-8 md:flex-row justify-center space-x-6 m-10 2xl:mx-32 2xl:mb-24">
        {careData.map((care, index) => (
          <div key={index} className="bg-white pt-2 rounded-lg md:w-1/3 mx-4 md:mx-0 2xl:mx-2" data-testid={`care-item-${index}`}>
            <div className="flex justify-center mb-4">
              <img
                src={require(`../assets/${care.img}`)}
                alt="Imagen de cuidados"
                className="w-64 h-64 mb-6 md:w-32 md:h-32 2xl:w-64 2xl:h-64 object-cover rounded-full mb-2"
              />
            </div>
            <p className="text-3xl m-4 text-gray-800 leading-relaxed md:text-base md:leading-6 2xl:m-14 2xl:text-2xl 2xl:leading-relaxed" style={{ color: "#575757" }}>{care.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Care;
