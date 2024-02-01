import React from "react";
import "../css/ItemListContainer.css";
import ItemCount from "./ItemCount";
import { useParams } from "react-router-dom";
const ItemDetailContainer = ({actualizarCarrito}) => {
    const params = useParams()
    const card = JSON.parse(decodeURIComponent(params.card))
    return (
        <div className="contenido col-lg-12">
            <div className= "mb-3 col-lg-2 col-md-6 col-sm-12 m-auto">
                <img src={card.foto} className="card-img-top rounded-5" alt="fotoTortaClasica" />
            </div>
            <p className="parrafo m-5">{card.detalle}</p>
            <ItemCount actualizarCarrito = {actualizarCarrito}/>
        </div>
    )
}

export default ItemDetailContainer;