import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import RickAndMorty from './RickAndMorty';
import Nav from './Elementos/Nav';
import { useDispatch, useSelector } from 'react-redux';
import { OBTENER_PERSONAJES } from './Graphql/query';
import './css/styles.css';
const RickAndMortyPages = () => {
    // Definicion de variables
    let page = useSelector(state => state.pageState.page);
    const [loading, setLoading] = useState(false);
    const [datos, setDatos] = useState([]);
    const dispatch = useDispatch();

    // Se despacha la accion de mostrar datos gql cada vez que hay algun cambio en la pagina, se carga desde el inicio como un arreglo vacio, al detonarse el useEffect cambia otra vez

    const handleScroll = () => {
        // Verifica si el usuario ha llegado al final de la página
        // Explicación : calcula la posición vertical actual del scroll más la altura del área visible del navegador. Si esta suma es igual a la altura total del documento (document.documentElement.offsetHeight), significa que el usuario ha llegado al final de la página.
        if (
            window.innerHeight + document.documentElement.scrollTop ===
            document.documentElement.offsetHeight &&
            !loading
        ) {

            setLoading(true);
            // Despacha una acción para obtener la siguiente página de datos
            dispatch({ type: 'OBTENER_PAGINA', payload: page++ });

        }
    };

    /**
     * El useEffect se dispara cuando cambia el valor de la variable 'page' o cuando 'dispatch' se actualiza.
     * Realiza una solicitud a la API GraphQL para obtener datos de personajes, utilizando la página actual.
     * Los datos obtenidos se agregan al estado 'datos' y 'loading' se controla durante la solicitud.
    */
    useQuery(OBTENER_PERSONAJES, {
        variables: { page },
        onCompleted: (data) => {
            setTimeout(() => {
                const results = data.characters.results;
                setDatos((prevData) => [...prevData, ...results]);
                setLoading(false); // Después de un segundo, cambia el estado a false
            }, 1000);


            // setLoading(false);
        }
        // 
    });
    // en caso de que ya hayan datos en el localStorage para los favoritos de la persona, los carga aqui
    const favsPrevios = JSON.parse(localStorage.getItem("favoritos"))
    dispatch({ type: 'MOSTRAR_DATOS_GQL', payload: datos });
    dispatch({ type: 'MUESTRA_DATOS_LOCAL', payload: favsPrevios });

    useEffect(() => {
        // Agregamos un event listener al objeto window para el evento scroll, es decir, cada vez que el usuario hace scroll se detona el 'handleScroll', esto permite que se pueda reaccionar al scroll
        window.addEventListener('scroll', handleScroll);
        // Al retornar una función desde el efecto, esta función se ejecutará cuando el componente se desmonte, esto es porque los listeners deben ser eliminados a ya no ser necesarios
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    }, []); //se ejecuta cada vez que el loading cambia

    return (
        <div style={{ backgroundColor: 'white' }}>
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
                        <RickAndMorty />

                    </div>
                    {loading ? <div className="loaderRM" style={{ display: 'flex', justifyContent: 'center' }}/> : ''}

                </div>


            </div>
        </div>

    )

}


export default RickAndMortyPages

