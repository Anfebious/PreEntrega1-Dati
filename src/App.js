import logo from './logo.svg';
import { React, useEffect, useState } from "react";
import Navbar from "./components/NavBar"
import './App.css';
import Home from "./components/Home";
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { updateDoc, getFirestore, getDoc, doc } from "firebase/firestore";
import Checkout from './components/Checkout';

function App() {
  const [cantidadCarrito, setCantidadCarrito] = useState(0);
  const [carrito, setCarrito] = useState([]);
  const actualizarCarrito = () => {
    getCarrito()
  }
  const getCarrito = async () => {
    const db = getFirestore();
    const carritoRef = doc(db, "Carritos", "UMJZVFoasXrffhxBCzN1");
    const carritoSnap = await getDoc(carritoRef);
    setCarrito(carritoSnap.data().cursos);
    let cantidadTotal = 0;
    carritoSnap.data().cursos.forEach(curso => {
      const cursoJson = JSON.parse(curso)
      cantidadTotal += cursoJson.cantidad
    });;
    setCantidadCarrito(cantidadTotal)
  }

  useEffect( () => {
    getCarrito()
  }, [] )

  const deleteCursoFromCarrito = async (cursoBorrarIndex) => {
    const nuevoCarrito = carrito.filter((curso, index) => {return cursoBorrarIndex !== index});
    const db = getFirestore()
    const carritoRef = doc(db, "Carritos", "UMJZVFoasXrffhxBCzN1");
    await updateDoc(carritoRef, {["cursos"]: nuevoCarrito})
    getCarrito();
  }

  return (
    <>
    <BrowserRouter>
    <Navbar cantidadCarrito = {cantidadCarrito} carrito = {carrito} deleteCursoFromCarrito = {deleteCursoFromCarrito}/>
      <Routes>
        <Route exact path= "/" element={<Home/>} />
        <Route exact path= "/category/:categoria?" element={<ItemListContainer/>} />
        <Route exact path= "/item/:card" element={<ItemDetailContainer actualizarCarrito = {actualizarCarrito}/>} />
        <Route exact path= "/checkout" element={<Checkout carrito = {carrito} deleteCursoFromCarrito = {deleteCursoFromCarrito}/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
