import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from "./components/Home";
import NasaImage from "./components/NasaImage";

import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div>
      <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="nasaimage" element={<NasaImage />}></Route> 
</Routes>
     






    </div>
    </BrowserRouter>
  );
}

export default App;
