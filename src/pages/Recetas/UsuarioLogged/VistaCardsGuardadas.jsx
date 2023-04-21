import React, { useEffect, useState } from 'react';
import { mostrarRecetasGuardadaslimit } from '../../../api/receta.api';
import RecetasGuard from './RecetasGuard';
import Loading from '../ElementosRecetas/Loading';

const VistaCardsGuardadas = () => {
    // use state para definir como estado inicial las tareas definidas como base
    const [recetas, setRecetas] = useState([])

    useEffect(() => {
        async function loadRecetas() {
            const correousuario = localStorage.getItem("correoUsuario");
            const cant = 2;
            const response = await mostrarRecetasGuardadaslimit(correousuario, cant)
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
                            <RecetasGuard key={index} rec={rec} />
                        )
                    })}
                </div>
            </section>
        )
    }

    let recetaInfo;

    if (recetas.length > 0) {
        recetaInfo = <Tarjetas />
    } else {
        recetaInfo = (
            <Loading />
        )
    }
    return (
        <section >
            <div className='container mx-auto py-4'>
                <div>
                    <div>
                        {recetaInfo}
                    </div>
                </div>
            </div >
            <div className='text-end p-4'>
                <a href='/MisGuardados'>Ver todo</a>
            </div >

        </section>
    );
}

export default VistaCardsGuardadas;
