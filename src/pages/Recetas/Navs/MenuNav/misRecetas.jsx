// import React, { useEffect, useState } from 'react';
// import NavbarUsuario from '../navbarUsuario';
// import Alert from '@mui/material/Alert';
// import AlertTitle from '@mui/material/AlertTitle';
// import Fab from '@mui/material/Fab';
// import AddIcon from '@mui/icons-material/Add';
// import VistaRecetasUsuario from '../../UsuarioLogged/VistaRecetasUsuario';
// import { consultaRecetasUsuario } from '../../../../api/receta.api';

// const MisRecetas = () => {


//     var fondo = document.getElementById('root');
//     fondo.style.backgroundColor = "white";

//     // Se recupera de el local Storage el item que contiene el correo del usuario para pasarselo como props a la funcion de la API 
//     const correousuario = localStorage.getItem("correoUsuario");
//     const [recetaUsuario, setRecetaUsuario] = useState([]);

//     useEffect(() => {

//         async function loadRecetasUsu() {
//             // Al renderizar la pagina trae los datos de la consulta desde la API y la asigna como valor al state de recetas
//             const response = await consultaRecetasUsuario(correousuario)
//             setRecetaUsuario(response.data[0])
//         }

//         loadRecetasUsu()

//     }, [])

//     function alerta ()  {
//         // Se revisa que el array de la consulta de recetas del usuario traiga datos, en caso de estar como indefinido muestra una alerta
//         if (recetaUsuario === undefined) {
//             return (
//                 <Alert severity="warning">
//                     <AlertTitle>Ooops!</AlertTitle>
//                     No haz creado ninguna receta aún! <strong> Presiona el botón + para agregar tu primera receta</strong>
//                 </Alert>
//             )

//         }else{
//             return (
//                 // Llama a la vista de usuarios para mostrar las tarjetas con los datos de las recetas
//                 <VistaRecetasUsuario/>
//             )
//         }
//     }
//     return (
//         <section id='homeRecetas'>
//             <NavbarUsuario />
//             <div className='container mx-auto py-5'>
//                 <div className='row'>
//                     <div className="col py-4">
//                         {alerta()}
//                     </div>
//                     <div className="col-3 py-4 text-end">
//                     <a href='/FormRecetas'>
//                         <Fab color="primary" aria-label="add" >
//                             <AddIcon />
//                         </Fab>
//                     </a>

//                     </div>
//                 </div>
//             </div>
//         </section>


//     );
// }


// export default MisRecetas;






import React, { useEffect, useState } from 'react';
import { consultaRecetasUsuario, misRecetasLimit } from '../../../../api/receta.api';
import MisRecetasPerfil from '../../UsuarioLogged/misRecetasPerfil';
import Loading from '../../ElementosRecetas/Loading';
import NavbarUsuario from '../navbarUsuario';
import { Alert, AlertTitle, Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import PropTypes from 'prop-types'
import { RecetasC } from '../../../../models/recetas.class';
import VistaRecetasUsuario from '../../UsuarioLogged/VistaRecetasUsuario';

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
            <a href='/FormRecetas'>
                <Fab color="primary" aria-label="add" >
                    <AddIcon />
                </Fab>
            </a>
        </div >
    );
}

MisRecetas.propTypes = {
    rec: PropTypes.instanceOf(RecetasC).isRequired
}


export default MisRecetas;

