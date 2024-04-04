import { Alert, AlertTitle } from '@mui/material';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { consultaRecetasUsuario } from '../../../../../api/receta.api';
import { RecetasC } from '../../../../../models/recetas.class';
import VistaRecetasUsuario from '../../../UsuarioLogged/VistaRecetasUsuario';

const MisRecetas = ({ rec }) => {

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
    function alerta() {
        // Se revisa que el array de la consulta de recetas del usuario traiga datos, en caso de estar como indefinido muestra una alerta
        if (recetaUsuario === undefined) {
            return (
                <Alert severity="warning">
                    <AlertTitle>Ooops!</AlertTitle>
                    No haz creado ninguna receta aún! <strong> Presiona el botón + para agregar tu primera receta</strong>
                </Alert>
            )

        } else {
            return (
                // Llama a la vista de usuarios para mostrar las tarjetas con los datos de las recetas
                <VistaRecetasUsuario />
            )
        }
    }


    return (
        <div className="card card-home-rec justify-content-center">
            <div className="img" style={{ backgroundImage: `url(${rec.imgUrl})` }}>


            </div>

            <div className="text-rec">
                <p className="h3-rec"> {rec.nombre} </p>
                <p className="p-rec"> {rec.porciones} porciones - {rec.tiempoPreparacion} min. </p>


            </div >
            {/* <a href='/FormRecetas'>
                <Fab color="primary" aria-label="add" >
                    <AddIcon />
                </Fab>
            </a> */}
        </div >
    );
}

MisRecetas.propTypes = {
    rec: PropTypes.instanceOf(RecetasC).isRequired
}


export default MisRecetas;

