import React from 'react';
import { TwLink } from './TwLink';

function OrderQuestionsModal({ showModal, handleCloseModal, handleContinueToOrder, questionsAnswered, setQuestionsAnswered }) {

  return (
    showModal && (
      <div data-testid="order-questions-modal" className="fixed left-0 top-0 flex w-full items-center justify-center bg-black bg-opacity-50 py-10">
        <div className="max-h-full w-full max-w-xl overflow-y-auto sm:rounded-sm bg-white">
          <div className="w-full">
            <div className="m-6 my-20 max-w-[400px] mx-auto">
              <h1 className="mb-4 text-3xl text-left font-extrabold text-gray-800">Preguntas importantes antes de la compra</h1>

              <ul className="ml-2 text-base text-gray-700">
                  <li className='mb-4'>¿Ya has usado Lentes de contacto anteriormente?</li>
                  <li className='mb-4'>¿Conoces los cuidados, precauciones y limpieza de tus lentes de contacto?</li>
                  <li className='mb-4'>¿Cuentas con la solución multipropósito para desinfectarlos adecuadamente?</li>
                </ul>
                <h2 className="text-lg font-semibold text-gray-700 mt-10 ">Para más información comunicate con nosotros a traves de nuestro</h2>

                <TwLink as="anchor" href="https://wa.me/50684993726" className="text-xl font-semibold hover:font-semibold hover:underline flex justify-center mt-2" target="_blank">WhatsApp</TwLink>
                <div className='text-center'>
                  <button
                    type="button"
                    onClick={handleContinueToOrder} 
                    className="p-2 mt-6 mb-2 bg-black text-white w-full font-semibold hover:bg-white hover:text-black border-black border py-2 bg-black text-white"
                  >
                    Aceptar
                  </button>
                  <a  className='hover:font-semibold hover:underline' href="/add-to-cart"style={{ color: '#55285A' }}>Volver</a>
                </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default OrderQuestionsModal;
