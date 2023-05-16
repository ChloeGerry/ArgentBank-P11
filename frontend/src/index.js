import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import AllRoutes from './AllRoutes';
import Header from './components/Header';
import Footer from './components/Footer';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Header />
    <AllRoutes />
    <Footer />
  </BrowserRouter>
);
