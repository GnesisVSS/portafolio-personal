/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/prop-types */
import React, {useEffect, useState } from 'react';
import { FormControl, IconButton, ImageList, ImageListItem, InputAdornment, InputLabel, OutlinedInput, TextField, Typography } from '@mui/material';
import { createApi } from "unsplash-js";
import SearchIcon from '@mui/icons-material/Search';
import './../../../public/css/styleRecetas.css'

// --------------------------------DEFINICION DE ACCESSKEY API---------------------------------

// Declaracion de la accessKey desde unsplash para utilizar las imagenes desde la api
const api = createApi({
    accessKey: '9KxZ83wJSwATi6Oz8ugG1mLA8UJuf_68ioepix-Q__I',
});

const Photo = (props) => {

    // --------------------------------DEFINICION DE ESTADOS-----------------------------------
    // Use state para la definir el estado de la respuesta a la query al buscar una imagen
    const [data, setPhotosResponse] = useState(null);
    //Use state para definir el estado de la query 
    const [query, setQuery] = useState('');
    //useState para definir la imagen seleccionada
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);
    //useState para definir el url de la imagen seleccionada 
    const [imgUrl, setImgUrl] = useState("");
    //useState para definir la variable que pasará como prop al componente padre   
    const [childInfo, setChildInfo] = useState('');
    
    // UseEffect para que luego de renderizarse el componente obtenga las fotos desde la api
    // Se ejecuta solo una vez despues del renderizado inicial
    useEffect(() => {
        api.search
            .getPhotos({ query: query, orientation: 'landscape' })
            .then((result) => {
                setPhotosResponse(result);
            })
            .catch(() => {
                console.log('Algo salió mal!');
            });
    }, []);

    // Funcion que luego de hacer click en el icono para buscar obtenga las fotos desde la api nuevamente
    const searchPhotos = async (e) => {
        e.preventDefault();
        api.search
        // query(consulta realizada a la api) : query(obtenida del useState, valor dado en el formulario)
        // orientation(orientacion de la foto generada) : squarish, para obtener una forma cuadrada
        // perPage(fotos por pagina) : 12
        // page(numero de paginas que mostrará) : 1 
            .getPhotos({ query: query, orientation: 'squarish', perPage: 12, page: 1 })
            .then((result) => {
                setPhotosResponse(result);
            })
            .catch(() => {
                console.log('Algo salió mal!');
            });
    };

    //Funcion para acceder a los valores de los resultados de la api
    function cambiarParrafo(photo, index) {
        // Al hacer click se define como imagen seleccionada el index obtenido del .map
        setSelectedImageIndex(index);

        // Se declara como valor del componente padre el url de la imagen
        setChildInfo(photo.urls.raw);
        // el valor del props al cambiar la informacion se le asigna el valor del url de la imagen
        props.onInfoChange(photo.urls.raw);
    }

    // si la data recibida de la api de unsplash es nula se muestra cargando
    if (data === null) {
        return <div>Loading...</div>;
    // En caso de que la data recibida contenga errores
    } else if (data.errors) {
        return (
            <div>
                <div>{data.errors[0]}</div>
                <div>PS: Make sure to set your access token!</div>
            </div>
        );
    } else {
        return (
            <div className="input-group mb-3">
                <FormControl variant="outlined" fullWidth>
                    <InputLabel htmlFor="formPhotoInput">Busca tu imagen de referencia</InputLabel>
                    {/* Tiene como nombre y valor query para definir que en este campo se
                    encuentra la consulta que se realiza a la api */}
                    <OutlinedInput
                        name="query"
                        className="input"
                        value={query}
                        id="formPhotoInput"
                        label="Busca tu imagen de referencia"
                        // se especifica que al cambiar el campo la query es lo ingresado por el usuario
                        onChange={(e) => setQuery(e.target.value)} endAdornment={
                            <InputAdornment position="end">
                            {/* Al hacer click llama a la funcion para buscar Fotos */}
                                <IconButton aria-label="delete" size="small" onClick={searchPhotos} name="photoSub" id="photoSub" value="photo">
                                    <SearchIcon fontSize="small" />
                                </IconButton>
                            </InputAdornment>

                        }
                    />
                </FormControl>

                {/* Lista de imagenes que se muestran en 3 columnas */}
                <ImageList cols={3} >
                {/* Se recorre el array con los resultados de la query */}
                    {data.response.results.map((photo, index) => (
                        //se tiene como key el id de la foto rescatada del array
                        <ImageListItem id="imgList" key={photo.id}>


                            <img
                                src={`${photo.urls.raw}?w=164&h=164&fit=crop&auto=format`}
                                srcSet={`${photo.urls.raw}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                onClick={() => cambiarParrafo(photo, index)}
                                id="phot"
                                //Si la imagen es seleccionada (definido en la funcion
                                //cambiar parrafo, si este valor coincide con el index seleccionado
                                //el className queda como active para tener el estilo definido
                                //en css, de lo contrario queda sin esta clase aplicada)
                                className={selectedImageIndex === index ? "active" : ""}
                            />
                            



                        </ImageListItem>

                    ))}
                </ImageList>
            </div>
        );
    }


};

export default Photo;
