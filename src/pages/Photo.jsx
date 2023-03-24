/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/prop-types */
import React, { Fragment, useEffect, useState } from 'react';
import { useFormik } from 'formik';
import NavbarRecetas from './navbar-recetas';
import { TextField } from '@mui/material';
import { cargarRecetaAdmin } from '../api/receta.api';
import { createApi, toJson } from "unsplash-js";



const api = createApi({
    accessKey: '9KxZ83wJSwATi6Oz8ugG1mLA8UJuf_68ioepix-Q__I',
});

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
            .getPhotos({ query: query, orientation: 'landscape' })
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
            <div className="feed">
                <ul className="columnUl">
                    <form className="form" onSubmit={searchPhotos}>
                        <label className="label" htmlFor="query">
                            {' '}
                            📷
                        </label>
                        <input
                            type="text"
                            name="query"
                            className="input"
                            placeholder={`Try "dog" or "apple"`}
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                        />
                        <button type="submit" className="button">
                            Search
                        </button>
                    </form>
                    {data.response.results.map((photo) => (
                        <li key={photo.id} className="li">
                            <PhotoComp photo={photo} />
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
};

export default Photo;
