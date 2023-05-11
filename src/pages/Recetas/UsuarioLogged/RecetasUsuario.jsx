import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types'
import { RecetasC } from '../../../models/recetas.class';
import { consultaRecetasUsuario } from '../../../api/receta.api';
import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router';

const RecetasUsuario = ({ rec }) => {
    const navigate = useNavigate();
    const redirigirADetalleRecetas = () => {
        navigate('/DetalleMisRecetas', { state: { rec } }); // Redirige a '/detalle-recetas' y pasa 'receta' como prop
        console.log(rec)
    };
    // Carga de datos que son recibidos por props, a lo que será la vista de las recetas
    return (

        <div className="card card-home-rec justify-content-center">
            <div className="img" style={rec.imgUrl === "" ? { backgroundImage: 'url(../img/FondoDefecto.svg)' } : { backgroundImage: `url(${rec.imgUrl})` }}>
            </div>

            <div className="text-rec">
                <p className="h3-rec"> {rec.nombre} </p>
                <p className="p-rec"> {rec.porciones} porciones - {rec.tiempoPreparacion} min. </p>
                <a className="icon-box btn" type='button' onClick={redirigirADetalleRecetas}>
                    <img src='img/maceta.png'></img>
                    <p className="span-rec text-center">Ver Receta</p>
                </a>
            </div >
        </div >

    )
}

RecetasUsuario.propTypes = {
    rec: PropTypes.instanceOf(RecetasC).isRequired
}

export default RecetasUsuario;
