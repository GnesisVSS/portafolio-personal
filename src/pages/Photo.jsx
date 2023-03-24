/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/prop-types */
import React, { Fragment, useEffect, useState } from 'react';
import { useFormik } from 'formik';
import NavbarRecetas from './navbar-recetas';
import { Box, Button, Card, CardActionArea, CardContent, CardMedia, FormControl, IconButton, ImageList, ImageListItem, InputAdornment, InputLabel, OutlinedInput, TextField, Typography } from '@mui/material';
import { cargarRecetaAdmin } from '../api/receta.api';
import { createApi, toJson } from "unsplash-js";
import SearchIcon from '@mui/icons-material/Search';


const api = createApi({
    accessKey: '9KxZ83wJSwATi6Oz8ugG1mLA8UJuf_68ioepix-Q__I',
});

// const [urlImg, setUrlImg] = useState("");
const PhotoComp = ({ photo }) => {
    const { user, urls } = photo;
    return (
        <Fragment>
            <img className="img" src={urls.regular} />
            <a
                className="credit"
                target="_blank"
                href={`https://unsplash.com/@${user.username}`}
            >
            </a>
        </Fragment>
    );
};


const Photo = () => {

    const [data, setPhotosResponse] = useState(null);
    const [query, setQuery] = useState('');

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
            .getPhotos({ query: query, orientation: 'landscape', perPage: 12, page: 1 })
            .then((result) => {
                setPhotosResponse(result);
            })
            .catch(() => {
                console.log('something went wrong!');
            });
    };

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
                    {data.response.results.map((photo) => (
                        <Box key={photo.id}
                            sx={{
                                
                                '&:hover': {
                                    opacity: [0.9, 0.8, 0.7],
                                },
                            }}
                        >
                            <ImageListItem >
                                <img
                                    src={`${photo.urls.raw}?w=164&h=164&fit=crop&auto=format`}
                                    srcSet={`${photo.urls.raw}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                                    
                                />
                            </ImageListItem>
                        </Box>
                    ))}
                </ImageList>
            </div>
        );
    }
};

export default Photo;
