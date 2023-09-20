import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchProductDetails } from "../services/ApiGetProductDetails";
import { addToCart } from "../utils/ProductsToCart";

function DetailProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(0);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productData = await fetchProductDetails(id);
        setProduct(productData);
      } catch (error) {
        console.error("Error fetching product details:", error);
        setProduct(null);
      }
    };

    fetchData();
  }, [id]);

  const handleAddToCart = () => {
    const totalPrice = roundedPrice * quantity;
    addToCart(product, quantity);
    window.location.href = "/add-to-cart"; 
  };

  if (!product) {
    return <div>Cargando...</div>;
  }

  const roundedPrice = Math.round(product.price).toLocaleString();

  return (
    <div className="p-4 space-y-4 md:w-3/4 md:mx-auto">
      <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 w-64 h-64" style={{height: '500px'}}>
            <div className="relative w-full h-full">
              <img
                src={product.image}
                alt={product.name}
                className="absolute inset-0 w-full h-full object-cover rounded-lg"
              />
              </div>
            </div>
        <div className="md:w-1/2 space-y-4 md:pl-6">
          <h1 className="text-4xl font-bold text-gray-800">{product.name}</h1>
          <p className="text-xl text-gray-500">Colección: {product.collection} {product.color}</p>
          <p className="text-lg text-gray-600">{product.detail}</p>
          <div className="flex justify-center">
          <div className="flex items-center space-x-4 pt-6">
            <button
              className="bg-black text-white px-4 py-2 rounded"
              onClick={() => setQuantity(Math.max(0, quantity - 1))}
              >
              -
            </button>
            <span className="text-xl font-semibold">{quantity}</span>
            <button
              className="bg-black text-white px-4 py-2 rounded"
              onClick={() => setQuantity(quantity + 1)}
              >
              +
            </button>
          </div>
          </div>
          <div className="flex justify-center">
          <button
            className="bg-black text-white px-16 py-2 rounded"
            onClick={handleAddToCart}
            >
            Agregar al Carrito
          </button>
          </div>
          <p className="text-2xl font-bold text-gray-800 text-right">
            ${roundedPrice}
            <span className="text-xl font-normal text-gray-600">
              /por lentillas
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default DetailProduct;

