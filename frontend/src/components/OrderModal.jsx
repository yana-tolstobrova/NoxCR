import React, { useState } from "react";
import { createUserDetails } from '../services/ApiPostUserDetails'

function OrderModal({
  showModal,
  handleCloseModal,
  handleOrderSubmit,
  formData,
  setFormData,
  total,
}) {
  const [isUberFlashSelected, setIsUberFlashSelected] = useState(false);
  const [isCorreoSelected, setIsCorreoSelected] = useState(false);

  const currentDate = new Date();
  const minBirthdate = new Date(
    currentDate.getFullYear() - 18,
    currentDate.getMonth(),
    currentDate.getDate()
  )
    .toISOString()
    .split("T")[0];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      total_amount: total,
      [e.target.name]: e.target.value,
    });
  };

  const handleOptionChange = (option) => {
    if (option === "uberflash") {
      setIsUberFlashSelected(!isUberFlashSelected);
      setIsCorreoSelected(false);
    } else if (option === "correo") {
      setIsCorreoSelected(!isCorreoSelected);
      setIsUberFlashSelected(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    formData.shipping_type = isUberFlashSelected ? 'uberflash' : isCorreoSelected ? 'correo' : '';
  
    try {
      await createUserDetails(formData);
  
      setFormData({
        address: '',
        phone: '',
        birth_date: '',
        total_amount: '',
        shipping_type: '',
      });
  
      handleOrderSubmit();
  
      handleCloseModal();
    } catch (error) {
      console.error('Error al enviar los datos del usuario:', error);
    }
  };

  return (
    showModal && (
      <div className="fixed left-0 top-0 flex h-full w-full items-center justify-center bg-black bg-opacity-50 py-10">
        <div className="max-h-full w-full max-w-xl overflow-y-auto sm:rounded-sm bg-white">
          <div className="w-full">
            <div className="m-6 my-20 max-w-[400px] mx-auto">
              <h1 className="mb-4 text-3xl font-extrabold">Ingresa tus datos para la orden</h1>
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="address">Dirección:</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                    className="border rounded-lg px-3 py-2 w-full focus:outline-none focus:border-purple-500"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="phone">Teléfono:</label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="border rounded-lg px-3 py-2 w-full focus:outline-none focus:border-purple-500"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="birthdate">Fecha de nacimiento:</label>
                  <input
                    type="date"
                    id="birthdate"
                    name="birthdate"
                    max={minBirthdate}
                    required
                    className="border rounded-lg px-3 py-2 w-full focus:outline-none focus:border-purple-500"
                  />
                </div>
                <div className="mt-4 mb-4">
                  <label className="text-m font-medium">
                    Opciones de Envío:
                  </label>
                  <div>
                    <input
                      type="checkbox"
                      name="shipping-type"
                      id="shipping-UberFlash"
                      value={formData.shipping_type}
                      checked={isUberFlashSelected}
                      onChange={() => handleOptionChange("uberflash")}
                    />
                    <label
                      htmlFor="shipping-UberFlash"
                      className="text-sm font-medium ml-2"
                    >
                      UberFlash
                    </label>
                  </div>

                  <div>
                    <input
                      type="checkbox"
                      name="shipping-type"
                      id="shipping-Correo"
                      checked={isCorreoSelected}
                      onChange={() => handleOptionChange("correo")}
                    />
                    <label
                      htmlFor="shipping-Correo"
                      className="text-sm font-medium ml-2"
                    >
                      Correo Convencional
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  className="p-3 bg-black text-white w-full font-semibold"
                >
                  Confirmar
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default OrderModal;
