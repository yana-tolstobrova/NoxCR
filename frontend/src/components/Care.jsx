import React from 'react';
import careData from '../data/dataCareProducts';

function Care() {
  return (
    <div data-testid="care-component" className="mx-auto max-w-screen-xl px-4">
      <div className="flex flex-col mx-36 my-12 md:flex-row justify-center space-x-6 m-10">
        {careData.map((care, index) => (
          <div key={index} className="bg-white p-6 pt-2 rounded-lg md:w-1/3 mx-4 md:mx-0" data-testid={`care-item-${index}`}>
            <div className="flex justify-center mb-4">
              <img
                src={require(`../assets/${care.img}`)}
                alt="Imagen de cuidados"
                className="w-36 h-36 object-cover rounded-full mb-2"
              />
            </div>
            <p className="text-left text-xl mb-2" style={{ color: "#575757" }}>{care.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Care;
