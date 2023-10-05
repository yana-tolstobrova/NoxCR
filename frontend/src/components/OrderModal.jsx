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
    console.log(`Input name: ${e.target.name}, Input value: ${e.target.value}`);
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
      handleOrderSubmit();
  
      setFormData({
        name_complete: '',
        cedula: '',
        address: '',
        phone: '',
        birth_date: '',
        total_amount: '',
        shipping_type: '',
      });

      handleCloseModal();
    } catch (error) {
      console.error('Error al enviar los datos del usuario:', error);
    }
  };

  return (
    showModal && (
      <div className="fixed left-0 top-0 flex w-full items-center justify-center bg-black bg-opacity-50 py-8">
        <div className="max-h-full w-full max-w-xl overflow-y-auto sm:rounded-sm bg-white">
          <div className="w-full">
            <div className="m-6 my-18 max-w-[400px] mx-auto">
              <h1 className="text-2xl font-extrabold text-gray-800 text-center mb-2">Datos para confirmar la orden</h1>
              <h2 className="text-m font-semibold text-gray-700 mb-2">Para realizar esta compra es necesario que seas mayor de edad</h2>
              <form onSubmit={handleSubmit}>
              <div className="mb-2">
                  <label className="text-m font-normal" htmlFor="name_complete">Nombre completo</label>
                  <input
                   placeholder="Nombre y apellido"
                    type="text"
                    id="name_complete"
                    name="name_complete"
                    value={formData.name_complete}
                    onChange={handleInputChange}
                    required
                    className="w-full border border-gray-300 p-3 focus:border-black focus:outline-none"
                  />
                </div>
                <div className="mb-2">
                  <label className="text-m font-normal" htmlFor="cedula">Cédula</label>
                  <input
                    placeholder="Número de cédula"
                    type="text"
                    id="cedula"
                    name="cedula"
                    value={formData.cedula}
                    onChange={handleInputChange}
                    required
                    className="w-full border border-gray-300 p-3 focus:border-black focus:outline-none"
                  />
                </div>
                <div className="mb-4">
                  <label className="text-m font-normal" htmlFor="address">Dirección</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    required
                    className="border rounded-lg px-3 py-2 w-full focus:outline-none focus:border-purple-500"
                    placeholder="Ciudad, cantón y distrito"
                  />
                </div>
                <div className="mb-4">
                  <label className="text-m font-normal" htmlFor="phone">Teléfono</label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Teléfono"
                    required
                    className="border rounded-lg px-3 py-2 w-full focus:outline-none focus:border-purple-500"
                  />
                </div>  
                <div className="mb-2">
                  <label className="text-m font-normal" htmlFor="birthdate">Fecha de nacimiento:</label>
                  <input
                    type="date"
                    id="birth_date"
                    name="birth_date"
                    max={minBirthdate}
                    value={formData.birth_date}
                    onChange={handleInputChange}
                    required
                    className="w-full border border-gray-300 p-3 focus:border-black focus:outline-none"
                  />
                </div>
                <div className="mb-2">
                  <label className="text-m ">
                    Seleccione una opción de envio:
                  </label>
                  <div className="py-2">
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
                      className="text-base font-medium ml-2 text-gray-800"
                    >
                      UberFlash
                    </label>
                  </div>

                  <div>
                    <input
                      type="checkbox"
                      name="shipping-type"
                      id="shipping-Correo"
                      className="sm:rounded-sm"
                      checked={isCorreoSelected}
                      onChange={() => handleOptionChange("correo")}
                    />
                    <label
                      htmlFor="shipping-Correo"
                      className="text-base font-medium ml-2 text-gray-800"
                    >
                      Correo convencional
                    </label>
                  </div>
                </div>
                <div className="text-center">
                  <button
                    type="submit"
                    className="mt-2 mb-2 p-2 bg-black text-white w-full font-semibold hover:bg-white hover:text-black border-black border py-2 bg-black text-white"
                    >
                    Confirmar
                  </button>
                  <a  className='hover:font-semibold hover:underline' href="/add-to-cart"style={{ color: '#55285A' }}>Cancelar</a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

export default OrderModal;
