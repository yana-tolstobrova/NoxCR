import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchProductDetails } from "../services/ApiGetProductDetails";
import { addToCart } from "../utils/ProductsToCart";
import Accordion from "../components/Accordion";
import accordionItemsDetails from '../data/dataAccordionDetails';
import gifIcon from '../assets/gif-icon.svg';
import closeButton from '../assets/close.svg';
import { getPhotos } from '../services/ApiProducts';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
function DetailProduct() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [cartCount, setCartCount] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState('');
	const [photos, setPhotos]= useState();

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
    const fetchPhotos = async () => {
			const allPhotos = await getPhotos();
			setPhotos(allPhotos);
		  };
	
		fetchPhotos();
    fetchData();
  }, [id]);


  // const handleAddToCart = () => {
  //   const totalPrice = roundedPrice * quantity;
  //   addToCart(product, quantity);
  //   window.location.href = "/add-to-cart";
  // };

  const handleAddToCart = () => {
    const totalPrice = roundedPrice * quantity;
    
    // Obtén el carrito actual desde el almacenamiento local
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
  console.log(cart)
    const existingCartItem = cart.find(item => item.product.id === product.id);
  
    if (existingCartItem) {
      // El producto ya está en el carrito, incrementa la cantidad
      existingCartItem.quantity += quantity;
    } else {
      // El producto no está en el carrito, agrégalo como una nueva entrada
      cart.push({ product, quantity });
    }
  
    // Guarda el carrito actualizado en el almacenamiento local
    localStorage.setItem("cart", JSON.stringify(cart));
  
    // Actualiza el contador de productos en el carrito
    setCartCount(cart.reduce((total, item) => total + item.quantity, 0));
  
    // Redirige al usuario a la página del carrito o realiza alguna otra acción que necesites
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
    <div className="p-4 space-y-4 m-8">
      <div className="flex flex-col md:flex-row md:w-3/4 md:mx-auto justify-between">
        <div
          className="cursor-pointer w-1/2" 
        >
          <Carousel showThumbs={false} dynamicHeight className="imgPageDetails">
            {photos
              .filter((photo) => photo.product_id === product.id)
              .map((photo, index) => (
                <div key={index} onClick={() => openLightbox(photo.url)} className="flex justify-center">
                  <img src={photo.url} alt={product.name} className="w-96 h-96 object-cover"/>
                </div>
              ))}
          </Carousel>
        </div>
        <div className="md:w-1/2 space-y-3 md:pl-16">
          <h1 className="text-2xl font-bold text-gray-800 mt-8">{product.name}</h1>
          <p className="text-lg text-gray-600">{product.detail}</p>
          <p className="text-2xl font-bold text-gray-800 ">
           ₡{roundedPrice}
            <span className="text-lg font-normal text-gray-400">
            /por lentillas
            </span>
          </p>
          <div className="flex mt-2 ">
            <img src={gifIcon} alt="gif icon" className="rounded w-8 h-6 "/>
            <p className="text-lg font-semibold text-black mt-1 ml-2">
              Regalo especial con tu compra
            </p>
          </div>
          <div className="flex justify-center">
            <div className="flex items-center space-x-4 py-6">
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
