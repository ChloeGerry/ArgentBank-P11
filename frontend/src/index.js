import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import AllRoutes from './AllRoutes';
import Footer from './components/layouts/Footer';
import './index.css';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';
import { addUser, getUser } from './actions/user.action';

const store = configureStore({
  reducer: rootReducer,
  devTools: true,
});

store.dispatch(addUser());
store.dispatch(getUser());

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
