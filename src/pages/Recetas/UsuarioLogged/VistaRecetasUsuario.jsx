import React, { useEffect, useState } from 'react';
import RecetasUsuario from './RecetasUsuario';
import { consultaRecetasUsuario, misRecetasLimit } from '../../../api/receta.api';
import Loading from '../ElementosRecetas/Loading';
import MisRecetasPerfil from './misRecetasPerfil';
import MisRecetas from '../Navs/MenuNav/misRecetas';
import NavbarUsuario from '../Navs/navbarUsuario';

const VistaRecetasUsuario = () => {
    var fondo = document.getElementById('root');
    fondo.style.backgroundColor = "white";

    const [recetas, setRecetas] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        async function loadRecetas() {
            const correousuario = localStorage.getItem("correoUsuario");
            const cant = 2;
            try {
                const response = await consultaRecetasUsuario(correousuario)
                setRecetas(response.data)
                setIsLoading(false);
            } catch (error) {
                // Manejar el error de manera adecuada
                console.error(error);
            }

            // setImage(new Blob([response.data], { type: "image/jpeg" }));
        }
        loadRecetas()
    }, [])

    if (isLoading) {
        return <div>Cargando...</div>;
    }

    const Tarjetas = () => {
        return (
            <section>
                <NavbarUsuario />

                <div className='container'>
                    {recetas.map((rec, index) => {
                        return (
                            <MisRecetas key={index} rec={rec} />
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
                <a href='/misRecetas'>Ver todo</a>
            </div >

        </section>
    );
}


export default VistaRecetasUsuario;
