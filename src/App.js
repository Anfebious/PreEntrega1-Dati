import logo from './logo.svg';
import Navbar from "./components/NavBar"
import './App.css';
import Home from "./components/Home";
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route exact path= "/" element={<Home/>} />
        <Route exact path= "/category/:categoria?" element={<ItemListContainer/>} />
        <Route exact path= "/item/:card" element={<ItemDetailContainer/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
