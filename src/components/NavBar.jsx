import React from "react";
import "../css/NavBar.css";
import ImagenBanner from "../Fotos/Imagen Definitiva (2).png";
import CartWidget from "../components/CartWidget"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
const Navbar = () => {
  return (    
      <>
        <div className="container banner">
          <Link to="/"><img src={ImagenBanner}
            alt="logoPrincipal"></img>
          </Link>
        </div>
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid navegacion p-3">
            <a className="navbar-brand" href="#"></a>
            <button className="navbar-toggler m-auto" type="button" data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav m-auto p-2">
                <Link className="nav-link m-auto navegacion" target="" to="/">Inicio</Link>
                <Link className="nav-link m-auto navegacion" target="" to="/category">Cursos online</Link>
                <Link className="nav-link m-auto navegacion" target="" to="/category/tartas">Tartas</Link>
                <Link className="nav-link m-auto navegacion" target="" to="/category/tortas">Tortas</Link>
                <CartWidget/>
              </div>
            </div>
          </div>
        </nav>
      </>
  );
}

export default Navbar;