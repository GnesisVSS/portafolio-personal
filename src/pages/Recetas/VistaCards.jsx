import React, { useEffect, useState } from 'react';
import CardRecetas from '../Elementos/cardRecetas';
import { consMostrar, mostrarRecetas } from '../../api/receta.api';
import Loading from './ElementosRecetas/Loading';

const VistaCards = () => {
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
            <Loading />
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

export default VistaCards;
