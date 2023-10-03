import React from 'react';
import careData from '../data/dataCareProducts';

function Care() {
  return (
    <div data-testid="care-component" className="mx-auto px-2">
      <div className="flex flex-col my-12 md:flex-row justify-center space-x-6 m-10 2xl:mx-32">
        {careData.map((care, index) => (
          <div key={index} className="bg-white pt-2 rounded-lg md:w-1/3 mx-4 md:mx-0 2xl:mx-2" data-testid={`care-item-${index}`}>
            <div className="flex justify-center mb-4">
              <img
                src={require(`../assets/${care.img}`)}
                alt="Imagen de cuidados"
                className="w-64 h-64 mt-8 mb-6 md:w-40 md:h-40 2xl:w-96 2xl:h-96 object-cover rounded-full mb-2"
              />
            </div>
            <p className="text-4xl m-4 text-gray-800 leading-relaxed md:text-xl md:leading-8 2xl:m-14 2xl:text-5xl 2xl:leading-relaxed" style={{ color: "#575757" }}>{care.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Care;
