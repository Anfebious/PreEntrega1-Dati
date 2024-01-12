import React from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "../css/CartWidget.css"
const CartWidget = () => {
    return (
        <>
        <div className="containerCart">
            <ShoppingCartIcon className="cartIcon"/>
            <span className="cartNumber">4</span>
        </div>
        </>
    );
}

export default CartWidget;