import React, { useEffect, useState } from 'react';
import { mostrarRecetas } from '../../api/receta.api';
import Loading from './ElementosRecetas/Loading';
import CardRecetas from './ElementosRecetas/cardRecetas';


const VistaCards = () => {
    // use state para definir como estado inicial las tareas definidas como base
    const [recetas, setRecetas] = useState([])
    const [guardadoLocal, setGuardadoLocal] = useState("");

    useEffect(() => {
        async function loadRecetas() {
            const response = await mostrarRecetas()
            setRecetas(response.data)
            // setImage(new Blob([response.data], { type: "image/jpeg" }));
        }
        loadRecetas()
    }, [])

    // Función para verificar el cambio en el localStorage
    function checkLocalStorage() {
        var currentValue = localStorage.getItem("guardado");
        if (currentValue !== null && currentValue !== previousValue) {
            // Aquí puedes realizar las acciones necesarias cuando cambia el valor de "guardado"
            console.log("El valor de 'guardado' ha cambiado:", currentValue);
            setGuardadoLocal(currentValue)
            previousValue = currentValue; // Actualizar el valor anterior
        }
    }

    var previousValue = localStorage.getItem("guardado"); // Valor inicial

    // Verificar el cambio cada segundo (puedes ajustar el intervalo según tus necesidades)
    setInterval(checkLocalStorage, 500);

    const Tarjetas = () => {
        return (
            <section>
                <div className='container'>
                    {recetas.map((rec, index) => {

                        return (
                            <CardRecetas key={index} rec={rec} />
                        )
                    })}
                </div>
            </section>


        )
    }

    let recetaInfo;

    

    if (recetas.length > 0) {
        recetaInfo = <Tarjetas></Tarjetas>
    } else {
        recetaInfo = (
            <Loading />
        )
    }


    return (
        <section>
            <div className='container mx-auto py-4'>
                <div>
                    <div className="rowRecetas">
                        {/* <Alert severity="info">
                            {guardadoLocal}
                            
                        </Alert> */}
                        {recetaInfo}
                    </div>
                </div>
            </div >
        </section>
    );
}

export default VistaCards;
