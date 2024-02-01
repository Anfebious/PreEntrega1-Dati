import logo from './logo.svg';
import { React, useState } from "react";
import Navbar from "./components/NavBar"
import './App.css';
import Home from "./components/Home";
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  const [cantidadCarrito, setCantidadCarrito] = useState(0);
  const actualizarCarrito = (cantidad) => {
    console.log(cantidad)
    console.log(cantidadCarrito)
    setCantidadCarrito(cantidad + cantidadCarrito)
  }
  return (
    <>
    <BrowserRouter>
    <Navbar cantidadCarrito = {cantidadCarrito}/>
      <Routes>
        <Route exact path= "/" element={<Home/>} />
        <Route exact path= "/category/:categoria?" element={<ItemListContainer/>} />
        <Route exact path= "/item/:card" element={<ItemDetailContainer actualizarCarrito = {actualizarCarrito}/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
