import { useQuery } from '@apollo/client';
import React from 'react';
import Nav from './Elementos/Nav';
import { OBTENER_DETALLES_POR_ID } from './Graphql/query';
import { useDispatch } from 'react-redux';
import InfoDetallada from './InfoDetallada';
import './css/styles.css';

const InfoDetalladaId = () => {

    // se obtiene el id del localStorage que se agrego al momento de cliquear el boton ver mas
    const id = localStorage.getItem("datosId");
    const dispatch = useDispatch();

    // se usa la consulta de base de datos para obtener los detalles por id dando como parametro el id obtenido de localStorage
    const { loading, error, data } = useQuery(OBTENER_DETALLES_POR_ID, {
        variables: { id },
    });


    if (loading) return (<div className="loader" style={{ display: 'flex', justifyContent: 'center' }}></div>);
    if (error) return `Error! ${error.message}`;

    // se dispara la accion para mostrar los datos desde la consulta con el payload de los datos del personaje
    dispatch({ type: 'MOSTRAR_DATOS_GQL', payload: data.character });


    // console.log(datos)
    return (
        <div style={{ backgroundColor: 'white' }} className='RM'>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
            <link href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Righteous&display=swap" rel="stylesheet"></link>
            <div>
                <Nav />
            </div>

            <div className='container  text-center'>

                <InfoDetallada />

            </div>



        </div>
    );
}

export default InfoDetalladaId;
