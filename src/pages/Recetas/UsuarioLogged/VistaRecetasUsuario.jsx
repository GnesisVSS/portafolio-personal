import { Alert, AlertTitle } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { consultaRecetasUsuario } from '../../../api/receta.api';
import NavbarUsuario from '../ElementosRecetas/Navs/navbarUsuario';
import RecetasUsuario from './RecetasUsuario';

const VistaRecetasUsuario = () => {
    var fondo = document.getElementById('root');
    fondo.style.backgroundColor = "white";

    const [recetas, setRecetas] = useState([])
    const correousuario = localStorage.getItem("correoUsuario");
    const [recetaUsuario, setRecetaUsuario] = useState([]);
    // const [recetaUsuario, setRecetaUsuario] = useState([]);

    useEffect(() => {
        consultaRecetasUsuario(correousuario).then(response => {
            // Se le da como valor al state lo retornado por la funcion
            setRecetas(response.data)
            setRecetaUsuario(response.data[0])
        }
        )
    });
    function alerta() {
        // Se revisa que el array de la consulta de recetas del usuario traiga datos, en caso de estar como indefinido muestra una alerta
        if (recetaUsuario === undefined) {
            return (
                <Alert severity="warning">
                    <AlertTitle>Ooops!</AlertTitle>
                    No haz creado ninguna receta aún! <strong> Presiona el botón + para agregar tu primera receta</strong>
                </Alert>
            )

        }


    }
    return (
        <section>
                <NavbarUsuario />
                <div className='container mx-auto py-5'>
                    <div className='row'>
                        <div className="col py-4">
                            {alerta()}
                        </div>

                        <div className="col-3 py-4 text-end">

                            {/* <a href='/FormRecetas'>
                                <Fab color="primary" aria-label="add" >
                                    <AddIcon />
                                </Fab>
                            </a> */}

                        </div>
                    </div>
                    {recetas.map((rec, index) => {
                        return (
                            <RecetasUsuario key={index} rec={rec} />
                        )
                    })}
                </div>
            </section>

    );
}


export default VistaRecetasUsuario;









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

