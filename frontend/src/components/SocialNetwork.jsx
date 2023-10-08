import React, { useState } from 'react';

import socialNetwork1 from '../assets/img1-social-network.webp';
import socialNetwork2 from '../assets/img2-social-network.webp';
import socialNetwork3 from '../assets/img3-social-network.webp';
import socialNetwork4 from '../assets/img4-social-network.webp';
import socialNetwork5 from '../assets/img5-social-network.webp';
import socialNetwork6 from '../assets/img6-social-network.webp';
import closeButton from '../assets/close.svg';

function SocialNetwork() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState('');
  const [lightboxText, setLightboxText] = useState('');

  const openLightbox = (imageSrc, text) => {
    setLightboxOpen(true);
    setLightboxImage(imageSrc);
    setLightboxText(text);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setLightboxImage('');
    setLightboxText('');
  };

  const largeImages = [socialNetwork1, socialNetwork2]; 
  const smallImages = [socialNetwork3, socialNetwork4, socialNetwork5, socialNetwork6];
  
  const imageTexts = [
    "Noxy @blingblackdolly",
    "Noxi @libby_arcemakeup",
    "Noxi @makeup_byfrancella",
    "Noxi @_prettyboyem_",
    "Noxi @lui04gm",
    "Noxi @treibc_makeup",
  ];

  return (
    <div data-testid="social-network-component" className="py-10 px-10 xl:px-28 mb-10 md:px-20 md:py-0">
      <div className="flex flex-wrap">
        <div className="flex w-1/2">
          {largeImages.map((image, index) => (
            <div key={index} className={`w-${index === 0 ? '1/2' : 'full'} md:p-2`}>
              <img
                alt="gallery"
                data-testid={`gallery-image-${index}`}
                className="block h-[420px] h-full w-full rounded-lg object-cover object-center cursor-zoom-in"
                src={image}
                onClick={() => openLightbox(image, imageTexts[index])} 
              />
            </div>
          ))}
        </div>
        <div className="flex w-1/2 flex-wrap">
          {smallImages.map((image, index) => (
            <div key={index} className="w-1/2 md:p-2">
              <img
                alt="gallery"
                className="block h-[205px] h-full w-full rounded-lg object-cover object-center cursor-zoom-in"
                src={image}
                onClick={() => openLightbox(image, imageTexts[index + 2])} 
              />
            </div>
          ))}
        </div>
      </div>

      {lightboxOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 flex justify-center items-center"
          onClick={closeLightbox}
          data-testid="lightbox"
        >
          <div className="lightbox-container">
            <img
              src={lightboxImage}
              alt="Lightbox Image"
              className="w-full max-h-full cursor-zoom-in"
            />
            <div className="text-white font-bold text-2xl absolute bottom-20 left-1/2 transform -translate-x-1/2 text-center bg-gray-100 bg-opacity-25">
              {lightboxText}
            </div> 
            <button
              className="absolute top-4 right-5 text-3xl cursor-pointer text-white"
              onClick={closeLightbox}
              data-testid="close-button"
            >
              <img src={closeButton} alt="close button" className="rounded w-8 h-8 m-3 "/>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default SocialNetwork;





