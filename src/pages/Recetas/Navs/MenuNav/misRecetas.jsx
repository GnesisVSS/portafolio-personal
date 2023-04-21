import React from 'react';
import NavbarUsuario from '../navbarUsuario';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import VistaCardsGuardadas from '../../UsuarioLogged/VistaCardsGuardadas';

const MisRecetas = () => {
    // let url_rec_usuario = 'https://bdapirest.netlify.app/.netlify/functions/api/api/recetausuario';

    var fondo = document.getElementById('root');
    fondo.style.backgroundColor = "white";
    const datosRecetas = localStorage.getItem("recetasUsuario");

    function alerta ()  {
        if (datosRecetas === "No hay datos") {
            return (
                <Alert severity="warning">
                    <AlertTitle>Ooops!</AlertTitle>
                    No haz creado ninguna receta aún! <strong> Presiona el botón + para agregar tu primera receta</strong>
                </Alert>
            )

        }else{
            return (
                <VistaCardsGuardadas/>
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
