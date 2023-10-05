import React, { useState, useEffect } from "react";
import { useMyCart } from "../contexts/MyCartContext";
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
import OrderQuestionsModal from "../components/OrderQuestionsModal";
import { createOrder } from "../services/ApiPostOrders";
import { createOrderLine } from "../services/ApiPostOrderLines";
import { editProductQuantity, getPhotos } from "../services/ApiProducts";
import ModalSuccess from "../components/ModalSuccess";
import verificationNegative from "../assets/verification-negative.svg";

function CartProducts() {
  const { cartCount, updateCartCount } = useMyCart();
  const [cart, setCart] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showModalOrder, setShowModalOrder] = useState(false);
  const [showOrderQuestionsModal, setShowOrderQuestionsModal] = useState(false);
  const [questionsAnswered, setQuestionsAnswered] = useState(false);
  const [photos, setPhotos] = useState();
  const [showProductOutOfStockModal, setShowProductOutOfStockModal] =
    useState(false);

  const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);

  const calculateTotalQuantity = (cart) => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  useEffect(() => {
    updateCartCount(totalQuantity);
  }, [totalQuantity, updateCartCount]);

  console.log(calculateTotalQuantity);

  const [formData, setFormData] = useState({
    name_complete: "",
    cedula: "",
    address: "",
    phone: "",
    birth_date: "",
    total_amount: "",
    shipping_type: "",
  });

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(cartItems);
    const fetchPhotos = async () => {
      const allPhotos = await getPhotos();
      setPhotos(allPhotos);
    };

    fetchPhotos();
  }, []);
  const getProductPhoto = (productId) => {
    if (photos) {
      const productPhotos = photos.filter(
        (photo) => photo.product_id === productId
      );
      if (productPhotos.length > 0) {
        return productPhotos[0].url;
      }
    }
    return "No hay ninguna foto del producto";
  };

  const handleRemoveFromCart = (itemToRemove) => {
    const updatedCart = removeFromCart(cart, itemToRemove);
    setCart(updatedCart);

    const cartTotal = updatedCart.reduce((acc, item) => acc + item.quantity, 0);
    localStorage.setItem("cartTotal", cartTotal.toString());
    localStorage.setItem("cart", JSON.stringify(updatedCart));

    console.log("Carrito actualizado después de eliminar:", updatedCart);
  };

  const handleIncrementQuantity = (itemToIncrement) => {
    const updatedCart = incrementQuantity(cart, itemToIncrement);
    setCart(updatedCart);

    localStorage.setItem("cart", JSON.stringify(updatedCart));

    console.log("Carrito actualizado después de incrementar:", updatedCart);
  };

  const handleDecrementQuantity = (itemToDecrement) => {
    const updatedCart = decrementQuantity(cart, itemToDecrement);
    setCart(updatedCart);

    localStorage.setItem("cart", JSON.stringify(updatedCart));

    console.log("Carrito actualizado después de decrementar:", updatedCart);
  };

  const total = cart.reduce((acc, item) => {
    const itemTotal = item.product.price * item.quantity;
    return acc + itemTotal;
  }, 0);

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

  const handleOrderSubmit = async () => {
    try {
      const editProductPromises = cart.map(async (item) => {
        const newQuantity = item.product.quantity - item.quantity;

        await editProductQuantity(item.product.id, { quantity: newQuantity });

        if (newQuantity <= 0) {
          setShowProductOutOfStockModal(true);
        }
      });

      await Promise.all(editProductPromises);

      const orderId = await createOrder(formData);
      handleOrderLinesSubmit(orderId);
      console.log("sylvia", formData);
      sendOrderEmail(formData);

      localStorage.removeItem("cart");
      setCart([]);

      console.log("Carrito después de eliminar en handleOrderSubmit:", cart);
    } catch (error) {
      console.error("Error handling order submit:", error);
    }
  };

  const sendOrderEmail = (formData) => {
    console.log("cart", cart);
    const emailData = {
      order_id: formData.orderId,
      name: formData.name_complete,
      cedula: formData.cedula,
      address: formData.address,
      total_amount: formData.total_amount,
      shipping_type: formData.shipping_type,
      products: JSON.stringify(cart),
      data: "lista productos",
    };

    sendShippingOrder(emailData);
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

      createOrderLine(orderLineData)
        .then((orderLineResponse) => {
          console.log(
            "Respuesta de la creación de línea de orden:",
            orderLineResponse
          );
        })
        .catch((error) => {
          console.error("Error al crear la línea de orden:", error);
        });
    });
  };

  const openOrderQuestionsModal = () => {
    setShowOrderQuestionsModal(true);
  };

  const closeOrderQuestionsModal = () => {
    setShowOrderQuestionsModal(false);
  };

  const handleContinueToOrder = () => {
    closeOrderQuestionsModal();
    openModalOrder();
  };

  const handleConfirmOrder = () => {
    openOrderQuestionsModal();
  };

  return (
    <div className="h-screen pt-20">
      <h1
        className="mb-10 text-center text-3xl font-bold"
        style={{ color: "#3C2046" }}
      >
        Resumen de tu pedido
      </h1>
      <div className="flex justify-center gap-12">
        <div className="w-[50%] px-4 space-y-6 xl:px-0">
          {cart.map((item, index) => (
            <div key={index} className="flex items-center bg-gray-100 p-4">
              <img
                src={getProductPhoto(item.product.id)}
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
                <p className="text-lg" style={{ color: "#3C2046" }}>
                  {item.product.quantity <= 3 ? "Pocas Unidades en Stock" : " "}
                </p>
                <p className="text-lg" style={{ color: "#3C2046" }}>
                  ₡{Math.floor(item.product.price).toLocaleString()}
                </p>
              </div>
              <div className="flex items-center space-x-4 pt-2">
                <button
                  className="bg-black px-4 py-2 rounded-sm font-black"
                  onClick={() => handleDecrementQuantity(item)}
                  style={{ backgroundColor: "#D7BCD3", color: "#3C2046" }}
                >
                  -
                </button>
                <span className="text-xl font-semibold">{item.quantity}</span>
                <button
                  className="px-4 py-2 rounded-sm font-black"
                  onClick={() => handleIncrementQuantity(item)}
                  style={{ backgroundColor: "#D7BCD3", color: "#3C2046" }}
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
          <p
            className=" text-end text-sm font-medium"
            style={{ color: "#3C2046" }}
          >
            (Un estuche de lentes sin coste)
          </p>
          <hr className="my-4" />
          <div className="flex justify-between">
            <p className="text-lg font-black" style={{ color: "#3C2046" }}>
              Total
            </p>
            <div>
              <p
                className="mb-1 text-lg font-black"
                style={{ color: "#3C2046" }}
              >
                ₡{total}
              </p>
            </div>
          </div>
          <button
            onClick={handleConfirmOrder}
            className="mt-6 w-full bg-black py-1.5 font-medium text-white hover:bg-white hover:text-black border-black border py-2 bg-black"
          >
            Confirmar pedido
          </button>
          <Link
            to="/"
            className="block mt-4 w-full bg-white py-1.5 font-medium text-black text-center border border-black"
            style={{ textDecoration: "none" }}
          >
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
        <OrderQuestionsModal
          showModal={showOrderQuestionsModal}
          handleCloseModal={closeOrderQuestionsModal}
          handleContinueToOrder={handleContinueToOrder}
          questionsAnswered={questionsAnswered}
          setQuestionsAnswered={setQuestionsAnswered}
        />
        <ModalSuccess
          showModal={showProductOutOfStockModal}
          handleCloseModal={() => setShowProductOutOfStockModal(false)}
          close={() => setShowProductOutOfStockModal(false)}
          image={verificationNegative}
          title={`Producto agotado`}
          text={`Comunícate con nosotros y te diremos el tiempo estimado para reponerlo.`}
        />
      </div>
    </div>
  );
}

export default CartProducts;
