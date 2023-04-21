import React, { useEffect, useState } from 'react';

import PropTypes from 'prop-types'
import { RecetasC } from '../../../models/recetas.class';
import { consultaRecetasUsuario } from '../../../api/receta.api';

const RecetasUsuario = ({ rec }) => {
    const [recetas, setRecetas] = useState([])

    const correousuario = localStorage.getItem("correoUsuario");

    useEffect(() => {

        async function loadRecetasGuardadas() {
            const response = await consultaRecetasUsuario(correousuario)
            // Se le agrega como valor a las recetas que ya se encuentren en el state el valor de la respuesta de la API
            setRecetas(...recetas, response.data)
        }
        loadRecetasGuardadas();
    }, [])


    // Carga de datos que son recibidos por props, a lo que será la vista de las recetas
    return (

        <div className="card card-home-rec justify-content-center">
            <div className="img" style={{ backgroundImage: `url(${rec.imgUrl})` }}>
            </div>

            <div className="text-rec">
                <p className="h3-rec"> {rec.nombre} </p>
                <p className="p-rec"> {rec.porciones} porciones - {rec.tiempoPreparacion} min. </p>
                <button className="icon-box btn">
                    <img src='img/maceta.png'></img>
                    <p className="span-rec text-center">Ver Receta</p>
                </button>
            </div >

        </div >

    )
}

RecetasUsuario.propTypes = {
    rec: PropTypes.instanceOf(RecetasC).isRequired
}

export default RecetasUsuario;
