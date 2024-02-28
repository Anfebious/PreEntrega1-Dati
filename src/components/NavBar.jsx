import { React } from "react";
import "../css/NavBar.css";
// import ImagenBanner from "../public/Fotos/Imagen Definitiva (2).png";
import CartWidget from "../components/CartWidget"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
const Navbar = ({cantidadCarrito, carrito, deleteCursoFromCarrito}) => {
  return (    
      <>
        <div className="container banner">
          <Link to="/"><img src="../Fotos/Imagen Definitiva (2).png"
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
                <Link to="/checkout"><CartWidget cantidadCarrito = {cantidadCarrito}/></Link>
              </div>
            </div>
          </div>
        </nav>
      </>
  );
}

export default Navbar;