import axios from "axios";

// url de recetas para base de datos local

// let url_recetas = 'https://bdapirest.netlify.app/.netlify/functions/api/api/receta';
// let url_ingr = 'https://bdapirest.netlify.app/.netlify/functions/api/api/ingredientes';
let url_guardadas = 'https://bdapirest.netlify.app/.netlify/functions/api/api/recetaguardada';
let url_rec_usuario = 'https://bdapirest.netlify.app/.netlify/functions/api/api/recetausuario';
let url_guardadasDet = 'https://bdapirest.netlify.app/.netlify/functions/api/api/recetaguardadaDet';
let url_rec_usuarioDet = 'https://bdapirest.netlify.app/.netlify/functions/api/api/recetausuarioDet';

// url de recetas para json
let url_recetas = 'https://apiprueba.netlify.app/.netlify/functions/api/recetas';
let url_ingr = 'https://apiprueba.netlify.app/.netlify/functions/api/ingredientes';

// Mostrar recetas
export const mostrarRecetas = async () =>
    await axios.get(url_recetas)

// Mostrar detalles de la receta general
export const mostrarDetalleRecetas = async (ingreso) =>
    await axios.get(url_recetas + `/${ingreso}`)

export const mostrarDetalleRecetasGuardadas = async (id,correo) =>
    await axios.get(url_guardadasDet + `/${id}` + `/${correo}`)

export const mostrarDetalleRecetasUsuario = async (id,correo) =>
    await axios.get(url_rec_usuarioDet + `/${id}` + `/${correo}`)

// Mostrar detalles de los ingredientes en detalle receta
export const mostrarDetalleIngredientes = async (ingreso) =>
    await axios.get(url_ingr + `/${ingreso}`)

export const cargarRecetaAdmin = async (ingreso) => {
    const encodedUrl = encodeURIComponent(ingreso.imgUrl);
    await axios.post(url_recetas + `/${ingreso.nombre}` + `/${ingreso.descripcion}` + `/${ingreso.preparacion}` + `/${ingreso.categoria}` + `/${ingreso.tiempoPreparacion}` + `/${ingreso.porciones}` + `/${ingreso.dificultad}` + `/url=${encodedUrl}`)
        .then((response) => {
            alert("Receta registrada exitosamente")
            window.location.reload();
        })
}

// registro de detalles de la recetas generales desde admin
export const registroDetalleRecetasGenerales = async (ingreso) => {

    const encodedUrl = encodeURIComponent(ingreso.imgUrl);

    const respuesta = await axios.post(url_recetas +
        `/${ingreso.nombre}` +
        `/${ingreso.descripcion}` +
        `/${ingreso.preparacion}` +
        `/${ingreso.categoria}` +
        `/${ingreso.tiempoPreparacion}` +
        `/${ingreso.porciones}` +
        `/${ingreso.dificultad}` +
        `/url=${encodedUrl}`
    );
    return respuesta.data;

}

// Recetas guardadas
export const mostrarRecetasGuardadas = async (ingreso) =>
    await axios.get(url_guardadas + `/${ingreso}`)

export const mostrarRecetasGuardadaslimit = async (ingreso, cant) =>
    await axios.get(url_guardadas + `/${ingreso}` + `/${cant}`)

//insertar recetas guardadas
export const cargarGuardados = async (idreceta, correousuario) => {
    await axios.post(url_guardadas + `/${idreceta}` + `/${correousuario}`)
    // .then((response) => {
    //     alert("Receta guardada exitosamente")
    // })
}

//eliminar recetas guardadas
export const eliminarGuardados = async (idreceta, correousuario) => {
    await axios.delete(url_guardadas + `/${idreceta}` + `/${correousuario}`)
    // .then((response) => {
    //     alert("Receta eliminada exitosamente")
    // })
}


// recetas creadas por usuario
export const consultaRecetasUsuario = async (correo) =>
    await axios.get(url_rec_usuario + `/${correo}`)



// registro de ingredientes para receta de usuario
export const registroIngredientes = async (ingreso) => {

    for (let i = 0; i < ingreso.length; i++) {
        await axios.post(url_rec_usuario + `/${ingreso[i].nombre}` + `/${ingreso[i].cantidad}` + `/${ingreso[i].unidad}`)
            .then((response) => {
                console.log("ingredientes registrados")
            })
    }

}

// registro de detalles de la receta para las recetas del usuario
export const registroDetalleRecetaUsuario = async (ingreso) => {

    const correo = localStorage.getItem("correoUsuario");
    const encodedUrl = encodeURIComponent(ingreso.imgUrl);
    // await axios.post(url_rec_usuario + `/${ingreso.nombre}` + `/${ingreso.descripcion}` + `/${ingreso.preparacion}` + `/${ingreso.categoria}` + `/${ingreso.tiempoPreparacion}` + `/${ingreso.porciones}` + `/${ingreso.dificultad}` + `/url=${encodedUrl}` + `/${correo}`)
    //     .then((response) => {

    //     })
    const respuesta = await axios.post(url_rec_usuario +
        `/${ingreso.nombre}` +
        `/${ingreso.descripcion}` +
        `/${ingreso.preparacion}` +
        `/${ingreso.categoria}` +
        `/${ingreso.tiempoPreparacion}` +
        `/${ingreso.porciones}` +
        `/${ingreso.dificultad}` +
        `/url=${encodedUrl}` +
        `/${correo}`
    );
    return respuesta.data;

}


// Limite de muestra de recetas del usuario para mi Perfil
export const misRecetasLimit = async (ingreso, cant) =>
    await axios.get(url_rec_usuario + `/${ingreso}` + `/${cant}`)
