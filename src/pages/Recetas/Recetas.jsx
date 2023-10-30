import React, { useEffect, useState } from 'react';
import { consMostrar, mostrarRecetas } from '../../api/receta.api';
import { RecetasC } from '../../models/recetas.class';
import CardRecetas from './ElementosRecetas/cardRecetas';
import NavbarRecetas from './ElementosRecetas/Navs/navbar-recetas';
import VistaCards from './VistaCards';
import Loading from './ElementosRecetas/Loading';

const Recetas = () => {
    // use state para definir como estado inicial las tareas definidas como base
    const [recetas, setRecetas] = useState([])
    // const [image, setImage] = useState(null);

    useEffect(() => {
        async function loadRecetas() {
            const response = await mostrarRecetas()
            setRecetas(response.data)
            // setImage(new Blob([response.data], { type: "image/jpeg" }));
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

            <Loading/>
        )
    }

    var fondo = document.getElementById('root');
    fondo.style.backgroundColor = "white";

    return (

        <section id='homeRecetas'>
            <NavbarRecetas />
            <VistaCards/>
        </section>
    );
}

export default Recetas;
