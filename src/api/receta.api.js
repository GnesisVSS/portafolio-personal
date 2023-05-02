import axios from "axios";


let url_recetas = 'https://bdapirest.netlify.app/.netlify/functions/api/api/receta';
let url_guardadas = 'https://bdapirest.netlify.app/.netlify/functions/api/api/recetaguardada';
let url_rec_usuario = 'https://bdapirest.netlify.app/.netlify/functions/api/api/recetausuario';
export const mostrarRecetas = async () =>
    await axios.get(url_recetas)

export const cargarRecetaAdmin = async (ingreso) => {
    const encodedUrl = encodeURIComponent(ingreso.imgUrl);
    await axios.post(url_recetas + `/${ingreso.nombre}` + `/${ingreso.descripcion}` + `/${ingreso.preparacion}` + `/${ingreso.categoria}` + `/${ingreso.tiempoPreparacion}` + `/${ingreso.porciones}` + `/${ingreso.dificultad}` + `/url=${encodedUrl}`)
        .then((response) => {
            alert("Receta registrada exitosamente")
            window.location.reload();
        })
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


export const registroRecetasUsuario = async (ingreso) => {
    const encodedUrl = encodeURIComponent(ingreso.imgUrl);
    await axios.post(url_rec_usuario + `/${ingreso.nombre}` + `/${ingreso.cantidad}` + `/${ingreso.unidad}` + `/${ingreso.id_receta}`)
        .then((response) => {
            alert("Receta registrada exitosamente")
            // window.location.reload();
        })
}

// // recetas creadas por usuario registro
// export const registroRecetasUsuario = async (correo) =>
//     await axios.post(url_rec_usuario + `/${correo}`)
