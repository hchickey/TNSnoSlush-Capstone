import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { SnoSlush } from './components/SnoSlush';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <SnoSlush />
  </BrowserRouter>
);

// index.js is like where your query selector is but in react it is called root
//.render is having the SnoSlush componenet render everytime something changes