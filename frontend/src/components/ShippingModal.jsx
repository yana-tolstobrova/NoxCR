import React from "react";

function ShippingModal({ showModal, handleCloseModal }) {
  return (
    showModal && (
      <div className="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50 py-10">
        <div className="max-h-full w-full max-w-xl overflow-y-auto sm:rounded-sm bg-white">
          <div className="w-full">
            <div className="m-6 my-20 max-w-[400px] mx-auto">
              <div className="mb-8">
                <h1 className="mb-4 text-3xl font-extrabold text-gray-800">Envío no incluido</h1>
                <p className="text-gray-500">
                  Obtén más información sobre las opciones de envío disponibles comunicandote con nosotros.
                </p>
              </div>
              <h2 className="text-base font-medium text-left mb-2 text-gray-800">Precios aproximados</h2>
              <div className="space-y-4">
                <h2 className="text-xl font-medium text-gray-700">Envío con UberFlash (Mismo día)</h2>
                <ul className="list-disc ml-6 text-base text-gray-600">
                  <li>Precio aprox. El Limón: ₡35,000</li>
                  <li>Precio aprox. Puntarenas: ₡35,000</li>
                  <li>Precio aprox. El Cartago: ₡15,000</li>
                  <li>Precio aprox. Alajuela: ₡5,000</li>
                  <li>Precio aprox. Puerto Caldera: ₡5,000</li>
                  <li>Precio aprox. San José: ₡3,500</li>
                </ul>
                <h2 className="text-xl font-medium text-gray-700">Envío con Correos (24-72 horas)</h2>
                <ul className="list-disc ml-6 text-base text-gray-600">
                  <li>Precio ₡2,500</li>
            
                </ul>
                <button
                  className="p-3 bg-black text-white w-full font-semibold"
                  onClick={handleCloseModal}
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default ShippingModal;
