// App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Starred from './pages/Starred';
import Show from './pages/Show';
import MainLayout from './components/MainLayout';
import { GlobalTheme } from './theme';

function App() {
  return (
    <GlobalTheme>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/starred" element={<Starred />} />
          </Route>
          <Route path="/show/:showId" element={<Show />} />
          <Route path="/*" element={<div>Page Not Found</div>} />
        </Routes>
      </BrowserRouter>
    </GlobalTheme>
  );
}

export default App;
