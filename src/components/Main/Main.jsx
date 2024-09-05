import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import img1 from '../../assets/1.jpg';
import img2 from '../../assets/2.jpg';
import img3 from '../../assets/3.jpg';
import img4 from '../../assets/4.jpg';
import img5 from '../../assets/5.jpg';
import img6 from '../../assets/6.jpg';
import img7 from '../../assets/7.jpg'

const Main = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [img7, img1, img2, img3,img4,img5,img6];

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
      {/* Ajuste para mover el texto al margen izquierdo */}
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 p-4 z-10 w-full">
        <div className="bg-black bg-opacity-50 p-8 rounded-lg shadow-lg text-left w-[300px]">
          <h1 className="text-white text-4xl font-bold mb-2">RUSTICO</h1>
          <p className="text-white text-sm">Av. Juan Bautista Alberdi 7063, CABA</p>
        </div>
      </div>
    </div>
  );
  ;
};

export default Main;
