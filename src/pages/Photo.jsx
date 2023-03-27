/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/prop-types */
import React, { Fragment, useEffect, useState } from 'react';
import { useFormik } from 'formik';
import NavbarRecetas from './navbar-recetas';
import { Box, Button, Card, CardActionArea, CardContent, CardMedia, Checkbox, FormControl, IconButton, ImageList, ImageListItem, InputAdornment, InputLabel, OutlinedInput, TextField, Typography } from '@mui/material';
import { cargarRecetaAdmin } from '../api/receta.api';
import { createApi, toJson } from "unsplash-js";
import SearchIcon from '@mui/icons-material/Search';
import { style } from '@mui/system';
import './../../public/css/styleRegRec.css'
import RegRecAdmin from './ingreso-rec-admin';
// Declaracion de la accessKey desde unsplash para utilizar las imagenes desde la api
const api = createApi({
    accessKey: '9KxZ83wJSwATi6Oz8ugG1mLA8UJuf_68ioepix-Q__I',
});


const Photo = (props) => {
    // Use state para la definir el estado de la respuesta a la query al buscar una imagen
    const [data, setPhotosResponse] = useState(null);
    //Use state para definir el estado de la query 
    const [query, setQuery] = useState('');
    // 
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);

    const [imgUrl, setImgUrl] = useState("");

    const [childInfo, setChildInfo] = useState('');


    const handleChildInfoChange = (event) => {
        const newInfo = imgUrl;
        setChildInfo(newInfo);
        props.onInfoChange(newInfo);
      };
    


    useEffect(() => {
        api.search
            .getPhotos({ query: query, orientation: 'landscape' })
            .then((result) => {
                setPhotosResponse(result);
            })
            .catch(() => {
                console.log('something went wrong!');
            });
    }, []);

    const searchPhotos = async (e) => {
        e.preventDefault();
        api.search
            .getPhotos({ query: query, orientation: 'squarish', perPage: 12, page: 1 })
            .then((result) => {
                setPhotosResponse(result);
            })
            .catch(() => {
                console.log('something went wrong!');
            });
    };

    function cambiarParrafo(photo, index) {
       

        let arr = data.response.results
        let idori = data.response.results[index].id;
        let idPh = photo.id
        let elemento = document.getElementById("phot")
        setImgUrl(photo.urls.raw)
        setSelectedImageIndex(index);

        const newInfo = photo.urls.raw;
        setChildInfo(photo.urls.raw);
        props.onInfoChange(photo.urls.raw);

        
    }






    if (data === null) {
        return <div>Loading...</div>;
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
                    <OutlinedInput
                        name="query"
                        className="input"
                        value={query}
                        id="formPhotoInput"
                        label="Busca tu imagen de referencia"
                        onChange={(e) => setQuery(e.target.value)} endAdornment={
                            <InputAdornment position="end">
                                <IconButton aria-label="delete" size="small" onClick={searchPhotos} name="photoSub" id="photoSub" value="photo">
                                    <SearchIcon fontSize="small" />
                                </IconButton>
                            </InputAdornment>

                        }
                    />
                </FormControl>

                <ImageList cols={3} >
                    {data.response.results.map((photo, index) => (


                        <ImageListItem id="imgList" key={photo.id}>

                            <img
                                src={`${photo.urls.raw}?w=164&h=164&fit=crop&auto=format`}
                                srcSet={`${photo.urls.raw}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                onClick={() => cambiarParrafo(photo, index)}
                                id="phot"
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
