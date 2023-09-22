import React from 'react';

export default function Modal() {
  
  <div class="relative flex justify-center items-center">
  <button onclick="showMenu(true)" class="focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 focus:outline-none absolute z-0 top-48 py-2 px-7 bg-gray-800 text-white rounded text-base hover:bg-black">Open</button>

  <div id="menu" class="w-full h-full bg-gray-900 bg-opacity-80 top-0 fixed sticky-0">
    <div class="2xl:container  2xl:mx-auto py-48 px-4 md:px-28 flex justify-center items-center">
      <div class="w-96 md:w-auto dark:bg-gray-800 relative flex flex-col justify-center items-center bg-white py-16 px-4 md:px-24 xl:py-24 xl:px-36">
        <div role="banner">
        </div>
        <div class="mt-12">
          <h3 role="main" class="text-3xl dark:text-white lg:text-4xl font-semibold leading-7 lg:leading-9 text-center text-gray-800">Pedido confirmado exitosamente</h3>
        </div>
        <button className="hover:bg-white hover:text-black border-black border py-2 bg-black text-white">Aceptar</button>
      </div>
    </div>
  </div>
</div>
};

