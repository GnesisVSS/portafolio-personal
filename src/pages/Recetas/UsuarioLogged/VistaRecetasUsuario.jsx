import React, { useEffect, useState } from 'react';
import RecetasUsuario from './RecetasUsuario';
import { consultaRecetasUsuario } from '../../../api/receta.api';
import Loading from '../ElementosRecetas/Loading';

const VistaRecetasUsuario = () => {
    var fondo = document.getElementById('root');
    fondo.style.backgroundColor = "white";
    // use state para definir como estado inicial las tareas definidas como base
    const [recetas, setRecetas] = useState([])
    
    useEffect(() => {
        async function loadRecetas() {
            const correo = localStorage.getItem("correoUsuario");
            // Al renderizar la pagina trae los datos de la consulta desde la API y la asigna como valor al state de recetas
            const response = await consultaRecetasUsuario(correo)
            setRecetas(response.data)
        }
        
        loadRecetas()
        
    }, [])
    const Tarjetas = () => {
        return (
            <section>
                <div className='container'>
                    {recetas.map((rec, index) => {
                        return (
                             //Para renderizar la informacion de las recetas se les entrega por props al componente de recetasUsuario
                            <RecetasUsuario key={index} rec={{rec}} />
                        )
                    })}
                </div>
            </section>
        )
    }

    let recetaInfo;


    if (recetas.length > 0) {
        recetaInfo = <Tarjetas/>
    } else {
        recetaInfo = (
            <Loading/>
        )
    }
    return (
        <section>
            <div className='container mx-auto py-4'>
            
                <div>
                    <div>
                        {recetaInfo}
                    </div>
                </div>
            </div >
        </section>
    );
}


export default VistaRecetasUsuario;
