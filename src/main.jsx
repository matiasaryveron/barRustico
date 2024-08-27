import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import Main from './components/Main/Main';
import Navbar from './components/Navbar/Navbar';
import './index.css';
import Footer from './components/Footer/Footer';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Main />
    <Navbar />
    <Footer />
  </StrictMode>
);
