import React, { useEffect, useState } from 'react';
import CircleIcon from '@mui/icons-material/Circle';
import HomeIcon from '@mui/icons-material/Home';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import FaceRetouchingNaturalIcon from '@mui/icons-material/FaceRetouchingNatural';
import CakeIcon from '@mui/icons-material/Cake';
import { Button, Divider, Pagination } from '@mui/material';
import TerrainIcon from '@mui/icons-material/Terrain';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useDispatch, useSelector } from 'react-redux';
import { Favorite } from '@mui/icons-material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/joy/Typography';

import './css/styles.css';

const InfoDetallada = () => {

    // trae los datos desde el estado global de los detalles del personaje
    const datosId = useSelector(state => state.detallesState);
    // se define la variable para los datos finales
    const datosFinal = datosId.datos[0]
    const dispatch = useDispatch();

    // variable para la paginación de los capitulos en las que ha estado el personaje
    const [currentPage, setCurrentPage] = useState(1);
    // variable para la informacion del localStorage
    const [localStorageData, setLocalStorageData] = useState([]);

    // se actualiza el localStorage obteniendo los datos y definiendolos en el useState
    const updateLocalStorageData = () => {
        const dataFromLocalStorage = JSON.parse(localStorage.getItem("favoritos"));
        dataFromLocalStorage ? setLocalStorageData(dataFromLocalStorage) : setLocalStorageData([]);

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

    const [screenSize, setScreenSize] = useState(window.innerWidth);

    const headerClass = screenSize < 767 ? 'mobile' : 'pantalla';

    // ----------------------------PARA BOTÓN PARA AGREGAR A FAVORITOS-------------------------------------
    // 
    // 
    // se filtra la infomacion buscando si el id existe en el localStorage(retorna true o false)
    // console.log(localStorageData.datosId.some((id) => id === datosFinal.id))
    const filtro = localStorageData.some((id) => id === datosFinal.id);

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

    // ----------------------------------EPISODIOS---------------------------------------
    // variable para obtener los apisodios en los que aparece el personaje
    var doubles = datosFinal.episode;
    // se definen items por página, 5
    const itemsPerPage = 5;
    // el index del ultimo elemento de la pagina, se multiplica la pagina actual por la cantidad de items por pagina
    // (Aqui es donde hace el corte para mostrar los elementos, es decir este indice no se muestra)
    const indexOfLastItem = currentPage * itemsPerPage;
    // index del primer elemento, se resta el index del ultimo item con el numero de items por pagina
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    // Función para gestionar el cambio de página de los episodios
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    // para definir cuantas paginas tendrá la vista de episodios, comienza en un arreglo vacío
    const pageNumbers = [];
    // luego recorre un ciclo for hasta que i sea menor o igual a (el largo del arreglo de episodios / 5)
    // ejemplo si son 5 episodios se divide en 5 items por pagina y eso resulta en una sola pagina
    for (let i = 1; i <= Math.ceil(doubles.length / itemsPerPage); i++) {
        // por cada recorrido agrega al arreglo el numero del indice
        pageNumbers.push(i);
    }

    // cambia la palabra que empiece por "S" de Season por Temporada (en español)
    const replaceSeason = (episode) => {
        return episode.replace('S', '<strong> Temporada </strong>');
    };

    // cambia la palabra que empiece por "E" de Episode por Episodio (en español)
    const replaceEpisode = (episode) => {
        return episode.replace('E', '<strong> Episodio </strong>');
    };
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div style={{ backgroundColor: 'white' }} className='RM'>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
            <link href="https://fonts.googleapis.com/css2?family=Archivo+Black&family=Righteous&display=swap" rel="stylesheet"></link>
            <div className='row py-5 align-items-center justify-content-start row-detalles-rm'>
                <div className='col-3 col-img-detalle-rm'>
                    <img src={datosFinal.image} alt='' style={{ borderRadius: '50%' }} className='img-detalle-rm'></img>
                </div>
                <div className='col-8 col-nombre-detalle-rm'>
                    <h1 style={{ textAlign: 'left', fontSize: '84px' }} className='px-5 h1RandM'>{datosFinal.name}</h1>
                </div>
            </div>
            {/* <img src='/img/portal-rick-and-morty.gif' alt='' className='img1'></img> */}
            {windowWidth > 767 ?
                <div className="d-flex align-items-start p-3  text-center" style={{ border: 'solid 1px gray', borderRadius: '10px', height: '440px' }}>
                    <div className="nav flex-column nav-pills nav-fill me-4 col-3" id="v-pills-tab" role="tablist" aria-orientation="vertical" style={{ height: '100%' }}>

                        <button className="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">Información General</button>
                        <button className="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">Episodios</button>
                        <button className="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">Localización</button>
                        <Button onClick={() => toggleVisible(datosFinal.id)} variant="outlined" style={{ marginTop: '240px' }} color="secondary" startIcon={filtro ? <Favorite /> : <FavoriteBorderIcon />}>
                            {filtro ? <div>Ya estoy entre tus favoritos!</div> : <div>Agregame a tus favoritos!</div>}
                        </Button>
                    </div>
                    <div className="tab-content col-8 px-5 py-3" id="v-pills-tabContent" style={{ overflowWrap: 'break-word', borderLeft: '1px solid grey', height: '100%' }}>
                        <div className="tab-pane fade show active px-3" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab" tabIndex="0" style={{ overflowWrap: 'break-word' }}>
                            <p className='text-start py-2' style={{ borderBottom: '1px solid gray' }}>
                                {datosFinal.status === 'Alive' ? <CircleIcon color="success" /> : datosFinal.status === 'Dead' ? <CircleIcon style={{ color: 'red' }} /> : <CircleIcon style={{ color: 'grey' }} />}
                                {/* <CircleIcon color="success" /> */}
                                <strong> Status </strong>
                                {datosFinal.status === 'Alive' ? ' Vivo(a)' : datosFinal.status === 'Dead' ? ' Muerto(a)' : 'Desconocido'}
                            </p>
                            <p className='text-start py-2' style={{ borderBottom: '1px solid gray' }}>
                                <EmojiPeopleIcon />
                                <strong> Especie </strong>
                                <span translate="yes">{datosFinal.species}</span>
                            </p>
                            <p className='text-start py-2' style={{ borderBottom: '1px solid gray' }}>
                                <FaceRetouchingNaturalIcon />
                                <strong> Genero </strong>
                                {datosFinal.gender}
                            </p>
                            <p className='text-start py-2' style={{ borderBottom: '1px solid gray' }}>
                                <CakeIcon />
                                <strong> Creado en </strong>
                                {datosFinal.created}
                            </p>
                            <p className='text-start py-2' style={{ borderBottom: '1px solid gray' }}>
                                <HomeIcon />
                                <strong> Origen </strong>
                                {datosFinal.origin.name}
                            </p>
                        </div>
                        <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab" tabIndex="0">
                            {/* <strong>Episodios:</strong> */}
                            <div className=''>
                                {/* obtiene una parte del arreglo inicial de episodios desde indexOfFirstItem hasta  indexOfLastItem y lo recorre*/}
                                {doubles.slice(indexOfFirstItem, indexOfLastItem).map((item, index) => (
                                    <div key={index}>
                                        <ol className="list-group list-group-flush text-start" style={{ borderBottom: '1px solid gray' }}>
                                            <li className="list-group-item d-flex justify-content-between align-items-start">
                                                <div className="ms-2 me-auto">
                                                    <div className="fw-bold">{item.name}</div>
                                                    <span
                                                        dangerouslySetInnerHTML={{
                                                            __html: replaceSeason(replaceEpisode(item.episode)),
                                                        }}
                                                        style={{ fontSize: '12px', color: '#7B7B7B' }}
                                                    />
                                                </div>
                                            </li>
                                        </ol>

                                    </div>
                                ))}
                            </div>

                            <div>
                                <Pagination
                                    count={Math.ceil(doubles.length / itemsPerPage)}
                                    page={currentPage}
                                    onChange={(event, page) => handlePageChange(page)}
                                    color="primary"
                                    className='py-4'
                                    style={{ justifyContent: 'center', display: 'flex' }}
                                />
                            </div>
                        </div>
                        <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab" tabIndex="0">
                            <p className='text-start py-2' style={{ borderBottom: '1px solid gray' }}>
                                <LocationOnIcon />
                                <strong> Localización </strong>
                                <span translate="yes">{datosFinal.location.name}</span>
                            </p>
                            <p className='text-start py-2' style={{ borderBottom: '1px solid gray' }}>
                                <TerrainIcon />
                                <strong> Tipo de Localización </strong>
                                <span translate="yes">{datosFinal.location.type}</span>
                            </p>
                            <p className='text-start py-2' style={{ borderBottom: '1px solid gray' }}>
                                <RocketLaunchIcon />
                                <strong> Dimensión </strong>
                                {datosFinal.location.dimension}
                            </p>
                        </div>
                    </div>
                </div>
                :
                //vista mobile

                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    <div className='col-8 col-nombre-detalle-rm'>
                        <h3 style={{ textAlign: 'left' }} className='px-3 h1RandM'>Información General</h3>
                    </div>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                {datosFinal.status === 'Alive' ? <CircleIcon color="success" /> : datosFinal.status === 'Dead' ? <CircleIcon style={{ color: 'red' }} /> : <CircleIcon style={{ color: 'grey' }} />}
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Status" secondary={datosFinal.status === 'Alive' ? ' Vivo(a)' : datosFinal.status === 'Dead' ? ' Muerto(a)' : 'Desconocido'}
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <EmojiPeopleIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Especie" secondary={datosFinal.species} />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <FaceRetouchingNaturalIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Género" secondary={datosFinal.gender} />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <CakeIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Creado en" secondary={datosFinal.created} />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <HomeIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Origen" secondary={datosFinal.origin.name} />
                    </ListItem>

                    <div className='col-8 col-nombre-detalle-rm'>
                        <h3 style={{ textAlign: 'left' }} className='p-3 h1RandM'>Episodios</h3>
                    </div>
                    <div>
                        {/* <strong>Episodios:</strong> */}
                        <div className='px-3'>
                            {/* obtiene una parte del arreglo inicial de episodios desde indexOfFirstItem hasta  indexOfLastItem y lo recorre*/}
                            {doubles.slice(indexOfFirstItem, indexOfLastItem).map((item, index) => (
                                <div key={index}>
                                    <ol className="list-group list-group-flush text-start" style={{ borderBottom: '1px solid gray' }}>
                                        <li className="list-group-item d-flex justify-content-between align-items-start">
                                            <div className="ms-2 me-auto">
                                                <div className="fw-bold">{item.name}</div>
                                                <span
                                                    dangerouslySetInnerHTML={{
                                                        __html: replaceSeason(replaceEpisode(item.episode)),
                                                    }}
                                                    style={{ fontSize: '12px', color: '#7B7B7B' }}
                                                />
                                            </div>
                                        </li>
                                    </ol>

                                </div>
                            ))}
                        </div>

                        <div>
                            <Pagination
                                count={Math.ceil(doubles.length / itemsPerPage)}
                                page={currentPage}
                                onChange={(event, page) => handlePageChange(page)}
                                color="primary"
                                className='py-4'
                                style={{ justifyContent: 'center', display: 'flex' }}
                            />
                        </div>
                    </div>
                    <div className='col-8 col-nombre-detalle-rm'>
                        <h3 style={{ textAlign: 'left' }} className='p-3 h1RandM'>Localización</h3>
                    </div>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <LocationOnIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Localización" secondary={datosFinal.location.name}
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <TerrainIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Tipo de Localización" secondary={datosFinal.location.type} />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <RocketLaunchIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary="Dimensión" secondary={datosFinal.location.dimension} />
                    </ListItem>

                </List>}
            <Button onClick={() => toggleVisible(datosFinal.id)} variant="outlined" style={{ margin: '12px' }} color="secondary" startIcon={filtro ? <Favorite /> : <FavoriteBorderIcon />}>
                {filtro ? <div>Ya estoy entre tus favoritos!</div> : <div>Agregame a tus favoritos!</div>}
            </Button>
        </div>
    );
}

export default InfoDetallada;
