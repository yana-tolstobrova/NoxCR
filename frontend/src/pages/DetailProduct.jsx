import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchProductDetails } from "../services/ApiGetProductDetails";
import { addToCart } from "../utils/ProductsToCart";
import Accordion from "../components/Accordion";
import accordionItemsDetails from '../data/dataAccordionDetails';
import gifIcon from '../assets/gif-icon.svg';
import closeButton from '../assets/close.svg';

function DetailProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [cartCount, setCartCount] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState('');

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

  const openLightbox = (imageSrc) => {
    setLightboxOpen(true);
    setLightboxImage(imageSrc);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setLightboxImage('');
  };

  if (!product) {
    return <div>Cargando...</div>;
  }

  const roundedPrice = Math.round(product.price).toLocaleString();

  return (
    <div className="p-4 space-y-4 md:w-3/4 md:mx-auto">
      <div className="flex flex-col md:flex-row items-center">
        <div
          className="md:w-1/2 w-64 h-64 cursor-pointer" 
          onClick={() => openLightbox(product.image)} 
        >
          <div className="relative">
            <img
              src={product.image}
              alt={product.name}
              className="absolute inset-0 object-cover rounded-sm max-w-[420px] max-h-[320px]"
              style={{marginTop:'-100px'}}
            />
          </div>
        </div>
        <div className="md:w-1/2 space-y-3 md:pl-6">
          <h1 className="text-2xl font-bold text-gray-800">{product.name}</h1>
          <p className="text-lg text-gray-400">Colección: {product.collection} </p>
          <p className="text-base text-gray-600">{product.detail}</p>
          <p className="text-2xl font-bold text-gray-800 ">
           ₡{roundedPrice}
            <span className="text-base font-normal text-gray-400">
            /por lentillas
            </span>
          </p>
          <div className="flex mt-2 ">
            <img src={gifIcon} alt="gif icon" className="rounded w-8 h-6 "/>
            <p className="text-base font-semibold text-black mt-1 ml-2">
              Regalo especial con tu compra
            </p>
          </div>
          <div className="flex justify-center">
            <div className="flex items-center space-x-4 pt-6">
              <button
                className="px-4 py-2 rounded-sm font-black"
                onClick={() => setQuantity(Math.max(0, quantity - 1))}
                style={{backgroundColor:'#D7BCD3', color:"#3C2046"}}
              >
                -
              </button>
              <span className="text-xl font-semibold">{quantity}</span>
              <button
                className="px-4 py-2 rounded-sm font-black"
                onClick={() => setQuantity(quantity + 1)}
                style={{backgroundColor:'#D7BCD3', color:"#3C2046"}}
              >
                +
              </button>
            </div>
          </div>
          <div className="flex justify-center">
            <button
              className="bg-black text-white px-16 py-2 hover:bg-white hover:text-black border-black border py-2 bg-black text-white"
              onClick={handleAddToCart}
            >
              Agregar a tu pedido
            </button>
          </div>
        </div>
      </div>
      {lightboxOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 flex justify-center items-center"
          onClick={closeLightbox}
          style={{margin:'0'}}
        >
          <div className="lightbox-container">
            <img
              src={lightboxImage}
              alt="Lightbox Image"
              className="w-full max-h-full cursor-zoom-in"
            />
            <button
              className="absolute top-4 right-5 text-3xl cursor-pointer text-white"
              onClick={closeLightbox}
            >
              <img src={closeButton} alt="close button" className="rounded w-8 h-8 m-3 "/>
            </button>
          </div>
        </div>
      )}
       <Accordion accordionItems={accordionItemsDetails}   customStyles={{ backgroundColor: 'white',  padding:'0px'}}  showDownloadLink={false} />
    </div>
  );
}

export default DetailProduct;
