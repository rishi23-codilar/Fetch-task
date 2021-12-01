import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.js';
import Pagination from './Pagination/pagination.js';

ReactDOM.render(
  <React.StrictMode>
  <App/>
  <Pagination />
  </React.StrictMode>,
  document.getElementById('root')
);

