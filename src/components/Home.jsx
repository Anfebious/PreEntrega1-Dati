import React from "react";
import "../css/Home.css";
const Home = (props) => {
    return (
        <>
            <div className="contenido col-lg-12">
                <p className="parrafo">"Happy Berry Pasteleria" Este nombre podría traducirse como baya feliz y lo elegimos con el propósito de definir, de la manera más fiel a nuestra filosofía, las sensaciones y sabores que podrán degustar con nuestros postres.</p>
                <p className="parrafo">Originalmente pensábamos en asentarnos en mi Venezuela natal. Pero desde 2018 nos establecimos en Buenos Aires, Argentina, con el objetivo y la convicción de llevar un bocado de felicidad a todo el mundo, uniendo lo mejor de dos mundos.</p>
                <p className="parrafo">Utilizando productos de calidad, sabores nuevos y técnicas modernas ofrecemos una propuesta única en pastelería. Incorporando sabores frutales con los postres tradicionalmente dulces de Argentina.</p>
            </div>
        </>
    );
}

export default Home;