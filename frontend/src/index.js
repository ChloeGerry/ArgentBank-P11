import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import AllRoutes from './AllRoutes';
import Footer from './components/layouts/Footer';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './utils/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <AllRoutes />
        <Footer />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>
);
