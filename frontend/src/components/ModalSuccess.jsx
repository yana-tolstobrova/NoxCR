import React from 'react';
import verification from "../assets/verification.svg"


export default function SuccessModal({ showModal, handleCloseModal, title, text }) {


  return (
    showModal && (
      <div className="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50 py-10">
        <div className="max-h-full w-full max-w-xl overflow-y-auto sm:rounded-sm bg-white">
          <div className="w-full">
            <div className="m-6 my-20 max-w-[400px] mx-auto">
              <div className="flex items-center justify-center mb-8">
                <img
                    src={verification}
                    alt="check"
                    className="rounded w-16 h-16"
                  />
              </div>
              <div className="mb-8">
                <h2 className="mb-4 text-xl font-extrabold text-center">{title}</h2>
              </div>
                <button
                  className="p-3 bg-black text-white w-full font-semibold"
                  onClick={handleCloseModal}
                >
                   {text}
                </button>
              </div>
            </div>
          </div>
        </div>
    )
  );
};



