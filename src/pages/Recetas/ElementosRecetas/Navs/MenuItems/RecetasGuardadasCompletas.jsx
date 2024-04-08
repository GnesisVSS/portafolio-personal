import React, { useEffect, useState } from 'react';
import { mostrarRecetasGuardadasGeneral } from '../../../../../api/receta.api';
import Loading from '../../../ElementosRecetas/Loading';
import RecetasGuard from '../../../UsuarioLogged/RecetasGuard';
import NavbarRecetas from '../navbar-recetas';

const RecetasGuardadasCompletas = () => {
    var fondo = document.getElementById('root');
    fondo.style.backgroundColor = "white";
    // use state para definir como estado inicial las tareas definidas como base
    const [recetas, setRecetas] = useState([])
    // const [image, setImage] = useState(null);
    const correo = localStorage.getItem("correoUsuario");
    const ids = localStorage.getItem("guardado")
    let arreg = localStorage.getItem('guardado');
    let ar = JSON.parse(arreg);

    useEffect(() => {
        async function loadRecetas() {
            const response = await mostrarRecetasGuardadasGeneral(ar.join(','))
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
            <NavbarRecetas />
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