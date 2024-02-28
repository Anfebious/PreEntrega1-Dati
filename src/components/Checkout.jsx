import React from "react";
import "../css/ItemListContainer.css";
import CheckoutCard from "./CheckoutCard"
const Checkout = ({carrito, deleteCursoFromCarrito}) => {
    return (
        <>
        <div className="contenido col-lg-12">
            {carrito.map((curso, index) => {
                const cursoJson = JSON.parse(curso); 
                return (
                <>
                <div className="col-lg-12">
                <CheckoutCard index={index} card={cursoJson} deleteCursoFromCarrito={deleteCursoFromCarrito}></CheckoutCard>
                </div>
                </>
                );
            })}
        </div>
        </>
    )
}

export default Checkout;