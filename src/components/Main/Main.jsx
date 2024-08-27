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
    <div className="h-screen relative overflow-hidden">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Slide ${index}`}
          className={`absolute inset-0 object-cover w-full h-full transition-opacity duration-1000 ease-in-out ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'}`}
        />
      ))}
      <div className="absolute inset-0 flex items-center justify-center text-center bg-black bg-opacity-50 p-6 rounded-lg" style={{ zIndex: 10 }}>
        <div className="relative bg-black bg-opacity-50 p-6 rounded-lg shadow-lg">
          <h1 className="text-white text-5xl font-bold mb-4">RUSTICO</h1>
          <p className="text-white text-xl mt-2">Av. Juan Bautista Alberdi 7063, CABA</p>
        </div>
      </div>
    </div>
  );
};

export default Main;
