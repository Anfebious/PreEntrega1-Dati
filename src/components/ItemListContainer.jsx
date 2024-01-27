import { useEffect, React, useState } from "react";
import "../css/itemListContainer.css";
import CursoCard from "./CursoCard";
import { useParams } from "react-router-dom";
import Galeria13 from "../Fotos/Galeria 13.jpg";
import Galeria10 from "../Fotos/Galeria 10.jpg";
import Galeria12 from "../Fotos/Galeria 12.jpg";
import { PropagateLoader } from "react-spinners";
const ItemListContainer = () => {
    const [loading, setLoading] = useState(true);
    const [cardsFilter, setCardsFilter] = useState([]);
    const params = useParams();
    const cards = [
        {
            foto: Galeria13,
            titulo: "Curso de Tartas",
            descripcion: "En este curso aprenderás a hacer las tartas más famosas para deleitar a tus comensales y llevarles una sonrisa a su rostro.", 
            precio: "$20.000", 
            categoria: "tartas",
            detalle:"Actualmente tenemos disponibles para ustedes los cursos de tarta lemon pie, tarta de frutos rojos y tarta de manzana. Todos los cursos cuentan con la receta paso a paso y las cantidades requeridas para su elaboracion."
        },
        {
            foto: Galeria10,
            titulo: "Curso de Tortas Modernas",
            descripcion: "Ideal para aquellos que quieran incursionar en las nuevas prácticas y técnicas de la pastelería moderna.", 
            precio: "$30.000", 
            categoria: "tortas",
            detalle:"Actualmente tenemos disponibles para ustedes los cursos de torta mousse de chocolate con coulis de frutos rojos y diplomata de naranja y torta mousse de chocolate semi amargo con ojuelas de chile picante. Todos los cursos cuentan con la receta paso a paso y las cantidades requeridas para su elaboracion."
        },
        {
            foto: Galeria12,
            titulo: "Curso de Tortas Clasicas",
            descripcion: "Ideal para empezar de cero en la elaboración de las más ricas tortas clásicas utilizando técnicas tradicionales.", 
            precio: "$25.000", 
            categoria: "tortas",
            detalle:"Actualmente tenemos disponibles para ustedes los cursos de torta selva negra, torta marquise de chocolate y torta balcarce. Todos los cursos cuentan con la receta paso a paso y las cantidades requeridas para su elaboracion."
        },
    ]
    function filterCategoria() {
        if(params.categoria) {
            setCardsFilter(cards.filter( (card) => card.categoria === params.categoria ))
        }else {
            setCardsFilter(cards)
        }
    }
    const getCursosByCategory = async () => {
        return new Promise ((resolve) => {
            setTimeout(() => {
                resolve(filterCategoria());
            }, 3000);
        });
    }
    useEffect(() => {
        setLoading(true)
        const cargar = async () => {
            try {
                await getCursosByCategory()
            }catch (error) {
                console.log("Error: ", error)
            }finally {
                console.log(cardsFilter)
                setLoading(false);
            }
        }
        cargar()
    }, [params.categoria]);
    return (
        <>
        {loading ? 
            (
                <div className="loading-spinner text-center m-5">
                    <PropagateLoader color={"#123abc"} loading={loading} size={15} />
                </div>
            ) : 
            (
                <div className="main row pt-5">
                    {cardsFilter.map((card) => ( 
                        <CursoCard card={card}/>
                    ))}
                </div>
            )
        }
        </>
    );
}

export default ItemListContainer;