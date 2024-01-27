import React from "react";
import "../css/itemListContainer.css";
import { useParams } from "react-router-dom";
const ItemDetailContainer = ({}) => {
    const params = useParams()
    const card = JSON.parse(decodeURIComponent(params.card))
    return (
        <div className="contenido col-lg-12">
            <div className= "mb-3 col-lg-2 col-md-6 col-sm-12 m-auto">
                <img src={card.foto} className="card-img-top rounded-5" alt="fotoTortaClasica" />
            </div>
            <p className="parrafo m-5">{card.detalle}</p>
        </div>
    )
}

export default ItemDetailContainer;