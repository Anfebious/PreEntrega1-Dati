import React from "react";
import "../css/itemListContainer.css";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
const CursoCard = ({ card }) => {
    const ruta = "/item/" + encodeURIComponent(JSON.stringify(card))
    return (
        <div data-aos="zoom-in-left" data-aos-duration="2000" data-aos-easing="ease-in-sine" className="card mb-3 col-lg-4 col-md-6 col-sm-12 m-auto">
            <img src={card.foto} className="card-img-top rounded-5" alt="fotoTortaClasica" />
            <div className="card-body">
                <h2 className="card-title titulo text-center">{card.titulo}</h2>
                <p className="card-text text-center parrafo">{card.descripcion}</p>
                <a href="#" className="btn btn-secondary">Comprar {card.precio}</a>
                <Link className="btn btn-secondary m-2" to={ruta}>Ver detalle</Link>
            </div>
        </div>
    )
}

export default CursoCard;