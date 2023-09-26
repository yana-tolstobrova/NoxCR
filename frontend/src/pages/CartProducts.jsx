import React, { useState, useEffect } from "react";
import {
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} from "../utils/ProductsToCart";
import { Link } from "react-router-dom";
import ShippingModal from "../components/ShippingModal";
import deleteIcon from "../assets/delete-icon.svg";
import gifIcon from "../assets/gif-icon.svg";
import { sendShippingOrder } from "../services/ApiSendShippingOrder";
import OrderModal from "../components/OrderModal";
import axios from "axios";

function CartProducts() {
  const [cart, setCart] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showModalOrder, setShowModalOrder] = useState(false);
  const [formData, setFormData] = useState({
    address: "",
    phone: "",
    total_amount: "",
    // birthdate: "", 
  });

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
  }, 0);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    sendShippingOrder()
      .then((res) => {
        console.log(res);
      })
      .catch((error) => console.log(error));
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const openModalOrder = () => {
    setShowModalOrder(true);
  };

  const closeModalOrder = () => {
    setShowModalOrder(false);
  };

  const handleOrderSubmit = () => {
    axios
      .post("http://localhost:8000/api/orders", formData, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
      .then((response) => {
        const orderId = response.data.data.id;
        console.log(response);
        handleOrderLinesSubmit(orderId);
      })
      .catch((error) => {
        console.error("Error al crear la orden:", error);
      });
  };
  
  const handleOrderLinesSubmit = (orderId) => {
    cart.forEach((item) => {
      const orderLineData = {
        order_id: orderId,
        product_id: item.product.id,
        name: item.product.name,
        quantity: item.quantity,
        price: item.product.price,
      };
      console.log(cart);
      console.log("orderId:", orderId);
      console.log("product_id:", item.product.id);
  
      axios
        .post("http://localhost:8000/api/order-lines", orderLineData, {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        })
        .then((orderLineResponse) => {
          console.log(orderLineResponse);
        })
        .catch((error) => {
          console.error("Error al crear la línea de orden:", error);
        });
    });
  };
  



  
  

  return (
    <div className="h-screen pt-20">
      <h1 className="mb-10 text-center text-3xl font-bold"style={{ color: "#3C2046" }}>Resumen de tu pedido</h1>
      <div className="flex justify-center gap-12">
        <div className="w-[50%] px-4 space-y-6 xl:px-0">
          {cart.map((item, index) => (
            <div
              key={index}
              className="flex items-center bg-gray-100 p-4"
            >
              <img
                src={item.product.image}
                alt={item.product.name}
                className="w-24 h-24 rounded-sm mr-4"
              />
              <div className="flex-grow mb-8">
                <h2 className="text-xl font-bold text-gray-600">
                  {item.product.name}
                </h2>
                <p className="text-lg text-gray-500">
                  Categoría: {item.product.collection}
                </p>
                <p className="text-lg" style={{ color: '#3C2046' }}>
                  ₡{Math.floor(item.product.price).toLocaleString()}
                </p>
              </div>
              <div className="flex items-center space-x-4 pt-2">
                <button
                  className="bg-black text-white px-4 py-2 rounded-sm font-black"
                  onClick={() => handleDecrementQuantity(item)}
                  style={{ backgroundColor: '#D7BCD3', color:"#3C2046" }}
                >
                  -
                </button>
                <span className="text-xl font-semibold">{item.quantity}</span>
                <button
                  className="text-white px-4 py-2 rounded-sm font-black"
                  onClick={() => handleIncrementQuantity(item)}
                  style={{ backgroundColor: '#D7BCD3', color:"#3C2046" }}
                >
                  +
                </button>
                <button
                  className="p-4"
                  onClick={() => handleRemoveFromCart(item)}
                >
                  <img
                    src={deleteIcon}
                    alt="Eliminar"
                    className="rounded w-10 h-10"
                  />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="h-full rounded-sm border bg-gray-100 p-6 shadow-md w-[30%]">
          <div className="mb-2 flex justify-between">
            <p className="text-gray-700">Subtotal</p>
            <p className="text-gray-700">₡{total}</p>
          </div>
          <div className="flex justify-between">
            <p className="text-gray-700">Tipo de envío</p>
            <p className="text-l hover:underline" style={{ color: "#3C2046" }}>
              <span
                role="button"
                onClick={openModal}
                className="cursor-pointer"
              >
                Más info.
              </span>
            </p>
          </div>
          <div className="flex justify-between mt-2">
            <img src={gifIcon} alt="gif icon" className="rounded w-8 h-8 " />
            <p className="text-base font-semibold text-black mt-3">
              Regalo especial con tu compra
            </p>
          </div>
          <p className=" text-end text-sm font-medium" style={{ color: "#3C2046" }}>
            (Un estuche de lentes sin coste)
          </p>
          <hr className="my-4" />
          <div className="flex justify-between">
            <p className="text-lg font-black" style={{ color: "#3C2046" }}>Total</p>
            <div>
              <p className="mb-1 text-lg font-black"style={{ color: "#3C2046" }}>
                ₡{(total)}
              </p>
            </div>
          </div>
          <span role="button" onClick={openModalOrder} className="cursor-pointer">Orden</span>
          <button onClick={handleOnSubmit} className="mt-6 w-full bg-black py-1.5 font-medium text-white hover:bg-white hover:text-black border-black border py-2 bg-black">
            Confirmar pedido
          </button>
          <Link to="/" className="block mt-4 w-full bg-white py-1.5 font-medium text-black text-center border border-black" style={{ textDecoration: 'none' }}>
            Continuar comprando
          </Link>
        </div>
        <ShippingModal showModal={showModal} handleCloseModal={closeModal} />
        <OrderModal
          showModal={showModalOrder}
          handleCloseModal={closeModalOrder}
          handleOrderSubmit={handleOrderSubmit}
          formData={formData}
          setFormData={setFormData}
          total={total}
        />
      </div>
    </div>
  );
}

export default CartProducts;


