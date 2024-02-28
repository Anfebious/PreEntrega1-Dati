import { useEffect, React, useState } from "react";
import "../css/ItemListContainer.css";
import CursoCard from "./CursoCard";
import { useParams } from "react-router-dom";
import { PropagateLoader } from "react-spinners";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
const ItemListContainer = () => {
    const [loading, setLoading] = useState(true);
    const [cursos, setCursos] = useState([]);
    const params = useParams();
    const getCursos = async () => {
        const db = getFirestore();
        let consulta;
        if (params.categoria) {
            consulta = query(collection(db, "Cursos"), where("categoria", "==", params.categoria));
        }else {
            consulta = collection(db, "Cursos")
        }
        getDocs(consulta).then((snapshot) => {
            setCursos(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
            setLoading(false);
        });
    }
    useEffect(() => {
        setLoading(true)
        const cargar = async () => {
            try {
                await getCursos()
            }catch (error) {
                console.log("Error: ", error)
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
                    {cursos.map((card) => ( 
                        <CursoCard card={card}/>
                    ))}
                </div>
            )
        }
        </>
    );
}

export default ItemListContainer;