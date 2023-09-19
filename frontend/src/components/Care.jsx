import React from 'react';
import imgCare from '../assets/img-care.svg';

function Care() {
  const careData = [
    {
      description: 'Descripción 1 An accordion menu is a vertically stacked list of headers that can be clicked to reveal or hide content associated with them. It is one of many ways you can expose content to users in a progressive manner.An accordion menu is a vertically stacked list of headers that can be clicked to reveal or hide content associated with them. It is one of many ways you can expose content to users in a progressive manner.',
    },
    {
      description: 'Descripción 2 An accordion menu is a vertically stacked list of headers that can be clicked to reveal or hide content associated with them. It is one of many ways you can expose content to users in a progressive manner.An accordion menu is a vertically stacked list of headers that can be clicked to reveal or hide content associated with them. It is one of many ways you can expose content to users in a progressive manner.',
    },
    {
      description: 'Descripción 3 An accordion menu is a vertically stacked list of headers that can be clicked to reveal or hide content associated with them. It is one of many ways you can expose content to users in a progressive manner.An accordion menu is a vertically stacked list of headers that can be clicked to reveal or hide content associated with them. It is one of many ways you can expose content to users in a progressive manner.',
    },
  ];

  return (
    <div className="mx-auto max-w-screen-xl px-4">
      <div className="flex justify-center space-x-4 m-10">
        {careData.map((care, index) => (
          <div key={index} className="bg-white p-6 rounded-lg w-1/3">
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

