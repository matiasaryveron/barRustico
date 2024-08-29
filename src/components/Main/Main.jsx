import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import img1 from '../../assets/1.jpg';
import img2 from '../../assets/2.jpg';
import img3 from '../../assets/3.jpg';
import img4 from '../../assets/4.jpg';

const Main = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [img1, img2, img3, img4];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative overflow-hidden h-[80vh]">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index}`}
          className={`absolute inset-0 object-cover w-full h-full transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
        />
      ))}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 p-4 z-10">
        <div className="bg-black bg-opacity-50 p-8 rounded-lg shadow-lg text-center">
          <h1 className="text-white text-4xl font-bold mb-2">RUSTICO</h1>
          <p className="text-white text-sm">Av. Juan Bautista Alberdi 7063, CABA</p>
        </div>
      </div>
    </div>
  );
};

export default Main;
