import React from "react";

function ShippingModal({ showModal, handleCloseModal }) {
  return (
    showModal && (
      <div className="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50 py-10">
        <div className="max-h-full w-full max-w-xl overflow-y-auto sm:rounded-2xl bg-white">
          <div className="w-full">
            <div className="m-6 my-20 max-w-[400px] mx-auto">
              <div className="mb-8">
                <h1 className="mb-4 text-3xl font-extrabold">Envío no incluido</h1>
                <p className="text-gray-600">
                  Obtén más información sobre las opciones de envío disponibles comunicandote con nosotros.
                </p>
              </div>
              <h2 className="text-xl font-bold text-center mb-6">Precios apróximados</h2>
              <div className="space-y-4">
                <h2 className="text-xl font-semibold">Envío con UberFlash (Mismo Día)</h2>
                <ul className="list-disc ml-6">
                  <li>Precio aprox. El Limón: $35,000</li>
                  <li>Precio aprox. Puntarenas: $35,000</li>
                  <li>Precio aprox. El Cartago: $15,000</li>
                  <li>Precio aprox. San José: $5,000</li>
                </ul>
                <h2 className="text-xl font-semibold">Envío con Correos (24-72 Horas)</h2>
                <ul className="list-disc ml-6">
                  <li>Precio aprox. El Limón: 6,000</li>
                  <li>Precio aprox. Puntarenas: $6,000</li>
                  <li>Precio aprox. El Cartago: $2,500</li>
                  <li>Precio aprox. San José: $1,000</li>
                </ul>
                <button
                  className="p-3 bg-black rounded-full text-white w-full font-semibold"
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
