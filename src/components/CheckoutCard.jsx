import React, { useState } from "react";
import "../css/ItemListContainer.css";
const CheckoutCard = ({ card, index, deleteCursoFromCarrito }) => {
    const [visible, setVisible] = useState(true)
    const deleteCurso = () => {
        deleteCursoFromCarrito(index)
        setVisible(false)
    }
    return (
        <>{visible ? (
        <div data-aos="zoom-in-left" data-aos-duration="2000" data-aos-easing="ease-in-sine" className="card mb-3 col-lg-4 col-md-6 col-sm-12 m-auto">
            <div className="card-body border-radius">
                <h5 className="card-title titulo text-center">{card.titulo}</h5>
                <p className="titulo text-center">Cantidad x{card.cantidad}</p>
                <p className="titulo text-center">Precio: ${card.precio * card.cantidad}</p>
                <button className="btn btn-danger col-lg-12" onClick={deleteCurso}>X</button>
            </div>
        </div>
        ) : null}</>
    )
}

export default CheckoutCard;