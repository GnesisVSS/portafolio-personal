import React, { useEffect, useState } from 'react';
import { mostrarRecetasGuardadaslimit } from '../../../api/receta.api';
import Loading from '../ElementosRecetas/Loading';
import RecetasGuard from './RecetasGuard';

const VistaCardsGuardadas = () => {
    // use state para definir como estado inicial las tareas definidas como base
    const [recetas, setRecetas] = useState([])
    const [nohayrecetas, setNohayrecetas] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        async function loadRecetas() {
            const correousuario = localStorage.getItem("correoUsuario");
            const response = await mostrarRecetasGuardadaslimit(correousuario)
            setRecetas(response.data)
        }
        if (recetas.length === 0) {
            setNohayrecetas(true)
        }
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);
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

    if (isLoading) {
        recetaInfo = (
            <Loading />
        ) // Renderizar un indicador de carga mientras isLoading sea verdadero
    } else {
        if (recetas.length > 0) {
            recetaInfo = <Tarjetas />
        } else {

            if (nohayrecetas === true) {
                recetaInfo = (
                    <p>No hay recetas para mostrar</p>
                )
            } else {
                recetaInfo = (
                    <Loading />
                )
            }
        }
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
