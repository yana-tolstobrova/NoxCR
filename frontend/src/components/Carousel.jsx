import React, { useState } from 'react';

import image3 from '../assets/img1-carousel-home.webp';
import image2 from '../assets/img2-carousel-home.webp';
import image1 from '../assets/img3-carousel-home.webp';
import image4 from '../assets/img4-carousel-home.webp';

function Carousel() {
  const images = [image1, image2, image3, image4];

  const [currentSlide, setCurrentSlide] = useState(0);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + images.length) % images.length);
  };

  return (
    <div className="relative" style={{ height: '680px', marginBottom: '60px'}}>
      <div className="w-full overflow-hidden" style={{ height: '100%' }}>
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{
            transform: `translateX(-${currentSlide * (100 / images.length)}%)`,
            width: `${images.length * 100}%`,
          }}
        >
          {images.map((image, index) => (
            <div key={index} className="w-full" style={{ height: '100%' }}>
              <img
                src={image}
                alt={`Slide ${index + 1}`}
                className="block w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 mx-[15%] mb-4 flex justify-center">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => goToSlide(index)}
            className={`mx-1 box-content h-2 w-2 flex-initial cursor-pointer border-0 border-y-4 border-solid border-transparent ${
              currentSlide === index ? 'bg-white' : 'bg-gray-300'
            }`}
            aria-label={`Slide ${index + 1}`}
          ></button>
        ))}
      </div>

      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-50 px-2 py-1 rounded-full text-gray-700"
        onClick={prevSlide}
      >
        &lt;
      </button>
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white bg-opacity-50 px-2 py-1 rounded-full text-gray-700"
        onClick={nextSlide}
      >
        &gt;
      </button>
    </div>
  );
}

export default Carousel;
