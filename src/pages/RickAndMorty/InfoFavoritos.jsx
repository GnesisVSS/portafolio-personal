import React, { useState } from 'react';
import Nav from './Elementos/Nav';
import { useDispatch } from 'react-redux';
import { useQuery } from '@apollo/client';
import { OBTENER_FAVORITOS } from './Graphql/query';
import InfoFavoritosVista from './InfoFavoritosVista';
import './css/styles.css';


// Llamado a reducer y la query para pasar datos a el .map de favoritos oficial 

const InfoFavoritos = () => {
    // se obtienen del localStorage los id de favoritos
    const ids = localStorage.getItem("favoritos");

    // variable para guardar los datos obtenidos de la consulta
    const [datos, setDatos] = useState([]);

    // consulta a la base de datos para obtener los detalles de los personajes en base al arreglo de ids entregados
    useQuery(OBTENER_FAVORITOS, {
        variables: {
            ids: ids,
        },
        onCompleted: (data) => {
            const results = data.charactersByIds;
            setDatos((prevData) => [...prevData, ...results]);
        }
    });

    // se ejecuta la accion para mostrar los datos de los personajes favoritos con payload de los datos anteriores
    const dispatch = useDispatch();
    dispatch({ type: 'MOSTRAR_DATOS_GQL_FAVORITOS', payload: datos });

    return (
        <div style={{ backgroundColor: 'white' }} className='RM'>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
            <link href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Righteous&display=swap" rel="stylesheet"></link>
            <div className='sticky-top'>
                <Nav />
            </div>
            <div className='px-4'>

                <div className='container'>
                    <img src='/img/RickAndMorty/Rick-and-Morty.jpg' style={{ height: '400px', width: '712px' }} alt='' />
                    <div className='row px-2'>
                        <InfoFavoritosVista />
                    </div>

                </div>


            </div>
        </div>
    );
}

export default InfoFavoritos;
