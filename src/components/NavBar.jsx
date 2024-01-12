import React from "react";
import "../css/NavBar.css";
import ImagenBanner from "../Fotos/Imagen Definitiva (2).png";
import CartWidget from "../components/CartWidget"
const Navbar = () => {
  return (    
      <>
        <div class="container banner">
          <a target=""><img src={ImagenBanner}
            alt="logoPrincipal"></img>
          </a>
        </div>
        <nav class="navbar navbar-expand-lg">
          <div class="container-fluid navegacion p-3">
            <a class="navbar-brand" href="#"></a>
            <button class="navbar-toggler m-auto" type="button" data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
              aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav m-auto p-2">
                <a class="nav-link m-auto navegacion" target="" href="./index.html">Inicio</a>
                <a class="nav-link m-auto navegacion" target="" href="./sobrenosotros.html">Sobre nosotros</a>
                <a class="nav-link m-auto navegacion" target="" href="./cursosonline.html">Cursos online</a>
                <a class="nav-link m-auto navegacion" target="" href="./galeria.html">Galeria</a>
                <a class="nav-link m-auto navegacion" target="" href="./tienda.html">Tienda</a>
                <a class="nav-link m-auto navegacion" target="" href="./micuenta.html">Mi cuenta</a>
                <a class="nav-link m-auto navegacion" target="" href="./contacto.html">Contacto</a>
                <CartWidget/>
              </div>
            </div>
          </div>
        </nav>
      </>
  );
}

export default Navbar;