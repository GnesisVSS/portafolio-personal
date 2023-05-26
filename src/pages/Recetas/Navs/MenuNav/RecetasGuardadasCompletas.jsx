import React, { useEffect, useState } from 'react';
import CardRecetas from '../../../Elementos/cardRecetas';
import { mostrarRecetasGuardadas } from '../../../../api/receta.api';
import NavbarUsuario from '../navbarUsuario';
import RecetasGuard from '../../UsuarioLogged/RecetasGuard';
import Loading from '../../ElementosRecetas/Loading';

const RecetasGuardadasCompletas = () => {
    var fondo = document.getElementById('root');
    fondo.style.backgroundColor = "white";
    // use state para definir como estado inicial las tareas definidas como base
    const [recetas, setRecetas] = useState([])
    // const [image, setImage] = useState(null);
    const correo = localStorage.getItem("correoUsuario");
    useEffect(() => {
        async function loadRecetas() {
            const response = await mostrarRecetasGuardadas(correo)
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
        recetaInfo = <Tarjetas></Tarjetas>
    } else {
        recetaInfo = (
            <Loading />
        )
    }
    return (
        <section>
            <NavbarUsuario />
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

export default RecetasGuardadasCompletas;