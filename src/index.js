import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'; 
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import store from './Redux/store/store.js';
 
 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 

    <Provider store={store}>
       <App />
      <ToastContainer />
    </Provider>
);

 
