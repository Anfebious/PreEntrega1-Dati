import React from "react";
import "../css/ItemListContainer.css";
const ItemListContainer = (props) => {
    return (
        <>
            <div class="contenido col-lg-12">
                <p class="parrafo">{props.greeting1}</p>
                <p class="parrafo">{props.greeting2}</p>
                <p class="parrafo">{props.greeting3}</p>
            </div>
        </>
    );
}

export default ItemListContainer;