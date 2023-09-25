import React, { useState, useEffect } from "react";
import { removeFromCart, incrementQuantity, decrementQuantity,} from "../utils/ProductsToCart";
import { Link } from 'react-router-dom';
import ShippingModal from "../components/ShippingModal";
import deleteIcon from '../assets/delete-icon.svg';
import gifIcon from '../assets/gif-icon.svg';
import { sendShippingOrder } from "../services/ApiSendShippingOrder";

function CartProducts() {
  const [cart, setCart] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(cartItems);
  }, []);

  const handleRemoveFromCart = (itemToRemove) => {
    const updatedCart = removeFromCart(cart, itemToRemove);
    setCart(updatedCart);
  };

  const handleIncrementQuantity = (itemToIncrement) => {
    const updatedCart = incrementQuantity(cart, itemToIncrement);
    setCart(updatedCart);
  };

  const handleDecrementQuantity = (itemToDecrement) => {
    const updatedCart = decrementQuantity(cart, itemToDecrement);
    setCart(updatedCart);
  };

  const total = cart.reduce((acc, item) => {
    const itemTotal = item.product.price * item.quantity;
    return acc + itemTotal;
  }, 0).toLocaleString();

  const handleOnSubmit = (e) => {
    e.preventDefault();
    sendShippingOrder().then(res => {
      console.log(res);
    }).catch(error => console.log(error))

  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="h-screen pt-20">
      <h1 className="mb-10 text-center text-3xl font-bold">Resumen de tu pedido</h1>
      <div className="flex justify-center gap-12">
      <div className="w-[60%] px-4 space-y-6 xl:px-0">
        {cart.map((item, index) => (
          <div
            key={index}
            className="flex items-center bg-gray-100 p-4 shadow-md hover:shadow-lg mb-4"
          >
            <img
              src={item.product.image}
              alt={item.product.name}
              className="w-24 h-24 rounded-lg mr-4"
            />
            <div className="flex-grow mb-8">
              <h2 className="text-xl font-bold text-gray-900">
                {item.product.name}
              </h2>
              <p className="text-lg text-gray-700">
                Categoría: {item.product.collection}
              </p>
              <p className="text-lg" style={{color:'purple'}}>
                ₡{Math.floor(item.product.price).toLocaleString()}
              </p>
            </div>
            <div className="flex items-center space-x-4 pt-2">
              <button
                className="bg-black text-white px-4 py-2 rounded"
                onClick={() => handleDecrementQuantity(item)}
                style={{backgroundColor:'#D7BCD3'}}
              >
                -
              </button>
              <span className="text-xl font-semibold">{item.quantity}</span>
              <button
                className="text-white px-4 py-2 rounded"
                onClick={() => handleIncrementQuantity(item)}
                style={{backgroundColor:'#D7BCD3'}}
              >
                +
              </button>
              <button
                className="p-4"
                onClick={() => handleRemoveFromCart(item)}
              >
                <img src={deleteIcon} alt="Eliminar" className="rounded w-10 h-10"/>
              </button>
            </div>
          </div>
        ))}
        </div>

        <div className="h-full rounded-lg border bg-gray-100 p-6 shadow-md w-[30%]">
          <div className="mb-2 flex justify-between">
            <p className="text-gray-700">Subtotal</p>
            <p className="text-gray-700">₡{total}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-700">Tipo de envío</p>
            <p className="text-l" style={{color:"purple"}}>
            <span role="button" onClick={openModal} className="cursor-pointer">Más Info.</span>
            </p>
          </div>
          <hr className="my-4" />
          <div className="flex justify-between">
            <p className="text-lg font-bold">Total</p>
            <div>
              <p className="mb-1 text-lg font-bold">
              ₡{(total)}
              </p>
            </div>
          </div>
          <div className="flex justify-between mt-2">
            <img src={gifIcon} alt="gif icon" className="rounded w-10 h-10 "/>
            <p className="text-lg font-semibold text-black mt-3">
              Regalo especial con tu compra
              </p>
              </div>
              <p className=" text-end text-l font-semibold" style={{color:"purple"}}>
              (un estuche de lentes sin coste)</p>
          <button onClick= {handleOnSubmit} className="mt-6 w-full rounded-md bg-black py-1.5 font-medium text-blue-50">
            Orden de pedido
          </button>
          <Link to="/"  className="block mt-4 w-full rounded-md bg-white py-1.5 font-medium text-black text-center border border-black" style={{ textDecoration: 'none' }}>
            Continuar comprando
          </Link>
        </div>
        </div>
      <ShippingModal showModal={showModal} handleCloseModal={closeModal} />
    </div>
  );
}

export default CartProducts;




