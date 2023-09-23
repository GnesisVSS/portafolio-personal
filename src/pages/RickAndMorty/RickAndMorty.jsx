import React, { useEffect, useState } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useDispatch, useSelector } from 'react-redux';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import './css/styles.css';
const RickAndMorty = () => {
    // trae los datos desde el estado global de los detalles del personaje
    const datos = useSelector(state => state.detallesState);
    // se define la variable para los datos finales
    const datos_final = datos.datos[0]
    const dispatch = useDispatch();

    // variable para la informacion del localStorage
    const [localStorageData, setLocalStorageData] = useState([]);
    // se actualiza el localStorage obteniendo los datos y definiendolos en el useState
    const updateLocalStorageData = () => {
        const dataFromLocalStorage = JSON.parse(localStorage.getItem("favoritos"));
        setLocalStorageData(dataFromLocalStorage);
    };

    // al renderizar el componente carga los datos iniciales del localstorage definidos anteriormente
    useEffect(() => {
        updateLocalStorageData(); // Cargar los datos del localStorage al montar el componente
        // Función que se ejecutará cada vez que cambie el localStorage
        const handleStorageChange = (e) => {
            if (e.key === "favoritos") {
                updateLocalStorageData();
            }
        };
        // Agregamos un event listener para escuchar cambios en el localStorage
        window.addEventListener('storage', handleStorageChange);
        // Retornar una función de limpieza para eliminar el event listener cuando el componente se desmonte
        return () => {
            window.removeEventListener('storage', handleStorageChange);
        };
    }, []);

    // aqui ejectuta la accion para visualizar los datos que deja el id en el localStorage para ver el detalle del personaje después
    const handleClick = (id) => {
        dispatch({ type: 'VISUALIZAR_DATOS_DETALLES', payload: id });
    }

    // obtiene como parametro el id y verifica despues si existe informacion en el localstorage y si incluye el id
    // en caso de que no se cumplan LAS DOS condiciones, envía el id para gregarlo con redux
    const toggleVisible = (id) => {
        if (localStorageData && localStorageData.includes(id)) {
            dispatch({ type: 'ELIMINA_FAVORITOS_LOCAL', payload: { isFavorito: false, id: id } });

        } else {
            dispatch({ type: 'AGREGA_FAVORITOS_LOCAL', payload: { isFavorito: true, id: id } });
        }
        // luego de todo esto se actualiza el localStorage para obtener la información actualizada luego
        updateLocalStorageData();
    };

    // recorre el arreglo de datos final
    return datos_final.map(({ name, image, id }) => (
        <div key={id} className='col py-5 RM' style={{ backgroundColor: 'white' }}>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
            <link href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Righteous&display=swap" rel="stylesheet"></link>
            <div className="card-rm">
                {/* si existen datos en el localStorage y estos incluyen el id del personaje en cuestión se marcará como favorito, en caso de que no haya coincidencias se desmarca */}
                {localStorageData && localStorageData.includes(id) ? <FavoriteIcon style={{ alignSelf: 'end', marginTop: '7px', marginRight: '7px', color: 'red' }} /> : <FavoriteIcon style={{ alignSelf: 'end', marginTop: '7px', marginRight: '7px', visibility: 'hidden' }} />}
                <div className="card-rm-photo" style={{ backgroundImage: `url(${image})`, backgroundRepeat: "no-repeat" }}></div>
                <div className="card-rm-title"> {name} <br />
                </div>
                <div className="card-rm-socials">

                    <a type='button' className="btn-mas" href={'/InfoDetallada'} onClick={() => handleClick(id)}>
                        Ver más
                    </a>

                    <button className="btn-fav" onClick={() => toggleVisible(id)}>
                        {localStorageData && localStorageData.includes(id) ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                    </button>

                </div>
            </div>

        </div >
    ));
}

export default RickAndMorty;
