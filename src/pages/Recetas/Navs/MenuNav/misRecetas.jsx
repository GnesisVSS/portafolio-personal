import React, { useState } from 'react';
import NavbarUsuario from '../navbarUsuario';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import VistaRecetasUsuario from '../../UsuarioLogged/VistaRecetasUsuario';
import { consultaRecetasUsuario } from '../../../../api/receta.api';

const MisRecetas = () => {
    
    
    var fondo = document.getElementById('root');
    fondo.style.backgroundColor = "white";

    // Se recupera de el local Storage el item que contiene el correo del usuario para pasarselo como props a la funcion de la API 
    const correousuario = localStorage.getItem("correoUsuario");
    const [recetaUsuario, setRecetaUsuario] = useState([]);

    consultaRecetasUsuario(correousuario).then(response => {
        // Se le da como valor al state lo retornado por la funcion
        setRecetaUsuario(response.data[0])
    })


    function alerta ()  {
        // Se revisa que el array de la consulta de recetas del usuario traiga datos, en caso de estar como indefinido muestra una alerta
        if (recetaUsuario === undefined) {
            return (
                <Alert severity="warning">
                    <AlertTitle>Ooops!</AlertTitle>
                    No haz creado ninguna receta aún! <strong> Presiona el botón + para agregar tu primera receta</strong>
                </Alert>
            )

        }else{
            return (
                // Llama a la vista de usuarios para mostrar las tarjetas con los datos de las recetas
                <VistaRecetasUsuario/>
            )
        }
    }
    return (
        <section id='homeRecetas'>
            <NavbarUsuario />
            <div className='container mx-auto py-5'>
                <div className='row'>
                    <div className="col py-4">
                        {alerta()}
                    </div>
                    <div className="col-3 py-4 text-end">
                    <a href='/FormRecetas'>
                        <Fab color="primary" aria-label="add" >
                            <AddIcon />
                        </Fab>
                    </a>
                        
                    </div>
                </div>
            </div>
        </section>


    );
}


export default MisRecetas;
