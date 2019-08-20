import React from 'react';
import ReactDOM from 'react-dom';
import configureProductsStore from './hooks-store/products-store';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';

configureProductsStore();

ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  document.getElementById('root')
);
