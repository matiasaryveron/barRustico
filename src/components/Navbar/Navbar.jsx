import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaPhoneAlt, FaWhatsapp, FaInstagram } from 'react-icons/fa';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [nextSection, setNextSection] = useState(null);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 500 });
  }, []);

  const handleSectionClick = (section) => {
    if (section === activeSection) {
      setIsClosing(true);
      setTimeout(() => {
        setActiveSection(null);
        setIsClosing(false);
      }, 500);
    } else {
      if (activeSection) {
        setNextSection(section);
        setIsClosing(true);
        setTimeout(() => {
          setActiveSection(nextSection);
          setNextSection(null);
          setIsClosing(false);
        }, 500);
      } else {
        setActiveSection(section);
      }
    }
  };

  return (
    <nav className="bottom-0 left-0 w-full p-4 bg-black relative z-50">
      <ul className="flex space-x-12 justify-center">
        <li>
          <button 
            onClick={() => handleSectionClick('servicios')} 
            className="text-white text-xl transition-transform duration-300 transform hover:scale-110"
          >
            Servicios
          </button>
        </li>
        <li>
          <button 
            onClick={() => handleSectionClick('ubicacion')} 
            className="text-white text-xl transition-transform duration-300 transform hover:scale-110"
          >
            Ubicación
          </button>
        </li>
        <li>
          <button 
            onClick={() => handleSectionClick('contacto')} 
            className="text-white text-xl transition-transform duration-300 transform hover:scale-110"
          >
            Contacto
          </button>
        </li>
      </ul>

      {(activeSection || nextSection) && (
        <div
          className={`absolute bottom-16 left-1/2 transform -translate-x-1/2 w-full flex justify-center transition-opacity duration-500 ${isClosing ? 'opacity-0' : 'opacity-100'}`}
        >
          <div
            className="bg-black text-white p-4 rounded-lg w-11/12 md:w-1/2 lg:w-1/3 relative"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <button className="absolute top-2 right-2 text-white" onClick={() => handleSectionClick(activeSection)}>X</button>
            <h2 className="text-2xl font-bold capitalize text-center mb-4 mt-8">{activeSection || nextSection}</h2>
            {activeSection === 'servicios' && (
              <p className="text-center">
                En <strong>Rustico</strong>, ofrecemos un amplio espacio con mesas de pool. Disfruta de nuestras deliciosas hamburguesas, pizzas, y picadas, acompañadas de una variedad de tragos y cócteles. ¡Ven y vive una experiencia única en Mataderos! Todos los días de 19:00 hs a 04:00 hs.
              </p>
            )}
            {activeSection === 'ubicacion' && (
              <div className="w-full h-96 mt-4">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3281.820238522828!2d-58.515663924257346!3d-34.65924247293443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc8fe9613181d%3A0xba97a82cfa426345!2sRUSTICO%20Mataderos!5e0!3m2!1ses-419!2sar!4v1724786033227!5m2!1ses-419!2sar"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                >
                </iframe>
              </div>
            )}
            {activeSection === 'contacto' && (
              <div className="mt-4 text-center">
                <p className="text-lg font-bold mb-2">Contáctanos:</p>
                <div className="flex justify-center items-center mb-2">
                  <FaPhoneAlt className="text-blue-600 mr-2" />
                  <span>(011) 1234-5678</span>
                </div>
                <div className="flex justify-center items-center mb-2">
                  <FaWhatsapp className="text-green-600 mr-2" />
                  <span>+54 9 11 1234-5678</span>
                </div>
                <div className="flex justify-center items-center mb-2">
                  <FaInstagram className="text-pink-600 mr-2" />
                  <span>@rusticopoolmataderos</span>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
