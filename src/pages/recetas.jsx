import React, { useEffect, useState } from 'react';
import { consMostrar, mostrarRecetas } from '../api/receta.api';
import { RecetasC } from '../models/recetas.class';
import CardRecetas from './Elementos/cardRecetas';
import NavbarRecetas from './navbar-recetas';

const Recetas = () => {
    // use state para definir como estado inicial las tareas definidas como base
    const [recetas, setRecetas] = useState([])

    useEffect(() => {
        async function loadRecetas() {
            const response = await mostrarRecetas()
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
            <div>
                <h3>Cargando...</h3>
            </div>
        )

    }

    var fondo = document.getElementById('root');
    fondo.style.backgroundColor = "white";

    return (

        <section id='homeRecetas'>
            <NavbarRecetas />
            <div>
                <div>
                    {recetaInfo}
                </div>
            </div>

        </section>
    );
}

export default Recetas;
