import Alert from '@mui/material/Alert';
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
    let arreg = localStorage.getItem('guardado');
    const [nohayrecetas, setNohayrecetas] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    let ar = JSON.parse(arreg);

    useEffect(() => {
        async function loadRecetas() {
            const response = await mostrarRecetasGuardadasGeneral(ar.join(','))
            setRecetas(response.data)
            // setImage(new Blob([response.data], { type: "image/jpeg" }));
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
                    <div className='py-5'>
                        <Alert severity="warning">Ooops! No hay recetas guardadas por mostrar, intenta guardar una!</Alert>

                    </div>
                )
            } else {
                recetaInfo = (
                    <Loading />
                )
            }
        }
    }

    return (
        <section>
            <NavbarRecetas />
            <div className='container mx-auto py-4'>
                <div>
                    <div className="rowRecetas">
                        {/* <Alert severity="info">
                            {guardadoLocal}
                            
                        </Alert> */}
                        {recetaInfo}
                    </div>
                </div>
            </div>
        </section>

    );
}

export default RecetasGuardadasCompletas;