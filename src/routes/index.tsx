import React from 'react';
import { render } from 'react-dom';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

import App from '../App';
import Home from '../screens/Home';

render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
