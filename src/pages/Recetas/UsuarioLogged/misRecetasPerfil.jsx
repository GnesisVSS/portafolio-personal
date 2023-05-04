import React, { useEffect, useState } from 'react';
import { consultaRecetasUsuario } from '../../../api/receta.api';
import PropTypes from 'prop-types'
import { RecetasC } from '../../../models/recetas.class';

const MisRecetasPerfil = ({ rec }) => {

    const [recetas, setRecetas] = useState([])
    const correousuario = localStorage.getItem("correoUsuario");

    useEffect(() => {

        async function loadRecetasUsuarioPerfil() {
            const response = await consultaRecetasUsuario(correousuario)
            // console.log(response.data[0].id)
            setRecetas(...recetas, response.data)
        }
        loadRecetasUsuarioPerfil();
    }, [])



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
    );
}

MisRecetasPerfil.propTypes = {
    rec: PropTypes.instanceOf(RecetasC).isRequired
}

export default MisRecetasPerfil;
