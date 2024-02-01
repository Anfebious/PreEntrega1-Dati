import { React, useState } from "react";
import "../css/ItemCount.css";
const ItemCount = ({ actualizarCarrito }) => {
    const [count, setCount] = useState(0);

    const increment = () => {
        if (count < 9) {
            setCount(count + 1);
        }
    };

    const decrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };

    const confirmar = () => {
        actualizarCarrito(count)
    };

    return (
        <>
            <div className="mb-3 col-lg-2 col-md-6 col-sm-12 m-auto">
                <h4>¿Cuantos quiere agregar al carrito?</h4>
            </div>
            <div className="mb-3 col-lg-2 col-md-6 col-sm-12 m-auto">
                <button className="contador btn btn-danger" onClick={decrement}>
                    -
                </button>
                {count}
                <button className="contador btn btn-primary" onClick={increment}>
                    +
                </button>
            </div>
            <div className="mb-3 col-lg-2 col-md-6 col-sm-12 m-auto text-center">
                <button className="contador btn btn-success" onClick={confirmar}>
                    Confirmar
                </button>
            </div>
        </>
    );
}

export default ItemCount;