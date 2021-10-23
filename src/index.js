import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App.js';
import { BrowserRouter } from 'react-router-dom';

const router = <BrowserRouter> <App className="app" /> </BrowserRouter>

ReactDOM.render(
  <React.StrictMode>
    {router}
  </React.StrictMode>,
  document.getElementById('root')
);
