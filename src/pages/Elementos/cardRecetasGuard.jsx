import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types'
import { RecetasC } from '../../models/recetas.class';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';

const CardRecetasGuard = () => {
    const [save, setSave] = useState(false);

    const handleChange = () => {
        setSave(!save)
        console.log(rec.id)
    }

    const tipoIcono = () => {
        if (save === true) {
            return (
                <BookmarkIcon />
            )
        } else {
            return (
                <BookmarkBorderIcon />
            )

        }
    }

    return (
        <div className="card card-home-rec justify-content-center">
            <div className="img" style={{ backgroundImage: `url(${rec.imgUrl})` }}>
                <button className="save" onClick={handleChange} style={{ color: "grey" }}>
                    {tipoIcono()}

                </button>
            </div>

            <div className="text-rec">
                <p className="h3-rec"> {rec.nombre} </p>
                <p className="p-rec"> {rec.porciones} porciones - {rec.tiempoPreparacion} min. </p>



                {/* Icono */}

                <button className="icon-box btn">
                    <img src='img/maceta.png'></img>
                    <p className="span-rec text-center">Ver Receta</p>
                </button>



            </div >
        </div >
    );
}

export default CardRecetasGuard;
