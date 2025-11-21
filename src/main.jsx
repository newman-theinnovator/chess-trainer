import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';

import Home from './pages/Home';
import LevelPatterns from './pages/LevelPatterns';
import Trainer from './pages/Trainer';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/patterns/:level" element={<LevelPatterns />} />
      <Route path="/trainer/:patternId" element={<Trainer />} />
    </Routes>
  </BrowserRouter>
);
