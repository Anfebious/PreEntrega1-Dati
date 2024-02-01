import React from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "../css/CartWidget.css"
const CartWidget = ({cantidadCarrito}) => {
    return (
        <>
        <div className="containerCart">
            <ShoppingCartIcon className="cartIcon"/>
            <span className="cartNumber">{cantidadCarrito}</span>
        </div>
        </>
    );
}

export default CartWidget;