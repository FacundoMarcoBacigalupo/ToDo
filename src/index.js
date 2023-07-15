import React, { Fragment } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './Sass/index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Fragment>
    <div className="wave"></div>
      <App />
    <div className="wave"></div>
  </Fragment>
);