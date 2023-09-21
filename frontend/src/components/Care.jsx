import React from 'react';
import imgCare from '../assets/img-care.svg';
import careData from '../data/dataCareProducts';

function Care() {
  return (
    <div className="mx-auto max-w-screen-xl px-4">
      <div className="flex justify-center space-x-6 m-10">
        {careData.map((care, index) => (
          <div key={index} className="bg-white p-4 pt-0 rounded-lg w-1/3">
            <div className="flex justify-center mb-4">
              <img
                src={imgCare}
                alt="Imagen de cuidados"
                className="w-36 h-36 object-cover rounded-full mb-2"
              />
            </div>
            <p className="text-left text-lg font-500 mb-2">{care.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Care;

