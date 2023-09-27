import React from 'react';
import { TwLink } from './TwLink';

function OrderQuestionsModal({ showModal, handleCloseModal, handleContinueToOrder, questionsAnswered, setQuestionsAnswered }) {

  return (
    showModal && (
      <div className="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50 py-10">
        <div className="max-h-full w-full max-w-xl overflow-y-auto sm:rounded-2xl bg-white">
          <div className="w-full">
            <div className="m-6 my-20 max-w-[400px] mx-auto">
              <h1 className="mb-4 text-3xl font-extrabold">Preguntas importantes</h1>

              <ul className="ml-8 text-xl text-gray-700">
                  <li>¿Ya has usado Lentes de contacto anteriormente?</li>
                  <li>¿Conoces los cuidados, precauciones y limpieza de tus lentes de contacto?</li>
                  <li>¿Cuentas con la solución multipropósito para desinfectarlos adecuadamente?</li>
                </ul>
                <h2 className="text-xl font-bold text-gray-700 mt-8">Para más información comunicate con</h2>

                <TwLink as="anchor" target= "_blank" href="https://wa.me/50684993726">nosotros</TwLink>
                <button
                  type="button"
                  onClick={handleContinueToOrder} 
                  className="p-3 bg-black rounded-full text-white w-full mt-4 font-semibold"
                >
                  Continuar
                </button>
            
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default OrderQuestionsModal;
